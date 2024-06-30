import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { gyroscope } from 'react-native-sensors';
import proximity, { SubscriptionRef } from 'rn-proximity-sensor';

export default function App() {
  const [gyroData, setGyroData] = useState({ x: 0, y: 0, z: 0 });
  const [proximityData, setProximityData] = useState({ distance: 10, is_close: false });
  const sensorSubscriptionRef = useRef<SubscriptionRef | null>(null);

  useEffect(() => {
    // 자이로스코프 데이터 구독
    const gyroSubscription = gyroscope.subscribe(
      ({ x, y, z, timestamp }) => {
        setGyroData({ x, y, z });
      },
      error => console.log("The sensor is not available"),
      { interval: 100 } // 100ms = 0.1초
    );

    // 근접 센서 데이터 구독
    sensorSubscriptionRef.current = proximity.subscribe((values) => {
      setProximityData(values);
    });

    // 구독 해제
    return () => {
      gyroSubscription.unsubscribe();
      if (sensorSubscriptionRef.current) {
        sensorSubscriptionRef.current.unsubscribe();
        sensorSubscriptionRef.current = null;
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>자이로스코프 데이터:</Text>
      <Text>X: {gyroData.x.toFixed(2)}</Text>
      <Text>Y: {gyroData.y.toFixed(2)}</Text>
      <Text>Z: {gyroData.z.toFixed(2)}</Text>

      <Text>근접 센서 데이터:</Text>
      <Text>Distance: {proximityData.distance} cm</Text>
      <Text>Is Close: {proximityData.is_close ? "Yes" : "No"}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
