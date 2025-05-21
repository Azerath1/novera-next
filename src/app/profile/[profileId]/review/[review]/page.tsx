export default function ProfileReview({
  params,
}: {
  params: { profileId: string; profileReview: string };
}) {
  return (
    <h1>
      Это ID профиля: {params.profileId}, а это review ID:{" "}
      {params.profileReview}
    </h1>
  );
}
