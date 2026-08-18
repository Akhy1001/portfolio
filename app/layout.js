import "./globals.css";

export const metadata = {
  title: "Anas | Développeur Web & Mobile React / Next.js",
  description: "Portfolio de développeur Web & Applications spécialisé en React, Next.js 14, React Native et TypeScript. Découvrez mes réalisations SaaS, Mobile et Web.",
  keywords: ["Développeur Web", "Développeur Mobile", "React", "Next.js", "React Native", "TypeScript", "Portfolio", "Frontend", "Fullstack"],
  authors: [{ name: "Anas" }],
  openGraph: {
    title: "Anas | Développeur Web & Mobile React / Next.js",
    description: "Portfolio moderne de développeur spécialisé en architectures React, Next.js et applications mobiles iOS/Android.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#080C14] text-gray-100 antialiased selection:bg-purple-500/30 selection:text-purple-200">
        {children}
      </body>
    </html>
  );
}
