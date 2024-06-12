// Contrast
book = document.querySelector(".book");
pages = document.getElementsByClassName("page")
d1 = document.querySelector("#d1");
d2 = document.querySelector("#d2");

offset = 12.5*window.innerWidth/window.innerHeight;
height = 70;

// Progress
function progress(start){
    current = book.scrollTop % window.innerHeight;
    return Math.min((current - start) / (window.innerHeight - start), 1);
}

// Bezier
function bezier(t, initial, p1, p2, final) {
    return (
        (1 - t) * (1 - t) * (1 - t) * initial +
        3 * (1 - t) * (1 - t) * t * p1 +
        3 * (1 - t) * t * t * p2 +
        t * t * t * final
    );
}

// Get Polygon
function polyprogress(p, b, e){
    prog = progress(p);
    bez = bezier(prog, b, 0, 0, e);
    return `polygon(0% ${bez+offset}%, 0% ${bez+offset+height}%, 100% ${bez+height}%, 100% ${bez}%)`;
}

// Initialize
d1.style.clipPath = polyprogress(0, 110, -110);
d2.style.clipPath = polyprogress(0.3*window.innerHeight, 115, -105);

// Animation
book.addEventListener("scroll", () => {
    // Progress
    d1.style.clipPath = polyprogress(0, 110, -110);
    d2.style.clipPath = polyprogress(0.3*window.innerHeight, 115, -105);
});

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if(isMobile){
    alert("mobile");
    book.scrollSnapType = "y mandatory"
} else {
    alert("not mobile");
    // Snap Target
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

    // Scroll Snap
    var timer = null;
    var scrollstart = -1;
    book.addEventListener('scroll', function() {
        if(scrollstart == -1){
            scrollstart = book.scrollTop;
        }
        if(timer !== null) {
            clearTimeout(timer);        
        }
        timer = setTimeout(function() {
            book.scrollTo({
                top: snaptarget(scrollstart, book.scrollTop),
                left: 100,
                behavior: "smooth",
            });
            scrollstart = -1;
        }, 100);
    }, false);

}