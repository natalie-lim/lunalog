
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import StartingScreen from './screens/StartingScreen';
import LoginScreen from 'screens/LoginScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  // defines the root of the app and wraps it in a navigationContainer, which enables navigation capabilities globally
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartingScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartingScreen" component={StartingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}