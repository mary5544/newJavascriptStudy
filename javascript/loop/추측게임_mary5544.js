function appStart() {
  const LOWER_NUMBER = 1,
        MAX_NUMBER = 10,
        RAMDOM_NUM = Math.floor((Math.random() * (MAX_NUMBER - LOWER_NUMBER)) + LOWER_NUMBER),
        USER_HEART = ['❤️', '❤️', '❤️'];

  gameStart();

  // game start
  function gameStart() {
    console.log(`정답 on : ${RAMDOM_NUM}`); // 정답 치트키

    while (true) {
      if (USER_HEART.length > 0) {
        heartCountMsg();
        let userInput = Number(prompt(`${LOWER_NUMBER} ~ ${MAX_NUMBER} 값을 입력해주세요...`));

        if (userInput === RAMDOM_NUM) {
          gameVictoryMsg();
          break;
        } else {
          heartDown();
          if (userInput > RAMDOM_NUM) {
            alert(`입력값 ${userInput}이 목표값보다 큽니다.`);
          } else if (userInput < RAMDOM_NUM) {
            alert(`입력값 ${userInput}이 목표값보다 작습니다..`);
          };
        };
      } else {
        gameOverMsg();
        break;
      };
    };
    console.log('앱이 종료되었습니다.');
  };

  // setup function
  function gameOverMsg() {
    if (USER_HEART[0] === undefined) {console.log(`YOU DIE`)};
  };

  function gameVictoryMsg() {
    console.log(`정답입니다!  입력값: ${RAMDOM_NUM}`);
  };

  function heartCountMsg() {
    if (USER_HEART.length >= 2) {
      console.log(`현제 남은목슴은 ${USER_HEART.length}개 입니다. \n행운을 빕니다.`);
    } else {
      console.log(`현제 남은목슴은 ${USER_HEART.length}개 입니다. \n마지막 기회입니다!`);
    }
  };
  
  function heartView() {
    // 남은 하트 표시기능 구현중
    // for (let i = 0; i < USER_HEART.length; i++) {
    //   console.log(``);
    // };
  };

  function heartDown() {
    USER_HEART.pop(); // 하트감소
  };
};