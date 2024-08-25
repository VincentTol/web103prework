

const ViewCreator = () => {
    //Retrieve the local storage
    const creatorData = JSON.parse(localStorage.getItem('creatorData'));

    if (!creatorData) {
        return <div>No creator data available</div>;
    }

    const { name, url, description, imageURL } = creatorData;

    return(
    <div>
        <h2>{name}</h2>
        <p>{description}</p>
        {imageURL && <img src={imageURL} alt={`${name}'s image`} />}
        <a href={url} target="_blank" rel="noopener noreferrer">Visit Channel</a>
    </div>
    );
}

export default ViewCreator;

