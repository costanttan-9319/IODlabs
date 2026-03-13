import { useState } from 'react';

function Emoji() {
  // We initialize the state to 'true' (Happy)
  const [isHappy, setIsHappy] = useState(true);

  // This function toggles the boolean value
  const toggleMood = () => {
    setIsHappy(!isHappy);
  };

  return (
    <div className="emoji-card" style={{ textAlign: 'center', padding: '20px' }}>
      {/* LOGIC: If isHappy is true, show 😆. If false, show 😭 */}
      <div style={{ fontSize: '5rem', marginBottom: '20px' }}>
        {isHappy ? '😆' : '😭'}
      </div>

      <button 
        onClick={toggleMood}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          cursor: 'pointer',
          borderRadius: '8px',
          border: '1px solid #ccc',
          backgroundColor: '#fff'
        }}
      >
        Change Mood
      </button>
    </div>
  );
}

export default Emoji;