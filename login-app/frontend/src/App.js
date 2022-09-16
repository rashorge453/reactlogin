
import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Welcome from "./Welcome"
import Navbar from "./Navbar"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route index element={<SignIn />}></Route>
          <Route path="/Welcome" element={<Welcome/>}></Route>
        </Routes>
        <ToastContainer theme="dark" />
      </div>
    </BrowserRouter>
  );
}

export default App