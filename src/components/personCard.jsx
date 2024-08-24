import PropTypes from 'prop-types';
  
const PersonCard = ({ name, url, description, imageURL, onDelete }) => {
  return (
    <div className="person-card">
      {imageURL && <img src={imageURL} alt={`${name}'s image`} />}
      <div className='person-card-content'>
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Visit Channel</a>
        <button onClick = {() => onDelete(name)}>Delete Creator</button>
      </div>
    </div>
  );
};


PersonCard.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageURL: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
  };

export default PersonCard;