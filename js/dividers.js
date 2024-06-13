// Contrast
book = document.querySelector(".book");
d1 = document.querySelector("#d1");
d2 = document.querySelector("#d2");

// Configurations
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