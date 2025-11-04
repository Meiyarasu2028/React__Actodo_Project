import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"
import Landing from "./Landing"


function App() {

  const [user, setuser] = useState([
    {
      username: "Meiy",
      password: "ms2028",
    }
  ])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login user={user} setuser={setuser} />} />
          <Route path="/login" element={<Login user={user} setuser={setuser}/>}></Route>
          <Route path="/signup" element={<Signup user={user} setuser={setuser} />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
