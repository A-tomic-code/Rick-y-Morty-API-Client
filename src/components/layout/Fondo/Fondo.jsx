import { useLayoutEffect, useRef } from 'react';
import './Fondo.css';
import { gsap } from 'gsap';

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export const Fondo = () => {
  const backgroundRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, backgroundRef);
    const padding = 150;
    const tl = gsap.timeline();

    //crear las cajas

    for (let x = -padding; x < innerWidth; x += padding) {
      for (let y = -padding; y < innerHeight; y += padding) {
        const box = document.createElement('div');
        box.classList.add('box');

        tl.set(box, {
          x: x,
          y: y,
          background: `rgba(0, ${Math.random() * 24 + 100}, ${Math.random()* 12 + 80},.5)`,
          scale: getRandomFloat(0, 0.6),
          opacity: getRandomFloat(0, 0.5),
        });

        backgroundRef.current.appendChild(box);
      }
    }

    //animar las cajas

    tl.to('.box', {
      // xPercent: '+=100',
      rotate: 90,
      ease: gsap.SlowMo,
      scale: 0,
      duration: 5,
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 5,
        from: 'random',
      },
    });

    return ctx.revert();
  }, []);

  return <div className="background" ref={backgroundRef}></div>;
};
