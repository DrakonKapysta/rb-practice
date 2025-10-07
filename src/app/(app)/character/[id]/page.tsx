import { CharacterDetail } from "@/features";
import { notFound } from "next/navigation";

interface ICharacterPageProps {
  params: {
    id: string;
  };
}

export default function CharacterPage({ params }: ICharacterPageProps) {
  const characterId = parseInt(params.id);

  if (isNaN(characterId) || characterId <= 0) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <CharacterDetail characterId={characterId} />
      </div>
    </div>
  );
}

export const revalidate = 30;
