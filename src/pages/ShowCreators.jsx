import { useState } from 'react';
import { supabase } from '../client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonCard from '../components/personCard';
import '../App.css'

function ShowCreators() {
  const [influencers, setInfluencers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    const {data} = await supabase
      .from('creators')
      .select('*')
      setInfluencers(data)
  };
  
  const addCreatorButton = () => {
    navigate("/AddCreator")
  }

  return (
    <>
      <h2>CreatorVerse</h2>

      <button onClick={addCreatorButton}>Add Creator</button>
      
     
      <div className='person-card-container'>
        {influencers.map((influencer) => (
            <PersonCard
              key={influencer.name} // Assuming each influencer has a unique `id`
              name={influencer.name}
              url={influencer.url}
              description={influencer.description}
              imageURL={influencer.imageURL}
            />
          ))}
      </div>
    
    </>
  )
}

export default ShowCreators
