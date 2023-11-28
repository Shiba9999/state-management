import React from 'react'
import InputForm from './components/InputForm'
import Todos from './components/Todos'
import { store } from './context/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}  >
    <InputForm/>
    <Todos/>
    </Provider>
  )
}

export default App