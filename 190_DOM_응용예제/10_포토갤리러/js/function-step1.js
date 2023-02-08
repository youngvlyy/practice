/*
  1. 썸네일을 누른다. -> 코드변환
      1) 해당 썸네일에 매칭되는 앵커 DOM을 선택
      2) 썸네일에 대한 click 이벤트 구문 작성
      3) 앵커태그의 기본기능 작동 방지

  2. 큰 이미지가 변한다.
      1) 앵커의 href 속성값을 가져온다.
      2) img#screen 의 src 속성값에 넣어준다.
      3) 앵커의 직계자식 img의 alt 속성값을 가져온다.
      4) img#screen 의 alt 속성값에 넣어준다.

      --------------------------

      DOM 선택방법
        1. document.getElementById()
        2. document.querySelector();
        3. document.querySelectorAll();
        4. DOMTree를 이용해서 노드를 탐색하는 방법 => 처리속도가 더 빠름
*/

 alert('hello world')
 const $thmbs = document.querySelector('li:nth-child(2) > a');
 $thmbs.addEventListener('click', function(evt){
    
     console.log(evt)
     evt.preventDefault();

     const imgSrc = $thmbs.getAttribute('href');
     $screen.setAttribute('src', imgSrc);
 });

 const $thmbs2 = document.querySelector('li:nth-child(3) > a');

 $thmbs2.addEventListener('click',function(evt){
     evt.preventDefault();

     const link = $thmbs2.getAttribute('href')
     $screen.setAttribute('src', link);
 });

