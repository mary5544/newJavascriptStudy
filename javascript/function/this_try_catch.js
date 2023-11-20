/*
  >> this
  ->
    객체안에서 this는 해당 key들을 포함하고 있는 부모객체를 뜻한다.
    const cat = {
      name: 'Blue Min',
      color: 'pink',
      meow() {
        console.log(`${this.name} come on...`)
      }
    }
    cat.meow(); // this.name = cat.name
    const meow2 = cat.meow; // meow2 변수에는 함수가담겨져 있는데 이 함수안에 있는 this 키워드는 호출하고 있는 부모객체를 찾을것이다.  meow2의 객체는 전역객체인 window 이므로 this는 전역객체를 가르킨다.
    * 전역객체 window : 자바스크립트의 (객체, 함수, 배열...)등 모든내용 정의하고 있는 조상객체
  <-

  >> try, catch : 오류가 발생하면 처리하기 위해 사용하는 문법
  ->
    function hell(msg) {
      try {
        console.log(msg.toUpperCase());
      } catch (e) {
        console.log('데이터타입이 문자가 아닙니다.');
      };
    };
    hell('abcd'); // ABCD
    hello(1234) // catch문 실행됨
    
    *가만보면 if else문이랑 비슷한듯..
  <-
*/
