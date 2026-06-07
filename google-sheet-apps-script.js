const SHEET_NAME = 'Contact Records';

function doPost(e) {
  const sheet = getOrCreateSheet();
  const data = e.parameter || {};

  ensureHeaders(sheet);
  sheet.appendRow([
    new Date(),
    data.name || '',
    data.email || '',
    data.subject || '',
    data.message || '',
    data.page || '',
    data.userAgent || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeaders(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow(['Timestamp', 'Name', 'Email', 'Subject', 'Message', 'Page', 'User Agent']);
}
