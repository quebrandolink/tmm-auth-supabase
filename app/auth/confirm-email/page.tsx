'use client'


import AuthFromUrl from '@/components/AuthFromUrl'
import { supabase } from '@/lib/supabaseClient'
import { useEffect, useState } from 'react'


export default function ConfirmEmailPage() {
    const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle')
    const [msg, setMsg] = useState('')


    useEffect(() => {
        const run = async () => {
            const { data, error } = await supabase.auth.getUser()
            if (error) {
                setStatus('error')
                setMsg(error.message)
            } else if (data?.user) {
                setStatus('ok')
                setMsg('E‑mail confirmado com sucesso!')
            }
        }
        run()
    }, [])


    return (
        <div>
            <h2 className="mb-2 text-xl font-medium text-gray-800">Confirmar e‑mail</h2>
            <p className="text-sm text-gray-600">Processando link de confirmação…</p>


            <AuthFromUrl onAuth={() => setStatus('ok')} />


            {status === 'ok' && (
                <div className="mt-4 rounded-lg bg-green-50 p-3 text-green-700">
                    {msg}
                </div>
            )}
            {status === 'error' && (
                <div className="mt-4 rounded-lg bg-red-50 p-3 text-red-700">
                    {msg}
                </div>
            )}
        </div>
    )
}