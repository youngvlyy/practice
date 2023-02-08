// alert('연결성공')

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
        4. DOMTree를 이용해서 노드를 탐색하는 방법
*/
const $screen = document.getElementById('screen');

//a태그 16개를 셀렉팅하여 배열형식으로 저장
const $thmbs = document.querySelectorAll('li>a');
console.log($thmbs);

$thmbs.forEach(function($thmb){
  $thmb.addEventListener('click', function(e){
    e.preventDefault();

    const thh = $thmb.getAttribute('href');
    $screen.setAttribute('src', thh);

    
  })
})


// $thmbs[0].addEventListener('click', function(evt){
//   evt.preventDefault();

//   //this의 의미 = Current HTML Element
//   //이번에 click한 바로 그녀석(해당 이벤트의 주체)
//   console.log('this =', this);

//   const imgSrc = this.getAttribute('href');
//   $screen.setAttribute('src',imgSrc);

//   const imgAlt = this.firstElementChild.getAttribute('alt');
//   $screen.setAttribute('alt', imgAlt);
// });

// $thmbs[1].addEventListener('click', function(evt){
//   evt.preventDefault();

//   const imgSrc = this.getAttribute('href');
//   $screen.setAttribute('src',imgSrc);

//   const imgAlt = this.firstElementChild.getAttribute('alt');
//   $screen.setAttribute('alt', imgAlt);
// });


// $thmbs[2].addEventListener('click', function(evt){
//   evt.preventDefault();

//   const imgSrc = this.getAttribute('href');
//   $screen.setAttribute('src', imgSrc);

//   const imgAlt = this.firstElementChild.getAttribute('alt');
//   $screen.setAttribute('alt', imgAlt);
// });


// $thmbs[3].addEventListener('click', function(evt){
//   evt.preventDefault();

//   const imgSrc = this.getAttribute('href');
//   $screen.setAttribute('src', imgSrc);

//   const imgAlt = this.firstElementChild.getAttribute('alt');
//   $screen.setAttribute('alt', imgAlt);
// });

// $thmbs[4].addEventListener('click', function(evt){
//   evt.preventDefault();

//   const imgSrc = this.getAttribute('href');
//   $screen.setAttribute('src', imgSrc);

//   const imgAlt = this.firstElementChild.getAttribute('alt');
//   $screen.setAttribute('alt', imgAlt);
// });

// $thmbs[5].addEventListener('click', function(evt){
//   evt.preventDefault();

//   const imgSrc = this.getAttribute('href');
//   $screen.setAttribute('src', imgSrc);

//   const imgAlt = this.firstElementChild.getAttribute('alt');
//   $screen.setAttribute('alt', imgAlt);
// });

// $thmbs[6].addEventListener('click', function(evt){
//   evt.preventDefault();

//   const imgSrc = this.getAttribute('href');
//   $screen.setAttribute('src', imgSrc);

//   const imgAlt = this.firstElementChild.getAttribute('alt');
//   $screen.setAttribute('alt', imgAlt);
// });

// $thmbs[7].addEventListener('click', function(evt){
//   evt.preventDefault();

//   const imgSrc = this.getAttribute('href');
//   $screen.setAttribute('src', imgSrc);

//   const imgAlt = this.firstElementChild.getAttribute('alt');
//   $screen.setAttribute('alt', imgAlt);
// });