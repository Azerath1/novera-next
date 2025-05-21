import { Metadata } from "next";

type Props = {
  params: { fanfictionId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Страница фанфика ${params.fanfictionId} | Ваш сайт`,
    description: `Страница фанфика с идентификатором ${params.fanfictionId}`,
    openGraph: {
      title: `Фанфик ${params.fanfictionId}`,
      description: `Страница фанфика ${params.fanfictionId} на нашем сайте`,
    },
  };
}

export default function FanfictionId({ params }: Props) {
  return <h1>Это страница фанфика и её ID: {params.fanfictionId}</h1>;
}
