import React, { createContext, useState } from "react";
import { food_items } from "../food";

export const dataContext = createContext();

function UserContext({ children }) {
  let [cate, setCate] = useState(food_items);
  let [input, setInput] = useState("");
  let [showCart, setShowCart] = useState(false);
  let [isLoggedIn, setIsLoggedIn] = useState(false); // <--- State defined here

  let data = {
    input,
    setInput,
    cate,
    setCate,
    showCart,
    setShowCart,
    isLoggedIn,     // <--- Passed in context value
    setIsLoggedIn,  // <--- Passed in context value
  };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
}
export default UserContext;