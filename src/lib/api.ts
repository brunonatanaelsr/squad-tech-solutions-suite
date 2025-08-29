import { API_BASE_URL, defaultHeaders, withCredentials } from "@/config";

export type ApiError = {
  status: number;
  code?: string;
  message: string;
  details?: unknown;
};

async function parseJsonSafe(res: Response): Promise<any | null> {
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

export async function apiFetch<T = any>(
  path: string,
  opts: RequestInit & { expectJson?: boolean } = {}
): Promise<T> {
  const url = path.startsWith("http") ? path : `${API_BASE_URL}${path}`;
  const { headers, body, method = "GET", expectJson = true, credentials, ...rest } = opts;

  const res = await fetch(url, {
    method,
    body,
    headers: { ...defaultHeaders, ...(headers || {}) },
    credentials: credentials ?? (withCredentials ? "include" : "same-origin"),
    ...rest,
  });

  if (!res.ok) {
    const data = await parseJsonSafe(res);
    const err: ApiError = {
      status: res.status,
      code: (data && (data.code || data.error)) || undefined,
      message: (data && (data.message || data.error_description || data.raw)) || res.statusText,
      details: data,
    };
    throw err;
  }

  if (!expectJson) return (undefined as unknown) as T;
  return (await parseJsonSafe(res)) as T;
}

export type LoginRequest = { email: string; password: string };
export type LoginResponse = { token?: string; user?: any };

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  return apiFetch<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function health(): Promise<{ ok: boolean; time?: string } | null> {
  try {
    return await apiFetch("/health", { method: "GET" });
  } catch {
    return null;
  }
}

