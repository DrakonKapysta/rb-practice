import { rickAndMortyAPI } from "@/entities";
import { getQueryClient } from "@/shared/lib";
import { CharacterDetail } from "@/widgets/character-detail";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { notFound } from "next/navigation";

export const revalidate = 30;

export async function generateStaticParams() {
  const characters = await rickAndMortyAPI.getCharacters();
  return characters.results.map((character) => ({
    id: character.id.toString(),
  }));
}

export default async function CharacterPage(
  props: PageProps<"/character/[id]">
) {
  const characterId = parseInt((await props.params).id);

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["rick-and-morty", characterId],
    queryFn: () => rickAndMortyAPI.getCharacterById(characterId),
    staleTime: 0,
  });

  if (isNaN(characterId) || characterId <= 0) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <CharacterDetail characterId={characterId} />
        </HydrationBoundary>
      </div>
    </div>
  );
}
