/*
  >> 변수 정의방법
  ->
    let 변수이름 = value;
  <-

  >> 변수끼리 연산
  ->
    let a = 1,
        b = 2;
    console.log(a + b); // 3
  <-
  >> 기존에 저장된 변수의 값 바꾸는 방법
  ->
    let a = 1,
        b = 2;
    console.log(a + b); // 3
    
    (방법 1)
    a = 2;
    console.log(a + b); // 4

    (방법 2)
    a = a + 1;
    console.log(a + b); // 4
  <-
  
  >> 기존에 저장된 변수의값을 바꿨을때 기존 변수의 값은 어떻게 되는지
  ->
    let a = 1,
        b = 2,
        value = a + b;
    
    console.log(value); // 3
    a = a + 1;
    console.log(value); // 3

    > value 값이 바뀌지 않은이유는 value 변수를 만들때 기준으로 스넵샷이 찍힌다고 생각해보면 됨

    > value 값을 바꾸고 싶다면
    value = a + b; 
    console.log(value); // 4
  <-
*/