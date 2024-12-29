import { ExpoConfig, ConfigContext } from "expo/config"
import "dotenv/config"

// Define the type for our extra/custom config values
type CustomExpoConfigExtra = {
  APP_NAME: string
  API_URL: string
  APP_URL: string
  eas: {
    projectId: string
  }
}

// Make the extra config values available to TypeScript
declare module "expo/config" {
  interface Constants {
    expoConfig: ExpoConfig & {
      extra: CustomExpoConfigExtra
    }
  }
}

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "native",
  slug: "native",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "gigflow",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  extra: {
    // client environment variables
    APP_NAME: process.env.APP_NAME,
    API_URL: process.env.API_URL,
    APP_URL: process.env.APP_URL,
  },
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
})
