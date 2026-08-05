import { FormEvent, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, Clock, Send, MessageSquare } from "lucide-react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("duvida");
  const [mensagemText, setMensagemText] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("Mensagem enviada com sucesso!");
    setNome("");
    setEmail("");
    setMensagemText("");
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold text-white">Fale Conosco</h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          Tem alguma dúvida, sugestão ou precisa de ajuda com seu pedido? Nossa equipe está pronta para te atender.
        </p>
        <div className="w-20 h-1 bg-gc-accent mx-auto mt-2 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center p-6 flex flex-col items-center">
          <Phone className="w-8 h-8 text-gc-accent mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">Telefone / SAC</h3>
          <p className="text-sm text-gray-300">(11) 99999-9999</p>
        </Card>

        <Card className="text-center p-6 flex flex-col items-center">
          <Mail className="w-8 h-8 text-gc-accent mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">E-mail</h3>
          <p className="text-sm text-gray-300">contato@gamecore.com.br</p>
        </Card>

        <Card className="text-center p-6 flex flex-col items-center">
          <Clock className="w-8 h-8 text-gc-accent mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">Horário</h3>
          <p className="text-sm text-gray-300">Seg a Sex, 08h às 18h</p>
        </Card>
      </div>

      <Card className="border border-white/10 shadow-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-gc-accent" />
            Envie sua Mensagem
          </CardTitle>
          <CardDescription>
            Preencha o formulário abaixo e responderemos o mais breve possível.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Digite seu nome"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="assunto">Assunto</Label>
              <Select value={assunto} onValueChange={(v) => setAssunto(v)}>
                <SelectTrigger id="assunto" aria-label="Assunto">
                  <SelectValue placeholder="Selecione um assunto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="duvida">Dúvida sobre produtos</SelectItem>
                  <SelectItem value="suporte">Suporte técnico</SelectItem>
                  <SelectItem value="reclamacao">Reclamação ou Troca</SelectItem>
                  <SelectItem value="outro">Outro assunto</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensagem">Mensagem</Label>
              <Textarea
                id="mensagem"
                placeholder="Escreva sua mensagem aqui..."
                required
                value={mensagemText}
                onChange={(e) => setMensagemText(e.target.value)}
              />
            </div>

            {status && (
              <p className="text-sm font-medium text-center text-gc-accent">
                {status}
              </p>
            )}

            <Button type="submit" variant="neon" className="w-full gap-2 text-base font-bold">
              <Send className="w-4 h-4" />
              Enviar Mensagem
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}