import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);

  const handleAuth = async () => {
    if (isSignUp && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onClose();
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <span
          className="text-gray-600 cursor-pointer float-right"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-2xl font-semibold mb-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        {isSignUp && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
        )}
        <button
          onClick={handleAuth}
          className="w-full bg-blue-500 text-white p-2 rounded mb-4"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="w-full text-blue-500 p-2 rounded"
        >
          {isSignUp ? "Switch to Sign In" : "Switch to Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
