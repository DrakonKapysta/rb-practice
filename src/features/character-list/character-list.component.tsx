"use client";

import { Button, CharacterCard, Spinner } from "@/shared/ui";
import { useRickAndMortyCharactersQuery } from "@/entities/api/rick-and-morty";
import { FailedLoad } from "@/shared/ui/failed-load";
import { ICharacterListProps } from "./character-list.interface";

export const CharacterList = ({
  filters,
  onLoadMore,
  hasNextPage = false,
  isLoadingMore = false,
}: ICharacterListProps) => {
  const { data, isLoading } = useRickAndMortyCharactersQuery(filters);

  if (isLoading) {
    return <Spinner />;
  }

  if (!data?.results || data.results.length === 0) {
    return (
      <FailedLoad message="No characters found." className="text-default-500" />
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {hasNextPage && onLoadMore && (
        <div className="flex justify-center">
          <Button
            onPress={onLoadMore}
            isLoading={isLoadingMore}
            color="primary"
            variant="flat"
          >
            {isLoadingMore ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
};
