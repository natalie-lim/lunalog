import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import moonImage from '../assets/moon.png';
import plusImage from '../assets/plus.png'
import '../global.css';

export default function SetGameScreen () {
    return (
        <View className = 'flex-1'>
            <LinearGradient colors={['#4e4e5d', '#21303f']}
            style={{ flex: 1 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}>
                <View className='items-center justify-center mt-32 flex-row'>
                    <Image className="w-4 h-4 m-4" source={plusImage} />
                    <Image className='w-16 h-16' source={moonImage}/>
                    <Image className="w-4 h-4 m-4" source={plusImage} />
                </View>
                <Text className='text-center text-6xl font-semibold text-white mt-12'>S O L O</Text>
                <Text className='text-center text-2xl font-semibold text-white mt-2 tracking-widest'>Improve your skills</Text>
        
            {/* set ranges */}
            <View className="m-8">
                <Text className=' text-2xl text-white mt-2 font-semibold tracking-widest'>addition/subtraction range:</Text>

            </View>
    
            </LinearGradient>
        </View>
    )
}