let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('touchmove', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Constants
book = document.querySelector(".book");
scrollbar = document.querySelector("#scrollbar");

// Scrollbar
book.addEventListener("scroll", () => {
    scrollbar.style.top = (100*book.scrollTop/book.scrollHeight).toString() + "%";
});