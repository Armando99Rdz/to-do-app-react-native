/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useReducer } from "react";
import { View } from "react-native";

/** mis custom components */
import List from './components/presentational/List'
import Input from './components/presentational/Input'
import Title from './components/presentational/Title'
/** lógica para crear To-Do's, state inicial y funcion reducer */
import { actionCreators, reducer, initialState } from './components/todos'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <View>
      <Title>To-Do App</Title>
      <Input
        placeholder={'Type a todo, then hit enter!'}
        onSubmitEditing={(title) => dispatch(actionCreators.add(title))}
      />
      <List
        items={state.items}
        onPressItem={(id) => dispatch(actionCreators.remove(id))}
      />
    </View>
  )
}

export default App;