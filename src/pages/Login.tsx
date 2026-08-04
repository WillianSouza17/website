import { FormEvent, useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (user.length < 5 || senha.length < 5) {
      alert("Usuário e senha devem ter pelo menos 5 caracteres.");
      return;
    }
    alert("Login realizado com sucesso!");
  };

  return (
    <main className="max-w-6xl mx-auto px-4 my-5">
      <div className="text-center mb-5">
        <h1 className="text-5xl font-bold text-white">Acesse sua Conta</h1>
        <p className="text-lg text-gc-muted">
          Entre para gerenciar seus pedidos e aproveitar ofertas exclusivas.
        </p>
        <hr className="w-1/4 mx-auto border-gc-accent" />
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-md gc-card p-4 md:p-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="font-bold">Usuário ou E-mail</label>
              <input
                type="text"
                className="form-control h-[45px]"
                placeholder="Digite seu usuário ou e-mail"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="font-bold">Senha</label>
              <input
                type="password"
                className="form-control h-[45px]"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full py-2 font-bold uppercase mb-4"
            >
              Entrar
            </button>

            <div className="flex justify-between items-center mt-3 text-sm">
              <a href="#" className="text-gc-muted no-underline">
                Esqueceu sua senha?
              </a>
              <a href="#" className="text-gc-accent font-bold no-underline">
                Cadastre-se
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}