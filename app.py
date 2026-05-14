#!/usr/bin/env python3
"""Local admin backend for personal homepage management."""
import json
import subprocess
import os
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
CONTENT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'content.json')


def load_content():
    with open(CONTENT_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)


def save_content(data):
    with open(CONTENT_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


# ---- Admin UI ----
@app.route('/')
def admin():
    return render_template('admin.html')


# ---- API ----
@app.route('/api/content', methods=['GET'])
def get_content():
    return jsonify(load_content())


@app.route('/api/content', methods=['PUT'])
def update_content():
    data = request.get_json()
    if not data:
        return jsonify({'status': 'error', 'message': 'No data'}), 400
    # Validate required keys
    required = ['home', 'publications', 'research', 'achievements']
    if not all(k in data for k in required):
        return jsonify({'status': 'error', 'message': 'Invalid content structure'}), 400
    save_content(data)
    return jsonify({'status': 'ok'})


@app.route('/api/build', methods=['POST'])
def do_build():
    try:
        from build import build as run_build
        run_build()
        return jsonify({'status': 'ok', 'message': 'Pages built successfully'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500


@app.route('/api/publish', methods=['POST'])
def do_publish():
    try:
        # Pull latest from remote first
        subprocess.run(['git', 'pull', 'origin', 'main'], check=True, capture_output=True)
        # Stage all changes
        subprocess.run(['git', 'add', '-A'], check=True, capture_output=True)
        # Commit
        subprocess.run(['git', 'commit', '-m', '内容更新 - 后台发布'], check=True, capture_output=True)
        # Push
        result = subprocess.run(['git', 'push'], check=True, capture_output=True, text=True)
        return jsonify({'status': 'ok', 'message': 'Published to GitHub', 'output': result.stdout[-200:]})
    except subprocess.CalledProcessError as e:
        return jsonify({'status': 'error', 'message': e.stderr[-300:] if e.stderr else str(e)}), 500


@app.route('/api/git-status', methods=['GET'])
def git_status():
    try:
        result = subprocess.run(['git', 'status', '--short'], capture_output=True, text=True)
        files = [f for f in result.stdout.strip().split('\n') if f]
        return jsonify({'status': 'ok', 'files': files, 'count': len(files)})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500


@app.errorhandler(400)
def bad_request(_e):
    return jsonify({'status': 'error', 'message': 'Bad request'}), 400

@app.errorhandler(500)
def server_error(_e):
    return jsonify({'status': 'error', 'message': 'Server error'}), 500

if __name__ == '__main__':
    print('后台管理服务器启动: http://localhost:5000')
    app.run(debug=False, port=5000)
