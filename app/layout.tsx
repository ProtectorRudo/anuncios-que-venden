import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anuncios que Venden | Playbook + Kit de Anuncios",
  description:
    "Un sistema práctico con hooks, guiones, estructuras, prompts IA y checklists para crear mejores anuncios sin empezar desde cero.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Anuncios que Venden",
    description:
      "El playbook práctico para pasar de no saber qué publicar a tener anuncios estructurados y listos para producir.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
