// src/components/Login.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/AuthSlice"; // Import the loginSuccess action
import { toast } from "react-toastify";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    const specialCharacter= '!@#$%&*';

    if (username && password) {
        if(username.length <3 || username.length > 15){
            // alert("Username must be between 3 and 15 characters.");
            toast.error("Username must be between 3 and 15 characters.");
            return;
        }
        if(password.length <6 || ![...password].some((char)=>specialCharacter.includes(char))){
            //  alert("Password must be at least 6 characters long and include at least one special character.");
            toast.error("Password must be at least 6 characters long and include at least one special character.");
            return;
        }
      // Dispatch the loginSuccess action
      dispatch(loginSuccess({ username: username })); // You can pass user data
    } else {
      alert("Invalid credentials."); // You might want to use toast here too
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;