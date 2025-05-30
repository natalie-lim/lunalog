import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { Image, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import moonImage from '../assets/moon.png';
import plusImage from '../assets/plus.png';

import useStore from '../store';

import '../global.css';



function SquareButton ({selected, onPress}) {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View className={`h-7 w-7 border-2 rounded-lg ${selected ? 'bg-white' : ''} border-white`}/>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default function SetSoloScreen () {
    const navigation = useNavigation();

    const addSubMin1 = useStore((state) => state.addSubMin1);
    const setAddSubMin1 = useStore((state) => state.setAddSubMin1);
    const addSubMax1 = useStore((state) => state.addSubMax1);
    const setAddSubMax1 = useStore((state) => state.setAddSubMax1);
    const multDivMin1 = useStore((state) => state.multDivMin1);
    const setMultDivMin1 = useStore((state) => state.setMultDivMin1);
    const multDivMax1 = useStore((state) => state.multDivMax1);
    const setMultDivMax1 = useStore((state) => state.setMultDivMax1);
    const addSubMin2 = useStore((state) => state.addSubMin2);
    const setAddSubMin2 = useStore((state) => state.setAddSubMin2);
    const addSubMax2 = useStore((state) => state.addSubMax2);
    const setAddSubMax2 = useStore((state) => state.setAddSubMax2);
    const multDivMin2 = useStore((state) => state.multDivMin2);
    const setMultDivMin2 = useStore((state) => state.setMultDivMin2);
    const multDivMax2 = useStore((state) => state.multDivMax2);
    const setMultDivMax2 = useStore((state) => state.setMultDivMax2);
    const timeDuration = useStore((state) => state.timeDuration);
    const setTimeDuration = useStore((state) => state.setTimeDuration);
    const addEnabled = useStore((state) => state.addEnabled);
    const setAddEnabled = useStore((state) => state.setAddEnabled);
    const subEnabled = useStore((state) => state.subEnabled);
    const setSubEnabled = useStore((state) => state.setSubEnabled);
    const multEnabled = useStore((state) => state.multEnabled);
    const setMultEnabled = useStore((state) => state.setMultEnabled);
    const divEnabled = useStore((state) => state.divEnabled);
    const setDivEnabled = useStore((state) => state.setDivEnabled);

    // Keep this local state
    const [open, setOpen] = useState(false);

    const [timeOptions, setTimeOptions] = useState([
        {label: '30 seconds', value: 30}, 
        {label: '60 seconds', value: 60},
        {label: '120 seconds', value: 120},
        {label: '300 seconds', value: 300},
        {label: '600 seconds', value: 600},
    ])

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
                <View className="m-4 mt-5">
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

                <View className='z-50 pt-4 flex-row'>

                    <Text className='text-2xl text-white mt-2 ml-4 font-semibold tracking-widest'>time limit:       </Text>
    
                    <DropDownPicker
                        open={open}
                        value={timeDuration}
                        items={timeOptions}
                        placeholder="no time limit"
                        setOpen={setOpen}
                        setValue={setTimeDuration}
                        setItems={setTimeOptions}
                        style={{
                            width: 210,
                            minHeight: 36, 
                            borderRadius: 20,
                            paddingHorizontal: 12,
                            zIndex: 1000,
                        }}
                        textStyle={{
                            textAlign: 'center',
                            fontSize: 14,
                        }}
                        dropDownContainerStyle={{
                            width: 210,
                            borderRadius: 15,
                            marginTop: 4,
                            zIndex: 1000,
                        }}
                        />   
                </View>

                <View className=' pt-4'>
                    <Text className='text-2xl text-white mt-2 ml-4 font-semibold tracking-widest'>select operations (min. one):</Text>
                    <View className='justify-around flex-row mt-4'>
                        <View className='flex-row'>
                            <SquareButton selected={addEnabled} onPress = {()=> {setAddEnabled(!addEnabled)}}/>
                            <Text className='-mt-2 pl-2 text-center text-4xl text-white'>+</Text>
                        </View>
                        <View className='flex-row'>
                            <SquareButton selected={subEnabled} onPress = {()=> {setSubEnabled(!subEnabled)}}/>
                            <Text className='-mt-2 pl-2 text-center text-4xl text-white'>–</Text>
                        </View>
                        <View className='flex-row'>
                            <SquareButton selected={multEnabled} onPress = {()=> {setMultEnabled(!multEnabled)}}/>
                            <Text className='-mt-2 pl-2 text-center text-4xl text-white'>×</Text>
                        </View>
                        <View className='flex-row'>
                            <SquareButton selected={divEnabled} onPress = {()=> {setDivEnabled(!divEnabled)}}/>
                            <Text className='-mt-2 pl-2 text-center text-4xl text-white'>÷</Text>
                        </View>
                        
                    </View>
                </View>

                <View className='items-center pt-4'>
                    <TouchableOpacity onPress={() => navigation.navigate('SoloGameScreen')}
                    className='border-2 border-white opacity-0% h-14 w-96 justify-center rounded-3xl '>
                    <Text className='pb-16 text-center font-medium text-3xl text-white mt-8 tracking-widest'>start</Text>
                    </TouchableOpacity>
                </View>

                <View className='items-center pt-4'>
                    <TouchableOpacity onPress={() => navigation.navigate('SetGameScreen')}
                    className='opacity-0% h-14 w-96 justify-center rounded-3xl bg-[#514e5c]'>
                    <Text className='pb-16 text-center font-medium text-3xl text-white mt-8 tracking-widest'>set as default</Text>
                    </TouchableOpacity>
                </View>

                </LinearGradient>
            </View>
        </TouchableWithoutFeedback>
    )
}