// Constants
book = document.querySelector(".book");
scrollbar = document.querySelector("#scrollbar");

// Scrollbar
book.addEventListener("scroll", () => {
    scrollbar.style.top = (100*book.scrollTop/book.scrollHeight).toString() + "%";
});