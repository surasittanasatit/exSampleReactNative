** react-native-sqlite-storage ** 
1.set up patch-package for your project
2.open node_modules/react-native-sqlite-storage/react-native.config.js
3.edit as follows
    -			ios: {
    -				project: './platforms/ios/SQLite.xcodeproj'
    -			},
    +			ios: {},
4.run 
    npx patch-package react-native
at terminal
5.patch-package makes react-native-sqlite-storage+6.0.1.patch and add it to {$root}/patches
6.build your project!
