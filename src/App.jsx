import React, { useContext } from "react";
import Home from "./pages/home.jsx";
import Login from "./pages/Login.jsx";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux';

function App() {
const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div>
      {isLoggedIn ? <Home /> : <Login />} {/* <--- Used for conditional rendering */}
      <ToastContainer />
    </div>
  );
}
export default App;