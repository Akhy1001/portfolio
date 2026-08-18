import "./globals.css";
import { Plus_Jakarta_Sans, Inter, Fira_Code } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Anas | Développeur Web & Applications",
  description: "Portfolio de développeur Web & Applications spécialisé en React, Next.js 14, Swift, C++ et TypeScript.",
  keywords: ["Développeur Web", "React", "Next.js", "Swift", "C++", "TypeScript", "Portfolio"],
  authors: [{ name: "Anas" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`scroll-smooth ${plusJakartaSans.variable} ${inter.variable} ${firaCode.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[var(--bg-primary)] text-[var(--text-main)] antialiased selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
