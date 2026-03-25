import React, { useState } from "react";
import { TextField, Button, Box, Typography, InputAdornment, IconButton, Alert } from "@mui/material";
import { Apple, VisibilityOff } from "@mui/icons-material";

export default function Login({ currentUser, onLogin, onLogout }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.toLowerCase() === "costanttan@gmail.com" && password === "IODRocks") {
      setError("");
      onLogin("Costant"); // This flips the page to the "Welcome" view
    } else {
      setError("Invalid email or password.");
    }
  };

  // IF LOGGED IN: Show the "Welcome Costant!" view (Your 2nd picture)
  if (currentUser) {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Welcome {currentUser}!
        </Typography>
        <Typography variant="h4" color="textSecondary" gutterBottom>
          Welcome to Bitcoin Financial Dashboard
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={onLogout} 
          sx={{ mt: 3, backgroundColor: '#9c27b0' }} // Matching the purple in your screenshot
        >
          LOGOUT
        </Button>
      </Box>
    );
  }

  // IF LOGGED OUT: Show the Login Form
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ padding: 3 }}>
      <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
        Login Page
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <Box sx={{ mb: 2 }}>
        <TextField
          label="Email *"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: '300px' }}
        />
      </Box>

      <Box sx={{ mb: 3 }}>
        <TextField
          label="Password *"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ width: '300px' }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Apple />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      <Button type="submit" variant="contained" sx={{ width: '120px', py: 1.5 }}>
        SUBMIT
      </Button>
    </Box>
  );
}