/** state inicial y función reducer para actualiar y eliminar los ToDo's */

/** crea un id random */
const randomId = () => Math.random().toString()

/** crea un To-Do con un id (recibe el texto) */
const createItem = (title) => ({ id: randomId(), title })

/** define los tipos de operaciones de nuestra Lista */
const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
}

/** define objetos para crear y eliminar To-Do's (se le pasan al método dispatch) */
export const actionCreators = {
  add: (title) => ({ type: types.ADD, payload: createItem(title) }),
  remove: (id) => ({ type: types.REMOVE, payload: id }),
}

/** simples datos de prueba iniciales */
export const initialState = {
  items: [
    createItem('Click to remove'),
    createItem('Learn React-Native 🔥️'),
    createItem('Setu Windows 10'),
  ],
}

/** función reducer (se le pasa al hook useReducer) para agregar y eliminar */
export function reducer(state, action) {
  switch (action.type) {
    case types.ADD: // agrega un nuevo To-Do
      // crea un nuevo array con los To-Do's actuales y el nuevo To-Do.
      return { ...state, items: [...state.items, action.payload] }
    case types.REMOVE: // elimina un To-Do
      return { 
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }
  }
}