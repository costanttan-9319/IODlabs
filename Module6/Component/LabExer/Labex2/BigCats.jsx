import { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from './AddCatForm'; //Exercise 5

const initialCats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://thomsonsafaris.com/wp-content/uploads/2012/12/cheetah-running-turn_1758173843.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://www.cattales.org/wp-content/uploads/sites/499/2025/10/Hope-8x10-1-edited.jpg' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://lazoo.org/wp-content/uploads/2020/02/Jaguar-Female-JEP_6234-1.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://img.freepik.com/free-photo/african-leopard-sitting-tree-looking-around-jungle_181624-18091.jpg?semt=ais_rp_50_assets&w=740&q=80' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'data:image/jpeg;base64,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' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://www.science.org/cms/10.1126/science.aas9893/asset/b3064092-042e-405f-a8c7-1098268b11dc/assets/graphic/359_1110_f1.jpeg' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://images.ctfassets.net/rt5zmd3ipxai/2TtovnO1qnGJyPwtyuVOdU/8ddc745eca71320d2ea1d05679f81cb2/NVA-tiger.jpg?fit=fill&fm=webp&h=578&w=1070&q=72,%20https://images.ctfassets.net/rt5zmd3ipxai/2TtovnO1qnGJyPwtyuVOdU/8ddc745eca71320d2ea1d05679f81cb2/NVA-tiger.jpg?fit=fill&fm=webp&h=1156&w=2140&q=72' },
];


 //Exercise 4: We set up our state. 'currentCats' holds the data we currently want to show on screen.
function BigCats() {
  const [currentCats, setCurrentCats] = useState(initialCats);

// Exercise 4:Sorting Function
  const handleSortAlphabetically = () => {
    const sortedCats = [...currentCats].sort((a, b) => a.name.localeCompare(b.name));
    setCurrentCats(sortedCats);
  };

// Exercise 4:Reversing Function
  const handleReverseList = () => {
    const reversedCats = [...currentCats].reverse();
    setCurrentCats(reversedCats);
  };

  // Exercise 4:Filtering Function
  const handleFilterPanthera = () => {
    const pantheraCats = initialCats.filter(cat => cat.latinName.includes('Panthera'));
    setCurrentCats(pantheraCats);
  };

  // Exercise 4: Reset Function
  const handleResetList = () => {
    setCurrentCats(initialCats);
  };

  // Exercise5: Add and Delete Handlers 
  const handleAddCat = (newCat) => {
    setCurrentCats([...currentCats, newCat]);
  };

  const handleDeleteCat = (idToDelete) => {
    setCurrentCats(currentCats.filter(cat => cat.id !== idToDelete));
  };



  return (
    <div className="BigCats">
        <div className="cat-card">
      <h2>Big Cats</h2>
      </div>

      {/* Exercise 5: render and pass it to the handleAddCat function*/}
      <AddCatForm onAddCat={handleAddCat} />

{/* Exercise 4: Function using onclick */}
      <div className="cat-controls">
        <button onClick={handleSortAlphabetically}>Sort A-Z</button>
        <button onClick={handleReverseList}>Reverse List</button>
        <button onClick={handleFilterPanthera}>Show Panthera Family</button>
        <button onClick={handleResetList}>Reset List</button>
      </div>


      <ul>
        {currentCats.map(cat => (
          <SingleCat 
            key={cat.id} 
            id={cat.id} // Exercise 5: to pass down id 
            name={cat.name} 
            latinName={cat.latinName} 
            image={cat.image} 
            onDelete={handleDeleteCat} //Exercise 5: to delete 
          />
        ))}
      </ul>
    </div>
  );
}

export default BigCats;