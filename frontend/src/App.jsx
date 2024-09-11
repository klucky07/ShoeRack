
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Catalogue } from './pages/Catalogue'
function App() {
return(

   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/catalogue' element={<Catalogue/>}/>
     </Routes>
   </BrowserRouter>


)

}

export default App
