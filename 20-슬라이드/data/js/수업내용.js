const $btn = document.querySelectorAll('slides-thmbnail>li>a');
const $screen = document.querySelector('slides-container');
$btn.forEach((btn, idx)=>{
    btn.addEventListener('mouseover', function(){
        
        $screen.style.left = -1120 * idx + 'px';
    })
})