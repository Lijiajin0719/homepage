# 个人学术主页 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建李佳津的个人学术主页（5页），展示深度学习医学图像处理方向的论文、研究、竞赛、专利、软著等，支持中英切换和响应式。

**Architecture:** 纯静态 HTML/CSS/JS，5个独立HTML文件共享一套CSS和两个JS文件。CSS变量管理主题色，`data-i18n`属性驱动翻译，CSS媒体查询实现响应式。

**Tech Stack:** HTML5, CSS3 (CSS Variables, Flexbox, Grid, Media Queries), Vanilla JS (ES6+)

---

## 文件结构

```
个人主页/
├── index.html
├── publications.html
├── research.html
├── achievements.html
├── about.html
├── css/
│   └── style.css
├── js/
│   ├── i18n.js
│   └── main.js
└── assets/
    └── images/    (32张, 已就位)
```

---

### Task 1: 创建全局样式 CSS

**Files:**
- Create: `css/style.css`

- [ ] **Step 1: 编写 CSS 变量与基础重置**

```css
/* css/style.css */
:root {
  --bg: #ffffff;
  --card-bg: #f8fafc;
  --text: #1a202c;
  --text-secondary: #4a5568;
  --text-muted: #718096;
  --accent: #2b6cb0;
  --accent-dark: #1e3a5f;
  --success: #38a169;
  --warning: #d69e2e;
  --border: #e2e8f0;
  --radius: 8px;
  --max-width: 1100px;
  --nav-height: 60px;
  --shadow: 0 1px 3px rgba(0,0,0,0.08);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.6;
  padding-top: var(--nav-height);
}

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.25rem;
}

.section-subtitle {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
}

.badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.badge-blue { background: #ebf4ff; color: var(--accent); }
.badge-green { background: #f0fff4; color: var(--success); }
.badge-yellow { background: #fefcbf; color: #975a16; }
.badge-gray { background: #edf2f7; color: var(--text-muted); }
```

- [ ] **Step 2: 编写导航栏样式**

```css
/* === Navigation === */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-height);
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
  z-index: 100;
  transition: box-shadow 0.3s;
}

.navbar.scrolled { box-shadow: 0 2px 8px rgba(0,0,0,0.06); }

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav-brand {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent-dark);
}

.nav-links {
  display: flex;
  gap: 24px;
  list-style: none;
}

.nav-links a {
  font-size: 0.9rem;
  color: var(--text-secondary);
  padding: 4px 0;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--accent);
  border-bottom-color: var(--accent);
  text-decoration: none;
}

.lang-toggle {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 4px 12px;
  font-size: 0.8rem;
  cursor: pointer;
  color: var(--text-secondary);
  transition: all 0.2s;
}

.lang-toggle:hover { background: var(--accent); color: white; border-color: var(--accent); }

.hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; }
.hamburger span {
  display: block;
  width: 20px; height: 2px;
  background: var(--text);
  margin: 4px 0;
  transition: 0.3s;
}
```

- [ ] **Step 3: 编写首页、论文页、研究页、成果页、履历页样式**

