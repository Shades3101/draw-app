const jwtSecret = process.env.JWT_KEY;

if (!jwtSecret) {
  throw new Error("Missing JWT_KEY environment variable");
}

export const JWT_SECRET = jwtSecret;
