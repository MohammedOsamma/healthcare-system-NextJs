import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://42f74cb5618e7d213da6e62b2b59a817@o4509542435323904.ingest.us.sentry.io/4509542436962304",
  tracesSampleRate: 1.0,
  debug: false,
});
