"use client";

import { useActionState, useEffect } from "react";
import { salvarLead } from "@/app/actions";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type State = {
  ok: boolean;
  message: string;
};

const initialState: State = {
  ok: false,
  message: "",
};

export function LeadForm() {
  const [state, formAction] = useActionState(salvarLead, initialState);

  // Quando o estado mudar, exibe o toast
  useEffect(() => {
    if (!state.message) return;

    if (state.ok) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form className="mt-10 md:mt-20" action={formAction}>
      <div className="flex flex-wrap gap-2 justify-center">
        <Input
          name="email"
          required
          placeholder="Coloque seu email"
          type="email"
          className="max-w-sm border-gray-400 md:text-lg shadow-xl"
        />
        <Button type="submit" className="w-full md:w-fit">
          Assine agora
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        Comece sua assinatura agora mesmo. Cancele quando quiser.
      </p>
    </form>
  );
}