```css
/* === Home Page === */
.home-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 32px;
  padding: 40px 0;
}

.profile-sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.profile-avatar {
  width: 100px;
  height: 100px;
  background: var(--accent-dark);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.profile-name { font-size: 1.5rem; font-weight: 700; }
.profile-title { font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 20px; }

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
}

.stat-item {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 14px 10px;
  text-align: center;
}

.stat-number { font-size: 1.4rem; font-weight: 700; color: var(--accent); }
.stat-label { font-size: 0.7rem; color: var(--text-muted); margin-top: 2px; }

.content-cards { display: flex; flex-direction: column; gap: 16px; }
.content-cards .card h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 8px;
}

/* === Publications Page === */
.filter-tags { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }

.filter-tag {
  padding: 4px 14px;
  border-radius: 16px;
  font-size: 0.8rem;
  border: 1px solid var(--border);
  background: var(--card-bg);
  cursor: pointer;
  transition: all 0.2s;
}

.filter-tag.active,
.filter-tag:hover {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.pub-list { display: flex; flex-direction: column; gap: 14px; }

.pub-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px;
  border-left: 4px solid var(--accent);
  transition: box-shadow 0.2s;
}

.pub-card:hover { box-shadow: var(--shadow); }
.pub-card.revision { border-left-color: var(--warning); background: #fffff8; }

.pub-title { font-size: 0.95rem; font-weight: 600; color: var(--text); margin-bottom: 4px; }
.pub-authors { font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 4px; }
.pub-journal { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px; }
.pub-tags { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; }

/* === Research Page === */
.research-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.research-nav-item {
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid var(--border);
  background: var(--card-bg);
  cursor: pointer;
  color: var(--text-secondary);
  transition: all 0.2s;
}

.research-nav-item:hover,
.research-nav-item.active {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.research-project {
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 24px;
}

.project-banner {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  background: linear-gradient(135deg, #ebf4ff, #f8fafc);
}

.project-body { padding: 24px; }

.project-body h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 8px; }

.project-body p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 16px;
}

.project-tags { display: flex; gap: 8px; flex-wrap: wrap; }

/* === Achievements Page === */
.achievements-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-top: 8px;
}

.achieve-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 24px;
  transition: box-shadow 0.2s;
}

.achieve-card:hover { box-shadow: var(--shadow); }
.achieve-icon { font-size: 1.8rem; margin-bottom: 12px; }
.achieve-card h3 { font-size: 1rem; font-weight: 600; margin-bottom: 10px; }
.achieve-card .detail { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.8; }
.achieve-card .highlight { color: var(--accent); font-weight: 600; }
.achieve-card .highlight-gold { color: var(--warning); font-weight: 600; }

/* === About Page === */
.about-layout { padding: 32px 0; }

.timeline-section { margin-bottom: 32px; }
.timeline-section h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.timeline {
  border-left: 2px solid var(--border);
  padding-left: 20px;
  margin-left: 4px;
}

.timeline-item {
  position: relative;
  margin-bottom: 18px;
}

.timeline-dot {
  width: 10px; height: 10px;
  background: var(--accent);
  border-radius: 50%;
  position: absolute;
  left: -26px;
  top: 4px;
}

.timeline-dot.past { background: var(--text-muted); }

.timeline-date { font-size: 0.75rem; color: var(--accent); font-weight: 600; }
.timeline-date.past { color: var(--text-muted); }
.timeline-title { font-size: 0.92rem; font-weight: 600; }
.timeline-desc { font-size: 0.8rem; color: var(--text-secondary); }

.info-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.info-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
}

.info-card h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 6px; }
.info-card p { font-size: 0.8rem; color: var(--text-secondary); line-height: 1.7; }

/* === Footer === */
.footer {
  border-top: 1px solid var(--border);
  padding: 24px 0;
  margin-top: 48px;
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-muted);
}
```

- [ ] **Step 4: 编写响应式媒体查询**

```css
/* === Responsive: Tablet === */
@media (max-width: 1023px) {
  .home-layout { grid-template-columns: 1fr; gap: 24px; }
  .profile-sidebar { flex-direction: row; flex-wrap: wrap; gap: 16px; justify-content: center; }
  .stats-grid { max-width: 400px; }
  .achievements-grid { grid-template-columns: 1fr; }
  .info-cards { grid-template-columns: 1fr; }
}

/* === Responsive: Mobile === */
@media (max-width: 767px) {
  .nav-links { display: none; }
  .nav-links.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: var(--nav-height);
    left: 0; right: 0;
    background: white;
    border-bottom: 1px solid var(--border);
    padding: 16px 24px;
    gap: 12px;
  }

  .hamburger { display: block; }

  .container { padding: 0 16px; }
  .section-title { font-size: 1.25rem; }
  .stats-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
  .filter-tags { gap: 6px; }
  .filter-tag { font-size: 0.72rem; padding: 3px 10px; }
  .pub-card { padding: 14px; }
  .project-body { padding: 16px; }
  .achieve-card { padding: 18px; }
}
```

- [ ] **Step 5: 验证CSS文件完整无语法错误**

用浏览器DevTools检查`style.css`是否正常加载。

---

### Task 2: 实现 i18n 翻译系统

**Files:**
- Create: `js/i18n.js`

- [ ] **Step 1: 创建中英文翻译数据**

