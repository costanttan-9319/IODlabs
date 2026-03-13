// 1. Avatar Component
function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

// 2. UserInfo Component
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

// 3. FormattedDate Component
function FormattedDate(props) {
  return (
    <div className="Comment-date">
      {props.date.toLocaleDateString()}
    </div>
  );
}

// 4. Main Comment Component
function Comment(props) {
  return (
    <div className="Comment" style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <FormattedDate date={props.date} />
    </div>
  );
}

export default Comment;