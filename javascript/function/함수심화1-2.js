/*
  >> 고차 함수
  ->
    function loopOutput(func) {
      for (let i = 0; i < 10; i++) {
        func();
      };
    };
    function randomNum() {
      const num = Math.floor(Math.random() * 6) + 1;
      console.log(num);
    };
    loopOutput(randomNum); // randomNum함수 10번 실행
  <-

  >> 반환 함수 - 기본예시
  ->
  function mysteryBox() {
    const num = Math.random();
    console.log(num);
    if (num < 0.5) {
    return function () {
        alert('축하합니다! 당신은 이밴트에 당첨되셨습니다');
        alert('2000만원 당첨에 축하드립니다!')
      }
    } else {
      return function () {
          alert('당신의 컴퓨터는 바이러스에 감염되었습니다.');
          alert('즉시, 프로그램을 구독하여 치료하십시오!');
          alert('즉시, 프로그램을 구독하여 치료하십시오!');
          alert('즉시, 프로그램을 구독하여 치료하십시오!');
        };
      };
    };
    const mystery = mysteryBox(); // 함수를 변수에담아 결과를 캡쳐한다.
    mystery(); // 호출
  <-

  >> 반환 함수 - 팩토리 함수
  ->
    function ageInput(min, max) {
      return function(num) {
        return min <= num && max >= num;
      };
    };
    const isYoung = ageInput(0, 30);
    isYoung(10);
  <-

  >> 메서드 정의하기
  ->
    const myMath = {
      PI: 3.14,
      plus: function(num) { // 이런식으로 정의해도 ok지만
        return num + num;
      },
      minus(num) { // 이런식으로 줄여서 정의해도 ㄱㅊ
        return num - num;
      }
    };
    myMath["minus"](1)  // 호출방법 1 
    myMath.minus(1)  // 호출방법 2 (강력추천)
  <-
*/