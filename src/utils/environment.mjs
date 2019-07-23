const currentEnvironment = (process.env.NODE_ENV || "").toLowerCase().trim();

export const DEVELOPMENT = "development";
export const STAGING = "staging";
export const TEST = "test";
export const PRODUCTION = "production";

export function getEnvironment() {
  switch (currentEnvironment) {
    case DEVELOPMENT:
    case STAGING:
    case TEST:
    case PRODUCTION:
      return currentEnvironment;

    default:
      throw new Error(`Unexpected environment "${currentEnvironment}" provided!`);
  }
}

export function isTestMode() {
  return getEnvironment() === TEST;
}

export function isProductionMode() {
  return getEnvironment() === PRODUCTION;
}
