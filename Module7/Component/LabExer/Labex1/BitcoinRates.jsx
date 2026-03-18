import { useState, useEffect } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    // State to store the fetched price
    const [btcPrice, setBtcPrice] = useState(null);

    useEffect(() => {
        // 1. Create a variable to track if the component is still mounted
        let isIgnored = false;

        // 2. The Fetch Logic
        const fetchBtcPrice = async () => {
            try {
                const response = await fetch(
                    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
                );
                const data = await response.json();
                
                // 3. Only update state if the user hasn't switched currencies again quickly
                if (!isIgnored) {
                    // Access the price dynamically based on the current currency (e.g., data.bitcoin.usd)
                    setBtcPrice(data.bitcoin[currency.toLowerCase()]);
                }
            } catch (error) {
                console.error("Error fetching Bitcoin price:", error);
            }
        };

        fetchBtcPrice();

        // 4. Cleanup function: prevents bugs if the user clicks the dropdown very fast
        return () => {
            isIgnored = true;
        };

    }, [currency]); // Dependency array: Re-run every time 'currency' changes

    const options = currencies.map(curr => (
        <option value={curr} key={curr}>
            {curr}
        </option>
    ));

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>

            {/* Display the result */}
            <div className="price-display">
                <h4>
                    Current Price: {btcPrice ? `${btcPrice} ${currency}` : 'Loading...'}
                </h4>
            </div>
        </div>
    );
}

export default BitcoinRates;