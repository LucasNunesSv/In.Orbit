import logo from "./assets/logo-text-in-orbit-png.png";
import illustration from "./assets/lets-start-illustration.png";
import { Plus } from "lucide-react";
import { Button } from "./components/ui/button";

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img
        className="w-auto h-64"
        src={illustration}
        alt="let's start illustration"
      />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você não cadastrou nenhuma meta ainda, que tal cadastrar uma agora
        mesmo?
      </p>
      <Button variant="primary">
        <Plus className="size-4" />
        Cadastrar meta
      </Button>
    </div>
  );
}
