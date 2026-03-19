import { useState } from "react";
import { useBitcoinPrice } from "./bitcoinPrice"; // Importing your custom hook

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates2() {
  const [currency, setCurrency] = useState(currencies[0]);
  
  // We "call" our hook here to get the data
  const { price, loading } = useBitcoinPrice(currency);

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>{curr}</option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Price Tracker (Custom Hook)</h3>
      
      <label>Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      <div className="display">
        <strong>Price: </strong>
        {loading ? "Fetching data..." : `${price} ${currency}`}
      </div>
    </div>
  );
}

export default BitcoinRates2;