let sIndex = 1;
showSlide(sIndex);

function currentSlid(n) {
    showSlide(sIndex = n);
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("formula-para");
    let dots = document.getElementsByClassName("dot1");
    if (n > slides.length) { sIndex = 1 }
    if (n < 1) { sIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[sIndex - 1].style.display = "block";
    dots[sIndex - 1].className += " active";
    // setTimeout(showSlide, 2000);
}