
import './ResultsPage.css';
import { ResultCard } from '../ResultCard/ResultCard';
import {useSelector} from 'react-redux'

const ResultsPage = () => {

  const data = useSelector(state => state.fetchData.data)

  return (
    
    <div className="results-page">
      
      <div className="search-bar">
        <h1>Finder</h1>

        <form>
          <input type="text" name="search" placeholder="Search" />
          <button type="button">Search</button>
        </form>

        
      </div>
  
      <div className="results-container">
        {Object.keys(data).length 
          ? Object.keys(data).includes('results')
            ? data.results.map(item => <ResultCard key={item.id}data={item}></ResultCard>)
            : <ResultCard data={data}></ResultCard>
          : <h1>NODATA</h1> }
      </div>
    </div>
  );
};

export default ResultsPage;
