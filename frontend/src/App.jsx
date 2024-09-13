
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Catalogue } from './pages/Catalogue'
import { Contact } from './pages/Contact'
function App() {
return(

   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/catalogue' element={<Catalogue/>}/>
       <Route path='/Contact' element={<Contact/>}/>
     </Routes>
   </BrowserRouter>


)

}

export default App
