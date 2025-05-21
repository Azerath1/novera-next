import Link from "next/link";

export default function ProfilePage() {
  return (
    <>
      <Link href={"/"}>Главная</Link>
      <h1>Список пользователей:</h1>
      <h2>
        <Link href={"/profile/1"}>Профиль 1</Link>
      </h2>
      <h2>
        <Link href={"/profile/2"}>Профиль 2</Link>
      </h2>
      <h2>
        <Link href={"/profile/3"}>Профиль 3</Link>
      </h2>
    </>
  );
}
