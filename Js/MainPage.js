// const DB = document.getElementById("downloadButton");
// const dT = document.getElementById("downloadTimer");
// const da = document.getElementById("downloadafter");

// let timer;
// let countValue = 5;

// DB.addEventListener("click", function () {
//     DB.style.display = "none";

//     timer = setInterval(function () {
//         if (countValue <= 0) {
//             clearInterval(timer);
//             dT.innerHTML = "";
//             da.style.display = "block";
//         } else {
//             dT.innerHTML = `Starting download in ${countValue} seconds...`;
//         }
//         countValue--;
//     }, 500);
// });

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    // Update active class for slides
    slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentIndex);
    });
}

function nextSlide(event) {
    event.preventDefault();
    showSlide(currentIndex + 1);
}

function prevSlide(event) {
    event.preventDefault();
    showSlide(currentIndex - 1);
}

// Initialize the carousel
showSlide(currentIndex);

var container = document.querySelector(".slide_wrap");
var slideShow = container.querySelector(".slide_show");
var slideImg = slideShow.querySelector(".slide_img");
var slides = slideImg.querySelectorAll(".slide");
var slideBtn = container.querySelectorAll(".slide_btn a");

var slideCount = slides.length;
var slideWidth = slides[0].offsetWidth;
var show_num = 3; // Not used in this example, but can be used for further customization
var num = 0;

function back() {
    if (num === 0) {
        num = slideCount - 1;
        // slideImg.style.transition = "none"; // Disable transition for instant move
        slideImg.style.transition = "margin-left 0.5s";
        slideImg.style.marginLeft = -num * slideWidth + "px";
        console.log(-num * slideWidth + "px");
    } else {
        num--;
        slideImg.style.marginLeft = -slideWidth * num + "px";
        console.log('num is not 0. so, '+-slideWidth * num + "px");
    }
}

function next() {
    if (num === slideCount - 1) {
        num = 0;
        // slideImg.style.transition = "none"; // Disable transition for instant move
        slideImg.style.marginLeft = 0 + "px";
        slideImg.style.transition = "margin-left 0.5s";
    } else {
        num++;
        slideImg.style.transition = "margin-left 0.5s";
        slideImg.style.marginLeft = -slideWidth * num + "px";
    }
}

slideBtn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        if (btn.classList.contains("prev")) {
            back();
        } else {
            next();
        }
    });
});