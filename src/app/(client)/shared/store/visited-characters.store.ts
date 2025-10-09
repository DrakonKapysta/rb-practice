'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ICharacter } from '@/entities'

interface VisitedCharactersState {
  visitedCharacters: ICharacter[]
  addVisitedCharacter: (character: ICharacter) => void
  clearVisitedCharacters: () => void
  getVisitedCharacter: (id: number) => ICharacter | undefined
  isVisited: (id: number) => boolean
}

export const useVisitedCharacters = create<VisitedCharactersState>()(
  persist(
    (set, get) => ({
      visitedCharacters: [],

      addVisitedCharacter: (character: ICharacter) => {
        set((state) => {
          const isAlreadyVisited = state.visitedCharacters.some((visited) => visited.id === character.id)

          if (isAlreadyVisited) {
            return state
          }

          return {
            visitedCharacters: [character, ...state.visitedCharacters],
          }
        })
      },

      clearVisitedCharacters: () => {
        set({ visitedCharacters: [] })
      },

      getVisitedCharacter: (id: number) => {
        return get().visitedCharacters.find((character) => character.id === id)
      },

      isVisited: (id: number) => {
        return get().visitedCharacters.some((character) => character.id === id)
      },
    }),
    {
      name: 'visited-characters-storage',
      partialize: (state) => ({ visitedCharacters: state.visitedCharacters }),
    },
  ),
)
