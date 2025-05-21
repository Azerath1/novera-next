export const metadata = {
  title: "Novera",
  description: "Novera - novels, fanfictions and ranobes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
