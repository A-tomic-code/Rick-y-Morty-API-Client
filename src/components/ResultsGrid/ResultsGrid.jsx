import PropTypes from 'prop-types';
import './ResultsGrid.css';
import { ResultCard } from '../ResultCard/ResultCard';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

// gsap.registerPlugin(ScrollTrigger);

export const ResultsGrid = ({ data }) => {
  const container = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const cards = self.selector('.result-card');
      console.log(cards);
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            scale: 0,
            opacity: '0',
            y: '-100%',
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

  return (
    <section ref={container} className="results">
      {Object.keys(data).length && !Object.keys(data).includes('error')
        ? data.results.map((item) => <ResultCard key={item.id} data={item} />)
        : data.error && <h1>No hay resultados {data.error}</h1>}
    </section>
  );
};

ResultsGrid.propTypes = {
  data: PropTypes.object,
};
