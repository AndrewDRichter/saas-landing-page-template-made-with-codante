import Image from "next/image";
import logoImg from "@/public/logo.svg";
import womanImg from "@/public/woman.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      <header className="container mx-auto">
        <nav className="flex justify-between items-center p-4">
          <Image src={logoImg} alt="Logo LivroSaaS" />
          <div className="flex items-center gap-4">
            <Button variant={"link"}>About</Button>
            <Button variant={"link"}>Prices</Button>
            <Button variant={"outline"}>Login</Button>
          </div>
        </nav>
      </header>
      <section className="container mx-auto text-center my-20">
        <h1 className="text-6xl font-bold">Simplifique seus estudos</h1>
        <p className="text-gray-600 mt-6 text-xl max-w-3xl mx-auto">
          Deixe que nós façamos a curadoria para você. Assine nossa plataforma e
          receba todos os meses um ebook novo de programação.
        </p>
        <form className="mt-20">
          <div className="flex gap-2 justify-center">
            <Input
              placeholder="Coloque seu email"
              type="email"
              className="max-w-sm border-gray-400 md:text-lg"
            />
            <Button>Assine agora</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Comece sua assinatura agora mesmo. Cancele quando quiser.
          </p>
        </form>
      </section>
      <section className="bg-white py-14">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center">Como funciona?</h2>
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            <Image src={womanImg} alt="Mulher carregando caixas de livros" />
            <ul className="text-2xl text-muted-foreground space-y-6">
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
      <section className="container mx-auto text-center my-20">
        <h2 className="text-4xl font-bold">Preço Simples e Transparente</h2>
        <p className="text-gray-600 mt-6 text-xl max-w-3xl mx-auto">
          Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
          para você? Assine o nosso plano mensal Pro Premium VIP e garanta
          mensalmente um ebook novo de programação. E por menos de um café por
          dia.
        </p>
        <div className="flex justify-center items-center mt-14 gap-8">
          <Card className="w-full max-w-sm text-left inset-shadow-sm hover:bg-amber-50 transition-all duration-500 hover:scale-105">
            <CardHeader>
              <CardTitle>Plano Basic</CardTitle>
              <CardDescription>O básico para começar os seus estudos</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">R$ 9,90<span className="font-normal text-muted-foreground text-lg">/mês</span></p>
              <ul className="my-6">
                <li className="flex justify-start gap-4 items-center text-muted-foreground"><Check className="text-green-500" size={20} /> 1 ebook novo por mês</li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground"><Check className="text-green-500" size={20} /> Curadoria especializada</li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground"><Check className="text-green-500" size={20} /> Acesso imediato ao conteúdo</li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground"><Check className="text-green-500" size={20} /> Cancelamento fácil a qualquer momento</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Assine Agora</Button>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-md text-left shadow-2xl shadow-amber-200 hover:bg-amber-100 hover:scale-110 transition-all duration-700">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">Plano Pro Premium VIP <span className="rounded-sm bg-emerald-400 text-white p-1">Mais recomendado</span></CardTitle>
              <CardDescription>Tudo que você precisa para os seus estudos</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">R$ 19,90<span className="font-normal text-muted-foreground text-lg">/mês</span></p>
              <ul className="my-6">
                <li className="flex justify-start gap-4 items-center text-muted-foreground"><Check className="text-green-500" size={20} /> 1 ebook novo por mês</li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground"><Check className="text-green-500" size={20} /> Curadoria especializada</li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground"><Check className="text-green-500" size={20} /> Acesso imediato ao conteúdo</li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground"><Check className="text-green-500" size={20} /> Cancelamento fácil a qualquer momento</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Assine Agora</Button>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-sm text-left inset-shadow-sm hover:bg-amber-50 transition-all duration-500 hover:scale-105">
            <CardHeader>
              <CardTitle>Plano Enterprise</CardTitle>
              <CardDescription>Tudo que o seu time precisa para os estudos</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">R$ 109,90<span className="font-normal text-muted-foreground text-lg">/mês</span></p>
              <ul className="my-6">
                <li className="flex justify-start gap-4 items-center text-muted-foreground"><Check className="text-green-500" size={20} /> 1 ebook novo por mês</li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground"><Check className="text-green-500" size={20} /> Curadoria especializada</li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground"><Check className="text-green-500" size={20} /> Acesso imediato ao conteúdo</li>
                <li className="flex justify-start gap-4 items-center text-muted-foreground"><Check className="text-green-500" size={20} /> Cancelamento fácil a qualquer momento</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Assine Agora</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="bg-white">
        <h2>Pronto Para Mudar a Sua Vida?</h2>
        <p>
          Faça como milhares de outras pessoas. Assine nosso produto e tenha
          garantido seus estudos
        </p>
        <button>Assine agora</button>
        <p>Comece sua assinatura agora mesmo. Cancele quando quiser.</p>
      </section>
      <footer>
        {/* <img src="" alt="" /> */}
        <p>© 2024 LivroSaaS. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
