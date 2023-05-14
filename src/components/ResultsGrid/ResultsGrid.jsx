import PropTypes from 'prop-types';
import './ResultsGrid.css';
import { ResultCard } from '../ResultCard/ResultCard';

export const ResultsGrid = ({ data }) => {
  console.log (data)
 
  return (
  <section className='results'>
    {
      Object.keys(data).length && !Object.keys(data).includes('error')
      ? data.results.map(item => <ResultCard key={item.id} data={item} />)
      : data.error && <h1>No hay resultados {data.error}</h1>
    }
  </section>
  );
};

ResultsGrid.propTypes = {
  data: PropTypes.object,
};
