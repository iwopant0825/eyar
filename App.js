import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./View/Home";
import Stats from "./View/Stats";
import User from "./View/User";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle:{
            height:80,
            borderTopWidth:2,
            borderRightWidth:2,
            borderLeftWidth:2,
            borderColor:'#D9D9D9',
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
          },
          tabBarLabelStyle: {
            marginBottom: 15, // 텍스트 위치 조정
            fontSize:14,
          },
          tabBarIconStyle: {
            marginTop: 10, // 아이콘 위치 조정
          },
          tabBarActiveTintColor:'#0038FF',
          tabBarInactiveTintColor:'#808080'
        }}
        sceneContainerStyle={{
          backgroundColor:'white',
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          options={{
            title: "통계",
            tabBarIcon: ({ color, size }) => (
              <Icon name="stats-chart" size={size+5} color={color} />
            ),
          }}
          name="Stats"
          component={Stats}
        />

        <Tab.Screen
          options={{
            title: "홈",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size+5} color={color} />
            ),
          }}
          name="Home"
          component={Home}
        />

        <Tab.Screen
          options={{
            title: "프로필",
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" size={size+5} color={color} />
            ),
          }}
          name="User"
          component={User}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