```js
// js/i18n.js
const i18n = {
  zh: {
    'nav.home': '首页',
    'nav.publications': '论文',
    'nav.research': '研究',
    'nav.achievements': '成果',
    'nav.about': '履历',
    'lang.switch': 'EN',

    'home.name': '李佳津',
    'home.title': '医学人工智能 · 博士研究生',
    'home.intro.title': '个人简介',
    'home.intro.text': '安徽医科大学生物医学工程学院硕士研究生，研究方向为深度学习在光学和医学图像方面的应用。在Advanced Intelligent Systems、Laser & Photonics Reviews、Measurement等国际期刊发表论文多篇，授权国家发明专利1项，获国家级竞赛一等奖2项。',
    'home.research.title': '研究方向',
    'home.research.text': '计算机视觉 · 图像分割 · 多目标追踪 · 超分辨重构 · 超声平面波重建',
    'home.news.title': '最新动态',
    'home.news.item1': 'MTCA-Net论文被Advanced Intelligent Systems接收 (IF=6.1, 中科院二区)',
    'home.news.item2': 'HOPE-Net论文投稿至IEEE JBHI (中科院一区, IF=6.8)，返修中',
    'home.news.item3': 'DP-HAFNet论文投稿至Measurement (中科院二区Top, IF=5.6)，返修中',
    'home.news.item4': '获第十届全国大学生生物医学工程创新设计竞赛国赛一等奖',

    'pub.title': '学术论文',
    'pub.subtitle': '5篇已接收 · 2篇返修中',
    'pub.filter.all': '全部',
    'pub.filter.published': '已接收',
    'pub.filter.revision': '返修中',
    'pub.filter.conference': '会议论文',

    'research.title': '研究项目',
    'research.subtitle': '深度学习在医学图像处理中的应用',
    'research.nav.sperm': '精子分析',
    'research.nav.fpm': 'FPM成像',
    'research.nav.ultrasound': '超声重建',
    'research.nav.photoacoustic': '光声成像',

    'achieve.title': '获奖与成果',
    'achieve.competition': '学科竞赛',
    'achieve.patent': '国家发明专利',
    'achieve.software': '软件著作权',
    'achieve.conference': '学术会议',

    'about.title': '个人履历',
    'about.education': '教育经历',
    'about.research': '研究方向',
    'about.funding': '科研基金',
    'about.contact': '联系方式',
    'about.basic': '基本信息',

    'footer.text': '© 2026 李佳津. All rights reserved.',

    'stat.papers': '学术论文',
    'stat.patents': '发明专利',
    'stat.software': '软件著作权',
    'stat.awards': '国赛一等奖',
  },

  en: {
    'nav.home': 'Home',
    'nav.publications': 'Publications',
    'nav.research': 'Research',
    'nav.achievements': 'Achievements',
    'nav.about': 'CV',
    'lang.switch': '中文',

    'home.name': 'Jiajin Li',
    'home.title': 'Medical AI · Ph.D. Candidate',
    'home.intro.title': 'About Me',
    'home.intro.text': 'M.S. candidate in Biomedical Engineering at Anhui Medical University, focusing on deep learning applications in optical and medical image processing. Published multiple papers in international journals including Advanced Intelligent Systems, Laser & Photonics Reviews, and Measurement. Granted 1 national invention patent and won 2 national first prizes in competitions.',
    'home.research.title': 'Research Interests',
    'home.research.text': 'Computer Vision · Image Segmentation · Multi-Object Tracking · Super-Resolution Reconstruction · Ultrasound Plane Wave Imaging',
    'home.news.title': 'Latest News',
    'home.news.item1': 'MTCA-Net accepted by Advanced Intelligent Systems (IF=6.1, CAS Q2)',
    'home.news.item2': 'HOPE-Net submitted to IEEE JBHI (CAS Q1, IF=6.8), under revision',
    'home.news.item3': 'DP-HAFNet submitted to Measurement (CAS Q2 Top, IF=5.6), under revision',
    'home.news.item4': 'Won First Prize at the 10th National Biomedical Engineering Innovation Design Competition',

    'pub.title': 'Publications',
    'pub.subtitle': '5 Published · 2 Under Revision',
    'pub.filter.all': 'All',
    'pub.filter.published': 'Published',
    'pub.filter.revision': 'Under Revision',
    'pub.filter.conference': 'Conference',

    'research.title': 'Research Projects',
    'research.subtitle': 'Deep Learning in Medical Image Processing',
    'research.nav.sperm': 'Sperm Analysis',
    'research.nav.fpm': 'FPM Imaging',
    'research.nav.ultrasound': 'Ultrasound Imaging',
    'research.nav.photoacoustic': 'Photoacoustic Imaging',

    'achieve.title': 'Awards & Achievements',
    'achieve.competition': 'Academic Competitions',
    'achieve.patent': 'Invention Patent',
    'achieve.software': 'Software Copyrights',
    'achieve.conference': 'Academic Conferences',

    'about.title': 'Curriculum Vitae',
    'about.education': 'Education',
    'about.research': 'Research Interests',
    'about.funding': 'Research Funding',
    'about.contact': 'Contact',
    'about.basic': 'Basic Information',

    'footer.text': '© 2026 Jiajin Li. All rights reserved.',

    'stat.papers': 'Publications',
    'stat.patents': 'Patents',
    'stat.software': 'Software Copyrights',
    'stat.awards': 'National Awards',
  }
};
```

- [ ] **Step 2: 实现语言切换和应用函数**

```js
function getLang() {
  return document.documentElement.lang || 'zh';
}

function setLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations();
  updateLangButton();
}

function applyTranslations() {
  const lang = getLang();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
  // Update placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang] && i18n[lang][key]) {
      el.setAttribute('placeholder', i18n[lang][key]);
    }
  });
}

function updateLangButton() {
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    const lang = getLang();
    btn.textContent = i18n[lang] && i18n[lang]['lang.switch'] || (lang === 'zh' ? 'EN' : '中文');
  }
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'zh';
  setLang(savedLang);
});
```

- [ ] **Step 3: 切换到EN确认所有翻译正确显示**

---

### Task 3: 创建共享导航栏和交互 JS

**Files:**
- Create: `js/main.js`

- [ ] **Step 1: 创建导航栏HTML模板（用于每个页面）**

所有页面共享相同的导航栏HTML：

