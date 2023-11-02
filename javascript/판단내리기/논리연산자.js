/*
  >> AND 연산자 - 둘 다 참일경우 실행
  ->
    const userPw = prompt('비밀번호를 입력해주세요.');
    if ( userPw.length >= 6 && userPw.indexOf(' ') === -1 ) {
      console.log('로그인 완료');
    } else {
      console.log('비밀번호는 6자 이상이여야 하며 공백을 포함 할 수 없습니다.');
    };
  <-

  >> OR 연산자 - 둘중 하나만 참인경우 실행
  ->
    > [ 0~5 무료, 5~10 1000원, 10~20 2000원, 20~65 3000원, 65+ 무료 ]
    const userAge = prompt('나이를 입력해주세요');
    if ( userAge === true && userAge >= 0 && userAge < 5 || userAge > 65 ) {
      console.log('가격은 무료 입니다.');
    } else if ( userAge >= 5 && userAge < 10 ) {
      console.log('가격은 1000원 입니다.');
    } else if ( userAge >= 10 && userAge < 20 ) {
      console.log('가격은 2000원 입니다.');
    } else if ( userAge >= 20 && userAge < 65 ) {
      console.log('가격은 3000원 입니다.');
    } else {
      console.log('유효한 나이를 입력해주세요...')
    };
  <-

  >> NOT 연산자 - 참 거짓 결과를 반전시킨다.
  ->
    > 우리 놀이동산엔 0~5세 이하 또는 65세 이상만 출입 가능합니다.
    const userAge = prompt('나이를 알려주세요');
    if ( !(userAge > 5 && userAge < 65 ) ) {
      console.log('입장을 환영합니다.');
    } else {
      console.log('출입금지 나이입니다.');
    };
  <-
*/