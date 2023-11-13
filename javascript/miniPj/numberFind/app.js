let maxNum = parseInt(prompt(`MAX값을 입력해주세요...`));

while ( maxNum > 0 ) {
  console.log(`MAX값은 숫자만 입력가능합니다.\nex) 10`);
  maxNum = parseInt(prompt(`MAX값을 입력해주세요...`));
};

mainGame(maxNum);


// MAIN GAME
function mainGame(maxNum) {
  const MAX_NUM = parseInt(maxNum),
        RANDOM_NUM = Math.floor(Math.random() * MAX_NUM) + 1;
  let userInput = prompt(`맞춰봐~`),
          count = 0,
          life = 4;

  while ( userInput !== 'q' && life !== 0 ) {
    const userInputInt = parseInt(userInput);

    if ( userInputInt < RANDOM_NUM ) {
      life--; count++;
      console.log(`입력하신 ${userInputInt}값이 목표보다 작아요.\n남은목슴: ${life}`);
      userInput = prompt(`맞춰봐~`);
    } else if ( userInputInt > RANDOM_NUM ) {
      life--; count++;
      console.log(`입력하신 ${userInputInt}값이 목표보다 커요.\n남은목슴: ${life}`);
      userInput = prompt(`맞춰봐~`);
    } else if ( userInput === 'q' || userInput === '나가기' ) {
      console.log(`사용자가 게임을 중단하였습니다.`);
      break;
    } else { userInput = prompt(`맞춰봐~`) };
  };

  if ( life === 0 ) {
    gameOver();
  } else {
    gameVictory(life, count, RANDOM_NUM);
  };
};

// GAME OVER 출력
function gameOver() {
  console.log(`YOU DIE`);
};

// Victory
function gameVictory(life, count, RANDOM_NUM) {
  console.log(`YOU WIN!\n남은목슴: ${life}\n도전횟수: ${count}번\n정답: ${RANDOM_NUM}`);
};