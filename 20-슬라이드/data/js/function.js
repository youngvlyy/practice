/**
 *  1. 썸네일에 대한 click 이벤트 구문 작성
 *      -> a태그의 기본기능 작동방지
 * 
 *  2. 썸네일 활성화 -> .toggle() 활용
 * 
 *  3. 컨테이너 이동 -> CSS에서 작성한 논리를 공식화
 */

const $thmbs = document.querySelectorAll('.slides-thmbnail>li>a');//썸네일
const $container = document.querySelector('.slides-container');//컨테이터

//썸네일에 대한 클릭이벤트 구문
$thmbs.forEach(function($thmb, idx){
    $thmb.addEventListener('mouseover', function(evt){
        evt.preventDefault();

        // alert('클릭~!');

        //썸네일 활성화
        $thmbs.forEach(($thmb)=>{
            $thmb.parentElement.classList.toggle('on', this===$thmb);
        });

        //슬라이드 이동
        $container.style.left = -1120*idx + 'px';
    });
});