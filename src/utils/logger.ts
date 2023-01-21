/**
 * Log a message to a service eg. firebase
 * @param message
 */
const log = (message: string) => {
  console.log(`[*_*]: ${message}`);
};

/**
 * Record a Error to a service eg. Sentry
 * @param error
 */
const recordError = (error: any) => {
  console.error(error);
};

/**
 * Log a event to a service eg. Mixpanel
 * @param event
 */
const track = (event: string) => {
  console.info(`[*_* track]: ${event}`);
};

export default {log, recordError, track};
