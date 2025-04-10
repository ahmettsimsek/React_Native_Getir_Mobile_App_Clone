# React_Native_Getir_Mobile_App_Clone

## 🧩 1. Proje Başlatma ve Ortam Kurulumu
-> expo init komutu ile proje başlatıldı.

-> npm install komutlarıyla temel bağımlılıklar kuruldu.

Aşağıdaki kütüphaneler yüklendi:

### 📦Kurulum
```
npx create-expo-app LetgoClone
```

```
cd LetgoClone
```

```
npm start
```

### GetirClone/
- ├── assets/
- ├── node_modules/
- ├── .expo-shared/
- ├── .gitignore
- ├── app.json
- ├── App.tsx
- ├── babel.config.js
- ├── package.json
- ├── tsconfig.json
- └── yarn.lock

### 📦 React Navigation Kurulumu
```
npm install @react-navigation/native
```

### 📦 Ek bağımlılıklar (expo ile)
```
expo install react-native-screens react-native-safe-area-context
```
Bu iki paket @react-navigation/native ile birlikte çalışır, özellikle Android performansı ve güvenli alan için gereklidir.

### 📦 Alt sekmeli navigasyon (bottom tab navigation) sistemi kurmak için 
```
npm install @react-navigation/bottom-tabs
```
### 📦 Stack Navigator Kurulumu:
```
npm install @react-navigation/stack
```
### 📦 Masked View (gereklidir):
```
expo install @react-native-masked-view/masked-view
```

### 📦 @expo/vector-icons paketi kurulumu
```
npm install @expo/vector-icons
```
### 📦 kritik bir bağımlılık: react-native-gesture-handler
```
expo install react-native-gesture-handler
```

### 📦 Uygulamanı tekrar başlatmak için Expo’da şu komutu kullanabilirsin:
```
npm start
```
veya
```
expo start
```
