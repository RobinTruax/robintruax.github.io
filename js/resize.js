// Custom Variable for Height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Update on Resize
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Update on Movement
window.addEventListener('touchmove', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Constants
book = document.querySelector(".book");
scrollbar = document.querySelector("#scrollbar");

// Scrollbar
book.addEventListener("scroll", () => {
    scrollbar.style.top = (window.innerHeight*book.scrollTop/book.scrollHeight).toString() + "px";
    scrollbar.style.height = (window.innerHeight*window.innerHeight/book.scrollHeight).toString() + "px";
});