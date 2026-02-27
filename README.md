# gh-pages-blog

A simple, generic blog framework built with React + Vite that you can clone and deploy to GitHub Pages in minutes.

## Features

- Write posts in Markdown with syntax-highlighted code blocks
- Tag-based filtering on the blog listing page
- Automatic SEO-friendly static pages for every post
- Automatic deployment via GitHub Actions

## Getting started

### 1. Clone or fork this repository

```bash
git clone https://github.com/jakubciszak/gh-pages-blog.git my-blog
cd my-blog
npm install
```

### 2. Customise the site

Edit **`index.html`** to update the site title, description, and canonical URL.

Edit **`src/components/Navigation.jsx`** to change the blog name shown in the nav bar.

Edit **`src/components/Home.jsx`** to change the home-page headline and description.

Edit **`src/components/Footer.jsx`** to add your own links.

For SEO meta tags on each post page, set the `SITE_URL` and `SITE_NAME` environment variables when running the build, or edit the defaults at the top of `scripts/generate-seo-pages.mjs`.

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

## Project structure

```
.
├── posts/               # Your Markdown posts
├── public/              # Static assets served as-is
├── scripts/
│   ├── build-posts.mjs         # Converts posts to JSON at build time
│   └── generate-seo-pages.mjs  # Generates per-post HTML for SEO
├── src/
│   ├── components/      # React components
│   ├── generated/       # Auto-generated (git-ignored)
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## License

MIT
