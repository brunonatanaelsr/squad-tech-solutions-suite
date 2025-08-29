export const API_BASE_URL = (import.meta.env.VITE_API_URL as string) || "http://localhost:3001";

export const withCredentials = true; // Expect cookie-based auth by default

export const defaultHeaders: Record<string, string> = {
  "Content-Type": "application/json",
};

