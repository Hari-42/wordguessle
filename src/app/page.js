"use client";

import { useState } from "react";


export default function Home() {
    const [guess, setGuess] = useState("");

    const handleSubmit = () => {
        console.log("Guess submitted:", guess);
        setGuess("");
    };

    return (
      <div className="flex bg-white flex-col items-center justify-center min-h-screen p-8 text-center">
        <h1 className="text-5xl sm:text-7xl text-black font-bold mb-4">wordguessle</h1>
        <p className="text-lg sm:text-xl text-black  max-w-md">
          This project is inspired by the New York Times Wordle.
        </p>
          <input
              type="text"
              placeholder="Enter your guess"
              maxLength={5}
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              className="border border-gray-300 text-black rounded px-4 py-2 text-lg text-center mb-4"
          />
          <button
              onClick={handleSubmit}
              className="bg-black text-white px-4 py-2 rounded"
          >
              Submit Guess
          </button>
      </div>
  );
}
