'use client'


import { supabase } from '@/lib/supabaseClient'
import { getHashParams, getQueryParams } from '@/lib/url'
import { useEffect, useState } from 'react'


export default function AuthFromUrl({ onAuth }: { onAuth?: () => void }) {
    const [status, setStatus] = useState<'idle' | 'working' | 'done' | 'error'>('idle')
    const [message, setMessage] = useState<string>('')


    useEffect(() => {
        const run = async () => {
            try {
                setStatus('working')


                const query = getQueryParams()
                const hash = getHashParams()


                // 1) PKCE: ?code=...
                const code = query.get('code')
                if (code) {
                    const { error } = await supabase.auth.exchangeCodeForSession(code)
                    if (error) throw error
                    setStatus('done')
                    setMessage('Sessão autenticada via PKCE.')
                    onAuth?.()
                    return
                }


                // 2) Implicit: #access_token=...&refresh_token=...
                const access_token = hash.get('access_token') || undefined
                const refresh_token = hash.get('refresh_token') || undefined
                if (access_token && refresh_token) {
                    const { error } = await supabase.auth.setSession({
                        access_token,
                        refresh_token,
                    })
                    if (error) throw error
                    setStatus('done')
                    setMessage('Sessão autenticada via tokens no hash.')
                    onAuth?.()
                    return
                }


                setStatus('error')
                setMessage('Nenhum código ou token encontrado na URL.')
            } catch (e: unknown) {
                console.error(e)
                setStatus('error')
                if (e instanceof Error) {
                    setMessage(e.message)
                } else {
                    setMessage('Falha ao autenticar a partir da URL.')
                }
            }
        }


        run()
    }, [onAuth])


    return (
        <div className="mt-2 text-sm text-gray-600">
            {status === 'working' && 'Processando autenticação...'}
            {status === 'done' && message}
            {status === 'error' && (
                <span className="text-red-600">{message}</span>
            )}
        </div>
    )
}