```html
<nav class="navbar" id="navbar">
  <div class="container">
    <a href="index.html" class="nav-brand">李佳津</a>
    <ul class="nav-links" id="nav-links">
      <li><a href="index.html" data-i18n="nav.home">首页</a></li>
      <li><a href="publications.html" data-i18n="nav.publications">论文</a></li>
      <li><a href="research.html" data-i18n="nav.research">研究</a></li>
      <li><a href="achievements.html" data-i18n="nav.achievements">成果</a></li>
      <li><a href="about.html" data-i18n="nav.about">履历</a></li>
    </ul>
    <div style="display:flex;align-items:center;gap:12px;">
      <button class="lang-toggle" id="lang-toggle" onclick="toggleLang()">EN</button>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
```

- [ ] **Step 2: 编写 main.js — 导航激活、滚动阴影、汉堡菜单**

```js
// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // Active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Navbar scroll shadow
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
});

// Language toggle (called from button onclick)
function toggleLang() {
  const newLang = getLang() === 'zh' ? 'en' : 'zh';
  setLang(newLang);
}
```

- [ ] **Step 3: 验证导航交互 — 页面切换、滚动阴影、移动端汉堡菜单**

---

### Task 4: 构建首页 index.html

**Files:**
- Create: `index.html`

- [ ] **Step 1: 创建首页HTML结构**

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>李佳津 — 医学人工智能</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<!-- NAVBAR: 粘贴 Task 3 Step 1 的导航栏代码 -->
<nav class="navbar" id="navbar">
  <div class="container">
    <a href="index.html" class="nav-brand">李佳津</a>
    <ul class="nav-links" id="nav-links">
      <li><a href="index.html" data-i18n="nav.home">首页</a></li>
      <li><a href="publications.html" data-i18n="nav.publications">论文</a></li>
      <li><a href="research.html" data-i18n="nav.research">研究</a></li>
      <li><a href="achievements.html" data-i18n="nav.achievements">成果</a></li>
      <li><a href="about.html" data-i18n="nav.about">履历</a></li>
    </ul>
    <div style="display:flex;align-items:center;gap:12px;">
      <button class="lang-toggle" id="lang-toggle" onclick="toggleLang()">EN</button>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<main class="container">
  <div class="home-layout">

    <!-- Left sidebar -->
    <aside class="profile-sidebar">
      <div class="profile-avatar">LJ</div>
      <h1 class="profile-name" data-i18n="home.name">李佳津</h1>
      <p class="profile-title" data-i18n="home.title">医学人工智能 · 博士研究生</p>

      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">7</div>
          <div class="stat-label" data-i18n="stat.papers">学术论文</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">1</div>
          <div class="stat-label" data-i18n="stat.patents">发明专利</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">5</div>
          <div class="stat-label" data-i18n="stat.software">软件著作权</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">2</div>
          <div class="stat-label" data-i18n="stat.awards">国赛一等奖</div>
        </div>
      </div>
    </aside>

    <!-- Right content -->
    <div class="content-cards">
      <div class="card">
        <h3 data-i18n="home.intro.title">个人简介</h3>
        <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.8;" data-i18n="home.intro.text">安徽医科大学生物医学工程学院硕士研究生，研究方向为深度学习在光学和医学图像方面的应用。</p>
      </div>

      <div class="card">
        <h3 data-i18n="home.research.title">研究方向</h3>
        <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.8;" data-i18n="home.research.text">计算机视觉 · 图像分割 · 多目标追踪 · 超分辨重构 · 超声平面波重建</p>
      </div>

      <div class="card">
        <h3 data-i18n="home.news.title">最新动态</h3>
        <ul style="font-size:0.85rem;color:var(--text-secondary);line-height:2;padding-left:18px;">
          <li data-i18n="home.news.item1">MTCA-Net论文被Advanced Intelligent Systems接收 (IF=6.1)</li>
          <li data-i18n="home.news.item2">HOPE-Net论文投稿至IEEE JBHI，返修中</li>
          <li data-i18n="home.news.item3">DP-HAFNet论文投稿至Measurement，返修中</li>
          <li data-i18n="home.news.item4">获第十届全国大学生生物医学工程创新设计竞赛国赛一等奖</li>
        </ul>
      </div>
    </div>

  </div>
</main>

<footer class="footer">
  <div class="container">
    <p data-i18n="footer.text">© 2026 李佳津. All rights reserved.</p>
  </div>
</footer>

<script src="js/i18n.js"></script>
<script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 打开 index.html 验证首页显示**

检查：左右分栏、头像、数据统计、中英切换、导航高亮

---

### Task 5: 构建论文成果页 publications.html

**Files:**
- Create: `publications.html`

- [ ] **Step 1: 创建论文页**

复制 index.html 框架，将 `<main>` 替换为：

