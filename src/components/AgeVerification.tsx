import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const EXPIRY_MS = 2 * 60 * 60 * 1000;

function isVerified(): boolean {
  const timestamp = localStorage.getItem("ageVerified");
  if (!timestamp) return false;
  return Date.now() - parseInt(timestamp, 10) < EXPIRY_MS;
}

export default function AgeVerification() {
  const [open, setOpen] = useState<boolean>(() => !isVerified());

  const handleYes = () => {
    localStorage.setItem("ageVerified", Date.now().toString());
    setOpen(false);
  };

  const handleNo = () => {
    window.location.href = "https://google.com";
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md text-center flex flex-col items-center">
        <DialogHeader className="items-center text-center">
          <img
            src="img/logo1-.png"
            alt="GameCore"
            className="w-20 mx-auto mb-2"
          />
          <DialogTitle className="text-2xl text-center">
            Verificação de Idade
          </DialogTitle>
          <DialogDescription className="text-center text-gray-300">
            Você tem 18 anos ou mais? Este site contém conteúdo destinado a maiores de 18 anos.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex-row justify-center gap-3 w-full mt-4">
          <Button
            variant="neon"
            onClick={handleYes}
            className="flex-1"
          >
            Sim, tenho 18+
          </Button>
          <Button
            variant="destructive"
            onClick={handleNo}
            className="flex-1"
          >
            Não
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}