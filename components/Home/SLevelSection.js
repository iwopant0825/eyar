import React, { useEffect, useState } from "react";
import { Text, PermissionsAndroid, Platform } from "react-native";
import SoundLevel from "react-native-sound-level";
import Section from "../public/Section";

export default function SLevelSection() {
  const [decibelLevel, setDecibelLevel] = useState(null);

  useEffect(() => {
    const init = async () => {
      const granted = await requestMicrophonePermission();
      if (granted) {
        startListening();
      }
    };

    init();

    // 컴포넌트가 언마운트될 때 리스너를 정지시킵니다.
    return () => {
      stopListening();
    };
  }, []);

  const requestMicrophonePermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: "Microphone Permission",
        message:
          "This app needs access to your microphone to measure sound levels.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  };


  const startListening = () => {
    SoundLevel.start();
    SoundLevel.onNewFrame = (data) => {
      const rawValue = data.value;
      const decibelValue = convertToDecibel(rawValue);
      setDecibelLevel(decibelValue);
    };
  };

  const stopListening = () => {
    SoundLevel.stop();
    setDecibelLevel(null);
  };

  const convertToDecibel = (rawValue) => {
    // -160에서 0 사이의 값을 0에서 100 사이의 데시벨 값으로 변환합니다.
    const minRawValue = -160;
    const maxRawValue = 0;
    const minDecibel = 0;
    const maxDecibel = 100;

    // 비율 계산
    const ratio = (rawValue - minRawValue) / (maxRawValue - minRawValue);

    // 데시벨 값으로 변환
    return Math.max(
      minDecibel,
      Math.min(maxDecibel, ratio * (maxDecibel - minDecibel) + minDecibel)
    );
  };

  return (
    <Section>
      <Text>
        {decibelLevel !== null ? decibelLevel.toFixed(1) : "Measuring..."} dB
      </Text>
    </Section>
  );
}
