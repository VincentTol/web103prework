import { useState } from 'react'
import { supabase } from './client'
import { useEffect } from 'react';
import PersonCard from './components/personCard'

import './App.css'

function App() {
  const [influencers, setInfluencers] = useState([]);

  const [tempUser, setTempUser] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    const {data} = await supabase
      .from('creators')
      .select('*')
      setInfluencers(data)
  };
  
  function handleAddUser(event){
    setTempUser(prevData => {return {...prevData, [event.target.name]:event.target.value}})
  }

  async function createUser(){
    await supabase
    .from('creators')
    .insert({name: tempUser.name, url: tempUser.url, description: tempUser.description, imageURL: tempUser.imageURL}) 
  }

  async function handleDeleteCreator(username){
    const { error } = await supabase
    .from('creators')
    .delete()
    .eq('name', username);

    if (!error) {
      setInfluencers((prev) => prev.filter(creator => creator.name !== username));
    }
  }

  console.log(tempUser);

  return (
    <>
      <h2>CreatorVerse</h2>
      
      <form onSubmit={createUser}>
        <input 
          type = "text"
          placeholder= "Name"
          name = "name"
          onChange = {handleAddUser}
        />
        <input 
          type = "text"
          placeholder= "url"
          name = "url"
          onChange = {handleAddUser}
        />
        <input 
          type = "text"
          placeholder= "description"
          name = "description"
          onChange = {handleAddUser}
        />
        <input 
          type = "text"
          placeholder= "image IURL"
          name = "imageURL"
          onChange = {handleAddUser}
        />
        <button type='submit'>Add Creator</button>
      </form>

      <div className='person-card-container'>
        {influencers.map((influencer) => (
            <PersonCard
              key={influencer.name} // Assuming each influencer has a unique `id`
              name={influencer.name}
              url={influencer.url}
              description={influencer.description}
              imageURL={influencer.imageURL}
              onDelete={handleDeleteCreator}
            />
          ))}
      </div>
    
    </>
  )
}

export default App
