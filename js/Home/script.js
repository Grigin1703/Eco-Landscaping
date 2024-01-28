// video 

const videoBtn = document.querySelector('.video-btn');
const videoPicture = document.querySelector('.video-picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');


videoWrapper.addEventListener('click', function(){
 
 if (video.paused) {
   videoPicture.classList.add('none');
   videoWrapper.classList.remove('video-overlay');
   videoBtn.classList.add('none');
   video.play()
 } else {
   videoWrapper.classList.add('video-overlay');
   videoBtn.classList.remove('none');
   video.pause();
 }
})




// FAQ
const accordionBlocks = document.querySelectorAll('.accordion-block');


accordionBlocks.forEach((el) => {

  const title = el.querySelector('.accordion-block-content');
  const block = el.querySelector('.accordion-block-text');
  const img = el.querySelector('img');

  
  title.addEventListener('click', () => {
    
    if (block.classList.contains('none')) {
      block.classList.remove('none');
    } else {
      block.classList.add('none');
    }

    if (img.src.includes('plus')) {
        img.src = '/Eco Landscaping/img/About/faqs/minus.svg';
      } else {
        img.src = '/Eco Landscaping/img/About/faqs/plus.svg';
      }
    });
});









