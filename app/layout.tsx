import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: 'Team Matheus Miguel',
  description: 'Rotas personalizadas de autenticação com Supabase',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <main className="mx-auto max-w-lg p-6">
          <header className="mb-8">
            <h1 className="text-2xl font-semibold">Team Matheus Miguel</h1>
            <p className="text-sm text-gray-600">Confirmação de e‑mail, magic link e redefinição de senha</p>
          </header>
          <div className="rounded-2xl bg-white p-6 shadow">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
