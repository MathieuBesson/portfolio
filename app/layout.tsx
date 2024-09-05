import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathieu BESSON - Développeur Back-end à Rennes",
  description: "Développeur back-end spécialisé en Symfony / PHP basé à Rennes. Découvrez mon parcours et mes compétences en développement full-stack et administration système.",
  verification: { google: "8SLw0e_wvK8XB-JWvPLJVgwQgS4lbToxWUBaZ3aCXGg" },
  twitter: { card: "summary_large_image", site: "@site", creator: "@creator", "images": "https://mathieu-besson.fr/asset/image/og-image.jpg" },
  icons: {
    icon: '/asset/image/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}



