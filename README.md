**Atmana — Guided Meditation & Affirmations**

- **Project**: Atmana is a lightweight meditation and affirmation app built with Expo + React Native. It includes guided meditations, an affirmation gallery, adjustable timers, and offline asset support.
- **Preview build**: https://expo.dev/accounts/rhv1501/projects/Atmana/builds/19ed785c-9d20-4df6-b6ef-41cf2ca0eec9

**Quick Summary**

- **Platform**: Android (Preview build available). Works on iOS when built.
- **Tech**: Expo, Expo Router, NativeWind (Tailwind), TypeScript, `expo-linear-gradient`, `expo-splash-screen`, and standard React Native APIs.

**Features**

- **Guided Meditations**: Full-screen background images with audio and countdown timers.
- **Adjustable Duration**: Users can set meditation duration using a modal.
- **Affirmations Gallery**: Browse categories and open individual affirmation detail pages.
- **Timers**: Start/stop countdown timers with a clear UI and custom font.
- **Local Assets**: Images and fonts bundled in `assets/` for offline use.
- **Deep Linking**: Uses Expo Router for typed routes and dynamic paths like `/meditate/[id]` and `/affirmations/[id]`.
- **Splash & Icons**: Custom splash and adaptive icon configured in `app.json` (note: custom native assets appear in dev/prod builds, not in Expo Go).

**Download**

- Preview build (Android):
  - `https://expo.dev/accounts/rhv1501/projects/Atmana/builds/19ed785c-9d20-4df6-b6ef-41cf2ca0eec9`
  - If you downloaded an APK from that build, install with `adb install -r path/to/Atmana.apk` or open the link on your Android device.

**Getting Started (Development)**

- Prerequisites:
  - Node.js (14+), `npm` or `yarn`
  - Expo CLI or use `npx` (no global install required)
  - For native builds: Android SDK / Android Studio or EAS Build account

- Install dependencies:
  - `npm install` or `yarn`

- Run in Expo (fast iteration — uses Expo Go):
  - `npx expo start`
  - Scan the QR code with Expo Go (note: custom splash/icon will not show in Expo Go)

- Create a local dev build (to test native icons/splash/fonts on device/emulator):
  - `npx expo prebuild --clean`
  - `npx expo run:android` (requires Android toolchain)

- Cloud build with EAS (recommended for distribution):
  - Install `eas-cli`: `npm i -g eas-cli`
  - Login: `eas login`
  - Build preview: `eas build -p android --profile preview`
  - Download the produced APK/AAB from the Expo dashboard and install on device

**Project Structure (important files)**

- **`app/`**: Expo Router routes and screens — entries like `(tabs)/affirmations/index.tsx` and `meditate/[id].tsx`.
- **`components/`**: Reusable UI components (`AppGradient`, `Custombutton`, `Guided`, etc.).
- **`assets/`**: Images, fonts, audio. Example fonts in `assets/fonts`.
- **`app.json`**: App config (icon, splash, adaptive icon, plugins).
- **`tailwind.config.js`**: NativeWind config for Tailwind-like styling.

**Notes & Gotchas**

- Expo Go will not show your native splash screen or app icon — use a dev build or EAS build to validate those assets.
- If you see the Expo logo after installing a build, uninstall the old app (`adb uninstall com.anonymous.Atmana`) and reinstall the built APK.
- Fonts: The app loads fonts via `expo-font` in `app/_layout.tsx`. If fonts aren't applied, restart Metro with cache cleared: `npx expo start --clear`.
- LinearGradient colors must be valid values (hex or `rgba()`); malformed colors will crash native modules (ensure `#` is present for hex colors).

**Troubleshooting**

- App shows `meditate/[id]` in the tab bar: Ensure detail screens are placed in the correct route group. This project uses a tabs segment and keeps detail routes outside the mounted tab list so they do not appear as tabs.
- If routes don't appear or you get routing warnings: stop Metro and restart with `npx expo start --clear`.
- Splash not visible in Expo Go: it is expected behavior; only dev/preview/prod builds include native splash assets.

**Contributing**

- Pull requests welcome. For significant changes, open an issue first to discuss the design.
- Keep UI changes consistent with Tailwind classes used across the project.

**License**

- MIT

**Contact & Maintainer**

- Project owner: `rhv1501` (Expo account). For questions about the preview build, use the Expo build page linked above.

---

If you'd like, I can also:

- add screenshots to this README (place images under `assets/images`)
- add Quick Start scripts to `package.json`
- create a short CONTRIBUTING.md template

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
