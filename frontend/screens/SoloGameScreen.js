import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef, useState } from "react";
//useRef allows you to create a mutable object that persists across renders
import { Image, Keyboard, TouchableWithoutFeedback, View, Text} from 'react-native';
import moonImage from '../assets/moon.png';
import plusImage from '../assets/plus.png';
import '../global.css';
import useStore from '../store';



export default function SoloGameScreen () {
    const time = useStore((state) => state.timeDuration);

    const Ref = useRef(null);
    const [timer, setTimer] = useState("00:00:00");

    const getTimeRemaining = (e) => {
        const total =
            Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        const hours = Math.floor(
            (total / 1000 / 60 / 60) % 24
        );
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };

    const startTimer = (e) => {
        let { total, hours, minutes, seconds } =
            getTimeRemaining(e);
        if (total >= 0) {
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9
                    ? minutes
                    : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    const clearTimer = (e) => {
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next
        setTimer("00:00:10");

        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();

        // This is where you need to adjust if
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    };

    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible

    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, [time]);

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
                
                    
                {/* timer */}
                <View className="flex-row items-center justify-center pt-56">
                    <Text className='text-center text-2xl font-semibold text-white mt-2 tracking-widest'>seconds left: {timer}</Text>
                </View>

                </LinearGradient>
            </View>
        </TouchableWithoutFeedback>
    )
}