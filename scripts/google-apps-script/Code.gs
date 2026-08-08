/**
 * CIAA Contact Form → Google Sheet (Apps Script)
 *
 * SETUP
 * 1. Create a Google Sheet (not shared publicly).
 * 2. Extensions → Apps Script, paste this file, save.
 * 3. In the script editor, set Script Properties:
 *    - SHEET_NAME = Submissions   (optional; defaults to Submissions)
 *    - SHARED_SECRET = a long random string (must match VITE_CONTACT_FORM_SECRET)
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    (The sheet stays private; only this script can write with your account.)
 * 5. Copy the Web App URL into .env as VITE_CONTACT_FORM_URL
 *
 * SECURITY NOTES
 * - Keep the spreadsheet sharing: Restricted (only named accounts).
 * - Never turn on “Anyone with the link” for the sheet itself.
 * - Rotate SHARED_SECRET if the site source is leaked.
 * - Review / purge old rows on a schedule.
 */

var MAX = {
  name: 120,
  email: 254,
  interest: 120,
  message: 2000,
};

var ALLOWED_INTERESTS = {
  'Joining trainings / sports days': true,
  'Shadowing the ministry': true,
  'Serving on the team': true,
  'Athlete mentorship': true,
  'Heavenly culture curriculum': true,
  'Bible studies / coaching': true,
  'Outreach & partnerships': true,
};

function doPost(e) {
  try {
    var raw = e && e.postData && e.postData.contents ? e.postData.contents : '';
    var data = JSON.parse(raw || '{}');

    var secret = PropertiesService.getScriptProperties().getProperty('SHARED_SECRET');
    if (!secret || data.secret !== secret) {
      return json_({ ok: false, error: 'unauthorized' });
    }

    // Honeypot — bots fill hidden fields; humans leave this empty.
    if (data.company) {
      return json_({ ok: true });
    }

    var name = clean_(data.name, MAX.name);
    var email = clean_(data.email, MAX.email).toLowerCase();
    var interest = clean_(data.interest, MAX.interest);
    var message = clean_(data.message || '', MAX.message);

    if (!name || !email || !interest) {
      return json_({ ok: false, error: 'missing_fields' });
    }
    if (!isEmail_(email)) {
      return json_({ ok: false, error: 'invalid_email' });
    }
    if (!ALLOWED_INTERESTS[interest]) {
      return json_({ ok: false, error: 'invalid_interest' });
    }

    if (!allowRequest_()) {
      return json_({ ok: false, error: 'rate_limited' });
    }

    var sheet = getSheet_();
    ensureHeader_(sheet);
    sheet.appendRow([
      new Date().toISOString(),
      name,
      email,
      interest,
      message,
      'new',
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: 'server_error' });
  }
}

function doGet() {
  return json_({ ok: false, error: 'method_not_allowed' });
}

function getSheet_() {
  var name =
    PropertiesService.getScriptProperties().getProperty('SHEET_NAME') || 'Submissions';
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  return sheet;
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Interest', 'Message', 'Status']);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
  }
}

function allowRequest_() {
  // Soft throttle: max ~20 writes / minute across all visitors.
  // (Apps Script cannot reliably see client IP on all deployments.)
  var cache = CacheService.getScriptCache();
  var stamp = String(Math.floor(Date.now() / 60000));
  var bucketKey = 'writes_' + stamp;
  var count = Number(cache.get(bucketKey) || '0');
  if (count >= 20) return false;
  cache.put(bucketKey, String(count + 1), 90);
  return true;
}

function clean_(value, max) {
  return String(value == null ? '' : value)
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function isEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
