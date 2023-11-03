/*
  >> if
  ->
    let rating = 3;
    if ( rating === 3 ) { // 조건이 true일때 실행
      console.log('true');
    } 
  <-

  >> 홀짝 판별하여 홀일때만 실행하도록 하기
  ->
    let num = 105;
    if ( (num % 2) === 1 ) {
      console.log('nice');
    };
    > 수를 2로 나눈뒤에 몫이 0이면 짝수 1이면 홀수
  <-

  >> else if // if가 거짓이라면 실행 
  ->
    > 0 ~ 5세 [무료], 5 ~ 10세 [1000원], 10 ~ 20세 [2000원], 20+ [3000원]
    const userAge = 10;
    if ( userAge > 5 ) {
      console.log('입장료는 무료입니다.');
    } else if (userAge < 10) {
      console.log('입장료는 1000원 입니다.');
    } else if (userAge < 20) {
      console.log('입장료는 2000원 입니다.');
    }
    
  <-

  >> else // else if가 거짓이라면 실행 
  ->
    > 0 ~ 5세 [무료], 5 ~ 10세 [1000원], 10 ~ 20세 [2000원], 20+ [3000원]
    const userAge = 10;
    if ( userAge > 5 ) {
      console.log('입장료는 무료입니다.');
    } else if (userAge < 10) {
      console.log('입장료는 1000원 입니다.');
    } else if (userAge < 20) {
      console.log('입장료는 2000원 입니다.');
    } else {
      console.log('입장료는 3000원 입니다.')
    }
  <-

  >> 중첩 조건문 
  ->
    // 패스워드는 6글자 이상이여야함
    // 패스워드에 띄어쓰기 불가

    const userPw = prompt('비밀번호를 입력해주세요');
    if ( userPw.length >= 6 ) {
      if ( userPw.indexOf(' ') === -1 ) {
        console.log('비밀번호 설정이 완료되었습니다.')
      } else {
        console.log('비밀번호에 공백은 불가능합니다.')
      }
    } else {
      console.log('비밀번호는 6자 이상이여야 합니다.');
    }
  <-
*/


// > 문제 1
/*
    0세 ~ 5세 :1000원
    5세 ~ 10세 : 1500원
    10세 ~ 18세 : 2000원
    18+ : 3000원
    * 65세 이상 노인은 공짜
*/

const userAge = prompt('나이를 입력해주세요');

if ( userAge && userAge.indexOf(' ') === -1 && userAge >= 0 ) {
  if ( userAge < 5 ) {
    alert('가격은 1000원 입니다');
  } else if ( userAge >= 5 && userAge < 10 ) {
      alert('가격은 1500원 입니다.');
  } else if ( userAge >= 10 && userAge < 18 ) {
      alert('가격은 2000원 입니다.');
  } else if ( userAge >= 18 && userAge < 65 ) {
      alert('가격은 3000원 입니다.');
  } else {
      alert('가격은 무료 입니다.');
  };
} else {
  alert('올바른 나이를 입력해주세요');
};
