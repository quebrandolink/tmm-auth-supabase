export interface BrandTheme {
    name: string;
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string;
    logoUrl: string;
    favicon?: string;
    fontFamily?: string;
    borderRadius?: string;
}

export const defaultTheme: BrandTheme = {
    name: 'Supabase Autenticação',
    primaryColor: '#3ECF8E',
    secondaryColor: '#171717',
    backgroundColor: '#121212',
    textColor: '#FFFFFF',
    logoUrl: '/default/supabase-logo-wordmark--dark.png',
    fontFamily: 'sans-serif',
    borderRadius: '0.375rem' // rounded-md
};

// Export the current theme (can be changed to switch themes)
export const theme = { ...defaultTheme };