# GitHub Trending Web

A real-time dashboard displaying GitHub's trending repositories with a clean, modern UI.

## Features

- 🔥 Real-time GitHub trending data
- 📊 Displays repository name, description, stars, language, and link
- ⏱️ Auto-refreshes every 5 minutes
- 🎨 Clean, modern dark theme
- 📱 Fully responsive design
- 🌐 Language filtering

## Tech Stack

- Pure HTML, CSS, JavaScript (no frameworks)
- Vercel for deployment
- AllOrigins CORS proxy for fetching GitHub data

## Project Structure

```
github-trending-web/
├── index.html      # Main HTML page
├── style.css       # Modern dark theme styling
├── script.js       # Fetch and render trending data
├── vercel.json     # Vercel configuration
└── README.md       # This file
```

## Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Navigate to the project directory:
   ```bash
   cd github-trending-web
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your project:
   - Set up and deploy: Yes
   - Which scope: Your account
   - Link to existing project: No
   - Project name: github-trending-web (or your preferred name)
   - Directory: ./
   - Want to modify settings: No

### Option 2: Vercel Dashboard

1. Push your code to a GitHub repository

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)

3. Click "Add New..." → "Project"

4. Import your GitHub repository

5. Vercel will auto-detect the configuration. Click "Deploy"

## Local Development

To run locally:

```bash
# Using a simple HTTP server
npx serve .

# Or with Python
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Notes

- The app uses AllOrigins as a CORS proxy to fetch GitHub trending data
- Auto-refresh is set to 5 minutes (300,000 milliseconds)
- GitHub's trending page is fetched and parsed client-side
