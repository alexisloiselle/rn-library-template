package com.helloworldsample

import android.os.Bundle
import com.facebook.react.ReactActivity

class MainActivity : ReactActivity() {

    override fun getMainComponentName(): String? {
        return "HelloWorldSample"
    }

    // fix for react-native-screens (https://github.com/software-mansion/react-native-screens#android)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(null)
    }
}
