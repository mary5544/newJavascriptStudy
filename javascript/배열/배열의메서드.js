/*
  >> push(), pop() : 배열의 (끝)에 추가하거나 삭제
  ->
    > push(추가내용) : 배열의 끝에 요소추가
    let memberList = ['mary5544', 'sungmin', 'kim'];
    memberList.push('jun');
    console.log(memberList) // ['mary5544', 'sungmin', 'kim', 'jun']

    > pop() : 배열의 끝 요소삭제
    let memberList = ['mary5544', 'sungmin', 'kim'];
    memberList.pop();
    console.log(memberList) // ['mary5544', 'sungmin']
  <-

  >> shift(), unshift() : 배열의 (처음)에 추가하거나 삭제
  ->
    > shift() : 맨앞 요소를 삭제
    let memberList = ['mary5544', 'sungmin', 'kim']
    memberList.shift();
    console.log(memberList) // ['sungmin', 'kim']

    > unshift() : 맨앞에 요소추가
    let memberList = ['mary5544', 'sungmin', 'kim']
    memberList.unshift('min');
    console.log(memberList) // ['min', 'mary5544', 'sungmin', 'kim']
  <-

  >> concat(), indexOf(), includes(), reverse()
  ->
    > concat(대상배열) : 기존배열을 대상배열과 접합하여 새로운 배열을 리턴해준다
    let list = ['a', 'b', 'c'],
        list2 = ['d', 'e', 'f'],
        result = list.concat(list2);
    console.log(result); // ['a', 'b', 'c', 'd', 'e', 'f']

    > indexOf(찾을대상) : strings indexOf랑 비슷, 대상조회
    let list = ['apple', 'bbb', 'c'];
    console.log(list.indexOf('apple')); // 0 번째
    console.log(list.indexOf('bbb')); // 1
    console.log(list.indexOf('d')); // -1 값이 없으면

    > includes(찾을대상) : 배열에 해당 대상이 있다면 true, 없으면 false
    let list = ['apple', 'bbb', 'c'];
    console.log(list.includes('apple')) // true
    console.log(list.includes('d')) // false

    > reverse() : 배열의 순서를 반전시킴
    let list = ['apple', 'bbb', 'c'];
    console.log(list.reverse()) // ['c', 'bbb' 'apple']
  <-
    
  >> slice(), splice(), sort()
  ->
    > slice(시작지점(필수x), 끝지점(필수x)) : 지점을 알려주면 해당부분 추출
    let list = ['aa', 'bb', 'cc'];
    console.log(list.slice()); // ['aa', 'bb', 'cc']
    console.log(list.slice(1)); // ['bb', 'cc']
    console.log(list.slice(1, 2)); // ['bb', 'cc']  1번요소 ~ 2번요소 추출하겠다.

    > splice(대상순서, 삭제개수, 추가요소...) : 요소 사이에 무언가를 넣거나 삭제하는 메서드
    let list = ['aa', 'bb', 'cc'];
    console.log(list.splice(1, 0, 'king')); // ['aa', 'king','bb', 'cc']
    console.log(list.splice(1, 1)); // ['aa', 'cc'] // 1번 요소를 삭제하겠다.

    > sort(콜백함수) : 배열 정렬
    let list = ['aa', 'bb', 'cc'];
    console.log(list.sort()); // ['aa','bb', 'cc']
  <-
*/