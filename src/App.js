import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Root from './Components/Root';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Root/>
    </BrowserRouter>
    </>
  )
}

export default App