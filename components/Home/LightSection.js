import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { LightSensor } from "react-native-sensors";
import Section from "../public/Section";

export default function LightSection() {
  const [light, setLight] = useState(0);
  useEffect(() => {
    const subscription = LightSensor.subscribe(({ light }) => {
      setLight(light);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return (
    <>
      <Section>
        <Text>주변 빛 강도: {light}</Text>
      </Section>
    </>
  );
}
