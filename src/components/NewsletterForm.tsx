import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function NewsletterForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (nome.trim().length < 3) {
      setStatus("Por favor, digite seu nome completo.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setStatus("Por favor, informe um e-mail válido!");
      return;
    }
    setStatus("E-mail cadastrado com sucesso!");
    setNome("");
    setEmail("");
  };

  return (
    <div className="bg-gc-primary/90 border-t border-b border-white/10 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-1">
            Receba Ofertas Exclusivas
          </h3>
          <p className="text-gray-400 text-sm">
            Informe seu e-mail e fique por dentro de todas as novidades e descontos da GameCore.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex-1 w-full max-w-xl flex flex-col sm:flex-row gap-3"
        >
          <Input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="flex-1"
          />
          <Input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" variant="neon" className="gap-2 shrink-0">
            <Send className="w-4 h-4" />
            Enviar
          </Button>
        </form>
      </div>

      {status && (
        <p className="max-w-7xl mx-auto mt-3 text-center text-sm text-gc-accent font-medium">
          {status}
        </p>
      )}
    </div>
  );
}
