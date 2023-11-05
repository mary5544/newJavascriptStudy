/*
  >> While 구조
  ->
    const num = 0; // 변수 초기화
    while (조건) {... (선택)증감식} // 조건, 반복내용, (필요에따라) 증감식
  <-

  >> while문은 끝을 알 수 없을때 사용하면 유용하다.
  ->
    const SECRET_CODE = '123123@';
    let userInput = prompt('SECRET_CODE ?');
    while (userInput !== SECRET_CODE) {
      userInput = prompt('SECRET_CODE ?');
    };
    console.log("hello");
  <-

  >> break : break를 만나면 즉시 loop 탈출
  ->
    let userInput = prompt('너는 빠져나갈수 없다...');
    while (true) {
      if (userInput.toLowerCase() === 'end plz') {
        console.log('이번만 봐주겠다..');
        break;
      } else {
        userInput = prompt('너는 빠져나갈수 없다...');
      };
    };
  <-
*/