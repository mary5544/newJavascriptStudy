/*
  >> 객체에 접근하는법
  ->
    > (방법 1) - []을 이용하자
    ->
      const musicReco = {
        study : 'lo-fi',
        petulance : 'rock',
        midnight : 'jazz'
      }
      console.log( musicReco['study'] ); // lo-fi
      console.log( musicReco['midnight'] ); // jazz
      * 객체 key값은 내부에서 string 데이터 타입으로 바뀜, 값이 블리언, 숫자 타입 상관없이
    <-

    > (방법 2) - .을 이용하자
    ->
      const musicReco = {
        study : 'lo-fi',
        petulance : 'rock',
        midnight : 'jazz'
      }
      console.log(musicReco.study); // lo-fi
      console.log(musicReco.petulance); // rock
    <-
  <-

  >> 배열과 객체을 중첩하여 사용가능
  ->
    const comment = [
      {userName: 'mary5544', text: 'ㅋㅋㅋㅋㅋㅋㅋ', vote: 10},
      {userName: 'ㅇㅇ', text: '뭐냐 ㅋ', vote: -5}
    ]

    > text: '뭐냐 ㅋ' 에 접근하기
    console.log( comment[1].text ); // 뭐냐 ㅋ
  <-
*/