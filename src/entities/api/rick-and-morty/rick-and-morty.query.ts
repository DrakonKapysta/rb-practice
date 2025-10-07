"use client";

import {
  ICharacter,
  ICharacterFilters,
  ICharactersResponse,
} from "@/entities/models/rick-and-morty.model";
import { useQuery } from "@tanstack/react-query";
import { rickAndMortyAPI } from "./rick-and-morty.api";

export const useRickAndMortyCharactersQuery = (filters?: ICharacterFilters) => {
  return useQuery<ICharactersResponse>({
    queryKey: ["rick-and-morty", filters],
    queryFn: () => rickAndMortyAPI.getCharacters(filters),
    refetchOnWindowFocus: false,
    staleTime: 30 * 1000,
  });
};

export const useRickAndMortyCharacterQuery = (id: number) => {
  return useQuery<ICharacter>({
    queryKey: ["rick-and-morty", id],
    queryFn: () => rickAndMortyAPI.getCharacterById(id),
    refetchOnWindowFocus: false,
    staleTime: 30 * 1000,
  });
};
