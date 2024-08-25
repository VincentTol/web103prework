import '../App.css'
import { useState } from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

function AddCreator() {
  const navigate = useNavigate();


  const [tempUser, setTempUser] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });

  function handleAddUser(event) {
    setTempUser(prevData => ({ ...prevData, [event.target.name]: event.target.value }));
  }
  
  function handleViewCreators(){
    navigate("/");
  }

  async function createUser(event) {
    // Prevent default form submission behavior
    // 
    event.preventDefault(); 

    const { error } = await supabase
      .from('creators')
      .insert({
        name: tempUser.name,
        url: tempUser.url,
        description: tempUser.description,
        imageURL: tempUser.imageURL
      });

    if (error) {
      console.error('Error adding creator:', error.message);
      // Optionally, you can show an error message to the user here
    } else {
      console.log('Creator added successfully');
      // Optionally, you can clear the form or give a success message
      setTempUser({ name: '', url: '', description: '', imageURL: '' });
    }
  }

  return (
    <div>
      <h2>Add Creator</h2>
      <button  onClick= {handleViewCreators}>View Creators</button>

      <form onSubmit={createUser}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={tempUser.name} // Bind the input value to state
          onChange={handleAddUser}
        />
        <input
          type="text"
          placeholder="URL"
          name="url"
          value={tempUser.url} // Bind the input value to state
          onChange={handleAddUser}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={tempUser.description} // Bind the input value to state
          onChange={handleAddUser}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="imageURL"
          value={tempUser.imageURL} // Bind the input value to state
          onChange={handleAddUser}
        />
        <button type='submit'>Add Creator</button>
      </form>
    </div>
  );
}

export default AddCreator;
