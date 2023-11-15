/*
  >> [1, 2, 3] === [1, 2, 3]을 비교하면?
  ->
    let num = [1, 2, 3]
    console.log(num === [1, 2, 3]); // false
    * flase가 뜨는이유 자바스크립트는 두개의 컨텐츠를 비교하는게 아닌 (메모리 주소)로 비교하기 때문에
    - 메모리 주소는 변수선언과 동시에 할당됨
  <-

  >> [1, 2, 3] === [1, 2, 3]을 true로 처리하려면?
  ->
    let num = [1, 2, 3],
        numCopy = num;
    console.log(num === numCopy) // true
    * numCopy변수는 num변수를 참고하고 있으므로 num변수의 주소를 가르킨다.
    - 즉, numCopy 변수는 num변수의 메모리 주소를 가지고있다.
  <-
*/