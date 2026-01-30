const TRENDING_API = 'https://github.com/trending';
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

const languageColors = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#2b7489',
    'Python': '#3572A5',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'Java': '#b07219',
    'C++': '#f34b7d',
    'Ruby': '#701516',
    'PHP': '#4F5D95',
    'Shell': '#89e051',
    'Vue': '#41b883',
    'C': '#555555',
    'C#': '#178600',
    'Objective-C': '#438eff',
    'Swift': '#ffac45',
    'Dart': '#00B4AB',
    'Kotlin': '#A97BFF',
    'Scala': '#c22d40',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'SCSS': '#c6538c',
    'Jupyter Notebook': '#DA5B0B',
    'Dockerfile': '#384d54',
    'Makefile': '#6d8086',
    'CMake': '#064f8b',
    'Lua': '#000080',
    'R': '#198CE7',
    'Perl': '#0298c3',
    'Haskell': '#5e5086',
    'Elixir': '#6e4a7e',
    'Clojure': '#5881d8',
    'Erlang': '#b83998',
    'D': '#ba595e',
    'Zig': '#ec5c2e',
    'Nim': '#ffc200',
    'Crystal': '#000100',
    'Ada': '#02f88c',
    'Fortran': '#4d41b1',
    'Julia': '#9558b2',
    'F#': '#b845fc',
    'Lean': '#5e5e5e',
    'Solidity': '#AA6746',
    'Astro': '#bf7bbe',
    'Aurelia': '#ed2b6d',
    'AutoHotkey': '#6594b9',
    'AutoIt': '#7C4A31',
    'Bash': '#89e051',
    'Batchfile': '#C1F12E',
    'Blazor': '#5C2D91',
    'Bluespec': '#121053',
    'Boo': '#d4bec1',
    'BrightScript': '#662D91',
    'Ceylon': '#DFA535',
    'Clean': '#3F85F5',
    'COBOL': '#005C99',
    'CoffeeScript': '#244776',
    'Common Lisp': '#3fb68b',
    'Coq': '#d0b68c',
    'Crystal': '#000100',
    'Cuda': '#3A4E3A',
    'CUE': '#5885E8',
    'Curry': '#9b2393',
    'Dart': '#00B4AB',
    'Dylan': '#6c616e',
    'Eiffel': '#946D57',
    'Elm': '#60B5BC',
    'Emacs Lisp': '#c065db',
    'EmberScript': '#F4BF75',
    'Erlang': '#b83998',
    'F#': '#b845fc',
    'Factor': '#636746',
    'Fennel': '#fff3d7',
    'Forth': '#341708',
    'Fortran': '#4d41b1',
    'FreeMarker': '#0050b2',
    'Frege': '#00cafe',
    'GDScript': '#355xc6',
    'Gnuplot': '#f0a9f0',
    'Golo': '#88562A',
    'Groovy': '#4298b8',
    'Hack': '#878787',
    'Harbour': '#5e6166',
    'Haskell': '#5e5086',
    'Haxe': '#df6929',
    'HiveQL': '#dce200',
    'Hy': '#7790b2',
    'Idris': '#b30059',
    'Io': '#a9188d',
    'Ioke': '#c17822',
    'Isabelle': '#FEFE00',
    'J': '#9EEDFF',
    'Java': '#b07219',
    'JavaFX': '#00007c',
    'Jupyter Notebook': '#DA5B0B',
    'Kotlin': '#A97BFF',
    'LabVIEW': '#ffe958',
    'Lasso': '#999999',
    'Lex': '#DBCA00',
    'Lisp': '#3fb68b',
    'Logo': '#42b5dd',
    'Logtalk': '#065e9c',
    'Lua': '#000080',
    'Makefile': '#6d8086',
    'Markdown': '#083fa1',
    'Modelica': '#e0a800',
    'Monkey': '#8D4017',
    'MoonScript': '#ff4585',
    'NCL': '#28431f',
    'Nearley': '#990000',
    'Nim': '#ffc200',
    'Nix': '#7e7eff',
    'Nu': '#c9df40',
    'Objective-C': '#438eff',
    'Objective-J': '#ff0c5a',
    'OCaml': '#ef7f08',
    'Octave': '#c0e035',
    'OpenEdge ABL': '#5ce600',
    'Oz': '#fab738',
    'Pan': '#ccad00',
    'Papyrus': '#6600bc',
    'Parrot': '#2473c7',
    'Pascal': '#b90ce8',
    'Perl': '#0298c3',
    'PHP': '#4F5D95',
    'PicoLisp': '#6067ab',
    'PigLatin': '#fcd7de',
    'Pike': '#005393',
    'PLpgSQL': '#f8f8f8',
    'Pony': '#c5c8fe',
    'PostScript': '#da8701',
    'PowerShell': '#012456',
    'Processing': '#0096D8',
    'Prolog': '#74283c',
    'Puppet': '#302B6D',
    'PureBasic': '#5c6986',
    'PureScript': '#1D222D',
    'Python': '#3572A5',
    'QML': '#44a51c',
    'Quake': '#88283f',
    'R': '#198CE7',
    'Racket': '#3c5caa',
    'Raku': '#0000fb',
    'RAML': '#01a9e0',
    'Reason': '#ff5847',
    'Rebol': '#358a5b',
    'Red': '#592c31',
    'Ren\'Py': '#ff7f7f',
    'Ring': '#0e4b75',
    'Ruby': '#701516',
    'Rust': '#dea584',
    'SaltStack': '#646c22',
    'SAS': '#1E90FF',
    'Sass': '#a53b70',
    'Scala': '#c22d40',
    'Scheme': '#1e4a96',
    'Scilab': '#c91cb8',
    'SCSS': '#c6538c',
    'Sed': '#89ddff',
    'Shen': '#120F14',
    'Smalltalk': '#596706',
    'Solidity': '#AA6746',
    'SourcePawn': '#f7e43f',
    'SQF': '#7fbd35',
    'SQL': '#e38c00',
    'Squirrel': '#800000',
    'Stan': '#b2011d',
    'Stata': '#f0c30c',
    'SuperCollider': '#46390b',
    'Swift': '#ffac45',
    'SystemVerilog': '#DAE1C2',
    'Tcl': '#e4cc98',
    'TeX': '#3D6117',
    'Tsq': '#ccdde9',
    'Twig': '#c1c647',
    'TypeScript': '#2b7489',
    'UnrealScript': '#a54c55',
    'V': '#5d87bd',
    'Vala': '#a56de2',
    'VBA': '#867db1',
    'VBScript': '#15dcdc',
    'Verilog': '#b2b2b2',
    'Vim script': '#199c4b',
    'Visual Basic .NET': '#945db7',
    'Vue': '#41b883',
    'WebAssembly': '#654ff0',
    'XSLT': '#EB8CEB',
    'YARA': '#220000',
    'YAML': '#cb171e',
    'Zig': '#ec5c2e',
    'Zsh': '#89f4d5'
};

