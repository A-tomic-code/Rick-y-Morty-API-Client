import { Fondo } from './components/layout/Fondo/Fondo';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import SearchPage from './components/pages/SearchPage/SearchPage';

function App() {
  return (
    <Provider store={store}>
      <main>
        <Fondo></Fondo>
        <SearchPage></SearchPage>
      </main>
    </Provider>
  );
}

export default App;
