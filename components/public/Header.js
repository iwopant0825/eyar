import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Header() {
  const navigate = useNavigation();
  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require("../../assets/iconeyar.png")}
        />
        <View style={styles.SettingAlert}>
          <Ionicons
            name="notifications"
            size={28}
            color={"#5E5E5E"}
            onPress={() => navigate.navigate("알람")}
          />
          <Ionicons
            name="settings"
            size={28}
            color={"#5E5E5E"}
            onPress={() => navigate.navigate("설정")}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    resizeMode: "contain",
    width: 80,
    height: "100%",
  },
  SettingAlert: {
    flexDirection: "row",
    gap: 15,
    height: "100%",
    alignItems: "center",
  },
});
