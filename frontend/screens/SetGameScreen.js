import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import moonImage from '../assets/moon.png';
import plusImage from '../assets/plus.png'
import '../global.css';

export default function SetGameScreen () {
    const [addSubMin1, setAddSubMin1] = useState(2);
    const [addSubMax1, setAddSubMax1] = useState(100)
    const [multDivMin1, setMultDivMin1] = useState(2);
    const [multDivMax1, setMultDivMax1] = useState(100);

    const [addSubMin2, setAddSubMin2] = useState(2);
    const [addSubMax2, setAddSubMax2] = useState(100)
    const [multDivMin2, setMultDivMin2] = useState(2);
    const [multDivMax2, setMultDivMax2] = useState(100);

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
                    <Text className='text-center text-6xl font-semibold text-white mt-12'>S O L O</Text>
                    <Text className='text-center text-2xl font-semibold text-white mt-2 tracking-widest'>Improve your skills</Text>
            
                {/* set ranges */}
                <View className="m-4 mt-8">
                    <Text className=' text-2xl text-white mt-2 font-semibold tracking-widest'>addition/subtraction range:</Text>
                    <View className="flex-row justify-center m-4">
                        <View className="flex-row">
                            <TextInput
                                placeholder="2"
                                placeholderTextColor={"black"}
                                keyboardType="numeric"
                                className="text-center w-16 h-8 bg-white rounded-full"
                                value = {addSubMin1}
                                onChange={setAddSubMin1}
                                >
                            </TextInput>
                            <Text className="pl-2 pr-2 font-bold text-3xl text-white">-</Text>
                            <TextInput
                                placeholder="100"
                                placeholderTextColor={"black"}
                                keyboardType="numeric"
                                className="text-center w-16 h-8 bg-white rounded-full"
                                value = {addSubMax1}
                                onChange={setAddSubMax1}
                                >
                            </TextInput>
                        </View>

                        <Text className="pl-8 pr-8 font-bold text-3xl text-white">+</Text>

                        <View className="flex-row">
                            <TextInput
                                placeholder="2"
                                placeholderTextColor={"black"}
                                keyboardType="numeric"
                                className="text-center w-16 h-8 bg-white rounded-full"
                                value = {addSubMin2}
                                onChange={setAddSubMin2}
                                >
                            </TextInput>
                            <Text className="pl-2 pr-2 font-bold text-3xl text-white">-</Text>
                            <TextInput
                                placeholder="100"
                                placeholderTextColor={"black"}
                                keyboardType="numeric"
                                className="text-center w-16 h-8 bg-white rounded-full"
                                value = {addSubMax2}
                                onChange={setAddSubMax2}
                                >
                            </TextInput>
                        </View>
                    </View>
                </View>

                <View>
                    <Text className=' text-2xl text-white mt-2 ml-4 font-semibold tracking-widest'>multiplication/division range:</Text>
                    <View className="flex-row justify-center m-4">
                        <View className="flex-row">
                            <TextInput
                                placeholder="2"
                                placeholderTextColor={"black"}
                                keyboardType="numeric"
                                className="text-center w-16 h-8 bg-white rounded-full"
                                value = {multDivMin1}
                                onChange={setMultDivMin1}
                                >
                            </TextInput>
                            <Text className="pl-2 pr-2 font-bold text-3xl text-white">-</Text>
                            <TextInput
                                placeholder="100"
                                placeholderTextColor={"black"}
                                keyboardType="numeric"
                                className="text-center w-16 h-8 bg-white rounded-full"
                                value = {multDivMax1}
                                onChange={setMultDivMax1}
                                >
                            </TextInput>
                        </View>

                        <Text className="pl-7 pr-7 font-bold text-3xl text-white">×</Text>

                        <View className="flex-row">
                            <TextInput
                                placeholder="2"
                                placeholderTextColor={"black"}
                                keyboardType="numeric"
                                className="text-center w-16 h-8 bg-white rounded-full"
                                value = {multDivMin2}
                                onChange={setMultDivMin2}
                                >
                            </TextInput>
                            <Text className="pl-2 pr-2 font-bold text-3xl text-white">-</Text>
                            <TextInput
                                placeholder="100"
                                placeholderTextColor={"black"}
                                keyboardType="numeric"
                                className="text-center w-16 h-8 bg-white rounded-full"
                                value = {multDivMax2}
                                onChange={setMultDivMax2}
                                >
                            </TextInput>
                        </View>
                    </View>
                </View>
        
                </LinearGradient>
            </View>
        </TouchableWithoutFeedback>
    )
}