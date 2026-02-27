# gh-pages-blog

A simple, zero-maintenance blog framework built with React + Vite. Fork it, edit one config file, drop Markdown files into `posts/`, and GitHub Actions will build and deploy everything to GitHub Pages automatically.

## Table of contents

1. [Features](#features)
2. [Quick start](#quick-start)
3. [Configuring your blog](#configuring-your-blog)
4. [Writing posts](#writing-posts)
5. [Running locally](#running-locally)
6. [Deploying to GitHub Pages](#deploying-to-github-pages)
7. [Colour themes](#colour-themes)
8. [Project structure](#project-structure)

---

## Features

- ✍️ Write posts in plain **Markdown** — no CMS, no database
- 🏷️ Tag-based filtering on the blog listing page
- 🔍 Automatic **SEO-friendly** static HTML pages for every post (structured data, Open Graph, canonical URLs)
- 🎨 Three built-in **colour themes**: `light`, `dark`, `sepia`
- 🌐 Configurable site **title**, **language**, and **description** in one file
- 🚀 Automatic deployment to **GitHub Pages** via GitHub Actions

---

## Quick start

### Option A — Fork (recommended for your own blog)

Forking creates a copy of this repository in your own GitHub account, which is the easiest way to keep your blog under version control and deploy it to GitHub Pages.

1. Click **Fork** in the top-right corner of this page.  
   → [GitHub docs: Fork a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
2. Choose your account as the destination and click **Create fork**.
3. Clone your fork locally:

```bash
git clone https://github.com/YOUR_USERNAME/gh-pages-blog.git my-blog
cd my-blog
npm install
```

### Option B — Clone (if you want a clean history)

```bash
git clone https://github.com/jakubciszak/gh-pages-blog.git my-blog
cd my-blog

# replace the remote so you push to your own repo
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

npm install
```

> **Node.js 18+** is required. Run `node -v` to check your version.

---

## Configuring your blog

Everything is controlled by a single file at the root of the repository: **`blog.config.js`**.

```js
// blog.config.js
export default {
  /** Displayed in the nav bar, browser tab, and all SEO meta tags. */
  title: 'My Blog',

  /** Short description used in <meta name="description"> and Open Graph tags. */
  description: 'A simple blog powered by gh-pages-blog.',

  /**
   * HTML language code for the <html lang="..."> attribute.
   * This affects accessibility tools and search-engine language detection.
   * Examples: 'en', 'pl', 'de', 'fr', 'es', 'pt', 'ja', 'zh'
   */
  lang: 'en',

  /**
   * The full canonical URL of your site — no trailing slash.
   *
   * For a repository site (username.github.io/repo-name):
   *   siteUrl: 'https://yourusername.github.io/your-repo'
   *
   * For a user/organisation site (username.github.io):
   *   siteUrl: 'https://yourusername.github.io'
   *
   * For a custom domain:
   *   siteUrl: 'https://myblog.com'
   */
  siteUrl: 'https://yourusername.github.io/your-repo',

  /**
   * Colour theme applied to the entire site.
   * Available values: 'light' | 'dark' | 'sepia'
   */
  theme: 'light',
};
```

After saving the file, either run `npm run build` locally or push to GitHub — the Actions workflow rebuilds and redeploys the site automatically.

### Sub-path repository sites

If your site lives at `https://username.github.io/repo-name` (i.e. not the root domain), you also need to update the `base` path in **`vite.config.js`** so that asset URLs are generated correctly:

```js
// vite.config.js
export default defineConfig({
  base: '/your-repo/',   // ← must match your repository name
  // …
});
```

Set `blog.config.js` → `siteUrl` to the same sub-path URL.  
For user/organisation sites (`username.github.io`) keep `base: '/'`.

---

## Writing posts

### File naming

Place Markdown files in the **`posts/`** directory. The filename determines the publication date and the URL slug:

```
YYYYMMDD_url-slug.md
```

| Part | Example | Result |
|------|---------|--------|
| Date | `20260315` | Displayed as `15.03.2026` |
| Slug | `my-first-post` | URL becomes `/blog/my-first-post` |

Full example: `posts/20260315_my-first-post.md` → `/blog/my-first-post`

> Posts are displayed in **reverse-chronological order** (newest first).

### Post format

Every post file follows this structure:

```markdown
# Post Title

tags: "tag1", "tag2"

The first paragraph becomes the excerpt shown on the blog listing page
and in SEO meta descriptions.

## Section heading

Regular post body content …
```

| Element | Required | Notes |
|---------|----------|-------|
| `# Title` (H1) | ✅ Yes | Must be the very first line |
| `tags:` line | ❌ No | Comma-separated quoted strings; omit the line entirely if no tags |
| Body content | ❌ No | Everything after the title and optional tags line |

### Supported Markdown features

| Feature | Syntax |
|---------|--------|
| **Bold** | `**text**` |
| *Italic* | `*text*` |
| [Links](https://github.com) | `[label](url)` |
| Images | `![alt](url)` |
| Inline code | `` `code` `` |
| Fenced code blocks (with syntax highlighting) | ` ```language ` |
| Blockquotes | `> text` |
| Unordered lists | `- item` |
| Ordered lists | `1. item` |
| Tables (GFM) | `\| col \| col \|` |
| Horizontal rules | `---` |
| Headings H2–H6 | `## Heading` |

#### Code blocks with syntax highlighting

Specify the language name after the opening fence for automatic syntax highlighting:

````markdown
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

Supported languages include `javascript`, `typescript`, `python`, `bash`, `css`, `html`, `json`, `go`, `rust`, `java`, `yaml`, and [many more](https://highlightjs.org/demo).

### Deleting the example post

The repository ships with `posts/20260101_welcome.md` as a demo. Delete it and add your own files when you're ready.

---

## Running locally

```bash
# First time only
npm install

# Start the development server
npm run dev
```

The dev server runs at `http://localhost:5173`. Changes to posts or source files are picked up automatically.

> The `npm run dev` command regenerates post data from the `posts/` directory each time it runs. Add or edit `.md` files and restart the server to see the changes.

---

## Deploying to GitHub Pages

### Step 1 — Push your repository to GitHub

If you cloned without forking, create a new repository on GitHub first and then push:

1. Go to [github.com/new](https://github.com/new) and create an empty repository (no README, no `.gitignore`).
2. Connect and push your local repo:

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

→ [GitHub docs: Create a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

### Step 2 — Enable GitHub Pages with GitHub Actions

1. Open your repository on GitHub.
2. Click **Settings** (the gear icon in the top tab bar).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.

→ [GitHub docs: Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

### Step 3 — Trigger the first deployment

The workflow runs automatically on every push to `main` or `master`. To deploy immediately without making a new commit:

1. Go to **Actions** in the top tab bar.
2. Select **Deploy to GitHub Pages** in the left sidebar.
3. Click **Run workflow → Run workflow**.

→ [GitHub docs: Manually running a workflow](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/manually-running-a-workflow)

### Step 4 — Find your site URL

After the workflow finishes (usually under 60 seconds):

1. Go to **Settings → Pages**.
2. The published URL is shown at the top: `https://YOUR_USERNAME.github.io/YOUR_REPO`.

Click the URL to open your live blog.

### Step 5 (optional) — Set a custom domain

You can serve your blog from your own domain (e.g. `https://myblog.com`) instead of the default `github.io` URL.

1. In your domain registrar, add a **CNAME** record pointing to `YOUR_USERNAME.github.io`.
2. In **Settings → Pages → Custom domain**, enter your domain and click **Save**.
3. Update `blog.config.js` → `siteUrl` to your custom domain and update `vite.config.js` → `base` to `'/'`.
4. Push the changes — GitHub will automatically provision an HTTPS certificate.

→ [GitHub docs: Configuring a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

### How the deployment workflow works

The included workflow file (`.github/workflows/deploy.yml`) does the following on every push to `main` or `master`:

1. **Checkout** – fetches the latest code.
2. **Setup Pages** – configures the GitHub Actions Pages integration.
3. **Install dependencies** – runs `npm ci`.
4. **Build** – runs `npm run build`, which:
   - Converts `posts/*.md` files to JSON (`scripts/build-posts.mjs`)
   - Bundles the React app with Vite
   - Generates SEO-friendly static HTML for every post (`scripts/generate-seo-pages.mjs`)
5. **Upload artifact** – uploads the `dist/` directory.
6. **Deploy** – publishes the artifact to GitHub Pages.

→ [GitHub docs: Understanding GitHub Actions](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions)

---

## Colour themes

Change the `theme` value in `blog.config.js` and push — that's it.

| Value | Look |
|-------|------|
| `light` | White background, dark text (default) |
| `dark` | Dark `#0f0f0f` background, light text, blue accents |
| `sepia` | Warm parchment `#f5f0e8` background, brown accents |

---

## Project structure

```
.
├── blog.config.js       # ← The only file you need to edit to configure the blog
├── posts/               # ← Drop your Markdown posts here
│
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions workflow (build + deploy)
│
├── public/              # Static assets copied as-is to dist/
│
├── scripts/
│   ├── build-posts.mjs         # Reads posts/ → generates src/generated/posts-data.js
│   └── generate-seo-pages.mjs  # Generates static HTML pages in dist/ for SEO
│
├── src/
│   ├── components/      # React page components (Home, Blog, BlogPost, Navigation, Footer)
│   ├── generated/       # Auto-generated at build time — do not edit manually
│   ├── App.jsx          # Route definitions
│   ├── index.css        # Global reset + CSS custom properties for all three themes
│   └── main.jsx         # Entry point — applies theme and lang from blog.config.js
│
├── index.html           # HTML shell (title/description updated by generate-seo-pages.mjs)
├── package.json
└── vite.config.js       # Vite config — update `base` for sub-path deployments
```

---

## License

MIT
