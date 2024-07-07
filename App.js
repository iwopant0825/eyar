import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./View/Home";
import Stats from "./View/Stats";
import User from "./View/User";
import { StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect } from "react";
import notifee from "@notifee/react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Setting from "./View/Setting";
import Alert from "./View/Alert";

export default function App() {
  useEffect(() => {
    async function requestPermissions() {
      // 알림 권한 요청
      const status = await notifee.requestPermission();
    }

    requestPermissions();
  }, []);
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} />
      <Stack.Navigator initialRouteName={"init"}>
        <Stack.Screen
          name="init"
          component={Init}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="설정" component={Setting} />
        <Stack.Screen name="알람" component={Alert} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Init() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 80,
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderLeftWidth: 2,
            borderColor: "#D9D9D9",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarLabelStyle: {
            marginBottom: 15, // 텍스트 위치 조정
            fontSize: 12,
          },
          tabBarIconStyle: {
            marginTop: 10, // 아이콘 위치 조정
          },
          tabBarActiveTintColor: "#0038FF",
          tabBarInactiveTintColor: "#808080",
        }}
        sceneContainerStyle={{
          backgroundColor: "white",
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          options={{
            title: "통계",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="stats-chart" size={size + 3} color={color} />
            ),
          }}
          name="Stats"
          component={Stats}
        />

        <Tab.Screen
          options={{
            title: "홈",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size + 3} color={color} />
            ),
          }}
          name="Home"
          component={Home}
        />

        <Tab.Screen
          options={{
            title: "프로필",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size + 3} color={color} />
            ),
          }}
          name="User"
          component={User}
        />
      </Tab.Navigator>
    </>
  );
}
