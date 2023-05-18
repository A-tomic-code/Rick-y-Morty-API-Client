import PropTypes from 'prop-types';
import './ResultCard.css';

export const ResultCard = ({ data }) => {
  return (
    <div className="result-card">
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

      {/* <ul>
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

      </ul> */}
    </div>
  );
};

ResultCard.propTypes = {
  data: PropTypes.object,
};
