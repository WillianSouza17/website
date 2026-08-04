import { FormEvent, useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("duvida");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <main className="max-w-[900px] mx-auto px-4 my-5">
      <section className="text-center mb-5">
        <h1 className="text-5xl font-bold text-white">Fale Conosco</h1>
        <p className="text-lg text-gc-muted">
          Tem alguma dúvida, sugestão ou precisa de ajuda com seu pedido?
        </p>
        <hr className="w-1/4 mx-auto border-gc-accent" />
      </section>

      <div className="flex justify-center">
        <div className="w-full md:w-4/6 lg:w-3/6 gc-card p-4 md:p-5">
          <form onSubmit={handleSubmit} className="bg-transparent">
            <div className="mb-3">
              <label htmlFor="nome">Nome Completo:</label>
              <input
                type="text"
                id="nome"
                className="form-control"
                placeholder="Digite seu nome completo"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="seuemail@exemplo.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="assunto">Assunto:</label>
              <select
                id="assunto"
                className="form-select"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
              >
                <option value="duvida">Dúvida sobre produtos</option>
                <option value="suporte">Suporte técnico</option>
                <option value="reclamacao">Reclamação ou Troca</option>
                <option value="outro">Outro assunto</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                id="mensagem"
                className="form-control"
                rows={5}
                placeholder="Escreva sua mensagem aqui..."
                required
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full py-2 font-bold uppercase"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>

      <section className="text-center mt-5">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="p-4 rounded bg-gc-primary flex-1 min-w-[200px]">
            <p className="text-lg font-bold text-white mb-2">Telefone / SAC</p>
            <p className="mb-0">(XX) XXXXX-XXXX</p>
          </div>
          <div className="p-4 rounded bg-gc-primary flex-1 min-w-[200px]">
            <p className="text-lg font-bold text-white mb-2">E-mail</p>
            <p className="mb-0">contato@gamecore.com.br</p>
          </div>
          <div className="p-4 rounded bg-gc-primary flex-1 min-w-[200px]">
            <p className="text-lg font-bold text-white mb-2">Horário</p>
            <p className="mb-0">Seg a Sex, 08h às 18h</p>
          </div>
        </div>
      </section>
    </main>
  );
}