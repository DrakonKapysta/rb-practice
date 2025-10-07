import { rickAndMortyAPI } from "@/entities";
import { CharactersModule } from "@/modules";
import { getQueryClient } from "@/shared/lib";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export const revalidate = 30;

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["rick-and-morty"],
    queryFn: () => rickAndMortyAPI.getCharacters(),
    staleTime: 0,
  });

  return (
    <div className="min-h-screen p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <CharactersModule />
        </HydrationBoundary>
      </div>
    </div>
  );
}
