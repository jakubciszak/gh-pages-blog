/**
 * Blog configuration
 * ─────────────────────────────────────────────────────────────────────────
 * Values are read from environment variables so they can be configured as
 * repository variables in GitHub (Settings → Secrets and variables →
 * Actions → Variables).  The defaults below are used when no environment
 * variable is set.
 *
 * Variable names:
 *   BLOG_TITLE        – site title
 *   BLOG_DESCRIPTION  – short site description
 *   BLOG_LANG         – HTML language code (e.g. 'en', 'pl')
 *   BLOG_SITE_URL     – canonical URL, no trailing slash
 *   BLOG_THEME        – colour theme: 'light' | 'dark' | 'sepia'
 */
export default {
  /** Site title – shown in the nav bar, browser tab and SEO meta tags. */
  title: process.env.BLOG_TITLE || 'My Blog',

  /** Short description used in the <meta name="description"> tag. */
  description: process.env.BLOG_DESCRIPTION || 'A simple blog powered by gh-pages-blog.',

  /**
   * HTML language code for the <html lang="..."> attribute.
   * Examples: 'en', 'pl', 'de', 'fr', 'es', 'ja'
   */
  lang: process.env.BLOG_LANG || 'en',

  /**
   * Canonical site URL – used in SEO meta tags and the sitemap.
   * No trailing slash.
   * Examples:
   *   'https://yourusername.github.io/your-repo'
   *   'https://myblog.com'
   */
  siteUrl: process.env.BLOG_SITE_URL || 'https://yourusername.github.io/your-repo',

  /**
   * Colour theme.
   * Available values: 'light' | 'dark' | 'sepia'
   *
   *   light – clean white background with dark text (default)
   *   dark  – dark background with light text
   *   sepia – warm beige/parchment tones
   */
  theme: process.env.BLOG_THEME || 'sepia',
};
