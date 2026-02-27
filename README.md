# gh-pages-blog

A simple, generic blog framework built with React + Vite that you can clone and deploy to GitHub Pages in minutes.

## Features

- Write posts in Markdown with syntax-highlighted code blocks
- Tag-based filtering on the blog listing page
- Automatic SEO-friendly static pages for every post
- Automatic deployment via GitHub Actions
- Three built-in colour themes: `light`, `dark`, `sepia`

## Getting started

### 1. Clone or fork this repository

```bash
git clone https://github.com/jakubciszak/gh-pages-blog.git my-blog
cd my-blog
npm install
```

### 2. Configure your blog

Open **`blog.config.js`** and edit the values:

```js
export default {
  // Displayed in the nav bar, browser tab, and SEO meta tags
  title: 'My Blog',

  // Used in <meta name="description">
  description: 'A simple blog powered by gh-pages-blog.',

  // HTML lang attribute – e.g. 'en', 'pl', 'de', 'fr'
  lang: 'en',

  // Canonical URL of your site (no trailing slash)
  siteUrl: 'https://yourusername.github.io/your-repo',

  // Colour theme: 'light' | 'dark' | 'sepia'
  theme: 'light',
};
```

That's all you need to change for a basic setup. After editing the config, run `npm run build` locally or push to GitHub – the Actions workflow will rebuild and redeploy automatically.

### 3. Write your first post

Create a Markdown file in the `posts/` directory following the naming convention:

```
YYYYMMDD_slug-goes-here.md
```

Every post starts with a title and an optional `tags:` line:

```markdown
# My Post Title

tags: "tag1", "tag2"

Your content goes here.
```

See `posts/20260101_welcome.md` for a full example.

### 4. Run locally

```bash
npm run dev
```

### 5. Deploy to GitHub Pages

1. Push your repository to GitHub.
2. Go to **Settings → Pages** and set the source to **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) will build and deploy the site automatically on every push to `main` or `master`.

## Colour themes

| Value | Description |
|-------|-------------|
| `light` | Clean white background with dark text (default) |
| `dark`  | Dark background with light text |
| `sepia` | Warm beige / parchment tones |

Change the `theme` key in `blog.config.js` and redeploy to switch themes.

## Project structure

```
.
├── blog.config.js       # ← Edit this to configure your blog
├── posts/               # Your Markdown posts
├── public/              # Static assets served as-is
├── scripts/
│   ├── build-posts.mjs         # Converts posts to JSON at build time
│   └── generate-seo-pages.mjs  # Generates per-post HTML for SEO
├── src/
│   ├── components/      # React components
│   ├── generated/       # Auto-generated (git-ignored)
│   ├── App.jsx
│   ├── index.css        # Global styles + theme definitions
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## License

MIT
