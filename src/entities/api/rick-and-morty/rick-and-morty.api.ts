import {
  ICharacter,
  ICharacterFilters,
  ICharactersResponse,
} from "@/entities/models/rick-and-morty.model";
import ky from "ky";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL ||
  "https://rickandmortyapi.com/api";

class RickAndMortyAPI {
  private api: typeof ky;

  constructor() {
    this.api = ky.create({
      prefixUrl: API_BASE_URL,
      timeout: 10000,
    });
  }

  async getCharacters(filters?: ICharacterFilters) {
    const searchParams = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const queryString = searchParams.toString();
    const url = queryString ? `character?${queryString}` : "character";

    return this.api.get(url).json<ICharactersResponse>();
  }

  async getCharacterById(id: number) {
    return this.api.get(`character/${id}`).json<ICharacter>();
  }
}

export const rickAndMortyAPI = new RickAndMortyAPI();
