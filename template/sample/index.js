/**
 * @format
 */

import { Styles } from 'gmap-common'
import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import App from './src/App'

Styles.SharedTheme.set({
  colors: {
    primary: Styles.Colors.RED,
    secondary: Styles.Colors.BLACK,
  },
})

AppRegistry.registerComponent(appName, () => App)
