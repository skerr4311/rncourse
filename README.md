# rncourse
React-Native course on Udemy

this is a react-native course that im taking on udemy <br />
16/06/19 Having an issue with the google maps [Map is blank]. have been suggested that it is my emulator and I need to test it on an API 25 (tested on API 24, STILL NO LUCK) and include google play store link: https://github.com/react-native-community/react-native-maps/issues/1877 Also need to see if my API key is actually being accesed or not. <br />
"I fixed this by enabling "Google Maps Android API" inside the Google API console." looks like valuable information (managed to enable my key for android apps, now my map is blue.... could be wrong coordinates). i will try this <br />
android:name="com.google.android.geo.API_KEY" will try adding this to the [meta-data] area of my code too.
