import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathieu Besson",
  description: "Mathieu Besson - Développeur Back-end",
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
