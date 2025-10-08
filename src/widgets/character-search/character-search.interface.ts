import { ICharacterFilters } from "@/entities";

export interface ICharacterSearchProps {
  onFiltersChange: (filters: ICharacterFilters) => void;
  initialFilters?: ICharacterFilters;
}
