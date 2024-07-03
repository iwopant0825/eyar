import { StyleSheet, Text, View } from "react-native";

export default function Stats() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}><Text>개발중임니다람쥐</Text></View>
        <View style={styles.title}></View>
        <View style={styles.content}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
  },
  header: {
    flex: 1,
  },
  title: {
    flex: 1,
  },
  content: {
    flex: 7,
  },
});
