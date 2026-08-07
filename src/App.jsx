import { Route, Routes } from "react-router-dom"
import HowItWork from "./components/HowItWork/HowItWork"
import LandingPage from "./pages/LandingPage"
import Pricing from "./components/Pricing/Pricing"
import LoginPage from "./components/LoginPage/LoginPage"
import SignUp from "./components/SignUp/SignUp"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/how-it-works" element={<HowItWork/>} />
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/create" element={<SignUp/>}/>
    </Routes>


    
    </>
  )
}

export default App