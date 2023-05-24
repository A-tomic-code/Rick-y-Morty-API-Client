import PropTypes from 'prop-types';
import { ResultCard } from '../ResultCard/ResultCard';
import { useSearchFilters } from '../../hooks/useSearchFilters';
import './ResultsGrid.css';
import {motion, AnimatePresence} from 'framer-motion'
import { useEffect, useState } from 'react';


export const ResultsGrid = ({ data }) => {

  const { filterData } = useSearchFilters();
  const [filteredData, setFilteredData] = useState(filterData())

  useEffect(() => {
    setFilteredData(filterData())
  }, [data, filterData])
  

  if (data.error) return <h1>{data.error}</h1>;

  return (
    <motion.section  className="results">
      <AnimatePresence>
      {filteredData.map((result) => (<ResultCard key={result.id} data={result} />))}
      </AnimatePresence>
    </motion.section>
  );
};

ResultsGrid.propTypes = {
  data: PropTypes.object,
};
