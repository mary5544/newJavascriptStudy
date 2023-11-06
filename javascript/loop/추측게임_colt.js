let maximum = parseInt(prompt('maximum ?'));
const targetNum = Math.floor((Math.random() * maximum) + 1);

// 최대값 숫자 유효성검사
while (!maximum) {
  alert('입력값은 숫자만 가능합니다.');
  maximum = parseInt(prompt('maximum ?'))
};

// game start
let guess = prompt(`1 ~ ${maximum}중 정답은?`),
    count = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === 'q') break; // q입력시 나가는 기능
  guess = parseInt(guess); // 입력값 정수로 변환

  if (guess < targetNum) {
    alert('목표보다 값이 작습니다.');
    guess = prompt(`1 ~ ${maximum}중 정답은?`);
    count++;
  } else if (guess > targetNum){
    alert('목표보다 값이 큽니다.');
    guess = prompt(`1 ~ ${maximum}중 정답은?`);
    count++;
  } else {
    alert(`1 ~ ${maximum} 값을 입력해주세요..`);
    guess = prompt(`1 ~ ${maximum}중 정답은?`);
  }
};

// 결과표시
if (guess === 'q') {
  console.log(`사용자가 게임을 중단하였습니다.`);
} else {
  console.log(`정답 : ${targetNum}\n도전횟수 : ${count}`); // 정답확인
};