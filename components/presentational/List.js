/** componente para desplegar los To-Do's (Lista) */
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'

/** recibe los To-Do's y un callback para evento onPress en un To-Do */
export default function List({ items, onPressItem }) {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index}) => (
        <TouchableOpacity
          style={[styles.item, { backgroundColor: itemColor(index) }]}
          onPress={() => onPressItem(item.id)}
        >
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

/** genera un bg color para el item */
function itemColor(index) {
  return `rgba(150, 108, 212, ${Math.max(1 - index / 10, 0.4)})`
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 1,
    padding: 15
  },
  title: {
    color: 'white',
  },
})