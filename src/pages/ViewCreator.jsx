import { useNavigate } from "react-router-dom";
import "../index.css"
import { supabase } from "../client";

const ViewCreator = () => {
    //Retrieve the local storage
    const creatorJSON = localStorage.getItem('creatorData')
    const creatorData = JSON.parse(creatorJSON);
    const navigate = useNavigate();

    if (!creatorData) {
        return <div>No creator data available</div>;
    }

    const { name, url, description, imageURL } = creatorData;

    async function handleDeleteCreator(username){
        const { error } = await supabase
        .from('creators')
        .delete()
        .eq('name', username);

        if(error){
            console.log("There was an error deleting");
        }
        
        navigate("/ShowCreators");
    }

    return(
        <div>
            <h1>{name}</h1>
            <button onClick={() => navigate("/ShowCreators")}>View Creators</button>
            <button onClick={() => navigate("/AddCreator")}>Add Creator</button>
            <div className="person-card">
                {imageURL && <img src={imageURL} alt={`${name}'s image`} />}
                <div className='person-card-content'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <a href={url} target="_blank" rel="noopener noreferrer">Visit Channel</a>
                    <button onClick = {() => handleDeleteCreator(name)}>Delete Creator</button>
                </div>
                <button onClick= {() => navigate("/EditCreator")}>Edit Creator</button>

            </div>
        </div>
    );
}

export default ViewCreator;

