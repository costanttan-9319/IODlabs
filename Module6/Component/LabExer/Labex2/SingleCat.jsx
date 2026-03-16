// Added 'id' to the props list here
function SingleCat({ id, name, latinName, image, onDelete }) {

  
  return (
    <li className="single-cat">
      <img src={image} alt={name} width="400" />
      
      <div className="cat-header">
        <h3>{name}</h3>

        <button 
          className="delete-link" 
          onClick={() => onDelete(id)}
        >
          (Delete)
        </button>
      </div>
      
      <p><em>Latin Name:</em> {latinName}</p>
    </li>
  );
}

export default SingleCat;