const isProduction = process.env.NODE_ENV === "production";

function getPublicEnv(name: "NEXT_PUBLIC_HTTP_BACKEND" | "NEXT_PUBLIC_WS_URL", devFallback: string) {
  const value = process.env[name];
  if (value) {
    return value;
  }

  if (!isProduction) {
    return devFallback;
  }

  throw new Error(`Missing required environment variable: ${name}`);
}

export const HTTP_BACKEND = getPublicEnv("NEXT_PUBLIC_HTTP_BACKEND", "http://localhost:3001");
export const WS_URL = getPublicEnv("NEXT_PUBLIC_WS_URL", "ws://localhost:8080");
