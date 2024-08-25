import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PersonCard = ({ name, url, description, imageURL }) => {
  const navigate = useNavigate();

  function HandleView(){

    //Save the data to local storage
    const creatorData = {name, url, description, imageURL};

    localStorage.setItem('creatorData', JSON.stringify(creatorData));
    //You can send state parameter in navigate function
    //This is a shallow copy however
    navigate("/ViewCreator");
  }
  
  return (
    <div className="person-card">
      {imageURL && <img src={imageURL} alt={`${name}'s image`} />}
      <div className='person-card-content'>
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Visit Channel</a>
        <button onClick={HandleView}>View Creator</button>
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