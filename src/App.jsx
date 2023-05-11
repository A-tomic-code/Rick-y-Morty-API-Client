import { Fondo } from './components/layout/Fondo/Fondo'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchPage from './components/SearchPage/SearchPage'

function App() {

  return (
    
    <main>
      <BrowserRouter>
        <Fondo></Fondo>
        
        <Routes>
          <Route path='/' element={<SearchPage/>}/>
          <Route path='/test' element={<h1>test</h1>}/>
        </Routes>

      </BrowserRouter>
    </main>
  )

  
}

export default App
