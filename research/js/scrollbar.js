// Constants
book = document.querySelector(".book");
scrollbar = document.querySelector("#scrollbar");

scrollbar.style.height = (100 * window.innerHeight / book.scrollHeight).toString() + "vh";

// Scrollbar
book.addEventListener("scroll", () => {
    // scrollHeight = 1987
    // maximum scrollTop = 1070
    // innerHeight = 872
    scrollbar.style.top = (100*book.scrollTop/book.scrollHeight).toString() + "%";
});

window.onresize = () => {
    scrollbar.style.height = (100 * window.innerHeight / book.scrollHeight).toString() + "vh";   
};