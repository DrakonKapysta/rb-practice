export type MixpanelEvent =
  | { name: 'user_login'; properties: { method: 'email' | 'oauth' } }
  | { name: 'page_view'; properties: { path: string; referrer?: string } }
  | { name: 'character_viewed'; properties: { characterId: number; name: string } }
  | { name: 'experiment_viewed'; properties: { experiment: string; variation: string } }

export type MixpanelEventName = MixpanelEvent['name']

export type MixpanelEventProperties<T extends MixpanelEventName> = Extract<MixpanelEvent, { name: T }>['properties']
