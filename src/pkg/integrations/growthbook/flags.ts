import { growthbookAdapter } from './growthbook.adapter'

export const showCharactersFooter = growthbookAdapter.getFeature('characters-footer', true)
export const showCharactersHeader = growthbookAdapter.getFeature('characters-header', false)

export const charactersFlags = [showCharactersHeader, showCharactersFooter] as const
