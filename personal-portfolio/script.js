let i = 0;
let text = 'User friendly, Mobile friendly and Stunning web pages';
let speed = 50;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("writer").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


typeWriter();

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
        items: 1
      }
  }
})