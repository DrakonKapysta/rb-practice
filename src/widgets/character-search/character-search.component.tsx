"use client";

import { useForm } from "react-hook-form";
import { ICharacterSearchProps } from "./character-search.interface";
import { Button, Input } from "@/shared";
import { Select, SelectItem } from "@heroui/select";
import { ICharacterFilters } from "@/entities";
import { CharacterSearchService } from "./character-search.service";

export const CharacterSearch = ({
  onFiltersChange,
  initialFilters,
}: ICharacterSearchProps) => {
  const { register, handleSubmit, reset, getValues } =
    useForm<ICharacterFilters>({
      defaultValues: {
        name: initialFilters?.name || "",
        status: initialFilters?.status || "",
        species: initialFilters?.species || "",
        gender: initialFilters?.gender || "",
      },
    });

  const onSubmit = (data: ICharacterFilters) => {
    onFiltersChange({
      ...(data as ICharacterFilters),
    });
  };

  const handleClear = () => {
    reset();
    onFiltersChange(CharacterSearchService.getDefaultFilters());
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
