import React, { useState, useEffect } from 'react';
import Section from "../public/Section";
import systemSetting from "react-native-system-setting";
import { StyleSheet, Text } from 'react-native';
import AlertMSG from '../../hooks/AlertMSG';

export default function SoundSection() {

    const [volume, setVolume] = useState(0); // 1. 볼륨 상태 변수 생성

    useEffect(() => {

        systemSetting.getVolume().then(currentVolume => {
            setVolume(Math.round(currentVolume * 100)); // 현재 볼륨을 상태로 설정
        });
        // 2. 컴포넌트 마운트 시 볼륨 리스너 추가
        const volumeListener = systemSetting.addVolumeListener((data) => {
            setVolume(Math.round(data.value * 100)); // 3. 볼륨 변경 시 상태 업데이트
        });

        // 4. 컴포넌트 언마운트 시 리스너 제거
        return () => {
            systemSetting.removeVolumeListener(volumeListener);
        };
    }, []);

    useEffect(()=>{
        if(volume>=60){
            AlertMSG("Volume", "volume", "볼륨 너무 높음 경고", "볼륨 너무 높음 님아")
            systemSetting.setVolume(0.5)
        }
    },[volume])


    return (
        <>
            <Section style={styles.section}>
                <Text>현재 볼륨 용량 {volume}</Text> 
            </Section>
        </>
    );
}

const styles = StyleSheet.create({
    section:{
        justifyContent:'center',
        alignItems:'center',
    },
})