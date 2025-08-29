import { useState } from "react";
import { API_BASE_URL, withCredentials } from "@/config";
import { login, type LoginResponse, health } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function AuthDebug() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<LoginResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [healthStatus, setHealthStatus] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await login({ email, password });
      setResult(res);
    } catch (err: any) {
      // Melhor mapeamento de erros comuns
      if (err?.status === 401) {
        setError("Email e/ou senha incorretos");
      } else if (err?.status === 400) {
        setError("Dados inválidos. Verifique email e senha.");
      } else if (err?.status === 0 || err?.message?.toLowerCase().includes("failed to fetch")) {
        setError("Falha de conexão com o backend (CORS/porta/origem)");
      } else {
        const message = err?.message || "Erro desconhecido";
        setError(`${err?.status || ""} ${err?.code || ""} ${message}`.trim());
      }
    } finally {
      setLoading(false);
    }
  };

  const onHealth = async () => {
    setHealthStatus("Verificando...");
    try {
      const res = await health();
      setHealthStatus(res ? `OK ${res.time ?? ""}`.trim() : "Sem resposta");
    } catch {
      setHealthStatus("Falha");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Auth Debug</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 text-sm text-muted-foreground">
            <div><strong>API:</strong> {API_BASE_URL}</div>
            <div><strong>Credentials:</strong> {withCredentials ? "include" : "disabled"}</div>
            <div className="mt-2 flex items-center gap-2">
              <button className="text-primary underline" type="button" onClick={onHealth}>Testar /health</button>
              {healthStatus && <span className="text-xs">{healthStatus}</span>}
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                autoFocus
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Autenticando..." : "Entrar"}
            </Button>
          </form>

          {error && (
            <div className="mt-4 text-sm text-red-600" role="alert">
              {error}
            </div>
          )}
          {result && (
            <pre className="mt-4 text-xs bg-muted p-3 rounded overflow-x-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
