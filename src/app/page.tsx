"use client";

import React, { useState } from "react";
import Clouds from "./components/Clouds";

const colors = {
  background: "linear-gradient(135deg, #e8bcd5, #c6a7c9)",
  playerX: "#fffbf2",
  playerO: "#fffbf2",
  grid: "rgba(255, 255, 255, 0.2)",
  text: "#eae1d8",
};

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setScore((prevScore) => ({
        ...prevScore,
        [gameWinner as keyof typeof score]: prevScore[gameWinner as keyof typeof score] + 1,
      }));
    } else if (newBoard.every((cell) => cell !== null)) {
      setWinner("Tie");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div style={styles.appContainer}>
      <Clouds />
      <h1 style={styles.title}>Tic Tac Toe</h1>
      <div style={styles.scoreBoard}>
        <p style={styles.scoreText}>Player X: {score.X}</p>
        <p style={styles.scoreText}>Player O: {score.O}</p>
      </div>
      <h2 style={styles.status}>
        {winner
          ? winner === "Tie"
            ? "It's a Tie!"
            : `🎉 Winner: ${winner}`
          : `Next Player: ${isXNext ? "X" : "O"}`}
      </h2>
      <div style={styles.grid}>
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              ...styles.cell,
              color: cell === "X" ? colors.playerX : colors.playerO,
            }}
            className="grid-cell"
          >
            {cell}
          </button>
        ))}
      </div>

      {winner && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>
              {winner === "Tie"
                ? "It's a Tie!"
                : `🎉 Congratulations! ${winner} Wins!`}
            </h2>
            <button onClick={resetGame} style={styles.resetButton}>
              Play Again
            </button>
          </div>
        </div>
      )}

      <button onClick={resetGame} style={styles.resetButton}>
        Reset Game
      </button>
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

const styles: { [key: string]: React.CSSProperties } =  {
  appContainer: {
    background: colors.background,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: colors.text,
    position: "relative",
  },
  title: {
    fontSize: "64px",
    marginBottom: "10px",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
  },
  scoreBoard: {
    display: "flex",
    justifyContent: "space-around",
    width: "300px",
    marginBottom: "20px",
  },
  scoreText: {
    fontSize: "18px",
  },
  status: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 100px)",
    gap: "15px",
  },
  cell: {
    width: "100px",
    height: "100px",
    background: colors.grid,
    backdropFilter: "blur(10px)",
    border: "2px solid #eae1d8",
    borderRadius: "12px",
    fontSize: "36px",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
  resetButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#c6a7c9",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
};
