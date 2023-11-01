/*
  >> index
  ->
    let string = "Hello"; // [0, 1, 2, 3, 4]
    > 문자열의 자릿수
      - H가 몇번째 있을까? = 0
      - o가 몇번째 있을까? = 4

    > string 변수에서 H만 표시하는법
      - console.log(string[0]); // H
  <-

  >> .length
  ->
    let string = "Hello";
    > 문자수가 얼마나 있는지 알아내는방법
      - console.log(string.length); // 5
      문자수가 총 5개 이면서 [0, 1, 2, 3, 4] 배열을 가지고 있다
      즉, 마지막 문자의 자릿수를 나타내고싶다면 length결과 - 1을 하여 찾아야함
      console.log(string[4]); // o
  <-

  >> 문자열 + 숫자 = ?
  ->
    let string = "Hello",
        result = string + 1;
    console.log(typeof(result)); // string
  <-
*/