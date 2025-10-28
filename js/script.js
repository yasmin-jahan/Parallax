
/*
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');



window.addEventListener('scroll', () =>{
    
    let value = window.scrollY;

    

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';

} );

*/


let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

let targetScroll = 0;
let currentScroll = 0;

window.addEventListener('scroll', () => {
  targetScroll = window.scrollY;
});

function animate() {
  currentScroll += (targetScroll - currentScroll) * 0.1; // smooth easing

  text.style.marginTop = currentScroll * 2.5 + 'px';
  leaf.style.top = currentScroll * -1.5 + 'px';
  leaf.style.left = currentScroll * 1.5 + 'px';
  hill5.style.left = currentScroll * 1.5 + 'px';
  hill4.style.left = currentScroll * -1.5 + 'px';
  hill1.style.top = currentScroll * 1 + 'px';

  requestAnimationFrame(animate);
}

animate();
