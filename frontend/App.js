import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, View } from 'react-native';
import moonImage from './assets/moon.png';
import './global.css';

export default function App() {
  return (
    <View className = 'flex-1'>
      <LinearGradient colors={['#4e4e5d', '#21303f']}
      style={{ flex: 1 }}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}>
        <View className='items-center justify-center mt-28'>
          <Image className='w-52 h-52' source={moonImage}/>
        </View>
      <Text className='text-center text-6xl text-white mt-32'> L U N A L O G</Text>
      <Text className='text-center text-xl text-white mt-8 tracking-widest'> grow brighter like the moon </Text>
      </LinearGradient>

    </View>
    
  );
}
