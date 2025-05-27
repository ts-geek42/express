import jwt, { JsonWebTokenError } from "jsonwebtoken";

export const generateAccessToken = (userId: string): string => {
  const { JWT_SECRET } = process.env;

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET must be set in environment variables");
  }

  return jwt.sign({ id: userId }, JWT_SECRET);
};

export function decodeJwtToken(token: string) {
  const { JWT_SECRET } = process.env;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET must be set in environment variables");
  }
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      throw error;
    }
    throw error;
  }
}
