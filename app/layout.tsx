import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "RGS - Bâtir l'avenir, démolir les limites.",
  description:
    "Chez RGS, nous transformons les visions en réalité. Avec plus de 4 années d'expertise dans le secteur de la construction, nous nous engageons à apporter excellence, innovation et sécurité à chaque projet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-gray-200">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
