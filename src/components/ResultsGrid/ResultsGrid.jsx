import PropTypes from 'prop-types';
import './ResultsGrid.css';
import { ResultCard } from '../ResultCard/ResultCard';
import { gsap } from 'gsap';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useSearchFilters } from '../../hooks/useSearchFilters';
// gsap.registerPlugin(ScrollTrigger);

export const ResultsGrid = ({ data }) => {
  const container = useRef();
  const { filterData } = useSearchFilters();
  const [filteredData, setFilteredData] = useState([]);

   const fd = filterData()
   console.log(fd);


  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const cards = self.selector('.result-card');
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            scale: 0,
            opacity: '0',
          },

          {
            scrub: 3,
            duration: 0.5,
            opacity: 1,
            scale: 1,
            y: 0,
            delay: 0.2 * index,
            // scrollTrigger: {
            //   trigger: card,
            //   start: 'top 50%',
            //   end: 'top 10%',
            //   scrub: 2,
            // },
          }
        );
      });
    }, container); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, [data]);

  if (data.error) return <h1>{data.error}</h1>;

  return (
    <section ref={container} className="results">
      {fd.map((result, index) => (
        <ResultCard key={index} data={result} />
      ))}
    </section>
  );
};

ResultsGrid.propTypes = {
  data: PropTypes.object,
};
