function Emoji() {
  // Use toggleMood here!
  const { isHappy, toggleMood } = useEmojiContext(); 

  return (
    <div className="emoji-card">
      <div className="emoji-display">{isHappy ? '😆' : '😭'}</div>
      <button className="mood-button" onClick={toggleMood}> {/* Match here */}
        Change Mood
      </button>
    </div>
  );
}