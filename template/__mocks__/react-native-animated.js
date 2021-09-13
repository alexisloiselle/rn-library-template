const Animated = jest.requireActual('react-native/Libraries/Animated/Animated')

export default {
  ...Animated,
  timing: (value, config) => ({
    start: (cb) => {
      value.setValue(config.toValue)
      cb && cb(true)
    },
  }),
}
