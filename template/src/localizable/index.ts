import LocalizedStrings from 'react-native-localization'

import { En } from './strings/en'
import { Fr } from './strings/fr'

export const HelloWorldStrings = new LocalizedStrings({
  en: En,
  fr: Fr,
})

export const Locale = HelloWorldStrings.getLanguage().slice(0, 2).toLowerCase()
