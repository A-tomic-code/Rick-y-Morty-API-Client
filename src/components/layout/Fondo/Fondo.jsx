import { motion } from 'framer-motion';
import './Fondo.css';

export const Fondo = () => {
  const padding = 150;

  const boxes = [];
  for (let x = -padding; x < innerWidth; x += padding) {
    for (let y = -padding; y < innerHeight; y += padding) {
      const box = (
        <motion.div
          initial={{ 
            scale: 0,
            opacity: Math.random()
          }}
          animate={{
            filter: [`blur(0px)`,`blur(5px)`,`blur(1px)`],
            scale: [0, Math.random() - .2, 0],
            rotate: [0, 360, 0],
            
          }}
          style={{
            top: y,
            left: x,
          }}
          transition={{
            duration: 15,
            delay:Math.random() * 10,
            // ease: 'easeInOut',
            repeat: Infinity,
          }}
          className="box"
          key={x+'-'+y}
        />
      );

      boxes.push(box);
    }
  }

  return (
    <div className="background">
      {boxes}
    </div>
  );
};
