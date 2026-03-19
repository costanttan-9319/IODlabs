import { useReducer, useEffect } from "react";

// 1. Define the initial state
const initialState = {
  price: 0,
  loading: false,
  error: ""
};

// 2. Define the reducer function
// It takes the current state and an "action", then returns the NEW state
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, price: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function useBitcoinPriceReducer(currency) {
  // 3. Initialize useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let ignore = false;

    // Dispatch the start action
    dispatch({ type: "FETCH_START" });

    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          const currentPrice = json.bitcoin[currency.toLowerCase()];
          // Dispatch success with the price as 'payload'
          dispatch({ type: "FETCH_SUCCESS", payload: currentPrice });
        }
      })
      .catch((err) => {
        if (!ignore) {
          dispatch({ type: "FETCH_ERROR", payload: err.message });
        }
      });

    return () => {
      ignore = true;
    };
  }, [currency]);

  // Return the whole state object (price, loading, error)
  return state;
}