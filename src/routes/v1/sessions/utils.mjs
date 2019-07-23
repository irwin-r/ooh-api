import { randomBytes } from "crypto";

export const TOKEN_LENGTH = 128;

export function generateSessionToken() {
  return randomBytes(TOKEN_LENGTH).toString("base64");
}
