'use client' // Technical necessity: Hooks using state/effects must be client-side

import { useState, useEffect } from "react";

export function useBitcoinPrice(currency) {
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    // Using the same logic from your React code
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
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
  }, [currency]);

  return { price, loading };
}