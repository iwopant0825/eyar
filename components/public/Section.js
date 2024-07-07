import { StyleSheet, Text, View } from "react-native";

export default function Section({children, style}) {
  return (
    <View style={[styles.contentContainer, style]}>
        {children}
    </View>
  );
}
const styles = StyleSheet.create({
    contentContainer:{
      width:"100%",
      height:100,
      backgroundColor:'white',
      borderRadius:10,
      marginTop:10,
    }
  });