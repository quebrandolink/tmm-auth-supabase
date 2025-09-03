'use client'


import AuthFromUrl from '@/components/AuthFromUrl'
import { supabase } from '@/lib/supabaseClient'
import { FormEvent, useEffect, useState } from 'react'


export default function ResetPasswordPage() {
    const [password, setPassword] = useState('')
    const [working, setWorking] = useState(false)
    const [message, setMessage] = useState('')


    useEffect(() => {
        // checa se já tem sessão válida (após AuthFromUrl)
        supabase.auth.getUser().then(({ data }) => {
            if (!data?.user) setMessage('Token inválido/expirado ou sessão ausente.')
        })
    }, [])


    async function onSubmit(e: FormEvent) {
        e.preventDefault()
        setWorking(true)
        setMessage('')
        const { error } = await supabase.auth.updateUser({ password })
        if (error) setMessage('Erro: ' + error.message)
        else setMessage('Senha atualizada com sucesso!')
        setWorking(false)
    }


    return (
        <div>
            <h2 className="mb-2 text-xl font-medium">Redefinir senha</h2>
            <p className="text-sm text-gray-600">Cole ou abra o link recebido por e‑mail. Seu token será validado.</p>


            <AuthFromUrl />


            <form onSubmit={onSubmit} className="mt-6 space-y-3">
                <input
                    type="password"
                    required
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nova senha"
                    className="w-full rounded-xl border p-3"
                />
                <button
                    type="submit"
                    disabled={working}
                    className="w-full rounded-xl bg-black p-3 text-white disabled:opacity-50"
                >
                    {working ? 'Salvando…' : 'Salvar nova senha'}
                </button>
            </form>


            {message && (
                <div className="mt-4 rounded-lg bg-gray-100 p-3 text-sm">{message}</div>
            )}
        </div>
    )
}