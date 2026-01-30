// GitHub Trending Web - Main Script
const API_BASE = 'https://api.github.com';

const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Go: '#00ADD8',
    Rust: '#dea584',
    Java: '#b07219',
    'C++': '#f34b7d',
    Ruby: '#701516',
    PHP: '#4F5D95',
    Vue: '#41b883',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Shell: '#89e051',
    Dockerfile: '#384d54'
};

const repoList = document.getElementById('repoList');
const lastUpdated = document.getElementById('lastUpdated');
const languageFilter = document.getElementById('languageFilter');
const refreshBtn = document.getElementById('refreshBtn');

let allRepos = [];

// Fetch trending repositories
async function fetchTrending() {
    showLoading();
    
    try {
        const response = await fetch('https://github.com/trending');
        if (!response.ok) throw new Error('Failed to fetch');
        
        const html = await response.text();
        allRepos = parseTrendingHTML(html);
        
        filterAndRender();
        updateTimestamp();
    } catch (error) {
        console.error('Error fetching trending:', error);
        showError('获取数据失败，请刷新重试');
    }
}

// Parse GitHub trending page HTML
function parseTrendingHTML(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const repos = [];
    
    // Try to find repo items - GitHub trending page structure varies
    const article = doc.querySelector('article.Box-row');
    
    if (!article) {
        // Fallback: try alternative selectors
        const items = doc.querySelectorAll('.Box-row, .repo-item');
        items.forEach(item => {
            const nameEl = item.querySelector('a.text-bold, .repo-name a');
            const descEl = item.querySelector('.col-9, .repo-description');
            const starsEl = item.querySelector('[href*="stargazers"]');
            const langEl = item.querySelector('[itemprop="programmingLanguage"], .repo-language');
            
            if (nameEl) {
                const name = nameEl.textContent.trim();
                const link = 'https://github.com' + (nameEl.getAttribute('href') || '');
                const stars = starsEl ? starsEl.textContent.trim() : '0';
                const description = descEl ? descEl.textContent.trim() : '';
                const language = langEl ? langEl.textContent.trim() : '';
                
                repos.push({
                    name,
                    link,
                    stars,
                    description,
                    language,
                    todayStars: ''
                });
            }
        });
    }
    
    // If still empty, try another approach
    if (repos.length === 0) {
        const links = doc.querySelectorAll('a[href*="/"]');
        links.forEach(link => {
            const href = link.getAttribute('href') || '';
            if (href.includes('/') && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('?')) {
                const text = link.textContent.trim();
                if (text && text.includes('/') && text.split('/').length === 2) {
                    // Likely a repo name
                }
            }
        });
    }
    
    return repos;
}

// Alternative: Use GitHub Search API
async function fetchWithAPI() {
    try {
        // Most starred repos updated today
        const date = new Date();
        date.setDate(date.getDate() - 1);
        const dateStr = date.toISOString().split('T')[0];
        
        const response = await fetch(
            `${API_BASE}/search/repositories?q=created:>${dateStr}&sort=stars&order=desc&per_page=12`
        );
        
        if (!response.ok) throw new Error('API failed');
        
        const data = await response.json();
        return data.items.map(repo => ({
            name: repo.full_name,
            link: repo.html_url,
            stars: formatNumber(repo.stargazers_count),
            description: repo.description || '暂无描述',
            language: repo.language || 'Unknown',
            todayStars: repo.stargazers_count
        }));
    } catch (error) {
        console.error('API error:', error);
        return [];
    }
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

function filterAndRender() {
    const selectedLang = languageFilter.value.toLowerCase();
    
    let filtered = allRepos;
    if (selectedLang) {
        filtered = allRepos.filter(repo => 
            repo.language && repo.language.toLowerCase() === selectedLang
        );
    }
    
    renderRepos(filtered.length > 0 ? filtered : allRepos.slice(0, 12));
}

function renderRepos(repos) {
    if (repos.length === 0) {
        repoList.innerHTML = '<div class="loading">没有找到相关项目</div>';
        return;
    }
    
    repoList.innerHTML = repos.map(repo => `
        <div class="repo-card">
            <div class="repo-header">
                <span class="repo-icon">📦</span>
                <div class="repo-info">
                    <a href="${repo.link}" target="_blank" class="repo-name">${repo.name}</a>
                </div>
            </div>
            <p class="repo-description">${repo.description}</p>
            <div class="repo-meta">
                <span class="stars">⭐ ${repo.stars}</span>
                ${repo.language ? `
                    <span class="language">
                        <span class="language-dot" style="background: ${languageColors[repo.language] || '#8b949e'}"></span>
                        ${repo.language}
                    </span>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function showLoading() {
    repoList.innerHTML = '<div class="loading">加载中...</div>';
}

function showError(message) {
    repoList.innerHTML = `<div class="error">${message}</div>`;
}

function updateTimestamp() {
    const now = new Date();
    lastUpdated.textContent = now.toLocaleString('zh-CN');
}

// Event listeners
refreshBtn.addEventListener('click', fetchTrending);
languageFilter.addEventListener('change', filterAndRender);

// Auto refresh every 5 minutes
setInterval(fetchTrending, 5 * 60 * 1000);

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    fetchTrending();
    // Also try API as backup
    fetchWithAPI().then(apiRepos => {
        if (apiRepos.length > 0 && allRepos.length === 0) {
            allRepos = apiRepos;
            filterAndRender();
            updateTimestamp();
        }
    });
});
