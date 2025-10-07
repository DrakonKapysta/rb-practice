"use client";

import { CharacterList } from "@/features";
import { ICharacterFilters } from "@/entities/models/rick-and-morty.model";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { CharacterSearch } from "@/features/character-search/character-search.component";
import { useRouter, useSearchParams } from "next/navigation";

export const Characters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const filters = Object.fromEntries(
    searchParams.entries()
  ) as ICharacterFilters;

  const handleFiltersChange = (newFilters: ICharacterFilters) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">Rick and Morty Characters</h2>
        </CardHeader>
        <CardBody>
          <div className="flex gap-4 items-end">
            <CharacterSearch
              onFiltersChange={handleFiltersChange}
              initialFilters={filters}
            />
          </div>
        </CardBody>
      </Card>

      <CharacterList filters={filters} />
    </div>
  );
};
