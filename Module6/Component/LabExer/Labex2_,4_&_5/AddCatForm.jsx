import { useState } from 'react';

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCat = {
      id: Date.now(),
      name: name,
      latinName: latinName,
      image: image
    };


    onAddCat(newCat);
    setName('');
    setLatinName('');
    setImage('');
  };

  return (
    <div className="add-cat-container">
      <h3>Add a New Big Cat</h3>
      
      <form onSubmit={handleSubmit} className="add-cat-form">
        <label>
          Name:
          <input 
            type="text" 
            className="add-cat-input"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>

        <label>
          Latin Name:
          <input 
            type="text" 
            className="add-cat-input"
            value={latinName} 
            onChange={(e) => setLatinName(e.target.value)} 
            required 
          />
        </label>

        <label>
          Image URL:
          <input 
            type="url" 
            className="add-cat-input"
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
          />
        </label>

        <button type="submit" className="cat-button submit-btn">Add Cat</button>
      </form>
    </div>
  );
} 

export default AddCatForm;