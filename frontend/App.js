
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartingScreen from './screens/StartingScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartingScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartingScreen" component={StartingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}