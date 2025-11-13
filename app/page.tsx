import Image from "next/image";
import logoImg from "@/public/logo.svg";
import womanImg from "@/public/woman.svg";
import { Button } from "@/components/ui/button";
import { Check, MenuIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { LeadForm } from "./components/LeadForm";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <header className="container mx-auto flex justify-between items-center px-4 md:px-10">
        <Image src={logoImg} alt="Logo LivroSaaS" />
        <nav className="flex items-center p-4">
          <Sheet>
            <SheetTrigger asChild>
              <MenuIcon className="md:hidden" />
            </SheetTrigger>
            <div className="md:hidden">
              <SheetTitle></SheetTitle>
              <SheetContent>
                <nav className="flex flex-col gap-2 px-4 my-4">
                  <Button variant={"link"}>
                    <Link href="#about">Sobre</Link>
                  </Button>
                  <Button variant={"link"}>
                    <Link href="#prices">Planos</Link>
                  </Button>
                  {/* <Button variant={"default"}>Login</Button> */}
                </nav>
              </SheetContent>
            </div>
          </Sheet>
          <div className="hidden md:flex items-center gap-4">
            <Button variant={"link"}>
              <Link href="#about">Sobre</Link>
            </Button>
            <Button variant={"link"}>
              <Link href="#prices">Planos</Link>
            </Button>
            {/* <Button variant={"outline"}>Login</Button> */}
          </div>
        </nav>
      </header>
      <section className="container mx-auto text-center py-8 md:py-20 px-2 md:px-0">
        <h1 className="text-2xl md:text-6xl font-bold">
          Simplifique seus estudos
        </h1>
        <p className="text-gray-600 mt-6 text-sm md:text-xl md:max-w-3xl mx-auto">
          Deixe que nós façamos a curadoria para você. Assine nossa plataforma e
          receba todos os meses um ebook novo de programação.
        </p>
        <LeadForm />
      </section>
      <section className="bg-white py-6 md:py-14" id="about">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Como funciona?
          </h2>
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-between max-w-3xl mx-auto">
            <Image
              src={womanImg}
              alt="Mulher carregando caixas de livros"
              className="w-50 md:w-fit"
            />
            <ul className="text-lg md:text-2xl text-muted-foreground space-y-2 md:space-y-6">
              <li className="flex justify-end items-center gap-6">
                Acesso a 1 ebook por mês{" "}
                <Check size={24} className="text-green-500" />
              </li>
              <li className="flex justify-end items-center gap-6">
                Curadoria especializada{" "}
                <Check size={24} className="text-green-500" />
              </li>
              <li className="flex justify-end items-center gap-6">
                Cancele quando quiser{" "}
                <Check size={24} className="text-green-500" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className="container mx-auto text-center py-8 md:py-20"
        id="prices"
      >
        <h2 className="text-2xl md:text-4xl font-bold">
          Preços Simples e Transparentes
        </h2>
        <p className="text-gray-600 mt-6 text-lg md:text-xl max-w-3xl mx-auto">
          Planos que respeitam o seu momento atual. Escolha o que melhor se
          encaixa para você.
        </p>
        <div className="flex flex-wrap justify-center px-4 md:px-0 items-center mt-14 gap-8">
          <Card className="w-full max-w-sm text-left inset-shadow-sm hover:bg-amber-50 transition-all duration-500 hover:scale-105">
            <CardHeader>
              <CardTitle>Plano Basic</CardTitle>
              <CardDescription>
                O básico para começar os seus estudos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">
                R$ 9,90
                <span className="font-normal text-muted-foreground text-lg">
                  /mês
                </span>
              </p>
              <ul className="my-6">
                <li className="flex justify-start gap-4 items-center text-muted-foreground">
                  <Check className="text-green-500" size={20} /> 1 ebook novo
                  por mês
                </li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground">
                  <Check className="text-green-500" size={20} /> Curadoria
                  especializada
                </li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground">
                  <Check className="text-green-500" size={20} /> Acesso imediato
                  ao conteúdo
                </li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground">
                  <Check className="text-green-500" size={20} /> Cancelamento
                  fácil a qualquer momento
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Assine Agora</Button>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-md text-left shadow-2xl shadow-amber-200 hover:bg-amber-100 hover:scale-110 transition-all duration-700">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Plano Pro Premium VIP{" "}
                <span className="text-center rounded-sm bg-emerald-400 text-white p-1">
                  Mais recomendado
                </span>
              </CardTitle>
              <CardDescription>
                Tudo que você precisa para os seus estudos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">
                R$ 19,90
                <span className="font-normal text-muted-foreground text-lg">
                  /mês
                </span>
              </p>
              <ul className="my-6">
                <li className="flex justify-start gap-4 items-center text-muted-foreground">
                  <Check className="text-green-500" size={20} /> 1 ebook novo
                  por mês
                </li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground">
                  <Check className="text-green-500" size={20} /> Curadoria
                  especializada
                </li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground">
                  <Check className="text-green-500" size={20} /> Acesso imediato
                  ao conteúdo
                </li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground">
                  <Check className="text-green-500" size={20} /> Cancelamento
                  fácil a qualquer momento
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Assine Agora</Button>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-sm text-left inset-shadow-sm hover:bg-amber-50 transition-all duration-500 hover:scale-105">
            <CardHeader>
              <CardTitle>Plano Enterprise</CardTitle>
              <CardDescription>
                Tudo que o seu time precisa para os estudos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">
                R$ 109,90
                <span className="font-normal text-muted-foreground text-lg">
                  /mês
                </span>
              </p>
              <ul className="my-6">
                <li className="flex justify-start gap-4 items-center text-muted-foreground">
                  <Check className="text-green-500" size={20} /> 1 ebook novo
                  por mês
                </li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground">
                  <Check className="text-green-500" size={20} /> Curadoria
                  especializada
                </li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground">
                  <Check className="text-green-500" size={20} /> Acesso imediato
                  ao conteúdo
                </li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground">
                  <Check className="text-green-500" size={20} /> Cancelamento
                  fácil a qualquer momento
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Assine Agora</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="bg-white py-10 md:py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Pronto Para Mudar a Sua Vida?
          </h2>
          <p className="text-gray-600 mt-6 text-md max-w-xs md:max-w-md mx-auto">
            Faça como milhares de outras pessoas. Assine nosso produto e tenha
            garantido seus estudos
          </p>
          <Button className="w-40 md:w-full max-w-sm mt-6 md:mt-10">
            <Link href={"#prices"}>Escolher plano</Link>
          </Button>
          <p className="text-muted-foreground mt-4 text-xs">
            Comece sua assinatura agora mesmo. Cancele quando quiser.
          </p>
        </div>
      </section>
      <footer className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        <Image src={logoImg} alt="Logo LivroSaaS" />
        <p className="text-sm text-muted-foreground text-center">
          © 2025 LivroSaaS. Todos os direitos reservados. Desenvolvido por{" "}
          <Button className="p-0" variant={"link"}>
            <Link href={"https://github.com/AndrewDRichter"}>
              Andrew Richter
            </Link>
          </Button>
          .
        </p>
      </footer>
    </main>
  );
}
