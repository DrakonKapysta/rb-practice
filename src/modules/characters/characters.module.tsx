import { rickAndMortyAPI } from "@/entities";
import { getQueryClient } from "@/shared/lib";
import { CharacterList, CharacterSearch } from "@/widgets";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export const CharactersModule = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["rick-and-morty", {}],
    queryFn: () => rickAndMortyAPI.getCharacters({}),
  });
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">Rick and Morty Characters</h2>
        </CardHeader>
        <CardBody>
          <div className="flex gap-4 items-end">
            <Suspense>
              <CharacterSearch />
            </Suspense>
          </div>
        </CardBody>
      </Card>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense>
          <CharacterList />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
};
