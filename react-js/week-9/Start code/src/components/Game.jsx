import React from "react";

// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------

// Generate a random values in the range {min, max}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create an attack log
function createLogAttack(isPlayer, damage) {
  return {
    isPlayer: isPlayer,
    isDamage: true,
    text: ` takes ${damage} damages`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    text: ` heal ${healing} life points`,
  };
}

function Game() {
  // ----------------------------------------------------------------------------------------------------------
  // STATES & VARIABLES
  // ----------------------------------------------------------------------------------------------------------
  const [playerHealth, setPlayerHealth] = React.useState(100);
  const [monsterHealth, setMonsterHealth] = React.useState(100);
  const [logs, setLogs] = React.useState([]);

  const isGameOver = playerHealth <= 0 || monsterHealth <= 0;
  // ----------------------------------------------------------------------------------------------------------
  // BUTTONS EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  const applyMonsterAttack = () => {
    if (isGameOver) return;
    const damage = getRandomValue(0,10);
    setPlayerHealth((h) => Math.max(h-damage, 0));
    setLogs((logs) => [...logs, createLogAttack(false, damage)]);
  }

  const attackHandler = () => {
    if (isGameOver) return;
    const damage = getRandomValue(0,10);
    setMonsterHealth((h) => Math.max(h-damage, 0));
    setLogs((logs) => [...logs, createLogAttack(true, damage)]);
    applyMonsterAttack();
  }

  const specialHandler = () => {
    if (isGameOver) return;
    const damage = getRandomValue(10,20);
    setMonsterHealth((h) => Math.max(h-damage, 0));
    setLogs((logs) => [...logs, createLogAttack(true, damage)]);
    applyMonsterAttack();
  }

  const healHandler = () => {
    if (isGameOver) return;
    const healing = getRandomValue(5, 15);
    setPlayerHealth((h) => Math.min(h+healing, 100));
    setLogs((logs) => [...logs, createLogHeal(healing)]);
    applyMonsterAttack();
  }

  const killYourself = () => {
    if (isGameOver) return;
    setPlayerHealth(0);
    setLogs((logs) => [...logs, createLogAttack(true, playerHealth)]);
  }
  // ----------------------------------------------------------------------------------------------------------
  // JSX FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  const gameTitle = () => {
    if (playerHealth<=0&&monsterHealth>0) {
      return "You lost!";
    } else if (monsterHealth<=0&&playerHealth>0) {
      return "You win!";
    } else {
      return "Game ongoing.";
    }
  }

  const resetGame = () => {
    setPlayerHealth(100);
    setMonsterHealth(100);
    setLogs([]);
  }

  // ----------------------------------------------------------------------------------------------------------
  // MAIN  TEMPLATE
  // ----------------------------------------------------------------------------------------------------------
  return (
    <>
      <section className="container">
        <h2>Monster Health</h2>
        <div className="healthbar">
          <div style={{ width: `${monsterHealth}%` }} className="healthbar__value"></div>
        </div>
      </section>

      <section className="container">
        <h2>Your Health</h2>
        <div className="healthbar">
          <div style={{ width: `${playerHealth}%` }} className="healthbar__value"></div>
        </div>
      </section>

      <section className="container">
        <h3>{gameTitle()}</h3>
        <button onClick={resetGame}>Start New Game</button>
      </section>

      <section id="controls">
        <button onClick={attackHandler}>ATTACK</button>
        <button onClick={specialHandler}>SPECIAL !</button>
        <button onClick={healHandler}>HEAL</button>
        <button onClick={killYourself}>KILL YOURSELF</button>
      </section>

      <section id="log" className="container">
        <h2>Battle Log</h2>
        <ul>
          {logs.map((log) => (
            <li key={log.id} className={log.isPlayer ? "log--player" : "log--monster"}>
              <span>{log.isPlayer ? "Player" : "Monster"}</span>
              <span>{log.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Game;
