import React, { useState, useEffect, useRef } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
export default function App() {
  return(
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.title}></View>
      <View style={styles.content}></View>
      <View style={styles.footer}></View>
      <StatusBar barStyle={'dark-content'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F6',
  },
  header:{
    flex:1,
    backgroundColor: 'red',
  },
  title:{
    flex:1,
    backgroundColor: 'blue',
  },
  content:{
    flex:7,
    backgroundColor: 'green',
  },
  footer:{
    flex:1,
    backgroundColor: 'orange',
  }
});
