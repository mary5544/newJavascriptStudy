/*
  >> for문
  ->
    > 기본구조 : for (변수초기화; 조건; 증감식) {}
    for (let i = 0; i < 10; i++) { // 0부터 9까지 반복하겠다.
      console.log(i);
    };

    > 2 ~ 100 짝수만 나오게해보기
    for (let i = 2; i <= 100; i += 2) {
      console.log(i);
    }
  <-

  >> 무한루프
  ->
    > 잘못된 식으로 무한루프가 돌면서 컴퓨터가 다운됨
    for (let i = 100; i >= 100; i++) {...} // 무한루프 발생
  <-

  >> 배열루프
  ->
    let name = ['성민', '수민', '지민', '리사', '미나'];
  
    > name 배열 꺼내오는법
    for( let i = 0; i < name.length; i++ ) {
      console.log(i, name[i]);
    }

    > 역순으로 꺼내오기
    for( let i = name.length - 1; i >= 0; i-- ) {
      console.log(i, name[i]);
    }
  <-

  >> 이중루프
  ->
    const studentClass = [
      ['성민', '민수'],
      ['지민', '유키', '빈수', '티키'],
      ['유나', '나나코', '히데키']
    ]

    > 2차원 배열, 루프로 꺼내보기
    for (let i = 0; i < studentClass.length; i++) {
      const row = studentClass[i];
      console.log(`CLASS #${i + 1}`);
      for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
      }
    }
  <-
*/