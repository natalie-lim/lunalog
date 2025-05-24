
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import LoginScreen from 'screens/LoginScreen';
import SetGameScreen from 'screens/SetGameScreen';
import SignupScreen from 'screens/SignupScreen';
import StartingScreen from './screens/StartingScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  // defines the root of the app and wraps it in a navigationContainer, which enables navigation capabilities globally
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartingScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartingScreen" component={StartingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="SetGameScreen" component={SetGameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}