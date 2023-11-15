/*
  >> 변수 const와 배열 const는 조금 다르다.
  ->
    > 변수 const
    const userName = 'sungmin' // 값을 변경하거나 수정이 불가능

    > 배열 const
    const userAgeList = [1,2,3,4,5] // 배열 컨텐츠 수정이 가능하다
    console.log(userAgeList.pop()) // [1,2,3,4]
    console.log(userAgeList.push(6)) // [1,2,3,4,5,6]
    * 배열을 재선언 하는건 불가능
    const userAgeList = [4,3,2,1] // 에러발생
    // 기존에 선언한 배열안에서 컨텐츠를 삭제하거나 추가할것!
  <-
*/