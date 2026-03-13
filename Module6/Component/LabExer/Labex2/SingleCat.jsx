// this file is used to create image properties for the pictures of the cats

function SingleCat({ name, latinName, image }) {
  return (
    <li className="single-cat" style={{ marginBottom: '60px', border: '1px solid #ccc', padding: '20px', listStyle: 'none' }}>
      <img src={image} alt={name} width="400" style={{ borderRadius: '8px' }} />
      <h3>{name}</h3>
      <p><em>Latin Name:</em> {latinName}</p>
    </li>
  );
}

export default SingleCat;