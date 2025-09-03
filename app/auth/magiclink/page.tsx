'use client'


import AuthFromUrl from '@/components/AuthFromUrl'
import { useEffect } from 'react'


export default function MagicLinkPage() {
    useEffect(() => {
        // após autenticar, redireciona para o seu app
        const t = setTimeout(() => {
            const to = process.env.NEXT_PUBLIC_APP_URL || process.env.APP_URL || '/'
            if (to) window.location.replace(to)
        }, 1500)
        return () => clearTimeout(t)
    }, [])


    return (
        <div>
            <h2 className="mb-2 text-xl font-medium">Magic Link</h2>
            <p className="text-sm text-gray-600">Validando seu link…</p>
            <AuthFromUrl />
        </div>
    )
}