import './ResultsPage.css';
import {Link} from 'react-router-dom'
import { ResultCard } from '../ResultCard/ResultCard';
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchData} from '../../slices/fetchDataSlice'

const ResultsPage = () => {
  const data = useSelector((state) => state.fetchData.data);
  const dispatch = useDispatch();
  const [query, setQuery] = useState();

  return (
    <div className="results-page">
      <div className="search-bar">
        <Link to='/'><h1>Finder</h1></Link>

        <form onSubmit={e => {
          e.preventDefault();
          fetchData(dispatch, query)
        }}>
          <input
            type="text"
            name="search"
            placeholder="Buscar"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button">Buscar</button>
        </form>
      </div>

      <div className="results-container">
        {Object.keys(data).length ? (
          Object.keys(data).includes('results') ? (
            data.results.map((item) => (
              <ResultCard key={item.id} data={item}></ResultCard>
            ))
          ) : (
            <ResultCard data={data}></ResultCard>
          )
        ) : (
          <h1>NODATA</h1>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;