```html
<main class="container" style="padding-top:32px;padding-bottom:32px;">
  <h2 class="section-title" data-i18n="pub.title">学术论文</h2>
  <p class="section-subtitle" data-i18n="pub.subtitle">5篇已接收 · 2篇返修中</p>

  <div class="filter-tags">
    <button class="filter-tag active" data-filter="all" data-i18n="pub.filter.all">全部</button>
    <button class="filter-tag" data-filter="published" data-i18n="pub.filter.published">已接收</button>
    <button class="filter-tag" data-filter="revision" data-i18n="pub.filter.revision">返修中</button>
    <button class="filter-tag" data-filter="conference" data-i18n="pub.filter.conference">会议论文</button>
  </div>

  <div class="pub-list">
    <!-- Paper 1: 中科院一区Top -->
    <div class="pub-card" data-category="published">
      <div class="pub-title">Fast High-Fidelity Fourier Ptychographic Microscopy via Wavelet Transform and Linear Attention</div>
      <div class="pub-authors">W. Sun†, <strong>J. Li†</strong>, et al.</div>
      <div class="pub-journal">Laser & Photonics Reviews, 2025, e01895</div>
      <div class="pub-tags">
        <span class="badge badge-green">中科院一区Top</span>
        <span class="badge badge-green">JCR Q1</span>
        <span class="badge badge-blue">IF=10</span>
      </div>
    </div>

    <!-- Paper 2: 中科院二区 -->
    <div class="pub-card" data-category="published">
      <div class="pub-title">MTCA-Net: Multi-Task Cascade Analysis Network for Real-Time Sperm Tracking and Segmentation</div>
      <div class="pub-authors"><strong>J. Li</strong>, W. Sun, et al.</div>
      <div class="pub-journal">Advanced Intelligent Systems, 2026, e202501452</div>
      <div class="pub-tags">
        <span class="badge badge-blue">中科院二区</span>
        <span class="badge badge-green">JCR Q1</span>
        <span class="badge badge-blue">IF=6.1</span>
      </div>
    </div>

    <!-- Paper 3: 中科院二区Top -->
    <div class="pub-card" data-category="published">
      <div class="pub-title">DP-HAFNet: A Dual-Path Hierarchical Adaptive Fusion Network for Ultrasound Image Reconstruction from Single Plane-Wave RF Data</div>
      <div class="pub-authors"><strong>J. Li</strong>, W. Sun, et al.</div>
      <div class="pub-journal">Measurement, 2026, 277: 121562</div>
      <div class="pub-tags">
        <span class="badge badge-green">中科院二区Top</span>
        <span class="badge badge-green">JCR Q1</span>
        <span class="badge badge-blue">IF=5.6</span>
      </div>
    </div>

    <!-- Paper 4: 会议 -->
    <div class="pub-card" data-category="conference">
      <div class="pub-title">High-Quality Plane-Wave Image Reconstruction using the U2-Net Deep Learning Model</div>
      <div class="pub-authors"><strong>J. Li</strong>, W. Sun, et al.</div>
      <div class="pub-journal">2024 IEEE UFFC-JS, 2024, pp. 1-4</div>
      <div class="pub-tags">
        <span class="badge badge-gray">IEEE UFFC-JS 2024</span>
        <span class="badge badge-blue">口头汇报</span>
      </div>
    </div>

    <!-- Paper 5: 会议 -->
    <div class="pub-card" data-category="conference">
      <div class="pub-title">LADA Net: A Linear Attention Domain Adaptation Network for Ultrasound Image Reconstruction from Single Plane Wave RF Data</div>
      <div class="pub-authors"><strong>J. Li</strong>, W. Sun, et al.</div>
      <div class="pub-journal">2025 IEEE International Ultrasonics Symposium (IUS), 2025</div>
      <div class="pub-tags">
        <span class="badge badge-gray">IEEE IUS 2025</span>
        <span class="badge badge-green">Student Travel Grant</span>
      </div>
    </div>

    <!-- Paper 6: 会议 -->
    <div class="pub-card" data-category="conference">
      <div class="pub-title">Resolution Enhancement in Ultrasound Localization Microscopy using a Super-Resolution Generative Adversarial Network</div>
      <div class="pub-authors">Y. Xie, <strong>J. Li</strong>, et al.</div>
      <div class="pub-journal">2025 IEEE International Ultrasonics Symposium (IUS), 2025</div>
    </div>

    <!-- Paper 7: 返修中 -->
    <div class="pub-card revision" data-category="revision">
      <div class="pub-title">HOPE-Net: Mamba-Guided Hybrid Omni-Perceptual Enhanced Network for Sperm Detection</div>
      <div class="pub-authors"><strong>J. Li</strong>, W. Sun, et al.</div>
      <div class="pub-journal">IEEE Journal of Biomedical and Health Informatics, Major Revision</div>
      <div class="pub-tags">
        <span class="badge badge-yellow">中科院一区</span>
        <span class="badge badge-yellow">IF=6.8</span>
        <span class="badge badge-yellow">Major Revision</span>
      </div>
    </div>
  </div>
</main>
```

- [ ] **Step 2: 实现论文筛选功能**

在 main.js 追加：

