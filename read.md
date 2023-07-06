# exchange-currency (환전 앱 만들기)

## 객체(object)란?
: 객체는 관련된 데이터와 함수(일반적으로 여러 데이터와 함수로 이루어지는데, 객체 안에 있을 때는 보통 프로퍼티와 메소드라고 부름)의 집합
; 변수, 자료구조, 함수 또는 메소드 등

## 함수(function)란?
: 하나의 특별한 목적을 가진 작업을 수행하도록 설계된 독립적인 블록을 의미함.
```function 함수이름(매개변수1, 매개변수2,...) {
   함수가 호출되었을 때 실행하고자 하는 실행문;
}
```
## document
:웹페이지에 존재하는 HTML 요소에 접근하고자 할 때는 반드시 Document 객체부터 시작해야 함.
-> Document 객체는 HTML 요소와 관련된 작업을 도와주는 다양한 메소드를 제공함.
```
- HTML 요소의 선택
- HTML 요소의 생성
- HTML 이벤트 핸들러 추가
- HTML 객체의 선택

[HTML 요소를 선택하기 위해 제공되는 메소드]
document.getElementByTagName(태그이름) : 해당 태그 이름의 요소를 모두 선택함.
document.getElementById(아이디) : 해당 아이디의 요소를 선택함.
document.getElementByClassName(클래스이름) : 해당 클래스에 속한 요소를 모두 선택함.
document.getElementByName(name속성값) : 해당 name 속성값을 가지는 요소를 모두 선택함.
document.getElementquerySelectAll(선택자) : 해당 선택자로 선택되는 요소를 모두 선택함.

[새로운 HTML 요소를 생성하기 위해 제공되는 메소드]
document.createElement(HTML요소) : 지정된 HTML 요소를 생성함.
document.write(텍스트) : HTML 출력 스트림을 통해 텍스트를 출력함.

[HTML 요소에 이벤트 핸들러를 추가하기 위해 제공되는 메소드]
document.getElementById(아이디).onclick=function(){실행할 코드} : 마우스 클릭 이벤트와 연결될 이벤트 핸들러 코드를 추가함.
```
## document.querySelectorAll()
: 지정된 selector 그룹에 일치하는 document의 엘리먼트 리스트를 나타내는 정적 NodeList를 반환함.
; document.querySelector(”.classname”) = $(”.classname”) 제이쿼리에서 선택자를 불러오는 것과 같음.
-> 여기서 document.querySelctorAll('.classname');
-> All이 추가되면 classname을 가진 모든 요소를 배열로 가져옴.

## forEach
: 배열의 요소를 순서대로 처리하는 Method(함수).
; array 객체에 forEach 메소드를 사용하면 배열에 포함되는 요소를 차례대로 꺼내 콜백함수에 전달하여 처리할 수 있음.
```
[배열의 반복문]
- 배열에서만 사용하는 메소드 (array 객체에서만 사용 가능한 메소드)
- 배열의 처음부터 마지막 요소까지 반복하여 실행함.
- 인자로 콜백함수를 받아옴.
- 주어진 콜백함수를 배열 요소 각각에 대해 실행함.
- querySelectorAll() 전체 선택자를 이용하여 주로 사용함.
- 배열의 값을 하나씩 순차적으로 해당 함수에 전달함.

[parameter]
배열이름.forEach (콜백함수 (요소 값))
배열이름.forEach (콜백함수 (요소 값 요소의 인덱스))
배열이름.forEach (콜백함수 (요소 값 요소의 인덱스 배열))

<script>
let alpha = ['일', '이', '삼'];

alpha.forEach ( el => console.log (el));

//일
//이
//삼
</script>

```