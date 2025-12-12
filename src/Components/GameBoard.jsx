import React, { useState } from "react";
import GameCol from "./GameCol";

export default function GameBoard() {
  let [state, setState] = useState(Array(9).fill(null));
  let [xTurn, setXturn] = useState(true);

  function handleGame(index) {
    if (state[index] !== null) return;

    let eleState = [...state];
    eleState[index] = xTurn ? "X" : "0";

    setState(eleState);
    setXturn(!xTurn);
  }

  function forWinner() {
    let winPosible = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let winner of winPosible) {
      let [i, j, k] = winner;
      if (state[i] !== null && state[i] === state[j] && state[i] === state[k]) {
        return state[i];
      }
    }
    return false;
  }

  function restartGame() {
    setState(Array(9).fill(null));
    setXturn(true);
  }

  let isWinner = forWinner();
  let isDraw = state.every((col) => col !== null) && !isWinner;

  return (
    <div className="game-container">
      {isWinner ? (
        <>
          <p>{isWinner} won the game!</p>
          <button onClick={restartGame}>Restart</button>
        </>
      ) : isDraw ? (
        <>
          <p>Game Over - It's a Draw!</p>
          <button onClick={restartGame}>Restart</button>
        </>
      ) : (
        <>
          <div className="game-row">
            <GameCol onClick={() => handleGame(0)} value={state[0]} />
            <GameCol onClick={() => handleGame(1)} value={state[1]} />
            <GameCol onClick={() => handleGame(2)} value={state[2]} />
          </div>
          <div className="game-row">
            <GameCol onClick={() => handleGame(3)} value={state[3]} />
            <GameCol onClick={() => handleGame(4)} value={state[4]} />
            <GameCol onClick={() => handleGame(5)} value={state[5]} />
          </div>
          <div className="game-row">
            <GameCol onClick={() => handleGame(6)} value={state[6]} />
            <GameCol onClick={() => handleGame(7)} value={state[7]} />
            <GameCol onClick={() => handleGame(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
}
