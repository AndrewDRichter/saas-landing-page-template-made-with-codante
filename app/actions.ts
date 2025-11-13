'use server';
import { supabase } from "./lib/supabase-server";

type Result = {
  ok: boolean
  message: string
}

export async function salvarLead(
    prevState: Result,
    formData: FormData
): Promise<Result> {
    const email = formData.get("email") as string;

    if (!email) {
        return { ok: false, message: "Email é obrigatório" };
    }

    const { error } = await supabase.from('leads').insert([{ email }]);

    console.log('Supabase insert result:', { error });

    if (error?.code === '23505') {
        return { ok: false, message: "Email já cadastrado" };
    }

    if (error) {
        return { ok: false, message: "Erro Supabase: " + error.message };
    }

    return { ok: true, message: 'Email registrado!' };
}