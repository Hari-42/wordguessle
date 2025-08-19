"use client";

import { useState } from "react";

export default function Home() {
    const [grid, setGrid] = useState(
        Array(6).fill(null).map(() => Array(5).fill(""))
    );
    const [row, setRow] = useState(0);
    const [col, setCol] = useState(0);

    const handleKeyDown = (e) => {
        if (row >= 6) return;

        if (/^[a-zA-Z]$/.test(e.key) && col < 5) {
            const newGrid = grid.map(r => [...r]);
            newGrid[row][col] = e.key.toUpperCase();
            setGrid(newGrid);
            setCol(col + 1);
        } else if (e.key === "Backspace" && col > 0) {
            const newGrid = grid.map(r => [...r]);
            newGrid[row][col - 1] = "";
            setGrid(newGrid);
            setCol(col - 1);
        } else if (e.key === "Enter" && col === 5) {
            setRow(row + 1);
            setCol(0);
        }
    };

    return (
        <div
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="flex flex-col items-center justify-center min-h-screen p-8 text-center outline-none"
        >
            <h1 className="text-5xl font-bold mb-4">wordguessle</h1>
            <p className="text-lg mb-6">This project is inspired by the New York Times Wordle.</p>

            <div className="grid grid-rows-6 gap-2">
                {grid.map((row, i) => (
                    <div key={i} className="grid grid-cols-5 gap-2">
                        {row.map((cell, j) => (
                            <div
                                key={j}
                                className="w-12 h-12 border flex items-center justify-center text-xl font-bold"
                            >
                                {cell}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
