import type { Metadata } from "next";
import Image from "next/image";
import { theme } from "../configs/theme";
import "./globals.css";


export const metadata: Metadata = {
  title: theme.name,
  description: 'Rotas personalizadas de autenticação com Supabase',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen" style={{
        '--primary': theme.primaryColor,
        '--secondary': theme.secondaryColor,
        '--background': theme.backgroundColor,
        '--text': theme.textColor,
        '--radius': theme.borderRadius,
        fontFamily: theme.fontFamily,
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      } as React.CSSProperties}>
        <main className="mx-auto max-w-lg p-6">
          <header className="mb-8">
            {theme.logoUrl && (
              <div className="mb-4 flex justify-center">
                <Image
                  src={theme.logoUrl}
                  alt={`${theme.name} Logo`}
                  className="h-12 m-6 w-auto"
                  width={120}
                  height={48}
                  priority
                />
              </div>
            )}
            <h1 className="text-4xl text-center font-semibold mb-2" style={{ color: theme.primaryColor }}>{theme.name}</h1>
            <p className="text-center text-gray-600 text-lg" style={{ color: theme.textColor }}>Confirmação de e‑mail, magic link e redefinição de senha</p>
          </header>
          <div className="rounded-2xl bg-white p-6 shadow">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
