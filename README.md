# CIAA Website

Bright, high-energy site for CIAA athletic mentorship and heavenly culture training in Atlanta.

## Stack

- Vite + React + TypeScript
- Homepage structure inspired by [Samsung US](https://www.samsung.com/us/): sticky nav, hero carousel, horizontal promo rails, multi-column footer

## Project structure

```
src/
  App.tsx
  main.tsx
  components/
    layout/               # Nav, Footer
    sections/             # Hero, rails, connect, etc.
    ui/                   # Shared Rail carousel
    index.ts
  data/
    content.ts
  styles/
    global.css
public/
  favicon.svg
  images/
    brand/
    programs/
    gallery/
```

## Run locally

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages + cisports.org)

The site deploys automatically on every push to `main` via `.github/workflows/deploy.yml`.

1. Repo → **Settings → Pages** → Source: **GitHub Actions**
2. Repo → **Settings → Secrets and variables → Actions** → add:
   - `VITE_CONTACT_FORM_URL`
   - `VITE_CONTACT_FORM_SECRET`
   (same values as your local `.env`)
3. Push to `main` (or run the workflow manually under **Actions**)
4. Custom domain `cisports.org` is set via `public/CNAME`

Live site: https://cisports.org

## Contact form → Google Sheet

Submissions are written to a **private** Google Sheet through an Apps Script web app. The spreadsheet itself is never public.

### One-time setup

1. Create a Google Sheet owned by a CIAA admin account.
2. **Share → Restricted** (only specific people). Do **not** use “Anyone with the link”.
3. Open **Extensions → Apps Script**, paste `scripts/google-apps-script/Code.gs`, save.
4. In Apps Script: **Project Settings → Script properties** add:
   - `SHARED_SECRET` = a long random string (password manager can generate one)
   - `SHEET_NAME` = `Submissions` (optional)
5. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone** (needed so the website can POST; the *sheet* stays private)
6. Copy `.env.example` to `.env` and fill in:
   - `VITE_CONTACT_FORM_URL` = the web app URL
   - `VITE_CONTACT_FORM_SECRET` = the same `SHARED_SECRET`
7. Restart `npm run dev`.

Rows appear on the `Submissions` tab: Timestamp, Name, Email, Interest, Message, Status.

### Protecting user data

| Control | What it does |
|---|---|
| Restricted sheet sharing | Only named CIAA accounts can open the data |
| Script “Execute as Me” | Website never gets a Google login or sheet ID |
| Field validation + allowlist | Rejects junk / oversized payloads server-side |
| Honeypot field | Drops simple bot spam |
| Rate limit | Caps writes per minute in Apps Script |
| `.env` gitignored | Keeps local secrets out of git |

**Important:** Vite `VITE_*` values are visible in the built frontend. Treat `SHARED_SECRET` as an anti-spam token, not a vault password. Real confidentiality comes from **who can open the Google Sheet** (Restricted + 2FA on those Google accounts). For stricter needs later (secret never in the browser), add a tiny server/proxy or move to Supabase with server-side keys.
