
# GreenTags Static Site Template

Upload the entire folder to your web hosting root (e.g., `public_html/`).
Place your PDFs into the `/pdfs/` folder and update links in `downloads.html` and `publications.html`.

- Home: `index.html`
- Publications: `publications.html` (includes a simple client-side search box)
- Downloads: `downloads.html` (with inline PDF example via <embed>)
- About: `about.html`
- Contact: `contact.html`

## Tips
- Enable HTTPS (Let's Encrypt) in your hosting control panel.
- If your provider supports directory indexing, consider disabling it to avoid exposing raw listings.
- For large PDFs, consider optimizing or splitting files to fit within the 1 GB space.
