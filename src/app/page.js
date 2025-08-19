"use client";

export default function Home() {
    const grid = Array(6).fill(null).map(() => Array(5).fill(""));

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
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
