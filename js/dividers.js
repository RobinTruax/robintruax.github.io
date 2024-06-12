// Contrast
book = document.querySelector(".book");
d1 = document.querySelector("#d1");
d2 = document.querySelector("#d2");

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

// Animation
book.addEventListener("scroll", () => {
    d1.style.top = bezier(progress(0), 110, 0, 0, -85).toString() + "%";
    d2.style.top = bezier(progress(0.3*window.innerHeight), 115, 0, 0, -85).toString() + "%";
});