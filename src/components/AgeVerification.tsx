import { useState } from "react";

const EXPIRY_MS = 2 * 60 * 60 * 1000;

function isVerified(): boolean {
  const timestamp = localStorage.getItem("ageVerified");
  if (!timestamp) return false;
  return Date.now() - parseInt(timestamp, 10) < EXPIRY_MS;
}

export default function AgeVerification() {
  const [open, setOpen] = useState<boolean>(() => !isVerified());

  if (!open) return null;

  const handleYes = () => {
    localStorage.setItem("ageVerified", Date.now().toString());
    setOpen(false);
  };

  const handleNo = () => {
    window.location.href = "https://google.com";
  };

  return (
    <div className="age-overlay">
      <div className="bg-gc-primary p-10 rounded-2xl text-center max-w-[440px] w-[90%] border border-gc-accent/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        <img src="img/logo1-.png" alt="GameCore" className="w-20 mx-auto mb-5" />
        <h2 className="text-white text-2xl mb-3">Verificação de Idade</h2>
        <p className="text-white mb-2">Você tem 18 anos ou mais?</p>
        <p className="text-white/70 text-sm mb-7">
          Este site contém conteúdo destinado a maiores de 18 anos.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button onClick={handleYes} className="btn btn-success">
            Sim, tenho 18 anos ou mais
          </button>
          <button onClick={handleNo} className="btn btn-danger">
            Não
          </button>
        </div>
      </div>
    </div>
  );
}