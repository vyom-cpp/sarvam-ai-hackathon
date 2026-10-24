# Saathi — Elder Companion AI

A local, privacy-conscious MVP for family-coordinated senior check-ins. It runs fully in **demo mode** by default with fictional data, persistent local JSON storage, multilingual dashboard navigation, guided text check-ins, care summaries, reminders, alerts, and consent preferences.

## Run locally

```bash
npm install
cp .env.example .env
node server.mjs
```

Open `http://127.0.0.1:3000`. Use **Reset demo data** to restore the supplied fictional care circle.

## Sarvam integration

Set `SARVAM_API_KEY` and `SARVAM_LIVE_MODE=true` only in `.env`. The key stays server-side. The installed official `sarvamai` SDK is used for server-side TTS; if it is not configured, the product remains explicitly in simulated text mode. Browser microphone sessions and telephony are intentionally not represented as phone calls. WhatsApp/phone delivery is an adapter boundary and is shown as unconfigured until a provider confirms delivery.

The language configuration is centralized server-side and includes English, Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, and Punjabi using their BCP-47 provider codes. Dashboard navigation is localized for each; the simulated conversation provides natural Hindi, Tamil, and English starts and a text fallback for every configured language.

## Safety & limits

This is a companion and coordination tool, not a diagnostic or emergency service. Alerts are rule-based on reported words and missed medication confirmation, and always show their source. Contact local emergency services and a designated caregiver for a possible emergency. Medication reminders only support routine confirmation—never dosage changes. No audio is recorded in demo mode.

## Architecture

- `server.mjs` — Express API, validation, rate limits, safe headers, demo persistence, alert rules, Sarvam boundary.
- `public/` — responsive accessible dashboard and guided check-in UI.
- `data/elder-companion.json` — created automatically on first run; contains only local fictional/demo data until you add profiles.

There is no production authentication, encrypted database, WhatsApp adapter, or realtime STT/Conversation browser session in this MVP; these require a chosen identity, data-retention, and provider design before production use.
# sarvam-ai-hackathon
