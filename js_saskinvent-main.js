let slide_index = 0;
show_slides();

function show_slides() {
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slide_index++;
  if (slide_index > slides.length) {slide_index = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide_index-1].style.display = "block";  
  dots[slide_index-1].className += " active";
  setTimeout(show_slides, 2000); // Change image every 2 seconds
}