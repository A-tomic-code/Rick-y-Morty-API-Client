import { Fondo } from './components/layout/Fondo/Fondo'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchPage from './components/SearchPage/SearchPage'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

function App() {

  return (
     <Provider store={store}>
      <main>
      
        <BrowserRouter>
          <Fondo></Fondo>

          <Routes>
            <Route path='/' element={<SearchPage/>}/>
            <Route path='/test' element={<h1>test</h1>}/>
          </Routes>

        </BrowserRouter>

      </main>
     </Provider>
  )

  
}

export default App
