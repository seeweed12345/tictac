const Player = (playerName) => {
  const getName = () => playerName;
  return { Player, playerName, getName };
};
const createBoard = (() => {
  const board = () => {
    for (i = 1; i < 10; i++) {
      const element = document.getElementById("container");
      let a = document.createElement("div");
      a.setAttribute(`class`, `tile tile-${i}`);
      element.appendChild(a);
    }
  };
  return { board };
})();

const game = (() => {
  const addPlayers = () => {
    const landingPage = document.querySelector(".landingpage");
    const mainPage = document.querySelector(".mainpage");
    document.getElementById("btn").addEventListener("click", () => {
      document.getElementsByClassName("player1name")[0].textContent = `${
        document.getElementById("player1nameinput").value
      }`;
      document.getElementsByClassName("player2name")[0].textContent = `${
        document.getElementById("player2nameinput").value
      }`;
      landingPage.classList.add("hidden");
      mainPage.classList.remove("hidden");
    });
  };
  const controller = () => {
    let tally = 0;
    let marks = ["X", "O"];
    let lastPlayer;
    let lastMark;
    document.querySelectorAll(".gameboard > div").forEach((tile) => {
      tile.addEventListener("click", (e) => {
        if (e.target.textContent == "") {
          e.target.textContent = `${marks[0]}`;
          if (marks[0] == "X") {
            lastPlayer = `${
              document.getElementsByClassName("player1name")[0].textContent
            }`;
            lastMark = "X";
          } else if (marks[0] == "O") {
            lastPlayer = `${
              document.getElementsByClassName("player2name")[0].textContent
            }`;
            lastMark = "O";
          }
          temp = marks[1];
          marks[1] = marks[0];
          marks[0] = temp;
          tally++;
        }
        if (winningNumbers(lastPlayer, lastMark) != "notie" && tally == 9) {
          alert("tie");
        }
      });
    });
  };
  const winningNumbers = (lastPlayer, lastMark) => {
    const tile1 = document.getElementsByClassName("tile-1")[0];
    const tile2 = document.getElementsByClassName("tile-2")[0];
    const tile3 = document.getElementsByClassName("tile-3")[0];
    const tile4 = document.getElementsByClassName("tile-4")[0];
    const tile5 = document.getElementsByClassName("tile-5")[0];
    const tile6 = document.getElementsByClassName("tile-6")[0];
    const tile7 = document.getElementsByClassName("tile-7")[0];
    const tile8 = document.getElementsByClassName("tile-8")[0];
    const tile9 = document.getElementsByClassName("tile-9")[0];
    const winnerModal = document.getElementsByClassName(
      "winnermodalcontainer"
    )[0];
    const winningPlayer = document.getElementsByClassName("winner")[0];
    if (
      tile1.textContent == `${lastMark}` &&
      tile2.textContent == `${lastMark}` &&
      tile3.textContent == `${lastMark}`
    ) {
      tile1.classList.add("winningtile");
      tile2.classList.add("winningtile");
      tile3.classList.add("winningtile");
      winningPlayer.textContent = `${lastPlayer} wins`;
      winnerModal.classList.remove("hidden");
      return "notie";
    } else if (
      tile1.textContent == `${lastMark}` &&
      tile4.textContent == `${lastMark}` &&
      tile7.textContent == `${lastMark}`
    ) {
      tile1.classList.add("winningtile");
      tile4.classList.add("winningtile");
      tile7.classList.add("winningtile");
      winningPlayer.textContent = `${lastPlayer} wins`;
      winnerModal.classList.remove("hidden");
      return "notie";
    } else if (
      tile4.textContent == `${lastMark}` &&
      tile5.textContent == `${lastMark}` &&
      tile6.textContent == `${lastMark}`
    ) {
      tile4.classList.add("winningtile");
      tile5.classList.add("winningtile");
      tile6.classList.add("winningtile");
      winningPlayer.textContent = `${lastPlayer} wins`;
      winnerModal.classList.remove("hidden");
      return "notie";
    } else if (
      tile7.textContent == `${lastMark}` &&
      tile8.textContent == `${lastMark}` &&
      tile9.textContent == `${lastMark}`
    ) {
      tile7.classList.add("winningtile");
      tile8.classList.add("winningtile");
      tile9.classList.add("winningtile");
      alert(`${lastPlayer} wins`);
      return "notie";
    } else if (
      tile2.textContent == `${lastMark}` &&
      tile5.textContent == `${lastMark}` &&
      tile8.textContent == `${lastMark}`
    ) {
      tile2.classList.add("winningtile");
      tile5.classList.add("winningtile");
      tile8.classList.add("winningtile");
      alert(`${lastPlayer} wins`);
      return "notie";
    } else if (
      tile3.textContent == `${lastMark}` &&
      tile6.textContent == `${lastMark}` &&
      tile9.textContent == `${lastMark}`
    ) {
      tile3.classList.add("winningtile");
      tile6.classList.add("winningtile");
      tile9.classList.add("winningtile");
      alert(`${lastPlayer} wins`);
      return "notie";
    } else if (
      tile7.textContent == `${lastMark}` &&
      tile5.textContent == `${lastMark}` &&
      tile3.textContent == `${lastMark}`
    ) {
      tile7.classList.add("winningtile");
      tile5.classList.add("winningtile");
      tile3.classList.add("winningtile");
      alert(`${lastPlayer} wins`);
      return "notie";
    } else if (
      tile1.textContent == `${lastMark}` &&
      tile5.textContent == `${lastMark}` &&
      tile9.textContent == `${lastMark}`
    ) {
      tile1.classList.add("winningtile");
      tile5.classList.add("winningtile");
      tile9.classList.add("winningtile");
      alert(`${lastPlayer} wins`);
      return "notie";
    }
  };
  return { controller, addPlayers };
})();

