'use client'

import React, { useState } from "react";

const colors = {
  background: "#e8bcd5",
  playerX: "#eae1d8",
  playerO: "#eae1d8",
  grid: "#c6a7c9",
  text: "#eae1d8",
};

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? "X" : "O"}`;

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(#c6a7c9 1px, transparent 1px), linear-gradient(to right, #c6a7c9 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <h1 style={{ fontSize: "64px", marginBottom: "20px", zIndex: 1 }}>Tic Tac Toe</h1>
      <h2 style={{ marginBottom: "20px", zIndex: 1 }}>{status}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gridGap: "10px",
          zIndex: 1,
        }}
      >
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: colors.grid,
              border: `2px solid ${colors.text}`,
              fontSize: "36px",
              color: cell === "X" ? colors.playerX : colors.playerO,
              cursor: "pointer",
            }}
          >
            {cell}
          </button>
        ))}
      </div>
    </div>
  );
}

function calculateWinner(squares: any[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
