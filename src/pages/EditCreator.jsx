import { useState } from "react";
import { supabase } from "../client";

function EditCreator(){
    const creatorJSON = localStorage.getItem('creatorData')
    const creatorData = JSON.parse(creatorJSON);
    
    const { name, url, description, imageURL } = creatorData;


    const [tempUser, setTempUser] = useState({
        name: name || '',
        url: url || '',
        description: description || '',
        imageURL: imageURL || ''
    });

    if (!creatorData) {
        return <div>No creator data available</div>;
    }


    function handleAddUser(event) {
        setTempUser(prevData => ({ ...prevData, [event.target.name]: event.target.value }));
    }
    
    async function updateUser(event) {
        event.preventDefault(); 
    
        const { error } = await supabase
          .from('creators')
          .update({
            name: tempUser.name,
            url: tempUser.url,
            description: tempUser.description,
            imageURL: tempUser.imageURL
          })
          .eq('name', name);
    
        if (error) {
          console.error('Error updating creator:', error.message);
        } else {
          console.log('Creator updated successfully');
          //Clear the form or show a success message
          setTempUser({ name: '', url: '', description: '', imageURL: '' });
        }
      }

    return(
        <div>
            <h2>Edit Creator {name}</h2>
            <form className="form-container" onSubmit={updateUser}>
                <input
                type="text"
                placeholder={name}
                name="name"
                value={tempUser.name} // Bind the input value to state
                onChange={handleAddUser}
                />
                <input
                type="text"
                placeholder={url}
                name="url"
                value={tempUser.url} // Bind the input value to state
                onChange={handleAddUser}
                />
                <input
                type="text"
                placeholder={description}
                name="description"
                value={tempUser.description} // Bind the input value to state
                onChange={handleAddUser}
                />
                <input
                type="text"
                placeholder={imageURL}
                name="imageURL"
                value={tempUser.imageURL} // Bind the input value to state
                onChange={handleAddUser}
                />
            <button type='submit'>Add Creator</button>
            </form>

        </div>
        


    )
}

export default EditCreator;