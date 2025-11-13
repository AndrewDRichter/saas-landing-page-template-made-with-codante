'use server';
import { supabase } from "./lib/supabase-server";

type Result = {
  ok: boolean
  message: string
}

export async function salvarLead(
    prevState: Result,
    formData: FormData
): Promise<Result | null> {
    const email = formData.get("email") as string;

    if (!email) {
        return { ok: false, message: "Email é obrigatório" };
    }

    const { error } = await supabase.from('leads').insert([{ email }]);

    if (error) {
        return { ok: false, message: "Erro Supabase: " + error.message };
    }

    return { ok: true, message: 'Email registrado!' };
}