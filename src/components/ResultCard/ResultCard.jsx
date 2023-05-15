import PropTypes from 'prop-types';
import './ResultCard.css';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react';


gsap.registerPlugin(ScrollTrigger)
export const ResultCard = ({ data, parentRef }) => {
  const container = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const cards = self.selector('.result-card');

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

  
  return (<div className="card-wrapper" ref={container}>
    <div className="result-card" >
      <img src={data.image} alt="imagen encontrada como resultado" />
      
      <div className="basic-data">
        <h2 className="title">{data.name}</h2>
        <p className="text">{data.species}</p>
      </div>
      

      <ul>
        {Object.keys(data).map((key, index) => {
          const filter =
            key == 'status' ||
            key == 'type' ||
            key == 'gender' ||
            key == 'origin' ||
            key == 'location';

          const returnValue = filter ? (
            <li key={index}>
              <h3 className="subtitle">{`${key[0].toUpperCase()}${key.substring(1)}`}</h3>
              <p className="text">{data[key].toString()}</p>
            </li>
          ) : null;

          return returnValue;
        })}

      </ul>
    </div>
  </div>
  );
};

ResultCard.propTypes = {
  data: PropTypes.object,
};
