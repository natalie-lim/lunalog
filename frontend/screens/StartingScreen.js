import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import moonImage from '../assets/moon.png';
import '../global.css';


export default function StartingScreen() {
    const navigation = useNavigation();

    return (
        <View className = 'flex-1'>
        <LinearGradient colors={['#4e4e5d', '#21303f']}
        style={{ flex: 1 }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}>
        <View className='items-center justify-center mt-28'>
            <Image className='w-52 h-52' source={moonImage}/>
        </View>
        <Text className='text-center text-6xl font-semibold text-white mt-32'> L U N A L O G</Text>
        <Text className='text-center text-xl text-white mt-4 tracking-widest'> grow brighter like the moon </Text>
        
        {/* buttons */}
        
        <View className='items-center'>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}
            className='mt-20 bg-white h-16 w-96 justify-center rounded-3xl'>
            <Text className='pb-16 text-center font-medium text-3xl text-custom-darker-blue mt-8 tracking-widest'>login</Text>
            </TouchableOpacity>
        </View>

        <View className='items-center'>
            <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}
            className='mt-8 bg-white h-16 w-96 justify-center rounded-3xl'>
            <Text className='pb-16 text-center font-medium text-3xl text-custom-darker-blue mt-8 tracking-widest'>sign up</Text>
            </TouchableOpacity>
        </View>


        </LinearGradient>
        </View>
    
    );
}
