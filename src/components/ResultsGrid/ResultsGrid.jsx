import PropTypes from 'prop-types';
import { ResultCard } from '../ResultCard/ResultCard';
import { useSearchFilters } from '../../hooks/useSearchFilters';
import './ResultsGrid.css';
import {motion, AnimatePresence} from 'framer-motion'


export const ResultsGrid = ({ data }) => {

  const { filterData } = useSearchFilters();
  const filteredData = filterData();


  if (data.error) return <h1>{data.error}</h1>;

  return (
    <motion.section  className="results">
      <AnimatePresence>
      {filteredData.map((result) => (
        <ResultCard key={result.id} data={result} />
      ))}
      </AnimatePresence>
    </motion.section>
  );
};

ResultsGrid.propTypes = {
  data: PropTypes.object,
};
