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
*/

const $screen = document.getElementById('screen')
const thumb = document.querySelectorAll('li > a');
for(let i=0; i< thumb.length; i++){
    const thumbc =thumb[i]
    thumbc.addEventListener('click',function(evt){
        evt.preventDefault();
        const $link = thumbc.getAttribute('href');
        $screen.setAttribute('src', $link);
    })
}