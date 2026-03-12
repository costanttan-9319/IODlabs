import Greeting from './Greeting';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      {/* Example 1: Passing the 'name' prop and a message via children */}
      <Greeting name="Costant">
        <p>This message is passed as a child.</p>
      </Greeting>

      <hr />

      {/* Example 2: No 'name' prop passed (will default to World) */}
      <Greeting>
        <p>This component has no name prop, so it shows the default and shows 'World'.</p>
      </Greeting>
    </div>
  );
}

export default App;