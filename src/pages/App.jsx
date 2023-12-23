import React from "react"
import { loginRegister } from "../route/RouteReduc"
import Home from "./Home"
import Login from "../auth/Login"


function App() {

  return (
    <>
     {loginRegister ? (
      <Home />
     ) : (
      <Login />
     )}
    </>
  )
}

export default App