```js
// Publication filter
document.querySelectorAll('.filter-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    const filter = tag.getAttribute('data-filter');
    document.querySelectorAll('.pub-card').forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
```

- [ ] **Step 3: 打开 publications.html 验证论文列表和筛选功能**

---

### Task 6: 构建研究项目页 research.html

**Files:**
- Create: `research.html`

- [ ] **Step 1: 创建研究项目页（4个项目）**

复制框架，`<main>` 替换为：

```html
<main class="container" style="padding-top:32px;padding-bottom:32px;">
  <h2 class="section-title" data-i18n="research.title">研究项目</h2>
  <p class="section-subtitle" data-i18n="research.subtitle">深度学习在医学图像处理中的应用</p>

  <!-- Anchor nav -->
  <div class="research-nav">
    <button class="research-nav-item active" data-scroll="project-sperm" data-i18n="research.nav.sperm">精子分析</button>
    <button class="research-nav-item" data-scroll="project-fpm" data-i18n="research.nav.fpm">FPM成像</button>
    <button class="research-nav-item" data-scroll="project-ultrasound" data-i18n="research.nav.ultrasound">超声重建</button>
    <button class="research-nav-item" data-scroll="project-photoacoustic" data-i18n="research.nav.photoacoustic">光声成像</button>
  </div>

  <!-- Project 1: 精子分析 -->
  <section id="project-sperm" class="research-project">
    <img src="assets/images/image12.gif" alt="MTCA-Net Architecture" class="project-banner">
    <div class="project-body">
      <h3>研究内容一：基于深度学习的实时精子质量评估</h3>
      <p><strong>背景：</strong>不孕不育影响全球1.86亿人，男性因素占20%-70%。临床上普遍采用人类卵胞质内单精子注射（ICSI），需要人工挑选单个活精子注入卵母细胞完成受精，该精子质量直接影响临床种植率和婴儿出生率。</p>
      <p><strong>方法：</strong>与安医一附院生殖中心合作，在60倍水浸物镜下拍摄精子图像，形成3166个分割样本和397个检测样本。开发了<strong>MTCA-Net</strong>多任务级联分析网络，实现94 FPS实时追踪与分割（1920×1200分辨率）。进一步提出<strong>HOPE-Net</strong>混合全感知增强网络，通过Mamba引导的选择性扫描机制自适应聚焦关键区域，解决临床场景中杂质干扰问题。</p>
      <p><strong>成果：</strong>已封装为软件与奥林巴斯显微镜集成，构建计算显微系统。</p>
      <div class="project-tags">
        <span class="badge badge-blue">AIS 2026 · IF 6.1</span>
        <span class="badge badge-yellow">IEEE JBHI · Major Revision</span>
        <span class="badge badge-green">专利 ZL202510901918.1</span>
        <span class="badge badge-green">软著×3</span>
        <span class="badge badge-green">国赛一等奖×2 · 二等奖×1</span>
        <span class="badge badge-gray">BME2025 口头汇报</span>
        <span class="badge badge-gray">IEEE IUS 2025 (Y. Xie et al.)</span>
      </div>
    </div>
  </section>

  <!-- Project 2: FPM -->
  <section id="project-fpm" class="research-project">
    <img src="assets/images/image31.png" alt="WM-FPM Framework" class="project-banner">
    <div class="project-body">
      <h3>研究内容二：基于小波变换和线性注意力的快速高保真傅里叶叠层显微成像 (WM-FPM)</h3>
      <p><strong>背景：</strong>傅里叶叠层显微成像（FPM）可实现大视场高分辨率成像，但传统迭代算法重建速度慢，难以实时应用。</p>
      <p><strong>方法：</strong>提出结合小波变换和线性注意力机制的生成对抗架构（WM-FPM），将图像分解到小波域进行处理，利用线性注意力降低计算复杂度，同时保持重建保真度。</p>
      <p><strong>结果：</strong>对于单张1.51亿像素图像，重建时间仅需5.63秒，相比传统迭代算法提速超100倍且无需牺牲重建保真度。</p>
      <div class="project-tags">
        <span class="badge badge-green">Laser & Photonics Reviews · IF 10</span>
        <span class="badge badge-green">中科院一区Top · JCR Q1</span>
      </div>
    </div>
  </section>

  <!-- Project 3: 超声重建 -->
  <section id="project-ultrasound" class="research-project">
    <img src="assets/images/image29.png" alt="Ultrasound Reconstruction" class="project-banner">
    <div class="project-body">
      <h3>研究内容三：基于深度学习的超声平面波重建</h3>
      <p><strong>背景：</strong>传统平面波超声成像在单角度发射时图像质量差，多角度复合虽提升质量但帧率降低。</p>
      <p><strong>方法：</strong>提出<strong>U2-Net</strong>可学习波束形成器，在单角度平面波下重建高质量图像，成像质量媲美75角度复合CPWC，同时显著降低计算复杂度。进一步提出<strong>DP-HAFNet</strong>双路径分层自适应融合网络，可同时预测基于像素的自适应权重输出和基于通道加权的波束形成输出，有效抑制旁瓣和噪声，提升分辨率与对比度同时保留斑点纹理。</p>
      <div class="project-tags">
        <span class="badge badge-blue">Measurement 2026 · IF 5.6</span>
        <span class="badge badge-blue">IEEE UFFC-JS 2024</span>
        <span class="badge badge-blue">IEEE IUS 2025 (LADA Net)</span>
        <span class="badge badge-green">Student Travel Grant</span>
        <span class="badge badge-gray">中科院二区Top · JCR Q1</span>
      </div>
    </div>
  </section>

  <!-- Project 4: 博士规划 -->
  <section id="project-photoacoustic" class="research-project">
    <div class="project-body">
      <h3>博士研究计划：物理先验约束的深度学习光声成像去噪算法</h3>
      <p><strong>痛点：</strong>传统光声重建依赖理想物理假设，抗噪弱、采样伪影重、细节丢失；纯数据驱动深度学习无物理约束，泛化性差、易产生非物理失真。</p>
      <p><strong>方案：</strong>构建融合物理先验知识的深度学习框架，实现低噪声、高物理保真的光声成像。</p>
      <p><strong>意义：</strong>物理先验与深度学习的有机结合，有望突破现有光声成像的质量瓶颈，推动其在临床诊断中的应用。</p>
      <div class="project-tags">
        <span class="badge badge-gray">博士研究计划</span>
        <span class="badge badge-blue">光声成像</span>
        <span class="badge badge-blue">物理先验约束</span>
      </div>
    </div>
  </section>
</main>
```

