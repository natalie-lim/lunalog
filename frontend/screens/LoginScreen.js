import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import moonImage from '../assets/moon.png';
import '../global.css';


export default function LoginScreen() {
    const navigation = useNavigation();
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");

    return (
        <View className = 'flex-1'>
        <LinearGradient colors={['#4e4e5d', '#21303f']}
        style={{ flex: 1 }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}>
        <View className='items-center justify-center mt-32'>
            <Image className='w-16 h-16' source={moonImage}/>
        </View>
        <Text className='text-center text-6xl font-semibold text-white mt-12'> L O G I N</Text>
        <Text className='text-center text-2xl font-semibold text-white mt-2 tracking-widest'> welcome back </Text>
        
        {/* buttons */}
        
        <View className='items-center pt-8'>
        
            <TextInput
                placeholder="username"
                placeholderTextColor={"white"}
                className='w-96 pb-4 border-b-2 border-white text-center font-medium text-3xl text-white mt-8 tracking-widest'
                secureTextEntry
                value={username}
                onChange={setUsername}
            /> 
        </View>

        <View className='items-center'>
            <TextInput
                placeholder="password"
                placeholderTextColor={"white"}
                className='w-96 mb-12 pb-4 border-b-2 border-white text-center font-medium text-3xl text-white mt-8 tracking-widest'
                secureTextEntry
                value={password}
                onChange={setPassword}
            />
        </View>

        <View className='items-center'>
            <TouchableOpacity className='border-2 border-white opacity-0% h-14 w-96 justify-center rounded-3xl '>
            <Text className='pb-16 text-center font-medium text-3xl text-white mt-8 tracking-widest'>login</Text>
            </TouchableOpacity>
        </View>

        <View className='items-center'>
            <TouchableOpacity onPress={() => navigation.navigate('StartingScreen')}
            className='mt-8 opacity-0% h-14 w-96 justify-center rounded-3xl'>
            <Text className='pb-16 text-center font-medium text-xl text-white mt-8 tracking-widest'>back</Text>
            </TouchableOpacity>
        </View>

        </LinearGradient>
        </View>
    
    );
}
