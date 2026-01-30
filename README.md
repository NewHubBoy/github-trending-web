# GitHub Trending Web

实时展示 GitHub 今日热门开源项目。

## 功能

- 🚀 自动获取 GitHub Trending 数据
- ⭐ 显示项目名称、星标数、描述、编程语言
- 🌐 支持语言筛选
- 🔄 自动刷新（5分钟）
- 📱 响应式设计

## 部署到 Vercel

```bash
# 1. 推送代码到 GitHub
cd github-trending-web
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/NewHubBoy/github-trending-web.git
git push -u origin main

# 2. 登录 Vercel
# 访问 https://vercel.com
# 用 GitHub 登录，导入 github-trending-web 仓库
# Vercel 会自动检测并部署
```

## 本地开发

```bash
# 方式1: 直接打开
open index.html

# 方式2: 使用 http-server
npx http-server .
```

## 技术栈

- 纯原生 HTML/CSS/JavaScript
- 无需后端，直接请求 GitHub API
- Vercel 静态托管
