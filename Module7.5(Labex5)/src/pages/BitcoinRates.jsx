import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Typography, Box, CircularProgress } from '@mui/material';
import { useBitcoinPrice } from '../hooks/BitcoinPrice'; // Adjust this path if you saved it elsewhere

// Standard list of currencies
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export default function BitcoinRates() {
  // State for the selected currency dropdown
  const [currency, setCurrency] = useState(currencies[0]);
  
  // Destructuring the data and loading state from your custom hook
  const { price, loading } = useBitcoinPrice(currency);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Bitcoin Rates
      </Typography>

      {/* MUI Form Component for the Dropdown */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="currency-select-label">Currency</InputLabel>
        <Select
          labelId="currency-select-label"
          id="currency-select"
          value={currency}
          label="Currency"
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currencies.map((curr) => (
            <MenuItem key={curr} value={curr}>
              {curr}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Display logic: Show a loading spinner or the actual price */}
      <Box sx={{ marginTop: 2 }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Typography variant="h6">
            Current Price: {price} {currency}
          </Typography>
        )}
      </Box>
    </Box>
  );
}