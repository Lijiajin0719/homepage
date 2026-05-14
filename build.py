#!/usr/bin/env python3
"""Build static HTML pages from content.json + Jinja2 templates."""
import json
from jinja2 import Environment, FileSystemLoader

def build():
    with open('content.json', 'r', encoding='utf-8') as f:
        content = json.load(f)

    env = Environment(loader=FileSystemLoader('templates'))

    pages = ['index.html', 'publications.html', 'research.html', 'achievements.html']
    for page in pages:
        template = env.get_template(page)
        html = template.render(content=content, lang='zh')
        with open(page, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f'  OK {page}')

if __name__ == '__main__':
    print('Building static pages...')
    build()
    print('Done.')
