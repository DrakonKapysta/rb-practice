import { ICharacterFilters } from '@/entities'

export class CharacterSearchService {
  static getDefaultFilters: () => ICharacterFilters = () => {
    return {
      name: '',
      status: '',
      species: '',
      gender: '',
    }
  }
  static hasFilters = (filters: ICharacterFilters) => {
    return Object.values(filters).some((value) => value)
  }
}
