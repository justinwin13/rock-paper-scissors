const game = () => {
  let player_score = 0;
  let computer_score = 0;
  const winner = document.querySelector(".winner");

  const start_game = () => {
    const startBtn = document.querySelector(".intro button");
    const intro = document.querySelector(".intro");
    const match = document.querySelector(".match");

    startBtn.addEventListener("click", () => {
      intro.classList.add("fade-out");
      match.classList.add("fade-in");
    });
  };

  const play_match = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // reset hand to rock
        playerHand.src = "./images/rock.png";
        computerHand.src = "./images/rock.png";
        // Computer option
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          // function to compare hands
          compareHands(this.textContent, computerChoice);

          // update hand images
          playerHand.src = `./images/${this.textContent}.png`;
          computerHand.src = `./images/${computerChoice}.png`;
        }, 1800);

        setTimeout(() => {
          winner.textContent = "Rock";
        }, 200);
        setTimeout(() => {
          winner.textContent = "Paper";
        }, 700);
        setTimeout(() => {
          winner.textContent = "Scissors";
        }, 1200);

        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = player_score;
    computerScore.textContent = computer_score;
  };

  const compareHands = (pHand, cHand) => {
    if (pHand === cHand) {
      winner.textContent = "It is a tie!";
    } else if (pHand === "rock" && cHand === "scissors") {
      winner.textContent = "Player Wins!";
      player_score++;
      updateScore();
    } else if (pHand === "rock" && cHand === "paper") {
      winner.textContent = "Computer Wins!";
      computer_score++;
      updateScore();
    } else if (pHand === "paper" && cHand === "rock") {
      winner.textContent = "Player Wins!";
      player_score++;
      updateScore();
    } else if (pHand === "paper" && cHand === "scissors") {
      winner.textContent = "Computer Wins!";
      computer_score++;
      updateScore();
    } else if (pHand === "scissors" && cHand === "paper") {
      winner.textContent = "Player Wins!";
      player_score++;
      updateScore();
    } else if (pHand === "scissors" && cHand === "rock") {
      winner.textContent = "Computer Wins!";
      computer_score++;
      updateScore();
    }
  };

  start_game();
  play_match();
};
game();
