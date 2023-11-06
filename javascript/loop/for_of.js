/*
  >> for ~ of문 : 배열을 변수에담아서 사용하는 간단한 방법
  ->
    > 구조
    const arr = [1, 2, ,3 ...];
    for (꺼낸걸 저장할 변수지정 of 대상배열변수) {code...}

    > 사용예시
    const categoryName = ['shop', 'login', 'profile', 'support']
    for (let name of categoryName) {
      console.log(name);
    };

    > 사용예시 - 다중배열
    const schoolClass = [
      ['성민', "민수"],
      ['지민', "하이"],
      ['수민', "하나"]
    ];
    for (let shClass of schoolClass) {
      for (let shName of shClass) { // shClass값이 배열일태니깐 함 더
        console.log(shName);
      };
    };
  <-
*/