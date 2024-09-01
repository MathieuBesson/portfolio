import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathieu Besson - Développeur Back-end à Rennes",
  description: "Développeur Back-end, Développeur de vos solutions...",
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
