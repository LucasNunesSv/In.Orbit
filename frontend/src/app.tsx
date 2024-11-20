import logo from "./assets/logo-text-in-orbit-png.png";
import illustration from "./assets/lets-start-illustration.png";
import { Plus, X } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "./components/ui/radio-group";

export function App() {
  return (
    <Dialog>
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
        <DialogTrigger asChild>
          <Button variant="primary">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent>
        <div className="flex flex-col h-full gap-6">
          <div className="flex flex-col gap-3 ">
            <div className="flex items-center justify-between">
              <DialogTitle>Cadastrar meta</DialogTitle>
              <DialogClose>
                <X className="text-zinc-600" />
              </DialogClose>
            </div>
            <DialogDescription>
              Adicione atividades que te fazem bem e que você quer continuar
              praticando toda semana.
            </DialogDescription>
          </div>
          <form action="" className="flex flex-col justify-between flex-1">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Qual será a atividade?</Label>
                <Input
                  autoFocus
                  placeholder="Praticar exercícios, ler um livro, estudar, etc.."
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Quantas vezes na semana?</Label>
                <RadioGroup>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">1x na semana</span>
                    <span className="text-lg leading-none">🥱</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">1x na semana</span>
                    <span className="text-lg leading-none">🥱</span>
                  </RadioGroupItem>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">1x na semana</span>
                    <span className="text-lg leading-none">🥱</span>
                  </RadioGroupItem>
                </RadioGroup>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DialogClose asChild>
                <Button type="button" className="flex-1" variant="secondary">
                  Fechar
                </Button>
              </DialogClose>
              <Button className="flex-1" variant="primary">
                Salvar
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
