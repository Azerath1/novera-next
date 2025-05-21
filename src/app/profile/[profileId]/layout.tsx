import Link from "next/link";

export default function ProfilePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Features Profile Page</h2>
      <Link href={"/profile"}>Назад</Link>
    </>
  );
}
