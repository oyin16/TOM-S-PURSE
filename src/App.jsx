
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import Aboutuspage from './Pages/Aboutuspage/Aboutuspage'
import Signup from './Pages/Signuppage/Signup'
import Login from './Pages/Loginpage/Login'
import { Routes, Route } from 'react-router'




function App() {
  return (
    <Routes>
       <Route path='/' element={<Homepage/>}/>
       <Route path='/about' element={<Aboutuspage/>}/>
       <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={ <Signup/>}/>
     </Routes>

  )
}

export default App
