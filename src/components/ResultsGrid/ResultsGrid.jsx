import PropTypes from 'prop-types';
import './ResultsGrid.css';
import { ResultCard } from '../ResultCard/ResultCard';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

export const ResultsGrid = ({ data }) => {
  const container = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const cards = self.selector('.result-card');
      console.log(cards)

      cards.forEach((card) => {
        gsap.to(card, {
          y: "-50%",
          rotate: '180deg',
          opacity:0,
          scale:0,
          scrollTrigger: {
            trigger: card,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: 2,
          },
        });
      });
    }, container); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
  <section  ref={container} className='results'>
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