createBoard.board();
game.controller();
game.addPlayers();

// (`${document.getElementById('title').value}`, `${document.getElementById('director').value}`

// const play = (playerOne, playerTwo) => {
//   const player1 = playerOne;
//   const player2 = playerTwo;
//   let currentPlayer = player1;
//   const switchPlayer = () => {
//     if (currentPlayer == player1) {
//       currentPlayerconst createBoard = (() => {
//   const board = () => {
//     for (i = 1; i < 10; i++) {
//       const element = document.getElementById("container");
//       let a = document.createElement("div");
//       a.setAttribute(`class`, `tile tile-${i}`);
//       element.appendChild(a);
//     }
//     game.markTile();
//   };
//   return { board };
// })();

// createBoard.board(); = player2;
//     } else if (currentPlayer == player2) {
//       currentPlayer = player1;
//     }
//   };
//   document.querySelectorAll(".tile").forEach((tile) => {
//     tile.addEventListener("click", () => {
//       switchPlayer();
//     });
//   });
//   return { currentPlayer, switchPlayer, play, player1, player2 };
// };

// const createBoard = (() => {
//   const board = () => {
//     for (i = 1; i < 10; i++) {
//       const element = document.getElementById("container");
//       let a = document.createElement("div");
//       a.setAttribute(`class`, `tile tile-${i}`);
//       element.appendChild(a);
//     }
//     game.markTile();
//   };
//   return { board };
// })();

// createBoard.board();
// intitialize.startGame();
// function checkScore() {
//   if (
//     winningScore(player1.score, across1) == true ||
//     winningScore(player1.score, across2) == true ||
//     winningScore(player1.score, across3) == true ||
//     winningScore(player1.score, down1) == true ||
//     winningScore(player1.score, down2) == true ||
//     winningScore(player1.score, down3) == true ||
//     winningScore(player1.score, diagonal1) == true ||
//     winningScore(player1.score, diagonal2) == true
//   ) {
//     alert("player 1 wins");
//   } else if (
//     winningScore(player2.score, across1) == true ||
//     winningScore(player2.score, across2) == true ||
//     winningScore(player2.score, across3) == true ||
//     winningScore(player2.score, down1) == true ||
//     winningScore(player2.score, down2) == true ||
//     winningScore(player2.score, down3) == true ||
//     winningScore(player2.score, diagonal1) == true ||
//     winningScore(player2.score, diagonal2) == true
//   ) {
//     alert("player 2 wins!");
//   }
// }

// function winningScore(arr, values) {
//   return values.every((value) => {
//     return arr.indexOf(value) !== -1;
//   });
// }
