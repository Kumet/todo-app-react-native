# todo-app-react-native

## Setup

```bash
# プロジェクト作成
expo init todo-app-react-native

# Tailwind CSS + date-fns
#yarn add tailwind-rn
yarn add tailwind-rn@3.0.1
yarn add date-fns

# Redux Toolkit
yarn add @reduxjs/toolkit
yarn add react-redux

# React native navigation
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
expo install react-native-screens react-native-safe-area-context
yarn add react-native-gesture-handler
expo install dotenv expo-constants

# Firebase
yarn add firebase@9.0.0-beta.7

# rename app.json -> app.config.ts
import 'dotenv/config'
export default {
  ...
  extra: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  },
}


```