import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import 'react-native-gesture-handler';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import * as Linking from 'expo-linking';

LogBox.ignoreAllLogs();

const prefix = Linking.createURL('/');

const linkingConfig = {
  prefixes: [prefix],
  config: {
    screens: {
      Search: {
        screens: {
          CartScreen: {
            path: 'cartScreen',
            parse: {
              message: (message: string) => `mesajımız-${message}`,
            },
          },
        },
      },
    },
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer linking={linkingConfig}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
