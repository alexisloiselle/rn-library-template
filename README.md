# React Native Template

## How to start from this template?

You can follow [this guide](https://reactnative.dev/docs/environment-setup) to setup your environment.

Just make sure that you initialize your project like so:
```bash
$ npx react-native init MyAwesomeProject --template https://github.com/alexisloiselle/rn-library-template.git
```

## For you to do

- [ ] Maybe rename the app id from `com.<APP_NAME>` to whatever you like
  - `android/app/_BUCK`
  - `android/app/build.gradle`
  - `android/app/build/generated/source/buildConfig/debug/com/<APP_NAME>/BuildConfig.java`
  - `android/app/src/debug/java/com/<APP_NAME>/ReactNativeFlipper.java`
  - `android/app/src/main/AndroidManifest.xml`
  - `android/app/src/main/java/com/<APP_NAME>/MainActivity.java`
  - `android/app/src/main/java/APP_NAME>/MainApplication.java`
  - The file structure in `android/app/src/main/java` to reflect you app id. e.g. `com.tb.app` -> `android/app/src/main/java/com/tb/app/...`
