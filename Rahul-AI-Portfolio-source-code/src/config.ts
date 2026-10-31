/**
 * Editable, PUBLISHABLE configuration for the portfolio.
 *
 * IMPORTANT: this file holds ONLY values that are safe to ship to the browser.
 * Never put secrets (API keys, private keys, provider secrets) here and never
 * create `.env` files. Replace the placeholder values below with Rahul's real,
 * publishable details.
 */
export const config = {
  /** Vapi voice assistant (the AI twin). Leave empty until configured. */
  vapi: {
    // PUBLISHABLE — safe in client source. Restrict it to this site's origin(s)
    // and assistant(s) in the Vapi dashboard.
    publicKey: "",
    // PUBLISHABLE identifier for the configured Vapi assistant.
    assistantId: "",
  },

  contact: {
    // TODO: replace with the canonical contact email.
    email: "hello@rahul.dev",
  },

  social: {
    // TODO: replace with the canonical LinkedIn profile URL.
    linkedin: "https://www.linkedin.com/in/killamsetty-rahul",
    github: "https://github.com/Killamsetty-Rahul1619",
  },

  resume: {
    // Leave empty to show "available on request" instead of a download link.
    url: "",
  },

  scheduling: {
    // Leave empty to hide the "Schedule a Call" button entirely.
    url: "",
  },
} as const;
