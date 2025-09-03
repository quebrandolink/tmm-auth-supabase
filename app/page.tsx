export default function Home() {
  return (
    <div className="space-y-3">
      <p>Este site centraliza os callbacks de autenticação do Supabase.</p>
      <ul className="list-disc pl-5 text-sm">
        <li><code>/auth/confirm-email</code></li>
        <li><code>/auth/magiclink</code></li>
        <li><code>/auth/reset-password</code></li>
      </ul>
    </div>
  )
}