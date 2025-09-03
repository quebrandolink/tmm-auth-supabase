export default function Home() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-400">Este site centraliza os callbacks de autenticação do Supabase.</p>
      <ul className="list-disc pl-5 text-sm text-gray-600">
        <li><code>/auth/confirm-email</code></li>
        <li><code>/auth/magiclink</code></li>
        <li><code>/auth/reset-password</code></li>
      </ul>
    </div>
  )
}