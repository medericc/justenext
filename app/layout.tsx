export const metadata = {
  title: "LiveCheck",
  description: "Qui est en live ?"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}