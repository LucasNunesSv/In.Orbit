import logo from "./assets/logo-text-in-orbit-png.png";
import illustration from "./assets/lets-start-illustration.png";
import { Plus } from "lucide-react";

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
      <button type="button" className="text-zinc-100 px-4 py-2.5 rounded-lg bg-sky-500 flex items-center gap-2 text-sm font-medium tracking-tight hover:bg-sky-600 transition duration-300">
        <Plus className="size-4" />
        Cadastrar meta
      </button>
    </div>
  );
}
