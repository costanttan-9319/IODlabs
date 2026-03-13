// Use destructuring to pull 'name' and 'children' out of props
function Greeting({ name, children }) {
  return (
    <div className="greeting-container">
      {/* LOGIC: If name exists, use it. Otherwise, default to "World".
      */}
      <h1>Hello {name ? name : "World"}</h1>

      {/* CHILDREN: This is where any nested HTML/Text from App.jsx 
        will be displayed.
      */}
      <div className="greeting-message">
        {children}
      </div>
    </div>
  );
}

export default Greeting;