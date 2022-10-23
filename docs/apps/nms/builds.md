# AssistantNMS builds

The app source code is built into releasable packages for multiple operating systems, thanks to [Flutter][flutter] this is quite simple. <br />
You can download these builds from the [Github Releases page][githubReleases]

### Android & iOS

[CodeMagic.io][codemagic] is used to build both Android and iOS packages and release to the Google Play and Apple App stores.

The Android part of the build sets the build number to the epoch value of the date the build is started. The build produces both an `.apk` and `.aab` files. These files are pushed to tthe Google Play Store and automatically become available.

The iOS part of the build generates an `.ipa` file which is then pushed to the Apple App Store. Manual steps are required before the app will be reviewed by Apple...

### Windows

Using [msix dart package][https://pub.dev/documentation/msix/latest/] it is simple to make a basic `.msix` file that can be submitted to the Microsoft store which will apply their own certificate.

> Since version 1.114.0 the Microsoft Store has made it very difficult to update the application. They want the name changed and for all screenshots as well as the app icon to have copyrighted images remove 🤷‍♂️

The produced `.msix` files cannot be installed on their own, so the new process requires the use of [InnoSetup](https://jrsoftware.org/isdl.php).

### Web

Flutter web is not used, there is an entire React app. This build is relatively simple.


[flutter]: https://flutter.io
[codemagic]: https://codemagic.io
[githubReleases]: https://github.com/AssistantNMS/App/releases
