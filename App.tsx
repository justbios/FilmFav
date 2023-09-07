import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import RootNavigation from 'navigation/RootNavigation';

/*
1. Авторизація
1.1 логін
1.2 реєстрація
2. головний екран
3. інфо за фільм
4.улюблені фільми

*/


export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};