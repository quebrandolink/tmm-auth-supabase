import { createClient } from '@supabase/supabase-js'
import { createServerClient, serializeCookieHeader } from "@supabase/ssr"


export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
        auth: {
            // mantém sessão no navegador
            persistSession: true,
            autoRefreshToken: true,
            // não forçamos PKCE aqui para suportar ambos os fluxos.
            // se quiser PKCE sempre, use: flowType: 'pkce'
        },
    }
)