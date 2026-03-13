import './App.css'; 
import Greeting from '../Component/LabExer/Labex1/Greeting';
import Comment from '../Component/ClassExer/ClassEx1/Comment';
import BigCats from '../Component/LabExer/Labex2/BigCats';
import Emoji from '../Component/LabExer/Labex3/Emoji';


function App() {
  const commentData = {
    date: new Date(),
    text: 'Hope you have a nice day!',
    author: {
      name: 'Costant',
      avatarUrl: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67344e79cb7fb9001e44ae01.png', 
    },
  };


  //==== Lab Exercise 1 =====

  return (
  
    <div className="app-container">
      <h1>Module 6 Exercises</h1>

      <Greeting name="Costant">
        <p>This version uses the 'name' prop.</p>
      </Greeting>

      <hr />
      
      <div className="greeting-card">
      <Greeting>
        <p>This version has no name prop, so it defaults to World.</p>
      </Greeting>
      </div>

      <hr />

{/* ==== Lab Exercise 1 ===== */}
<div className="greeting-card">
      <Comment
        date={commentData.date}
        text={commentData.text}
        author={commentData.author}
      />
      </div>
      
      <hr />

 {/* ==== Lab Exercise 2 ===== */}
      <BigCats/>


 {/* ==== Lab Exercise 3 ===== */}
 <div>
   <h2>Exercise 3: Emoji App</h2>
      <Emoji/>
 </div>


    </div>
  );
}

export default App;