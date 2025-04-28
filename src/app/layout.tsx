import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { ReactNode } from './custom-styles.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Barra Móveis - Móveis de qualidade para sua casa',
  description: 'Encontre os melhores móveis para sua casa na Barra Móveis. Sofás, mesas, cadeiras, camas e muito mais com qualidade e preço justo.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
