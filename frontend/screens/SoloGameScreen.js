import { LinearGradient } from 'expo-linear-gradient';
//useRef allows you to create a mutable object that persists across renders
import { useEffect, useState } from 'react';
import { Image, Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import moonImage from '../assets/moon.png';
import plusImage from '../assets/plus.png';
import '../global.css';
import useStore from '../store';


export default function SoloGameScreen () {
    const timeDuration = useStore((state) => state.timeDuration);
    const [time, setTime] = useState(timeDuration);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => (prev > 0 ? prev-1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                
                {/* problem input part */}
                <View className='pt-32 flex-row iterms-center justify-center'>
                    <Text className='text-center text-4xl font-semibold text-white mt-12'>102 + 5 = </Text>
                    <TextInput 
                        className='pt-2 mt-8 ml-2 w-44 h-16 border-2 border-white text-white text-4xl font-semibold text-center justify-center'
                        keyboardType='numeric'
                    >
                    </TextInput>
                </View>
                    
                {/* timer */}
                <View className="flex-row items-center justify-center pt-8">
                    <Text className='text-center text-2xl font-semibold text-white mt-2 tracking-widest'>seconds left: {time}</Text>
                </View>

                </LinearGradient>
            </View>
        </TouchableWithoutFeedback>
    )
}