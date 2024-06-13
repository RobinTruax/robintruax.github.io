// Constants
book = document.querySelector(".book");
pages = document.getElementsByClassName("page");
scrollbar = document.querySelector("#scrollbar");

// Snap Target Calculator
function snaptarget(start, end){
    wh = window.innerHeight;
    if(end > start){
        if(end > start + wh*0.2){
            return Math.ceil(end/wh)*wh;
        } else {
            return Math.floor(end/wh)*wh;
        }
    } else {
        if(end < start - wh*0.2){
            return Math.floor(end/wh)*wh;
        } else {
            return Math.ceil(end/wh)*wh;
        }
    }
}

// Check if mobile
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if(!isMobile){
    // Scrollbar
    book.addEventListener("scroll", () => {
        scrollbar.style.top = (window.innerHeight*book.scrollTop/book.scrollHeight).toString() + "px";
        scrollbar.style.height = (window.innerHeight*window.innerHeight/book.scrollHeight).toString() + "px";
    });

    // Wheel
    book.addEventListener("wheel", (e) => {
        e.preventDefault();
    })
}
//     // Scroll Snap
//     var timer = null;
//     var scrollstart = -1;
//     book.addEventListener('scroll', function() {
//         if(scrollstart == -1){
//             scrollstart = book.scrollTop;
//         }
//         if(timer !== null) {
//             clearTimeout(timer);        
//         }
//         timer = setTimeout(function() {
//             book.scrollTo({
//                 top: snaptarget(scrollstart, book.scrollTop),
//                 left: 100,
//                 behavior: "smooth",
//             });
//             scrollstart = -1;
//         }, 25);
//     }, false);
// }