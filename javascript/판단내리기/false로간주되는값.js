/*
  >> false로 간주되는 값 [ false, 0, 빈문자열, null, undefined, NaN ]
  ->
    > false값 활용
    const userName = prompt('Name?');
    if (userName) { // userName 변수에 이름이 문자가 있으면 true로 간주
      console.log(`${userName}님 환영합니다. `);
    } else {
      console.log('닉네임을 입력해주세요..')
    };
  <-
*/