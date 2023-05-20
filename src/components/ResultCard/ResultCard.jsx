import PropTypes from 'prop-types';
import './ResultCard.css';
import {motion} from 'framer-motion'

const variants = {
  hidden: {
    opacity: 0,
    
  },
  visible: {
    opacity: 1,
  },
}

export const ResultCard = ({ data }) => {
  return (
    <motion.div 
      layout
      className="result-card"
      variants={variants}
      initial={'hidden'}
      animate={'visible'}
      exit={'hidden'}
      transition={{ duration: .2}}
    >

      <img src={data.image} alt="imagen encontrada como resultado" />

      <div className="basic-data">
        <h2 className="title">{data.name}</h2>
        <p className="text">{data.species}</p>
        <p className="text">{data.status}</p>
        <p className="text" title={data.location.name}>
          {data.location.name}
        </p>
        <p className="text">{data.gender}</p>
      </div>

    </motion.div>
  );
};

ResultCard.propTypes = {
  data: PropTypes.object,
};
