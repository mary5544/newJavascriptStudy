/*
  >> function
  ->
    >> function 구조
    function 이름(파라미터_매개변수) {
      실행코드...
    };
    이름(아귀먼트_인수); // 실행

    * 자바스크립트는 함수를 정의하기전에 호출해도 호이스팅 현상 때문에 실행되는데 
      왠만하면 함수를 정의하고 그 아래에 호출하는것을 권한다.
    * 함수 이름은 주로 카멜케이스 표기법을 이용해서 이름을 만든다.

    >> 인수를 사용하자
    function repeat(msg, number) {
      for (let i = 0; i < number; i++) {
        console.log(`${msg} `);
      };
    };
    repeat('KIM', 5);

    >> 값으로써 전달하고싶다면 return을 사용하자
    function sum(num1, num2) {
      let sum_ = num1 + num2;
      return sum_; // return을 만나면 해당값을 배출하고 함수 실행이 종료된다.
    };
    let sumNum = sum(5, 5); // 리턴값이 변수로 캡쳐된다.
  <-
*/