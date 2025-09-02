# Abu Saleh — Portfolio (Static)

A modern, responsive, bilingual (AR/EN) landing page for a freelance designer “أبو صالح | Abu Saleh”. Works 100% static on GitHub Pages.

## Structure
```
/                     index.html
/assets/css/          styles.css
/assets/js/           app.js
/assets/img/          logo.webp + placeholders
/assets/fonts/        the-year-of-the-camel-bold.woff2 (optional local font)
/assets/manifest.webmanifest
.nojekyll
```

## Brand tokens
- --brand: `#495E35`
- --accent: `#d4ad5e`
- --ink: `#0f1209`
- --bg: `#f7f8f5`

## Development
Open `index.html` in a browser. No build tools are required.

### Fonts
Headings use “The Year of the Camel Bold”. If you have a web-safe URL, replace the local `@font-face`. Otherwise, place `the-year-of-the-camel-bold.woff2` in `assets/fonts/`.

## Content editing
- All texts have AR/EN variants using `data-i18n` attributes.
- Update copy directly in `index.html` by editing `data-ar` and `data-en` values.
- Add portfolio cards by duplicating a `.card` in the `#portfolio` section and updating image paths and `data-*` attributes.

## Social links
- WhatsApp button (required exact format):
```html
<a class="icon-btn wa" href="https://wa.me/9647725786302" target="_blank" rel="noopener" aria-label="WhatsApp"></a>
```
- Instagram button:
```html
<a class="icon-btn ig" href="https://www.instagram.com/saleh4graphic/" target="_blank" rel="noopener" aria-label="Instagram"></a>
```
Icons are single-color SVGs injected by `assets/js/app.js` and inherit `currentColor`.

## Accessibility & performance
- Logical CSS properties for RTL/LTR, AA contrast, `focus-visible` styles.
- Lazy-loading images, `prefers-reduced-motion` respected.
- Font preloaded; no frameworks.

## Deploy to GitHub Pages
1. Create a new GitHub repository and push this folder’s contents to the repo root.
2. Add `logo.webp` in `assets/img/` (exported from your `logo.jpg`).
3. Commit and push.
4. In the repository: Settings → Pages → Build and deployment → Source: `Deploy from a branch`. Branch: `main` (or `master`), Folder: `/root`.
5. Save. Wait for the site to publish at `https://<user>.github.io/<repo>/`.

No Jekyll features are used; `.nojekyll` is included just in case.

## Replacing images
- Put your images in `assets/img/` and update paths in `index.html`.
- Use `.webp` where possible for smaller size.

## License
You own your content and branding. The code is provided as-is for your portfolio.
