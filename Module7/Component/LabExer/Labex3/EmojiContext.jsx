import React, { createContext, useState, useContext } from "react";

// 1. Create the Station (The Frequency)
const EmojiContext = React.createContext();

// 2. The Provider (The Radio Tower)
export const EmojiProvider = (props) => {
    // We move the state from the Emoji component to here!
    const [isHappy, setIsHappy] = useState(true);

    const toggleMood = () => {
        setIsHappy(!isHappy);
    };

    return (
        // We broadcast the mood AND the toggle function to everyone
        <EmojiContext.Provider value={{ isHappy, toggleMood }}>
            {props.children}
        </EmojiContext.Provider>
    );
};

// 3. The Custom Hook (The "Tune-in" Button)
export const useEmojiContext = () => {
    return useContext(EmojiContext);
};