import { Route, Routes } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Background from "./Components/Background"
import Home from "./Pages/Home"
import Credits from "./Pages/Credits"
import ShaderShow from "./Pages/ShaderShow"

export const App: React.FC = () => {
    return <>
        <Background/>

        {/* Navbar */}
        <div className='z-1 relative'>
          <Navbar/>
        </div>

        {/* Main page stuff */}
        <div className='z-0 pt-2'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/shader" element={<ShaderShow />} />
          </Routes>
        </div>
    </>
}