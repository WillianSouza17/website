import { FormEvent, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LogIn, Lock, User as UserIcon } from "lucide-react";

export default function Login() {
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (user.length < 5 || senha.length < 5) {
      setMensagem("Usuário e senha devem ter pelo menos 5 caracteres.");
      return;
    }
    setMensagem("Login realizado com sucesso!");
  };

  return (
    <main className="max-w-xl mx-auto px-4 py-12">
      <Card className="border border-white/10 shadow-2xl">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 rounded-full bg-gc-accent/10 border border-gc-accent/30 flex items-center justify-center text-gc-accent mb-2">
            <LogIn className="w-6 h-6" />
          </div>
          <CardTitle className="text-3xl font-extrabold text-white">
            Acesse sua Conta
          </CardTitle>
          <CardDescription>
            Entre para gerenciar seus pedidos e aproveitar ofertas exclusivas.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="user" className="flex items-center gap-2">
                <UserIcon className="w-4 h-4 text-gc-accent" />
                Usuário ou E-mail
              </Label>
              <Input
                id="user"
                type="text"
                placeholder="Digite seu usuário ou e-mail"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="senha" className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-gc-accent" />
                Senha
              </Label>
              <Input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            {mensagem && (
              <p className="text-sm font-medium text-center text-gc-accent">
                {mensagem}
              </p>
            )}

            <Button type="submit" variant="neon" className="w-full text-base font-bold">
              Entrar
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-between items-center text-sm pt-2">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Esqueceu sua senha?
          </a>
          <a href="#" className="text-gc-accent font-semibold hover:underline">
            Cadastre-se
          </a>
        </CardFooter>
      </Card>
    </main>
  );
}