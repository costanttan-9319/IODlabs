import { useState } from "react";
import { useBitcoinPriceReducer } from "./bitcoinPriceReducer";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRatesReducer() {
  const [currency, setCurrency] = useState(currencies[0]);
  
  // Now we get back the whole state object from the reducer hook
  const { price, loading, error } = useBitcoinPriceReducer(currency);

  const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Tracker (Part 2: useReducer)</h3>
      
      <label>Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      <div className="price-display">
        <h4>Current Price:</h4>
        <div className="counter">
          {loading ? "Fetching..." : error ? `Error: ${error}` : `${price} ${currency}`}
        </div>
      </div>
    </div>
  );
}

export default BitcoinRatesReducer;