- [ ] **Step 2: 实现研究锚点滚动和导航高亮**

在 main.js 追加：

```js
// Research nav smooth scroll
document.querySelectorAll('.research-nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-scroll');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelectorAll('.research-nav-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  });
});
```

- [ ] **Step 3: 打开 research.html 验证**

检查：锚点导航跳转、图片显示、项目内容完整

---

### Task 7: 构建获奖成果页 achievements.html

**Files:**
- Create: `achievements.html`

- [ ] **Step 1: 创建成果页 2×2 卡片网格**

```html
<main class="container" style="padding-top:32px;padding-bottom:32px;">
  <h2 class="section-title" data-i18n="achieve.title">获奖与成果</h2>

  <div class="achievements-grid">
    <!-- 竞赛卡片 -->
    <div class="achieve-card">
      <div class="achieve-icon">🏆</div>
      <h3 data-i18n="achieve.competition">学科竞赛</h3>
      <div class="detail">
        <p><span class="highlight-gold">国赛一等奖 ×2</span></p>
        <p>2025 · 第十届全国大学生生医工创新设计竞赛 — 精益求精——面向ICSI的精子实时智能分析系统（算法设计与软件开发）</p>
        <p>2025 · 第十届全国大学生生医工创新设计竞赛 — 优生优育-精子质量检测与优选仪器</p>
        <p style="margin-top:6px;"><span class="highlight">国赛二等奖 ×1</span></p>
        <p>2024 · 第九届全国大学生生医工创新设计竞赛 — 基于深度学习的计算机辅助精子分析（CASA）软件（算法设计与软件开发）</p>
        <p style="margin-top:4px;color:var(--text-muted);font-size:0.75rem;">另获山东省电子与信息大赛等省级A类赛事二等奖四项、三等奖两项</p>
      </div>
    </div>

    <!-- 专利卡片 -->
    <div class="achieve-card">
      <div class="achieve-icon">📜</div>
      <h3 data-i18n="achieve.patent">国家发明专利</h3>
      <div class="detail">
        <p><span class="highlight">已授权 1项</span></p>
        <p>ZL202510901918.1 · 基于多任务级联分析网络的精子实时追踪与分割方法及其系统</p>
        <p style="font-size:0.75rem;color:var(--text-muted);">发明人：周金华，李佳津，孙雯雯，章志国（学生一作）</p>
      </div>
    </div>

    <!-- 软著卡片 -->
    <div class="achieve-card">
      <div class="achieve-icon">💻</div>
      <h3 data-i18n="achieve.software">软件著作权</h3>
      <div class="detail">
        <p><span class="highlight">已登记 5项</span></p>
        <p>1. 精子医学图像检测系统 (2024SR2119779) — 学生一作</p>
        <p>2. 病理细胞虚拟染色软件2.0 (2024SR1769018)</p>
        <p>3. 病理细胞虚拟染色软件1.0 (2024SR0880019)</p>
        <p>4. 基于U-net的精子头部分割软件2.0 (2025SR0051240)</p>
        <p>5. 基于U-net的精子头部分割软件1.0 (2024SR0698807)</p>
      </div>
    </div>

    <!-- 参会卡片 -->
    <div class="achieve-card">
      <div class="achieve-icon">🎤</div>
      <h3 data-i18n="achieve.conference">学术会议</h3>
      <div class="detail">
        <p><span class="highlight">口头汇报 1次</span></p>
        <p>2025中国生物医学工程大会暨创新医疗峰会 (BME2025)</p>
        <p>报告题目：MTCA-Net：一种用于精子实时追踪和分割的多任务级联分析网络</p>
        <p style="margin-top:6px;color:var(--text-muted);font-size:0.75rem;">
          另在 IEEE UFFC-JS 2024、IEEE IUS 2025 等国际会议发表论文并获 Student Travel Grant
        </p>
      </div>
    </div>
  </div>
</main>
```

