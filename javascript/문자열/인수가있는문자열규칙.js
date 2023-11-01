/*
  >> .indexOf('찾으려는 단어') : 문자열에 해당 단어가 어디서 부터 시작하는지 알려준다.
  ->
    let tvShow = 'coding show'; [0, 1, 2, 3, 4 ...]
    console.log(tvShow.indexOf('coding')); // 0
    console.log(tvShow.indexOf('show')); // 7
    console.log(tvShow.indexOf('test')); // 해당 단어가 없으면 -1
  <-

  >> .slice(시작지점_필수, 끝지점_선택사항) : 문자열 추출
  ->
    let tvShow = 'coding show'; [0, 1, 2, 3, 4 ...]
    console.log(tvShow.slice(0)); // 0번째 내용부터 끝까지 추출
    console.log(tvShow.slice(0, 5)); // 0 ~ 5번째 내용부터 끝까지 추출
    console.log(tvShow.slice(-4)); // 마지막4번째 내용부터 끝까지 추출
  <-

  >> .replace('바꾸려는대상', '목표문자') : 정규표현식을 사용하여 특정 문자열 변경
  ->
    let tvShow = 'coding show'; [0, 1, 2, 3, 4 ...]
    console.log(tvShow.replace('show', 'world')); // coding world
  <-

  >> .repeat(반복횟수) : 반복
  ->
    'lol'.repeat(5); // lollollollollol
  <-
*/