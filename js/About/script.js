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
        img.src = '/Eco Landscaping/img/Home/faqs/minus.svg';
      } else {
        img.src = '/Eco Landscaping/img/Home/faqs/plus.svg';
      }
    });
});