- [ ] **Step 2: 打开 achievements.html 验证成果页**

---

### Task 8: 构建个人履历页 about.html

**Files:**
- Create: `about.html`

- [ ] **Step 1: 创建履历页（时间线+信息卡）**

```html
<main class="container about-layout">
  <h2 class="section-title" data-i18n="about.title">个人履历</h2>

  <!-- 教育经历 时间线 -->
  <div class="timeline-section">
    <h3 data-i18n="about.education">教育经历</h3>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2023.09 — 至今</div>
        <div class="timeline-title">安徽医科大学 · 生物医学工程（硕士）</div>
        <div class="timeline-desc">生物医学工程学院 · 电子信息方向 | 导师：周金华</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot past"></div>
        <div class="timeline-date past">2017.09 — 2021.06</div>
        <div class="timeline-title">曲阜师范大学 · 计算机科学与技术（本科）</div>
        <div class="timeline-desc">计算机学院</div>
      </div>
    </div>
  </div>

  <!-- 信息卡片 -->
  <div class="info-cards">
    <div class="info-card">
      <h4 data-i18n="about.research">🔍 研究方向</h4>
      <p>计算机视觉 · 图像分割 · 多目标追踪 · 超分辨重构 · 超声平面波重建<br>（深度学习在光学和医学图像方面的应用）</p>
    </div>
    <div class="info-card">
      <h4 data-i18n="about.funding">📦 科研基金</h4>
      <p>参与省部级科研基金 <strong style="color:var(--accent);">4项</strong></p>
      <p style="font-size:0.75rem;">安徽省转化医学研究院科研基金、安徽省自然科学基金、法医遗传学公安部重点实验室开放课题等</p>
    </div>
    <div class="info-card">
      <h4 data-i18n="about.contact">📧 联系方式</h4>
      <p>邮箱：15563866837@163.com<br>电话：17852650377</p>
    </div>
    <div class="info-card">
      <h4 data-i18n="about.basic">📍 基本信息</h4>
      <p>籍贯：山东省烟台市 · 汉族<br>年龄：26岁 | 硕士在读</p>
    </div>
  </div>
</main>
```

- [ ] **Step 2: 打开 about.html 验证履历页**

---

### Task 9: 优化图片和性能

**Files:**
- Modify: 各HTML中的图片路径
- Create: `assets/images/thumbnails/` (可选)

- [ ] **Step 1: 为研究页大图添加 loading="lazy"**

在所有 `<img>` 标签添加 `loading="lazy"` 属性。

- [ ] **Step 2: 检查图片大小，对超过1MB的图片进行压缩**

```bash
# 检查大图
find assets/images -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | xargs ls -lhS | head -10
```

对超大的jpg图片运行质量压缩（如image26.jpg是12MB）。

- [ ] **Step 3: 确认所有图片路径正确**

通过浏览器Network面板检查所有图片加载状态（HTTP 200，无404）。

---

### Task 10: 响应式全面测试与微调

- [ ] **Step 1: 桌面端 (≥1024px) 走查所有5个页面**

逐页检查：导航、布局、字体、图片、间距、中英切换

- [ ] **Step 2: 平板端 (768-1023px) 走查**

检查：首页分栏改为单列、2×2网格改为1列、导航未折叠

- [ ] **Step 3: 手机端 (<768px) 走查**

检查：汉堡菜单展开/关闭、所有内容纵向排列、字体大小合适、卡片不溢出

- [ ] **Step 4: 修复发现的问题**

---

### Task 11: 启动本地预览服务器并最终验收

- [ ] **Step 1: 启动静态文件服务器**

```bash
# 使用Python内置服务器
cd "c:/Users/ljj/Desktop/个人主页" && python -m http.server 8080
```

- [ ] **Step 2: 在 http://localhost:8080 进行最终验收**

检查项：
- [ ] 首页 — 左右分栏、数据统计、动态列表、中英切换
- [ ] 论文页 — 筛选标签（全部/已接收/返修中/会议）、7篇论文卡片
- [ ] 研究页 — 锚点导航、4个项目卡片、图片显示、成果标签
- [ ] 成果页 — 2×2卡片、竞赛/专利/软著/参会
- [ ] 履历页 — 时间线教育经历、信息卡
- [ ] 全局 — 导航切换、滚动阴影、响应式（桌面/平板/手机）
- [ ] 语言 — 中英文切换所有UI文字正确
