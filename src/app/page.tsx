import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1>Главная страница</h1>
      <Link href="/profile">Профиль </Link>
      <Link href="/fanfiction">Фанфики </Link>
      <Button>
        <Link href="/auth">Регистрация</Link>
      </Button>
    </>
  );
}
