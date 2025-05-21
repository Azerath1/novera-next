import Link from "next/link";

export const metadata = {
  title: "Fanfiction Page",
};

export default function FanfictionPage() {
  return (
    <>
      <h1>Это страница ФАНФИКА</h1>
      <Link href={"/"}>Главная</Link>
    </>
  );
}
