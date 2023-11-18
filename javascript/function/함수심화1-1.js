/*
  >> 함수의 유효범위
  ->
    >> 함수 범위 - 전역변수 // 
    const text1 = '전역번수!';
    function textOutput() {
      console.log(text1);
    };
    textOutput(); // 전역변수, 함수내에 정의된 변수가 없다면 전역변수에 접근하여 값을 가져온다

    >> 함수 범위 - 지역변수 // 
    const text1 = '전역번수!';
    function textOutput() {
      let text1 = '지역변수';
      console.log(text1);
    };
    textOutput(); // 지역변수, 함수내에 전역변수랑 같은 이름의 변수가 있으면 지역변수의 값을 가져온다

    >> 함수 범위 - 함수가 끝나면 지역변수도 생을 마감한다 // 
    function textOutput() {
      let text1 = '지역변수';
      console.log(text1);
    };
    text1 = 'hello' // 함수가 끝나면 지역변수의 수명도 같이 끝나므로 접근할수없다.

    >> 함수 범위 - 함수내에서 지역변수 변경하기 // 
    let text1 = '전역변수'
    function textOutput() {
      text1 = '지역변수';
      console.log(text1);
    };
    textOutput();
    console.log(text1) // 함수내에서 let, const 키워드를 사용하지 않고 변수명을 사용하면 기존 전역변수를 덮어 쒸운다. 
  <-

  >> 블록 범위
  ->
    let radius = 8;
    if (radius > 0) {
      const PI = 3.14;
      let circ = 2 * PI * radius;
    }
    console.log(radius); // 8, 접근가능
    console.log(PI); // 접근불가
    console.log(circ); // 접근불가
    * let, const 키워드를 사용하게되면 루프문, 조건문 {} 블록범위 안에서 정의된 변수는 외부에서 접근이 불가능하다.
      {} 블록 안에서만 접근가능
  <-

  >> 렉시컬 범위
  ->
    function aaa() {
      const name = ['성민', '지민'];
      function bbb() {
        function inner() {
          for (userName of name) { // 중첩이 많이 진행된 함수에서도 조상함수의 변수에 접근이가능하다., 역으로 조상함수에서 자식함수 변수에는 접근 불가능
            console.log(name);
          };
        };
        inner();
      };
      bbb();
    };
    aaa();
  <-

  >> 함수를 정의하는 다른방법 (중요)
  ->
    const sum = function(num1, num2) { // 함수를 변수로 정의할수도있다
      return num1 + num2;
    };
    sum(1, 1); // 호출방법
  <-
*/