/**
 * Blog configuration
 * ─────────────────────────────────────────────────────────────────────────
 * Edit these values to customise your blog.
 * After changing this file, run `npm run build` (or push to GitHub – the
 * Actions workflow will rebuild and redeploy automatically).
 */
export default {
  /** Site title – shown in the nav bar, browser tab and SEO meta tags. */
  title: 'My Blog',

  /** Short description used in the <meta name="description"> tag. */
  description: 'A simple blog powered by gh-pages-blog.',

  /**
   * HTML language code for the <html lang="..."> attribute.
   * Examples: 'en', 'pl', 'de', 'fr', 'es', 'ja'
   */
  lang: 'en',

  /**
   * Canonical site URL – used in SEO meta tags and the sitemap.
   * No trailing slash.
   * Examples:
   *   'https://yourusername.github.io/your-repo'
   *   'https://myblog.com'
   */
  siteUrl: 'https://yourusername.github.io/your-repo',

  /**
   * Colour theme.
   * Available values: 'light' | 'dark' | 'sepia'
   *
   *   light – clean white background with dark text (default)
   *   dark  – dark background with light text
   *   sepia – warm beige/parchment tones
   */
  theme: 'light',
};
