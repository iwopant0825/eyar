import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/public/Header";
import SoundSection from "../components/Home/SoundSection";
import AlertSection from "../components/Home/AlertSection";
import LightSection from "../components/Home/LightSection";
import SLevelSection from "../components/Home/SLevelSection";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.title}>
              <Text style={styles.titleContext}>
                안녕하세요 <Text style={styles.titleContextM}>서주환</Text>님
              </Text>
            </View>
  
            <View style={styles.content}>
              <SoundSection/>
              <SLevelSection/>
            </View>
          </ScrollView>          
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
  },

  title: {
    flex: 1,
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",
  },
  titleContext: {
    fontSize: 20,
    fontWeight: "normal",
  },
  titleContextM: {
    fontSize: 22,
    fontWeight: "bold",
  },

  content: {
    flex: 20,
  },
});
