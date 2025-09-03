# Saleh | صالح — Portfolio

A minimal, responsive landing page for the designer Saleh. Built with pure HTML/CSS and Font Awesome icons. Ideal for GitHub Pages.

## Project structure

- `index.html` — markup with Header, Hero, Contact, and Footer
- `styles.css` — theme styles (colors: #495E35 background, #d4ad5e accent)
- `assets/logo.png` — site logo used in header and favicon (add yours)
- `assets/gallery/manifest.json` — list of image file names to show in the gallery

## Add your logo

1. Create a folder named `assets/` beside `index.html` (already referenced).
2. Save the provided image as `assets/logo.png` (PNG recommended, 512×512+).
3. The header will display it. Favicon links also use this file.

## Deploy on GitHub Pages

1. Push this folder to a new GitHub repository.
2. In the repository: Settings → Pages → Build and deployment → Source: `Deploy from a branch`.
3. Branch: `main` (or `master`), Folder: `/root`. Save.
4. After a minute, your site will be live at the Pages URL.

## Edit links

- Instagram: `https://www.instagram.com/saleh4graphic/`
- WhatsApp: `https://wa.me/9647725786302`

## License

You may use and modify this template freely.

## Gallery

Place your work images in `assets/gallery/` and list them inside `assets/gallery/manifest.json` as a JSON array of file names, for example:

```json
[
  "work-01.jpg",
  "work-02.png",
  "work-03.webp"
]
```

The page will load these images automatically. Filenames are relative to `assets/gallery/`.
