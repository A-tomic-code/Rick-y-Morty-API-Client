import PropTypes from 'prop-types';
import { ResultCard } from '../ResultCard/ResultCard';
import './ResultsGrid.css';
import {motion, AnimatePresence} from 'framer-motion'
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';


export const ResultsGrid = ({ data }) => {


  let filteredData = useSelector(state => state.searchFilters.filtered) ?? []


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
