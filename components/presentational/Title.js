/** simple componente para el titulo de la app */
import React from "react";
import { StyleSheet, Text, View } from 'react-native'

export default function Title({ children }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(120, 80, 200)',
    padding: 15,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
})