import mixpanel from 'mixpanel-browser'

import { envClient } from '@/config/env'

mixpanel.init(envClient.NEXT_PUBLIC_MIXPANEL_TOKEN, { autocapture: true })
