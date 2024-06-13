// Constants
book = document.querySelector(".book");
pages = document.getElementsByClassName("page");
scrollbar = document.querySelector("#scrollbar");

// Check if mobile
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Scrollbar
if(!isMobile){
    // Show scrollbar
    scrollbar.style.opacity = "1";

    // Scroll adjustment
    book.addEventListener("scroll", () => {
        scrollbar.style.top = (window.innerHeight*book.scrollTop/book.scrollHeight).toString() + "px";
        scrollbar.style.height = (window.innerHeight*window.innerHeight/book.scrollHeight).toString() + "px";
    });
}