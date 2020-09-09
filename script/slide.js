var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function showSlides(n) {
	var i;
	var slide = document.getElementsByClassName('slides');
	if (n > slide.length) {
		slideIndex = 1
	}
  	if (n < 1) {
		slideIndex = slide.length
		}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[slideIndex-1].style.display = "block";
}