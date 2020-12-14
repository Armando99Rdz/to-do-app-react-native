/** componente para capturar un nuevo To-Do */
import React, { useState } from "react";
import { StyleSheet, TextInput } from 'react-native'

/** recibe un texto placeholrder y funcion para lanzarse en el evento submit */
export default function Input({ placeholder, onSubmitEditing }) {
  const [text, setText] = useState('')

  return (
    <TextInput
      style={styles.input}
      value={text}
      placeholder={placeholder}
      onChangeText={(value) => setText(value)}
      onSubmitEditing={() => {
        if (!text) return // Don't submit if empty

        onSubmitEditing(text) // ejecuta el callback recibido
        setText('')
      }}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50
  }
})