let slide_box = 1;
showSlides(slide_box);

// Next/previous controls
function plusSlide(n) {
    showSlides(slide_box += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slide_box = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("desc");
    if (n > slides.length) { slide_box = 1 }
    if (n < 1) { slide_box = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_box - 1].style.display = "block";
}