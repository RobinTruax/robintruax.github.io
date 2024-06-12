// Custom Variable for Height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
d1 = document.querySelector("#d1");
d2 = document.querySelector("#d2");

// Update on Resize
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    d1.style.bottom = "0";
    d2.style.bottom = "0";
});

// Update on Movement
window.addEventListener('touchmove', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    d1.style.bottom = "0";
    d2.style.bottom = "0";
});

// Constants
book = document.querySelector(".book");
scrollbar = document.querySelector("#scrollbar");

// Scrollbar
book.addEventListener("scroll", () => {
    scrollbar.style.top = (window.innerHeight*book.scrollTop/book.scrollHeight).toString() + "px";
    scrollbar.style.height = (window.innerHeight*window.innerHeight/book.scrollHeight).toString() + "px";
});