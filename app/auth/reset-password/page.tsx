'use client'


import AuthFromUrl from '@/components/AuthFromUrl'
import { theme } from '@/configs/theme'
import { supabase } from '@/lib/supabaseClient'
import { FormEvent, useEffect, useState } from 'react'
import { AlertOctagon as AlertIcon, CheckCircle as SuccessIcon } from 'lucide-react';


export default function ResetPasswordPage() {

    const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle')
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
        if (error) {
            setMessage('Erro: ' + error.message)
            setStatus('error')
        }
        else {
            setMessage('Senha atualizada com sucesso!')
            setStatus('ok')
        }
        setWorking(false)
    }


    return (
        <div>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Redefinir senha</h2>
            <p className="text-sm text-gray-700">Cole ou abra o link recebido por e‑mail. Seu token será validado.</p>


            <AuthFromUrl onAuth={() => setStatus('ok')} />

            {status === 'ok' && (
                <form onSubmit={onSubmit} className="mt-6 space-y-3">
                    <input
                        type="password"
                        required
                        minLength={8}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nova senha"
                        className="w-full rounded-xl border p-3" style={{ color: theme.secondaryColor, borderColor: theme.secondaryColor }}
                    />
                    <button
                        type="submit"
                        disabled={working}
                        className="w-full rounded-xl bg-black p-3 text-white disabled:opacity-50" style={{ backgroundColor: theme.primaryColor }}
                    >
                        {working ? 'Salvando…' : 'Salvar nova senha'}
                    </button>
                </form>
            )}



            {status === 'ok' && (
                <div className="mt-4 rounded-lg bg-green-100 p-3 text-green-700"> <SuccessIcon className="inline mr-2" size={20} />
                    Senha atualizada com sucesso!
                </div>
            )}
            {status === 'error' && (
                <div className="mt-4 rounded-lg bg-red-100 p-3 text-red-700"> <AlertIcon className="inline mr-2" /> {message}</div>
            )}
        </div>
    )
}