import 'react-native-gesture-handler/jestSetup'

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'
import mockRNPermissions from 'react-native-permissions/mock'

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')
jest.mock(
  'react-native/Libraries/Animated/Animated',
  () => jest.requireActual('./__mocks__/react-native-animated').default
)
jest.mock('axios')
jest.mock('react-native-localization', () =>
  jest.fn().mockImplementation(() => {})
)
jest.mock('react-native-permissions', () => mockRNPermissions)
jest.mock(
  'react-native-localization',
  () => jest.requireActual('./__mocks__/react-native-localization').default
)
jest.mock(
  'react-native-geolocation-service',
  () =>
    jest.requireActual('./__mocks__/react-native-geolocation-service').default
)
