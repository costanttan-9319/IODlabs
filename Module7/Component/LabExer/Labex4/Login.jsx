export default function Login() {
    return (
        <div className="Login page-container">
            <h1>User Login</h1>
            <form className="login-form">
                <div className="input-group">
                    <label>Username:</label>
                    <input type="text" placeholder="Enter username" />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Enter password" />
                </div>
                <button type="button" className="emoji-button">Login</button>
            </form>
        </div>
    );
}