import { Metadata } from "next";

type Props = {
  params: { profileId: string };
};

// Генерация метаданных
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Профиль пользователя ${params.profileId} | Ваш сайт`,
    description: `Страница профиля пользователя с идентификатором ${params.profileId}`,
    openGraph: {
      title: `Профиль ${params.profileId}`,
      description: `Страница пользователя ${params.profileId} на нашем сайте`,
    },
  };
}

export default function ProfilePage({ params }: Props) {
  return <h1>Профиль пользователя с ID: {params.profileId}</h1>;
}
