/*
  >> for ~ of 객체
  ->
    > 구조
    const studentScore = {
      성민: 95,
      민수: 40,
      수민: 49,
      하나: 89,
      이나: 99
    };
    let total = 0, // value 합계 저장
       scores = Object.values(studentScore) // Object.value, Object.keys, Object.entries 특수 키워드를 이용하여 studentScore 객체의 값을 배열화
    for (let person of scores ) {
      total += person;
    };
    console.log(total / scores.length);
  <-

  >> for ~ in문 *old한 방식
  ->
    const studentScore = {
      성민: 95,
      민수: 40,
      수민: 49,
      하나: 89,
      이나: 99
    };
    for (let person in studentScore) {
      console.log(`이름 : ${person}, 점수 : ${studentScore[person]}`);
    };
  <-
*/