# Actual Budget Enhancer

A lightweight Manifest V3 browser extension scaffold that applies safe, CSS-only visual improvements to local/self-hosted Actual Budget pages.

## What this scaffold does

- Uses **Manifest V3**.
- Injects `src/content.js` and `src/styles.css` into local/self-hosted pages.
- Shows a visible floating badge: **"Enhancer ON"**.
- Applies non-destructive UI polish (focus rings, rounded regions, typography smoothing).
- Makes **no API calls** and performs **no data modification**.

## Local/self-hosted URL matching

Current content-script URL patterns include:

- `http://localhost/*`
- `http://127.0.0.1/*`
- `http://192.168.*/*`
- `http://10.*/*`
- `https://localhost/*`
- `https://127.0.0.1/*`
- `https://192.168.*/*`
- `https://10.*/*`

Adjust `manifest.json` as needed for your Actual host.

## Load unpacked in Chrome

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select this repository folder (`actual-budget-enhancer`).
5. Open your local/self-hosted Actual page and confirm the **Enhancer ON** badge appears.

## Load temporary add-on in Firefox

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...**.
3. Select `manifest.json` from this repository.
4. Open your local/self-hosted Actual page and confirm the **Enhancer ON** badge appears.

> Note: Temporary add-ons are removed when Firefox restarts.
