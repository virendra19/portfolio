# portfolio

## Contact form Google Sheet setup

The contact form already sends email through FormSubmit. To also save every entry in Google Sheets:

1. Create a new Google Sheet.
2. Open `Extensions > Apps Script`.
3. Paste the code from `google-sheet-apps-script.js`.
4. Click `Deploy > New deployment`.
5. Choose `Web app`.
6. Set `Execute as` to `Me`.
7. Set `Who has access` to `Anyone`.
8. Deploy and copy the Web App URL.
9. Paste that URL into `GOOGLE_SHEET_WEB_APP_URL` in `index.html`.

After this, every valid contact form submission records name, email, subject, message, page, user agent, and timestamp in the `Contact Records` sheet.


https://script.google.com/macros/s/AKfycby7bQHQi6P3v44Q0bPpFXY7ls-0C9SpxPOsCH3-ppOEMfSrITWOwYfOL4ptB3FnOqpU0A/exec