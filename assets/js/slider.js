var slides = document.querySelectorAll('#slider .slide');
var currentSlide = 0;
function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}
function prevSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide-1);
  if (currentSlide < 0)
    currentSlide = slides.length-1;
  slides[currentSlide].className = 'slide showing';
}
