import React from 'react'

import Home from './component/Home/Home'
import Resturant from './component/basics/Resturant'
import UseState from './component/Hooks/useState'
import UseEffect from './component/Hooks/useEffect'
import UseReducer from './component/Hooks/useReducer'
import Todo from "./component/todoreact/todo"
import Temp from "./component/weather/temp"
import Error from "./component/notfound/error"
import { Routes, Route } from "react-router-dom"

// const myStyle = {color: "red"}


// const App = () => {
//   return (
//     <>
//       <MyName />
//       <h1 className='myClassname'>Hello World!</h1><br/>
//       Welcome to First React App
//       <p>Awesome</p> 
//       <MyName />
//     </>
//   )
// }

// const MyName = () => {
//   return <h1  style={myStyle}>Nawaz</h1>
// }

// how react is actually into it

// const App = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "Hello Worl!"));
// }



/**
 * Restaurant component for project-1
 */

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/resturant" element={<Resturant />} />

        <Route path="/usestate" element={<UseState />} />

        <Route path="/useeffect" element={<UseEffect />} />

        <Route path="/usereducer" element={<UseReducer />} />

        <Route path="/todo" element={<Todo />} />

        <Route path="/wheather" element={<Temp />} />

        <Route path="*" element={<Error />} />

      </Routes>
    </>
  )
}

export default App;