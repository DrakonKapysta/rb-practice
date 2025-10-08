"use client";

import { useForm } from "react-hook-form";
import { Button, Input } from "@/shared";
import { Select, SelectItem } from "@heroui/select";
import { ICharacterFilters } from "@/entities";
import { CharacterSearchService } from "./character-search.service";
import { usePathname, useSearchParams } from "next/navigation";

export const CharacterSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const filters = Object.fromEntries(
    searchParams.entries()
  ) as ICharacterFilters;

  const { register, handleSubmit, reset, getValues } =
    useForm<ICharacterFilters>({
      defaultValues: {
        name: filters?.name || "",
        status: filters?.status || "",
        species: filters?.species || "",
        gender: filters?.gender || "",
      },
    });

  const onSubmit = async (data: ICharacterFilters) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    window.history.pushState({}, "", `${pathname}?${params.toString()}`);
  };

  const handleClear = () => {
    reset();
    window.history.replaceState({}, "", `${pathname}`);
  };

  const hasFilters = CharacterSearchService.hasFilters(getValues());

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input
          label="Name"
          placeholder="Enter character name..."
          {...register("name")}
        />

        <Select
          {...register("status")}
          className="max-w-xs"
          label="Select Status"
        >
          <SelectItem key="">All Status</SelectItem>
          <SelectItem key="Alive">Alive</SelectItem>
          <SelectItem key="Dead">Dead</SelectItem>
          <SelectItem key="unknown">Unknown</SelectItem>
        </Select>

        <Input
          label="Species"
          placeholder="Enter species..."
          {...register("species")}
        />

        <Select
          {...register("gender")}
          className="max-w-xs"
          label="Select Gender"
        >
          <SelectItem key="">All Gender</SelectItem>
          <SelectItem key="Female">Female</SelectItem>
          <SelectItem key="Male">Male</SelectItem>
          <SelectItem key="Genderless">Genderless</SelectItem>
          <SelectItem key="unknown">Unknown</SelectItem>
        </Select>
      </div>

      <div className="flex gap-2">
        <Button type="submit" color="primary">
          Search
        </Button>
        {hasFilters && (
          <Button
            type="button"
            color="default"
            variant="flat"
            onPress={handleClear}
          >
            Clear Filters
          </Button>
        )}
      </div>
    </form>
  );
};