let repositories = [];
let autoRefreshInterval;

async function fetchTrendingRepos() {
    const loadingEl = document.getElementById('loading');
    const errorEl = document.getElementById('error');
    const repoListEl = document.getElementById('repoList');
    const refreshBtn = document.getElementById('refreshBtn');

    refreshBtn.classList.add('loading');
    refreshBtn.disabled = true;

    try {
        const response = await fetch(CORS_PROXY + encodeURIComponent(TRENDING_API));
        
        if (!response.ok) {
            throw new Error('Failed to fetch trending data');
        }

        const html = await response.text();
        repositories = parseTrendingHTML(html);

        loadingEl.classList.add('hidden');
        errorEl.classList.add('hidden');
        
        renderRepositories();
        updateLastUpdated();
    } catch (error) {
        console.error('Error fetching trending repos:', error);
        loadingEl.classList.add('hidden');
        errorEl.classList.remove('hidden');
    } finally {
        refreshBtn.classList.remove('loading');
        refreshBtn.disabled = false;
    }
}

function parseTrendingHTML(html) {
    const repos = [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const repoItems = doc.querySelectorAll('article.Box-item');
    
    repoItems.forEach(item => {
        const nameEl = item.querySelector('h2 a');
        const descriptionEl = item.querySelector('p');
        const languageEl = item.querySelector('[itemprop="programmingLanguage"]');
        const starsEl = item.querySelector('a[href*="/stargazers"]');
        
        if (nameEl) {
            const fullName = nameEl.textContent.trim();
            const repoUrl = 'https://github.com' + nameEl.getAttribute('href');
            const description = descriptionEl ? descriptionEl.textContent.trim() : '';
            const language = languageEl ? languageEl.textContent.trim() : null;
            let stars = starsEl ? starsEl.textContent.trim().replace(/,/g, '') : '0';
            
            repos.push({
                name: fullName,
                description: description,
                language: language,
                stars: stars,
                url: repoUrl
            });
        }
    });
    
    return repos;
}

function renderRepositories() {
    const repoListEl = document.getElementById('repoList');
    const languageFilter = document.getElementById('languageFilter').value;
    
    const filteredRepos = languageFilter 
        ? repositories.filter(repo => 
            repo.language && repo.language.toLowerCase() === languageFilter.toLowerCase()
          )
        : repositories;
    
    repoListEl.innerHTML = filteredRepos.map((repo, index) => `
        <article class="repo-card">
            <div class="repo-header">
                <div class="repo-name">
                    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                        <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                    </svg>
                    <a href="${repo.url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
                </div>
                ${repo.language ? `
                    <div class="repo-language">
                        <span class="language-dot" style="background-color: ${getLanguageColor(repo.language)}"></span>
                        ${repo.language}
                    </div>
                ` : ''}
            </div>
            ${repo.description ? `<p class="repo-description">${repo.description}</p>` : ''}
            <div class="repo-meta">
                <span class="repo-stars">
                    <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                    </svg>
                    ${formatStars(repo.stars)}
                </span>
            </div>
        </article>
    `).join('');
}

function getLanguageColor(language) {
    if (!language) return '#8b949e';
    return languageColors[language] || '#8b949e';
}

function formatStars(stars) {
    const num = parseInt(stars);
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return stars;
}

function updateLastUpdated() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
    document.getElementById('lastUpdated').textContent = timeString;
}

function startAutoRefresh() {
    clearInterval(autoRefreshInterval);
    autoRefreshInterval = setInterval(() => {
        fetchTrendingRepos();
    }, 5 * 60 * 1000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedFetch = debounce(fetchTrendingRepos, 300);

document.getElementById('languageFilter').addEventListener('change', () => {
    renderRepositories();
});

document.getElementById('refreshBtn').addEventListener('click', () => {
    fetchTrendingRepos();
});

document.addEventListener('DOMContentLoaded', () => {
    fetchTrendingRepos();
    startAutoRefresh();
});
