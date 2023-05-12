import { Fondo } from './components/layout/Fondo/Fondo'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchPage from './components/SearchPage/SearchPage'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'
import ResultsPage from './components/ResultsPage/ResultsPage'

function App() {

  return (
     <Provider store={store}>
      <main>
      
        <BrowserRouter>
          <Fondo></Fondo>

          <Routes>
            <Route path='/' element={<SearchPage/>}/>
            <Route path='/results' element={<ResultsPage/>}/>
            <Route path='/test' element={<h1>test</h1>}/>
          </Routes>

        </BrowserRouter>

      </main>
     </Provider>
  )

  
}

export default App
