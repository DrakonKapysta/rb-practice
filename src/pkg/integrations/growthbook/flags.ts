import { growthbookAdapter } from './growthbook.adapter'

export const showCharactersFooter = growthbookAdapter.getFeature('characters-footer', false)
export const showCharactersBanner = growthbookAdapter.getFeature('characters-banner', true)

export const charactersFlags = [showCharactersFooter, showCharactersBanner] as const
