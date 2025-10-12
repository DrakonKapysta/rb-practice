import { GrowthBookAdapter } from './growthbook.adapter'

const growthbookAdapter = GrowthBookAdapter.getInstance()

export const showCharactersHeader = growthbookAdapter.getFeature('characters-header', false)
export const showCharactersFooter = growthbookAdapter.getFeature('characters-footer', true)

export const charactersFlags = [showCharactersHeader, showCharactersFooter] as const
