import { useState, useEffect } from "react";

// We export this so other components can use it
export function useBitcoinPrice(currency) {
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false; // Prevents "race conditions" if you click fast
    setLoading(true);

    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          // Access the price dynamically using the currency key
          const currentPrice = json.bitcoin[currency.toLowerCase()];
          setPrice(currentPrice);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [currency]); // Re-runs whenever the currency changes

  // Return the data as an object
  return { price, loading };
}