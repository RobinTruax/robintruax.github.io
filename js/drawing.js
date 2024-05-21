book = document.querySelector(".book");
wh = window.innerHeight;
done = false;

// Get Image 1
var svg1 = document.getElementById("im1");
var svg2 = document.getElementById("im2");

function proportion(startScroll, endScroll){
    var current = Math.min(Math.max(book.scrollTop, startScroll), endScroll);
    var raw = (current - startScroll) / (endScroll - startScroll);
    return raw;
}

svg1.addEventListener("load", function() {
    // if(done == false){
        var doc1 = svg1.getSVGDocument();
        var paths1 = doc1.querySelectorAll('.draw');
        // done = true;

        lengths1 = []
        for (i = 0; i < paths1.length; i++) {
            lengths1[i] = paths1[i].getTotalLength();
            paths1[i].style.strokeDasharray = lengths1[i] + ' ' + lengths1[i];
            paths1[i].style.strokeDashoffset = lengths1[i];
        }

        for (i = 0; i < paths1.length; i++) {
            paths1[i].style.transition = paths1[i].style.WebkitTransition = 'stroke-dashoffset 8s ease-out';
            paths1[i].style.strokeDashoffset = 0;
        }

        // setTimeout(function(){
        //     svg1.data = "images/about1g.svg"
        // }, 2000);
    // }

    book.addEventListener("scroll", () => {
        if(done == false){
            done = true;
            svg1.data = "images/about1g.svg";
        }
    });

    // book.addEventListener("scroll", () => {
    //     prop = Math.min(0.45+proportion(0, wh/3), 1);
    //     for (i = 0; i < paths1.length; i++) {
    //         paths1[i].style.transition = paths1[i].style.WebkitTransition = 'stroke-dashoffset 1s ease-out';
    //         paths1[i].style.strokeDashoffset = prop*lengths1[i];
    //     }
    // });
})

svg2.addEventListener("load", function() {
    var doc2 = svg2.getSVGDocument();
    var paths2 = doc2.querySelectorAll('.draw');
    lengths2 = []
    for (i = 0; i < paths2.length; i++) {
        lengths2[i] = paths2[i].getTotalLength();
        paths2[i].style.strokeDasharray = lengths2[i] + ' ' + lengths2[i];
        paths2[i].style.strokeDashoffset = 0;
    }

    // book.addEventListener("scroll", () => {
    //     prop = Math.min(proportion(wh*3/4, wh), 1);
    //     for (i = 0; i < paths2.length; i++) {
    //         paths2[i].style.transition = paths2[i].style.WebkitTransition = 'stroke-dashoffset 1s ease-out';
    //         paths2[i].style.strokeDashoffset = (1-prop)*lengths2[i];
    //     }
    // });
})


// // Toggle
// var on = false;
// let svg = document.getElementById("im");
// var t = 3;

// // Get large
// function large(arr, c){
//     var array = arr.slice(0).sort();
//     var len = array.length;
//     return array[Math.floor(c*len)-1];
// }

// // Collapse
// function Collapse(paths, i){
//     if(on){
//         paths[i].style.strokeDashoffset = 0;
//     }
// }

// // Animation Time
// function animationTime(length, max_length){
//     var factor = Math.min(length/max_length, 1);
//     return Math.round(t*Math.pow(factor, 2/3) * 100) / 100;
// }

// svg.addEventListener("load", function() {
//     // Obtain object
//     var doc = svg.getSVGDocument();
//     var paths = doc.querySelectorAll('.draw');

//     lengths = []
//     // Initial setup
//     for (i = 0; i < paths.length; i++) {
//         lengths[i] = paths[i].getTotalLength();
//         paths[i].style.transition = paths[i].style.WebkitTransition = 'none';
//         paths[i].style.strokeDasharray = lengths[i] + ' ' + lengths[i];
//         paths[i].style.strokeDashoffset = lengths[i];
//     }
//     max_length = large(lengths, 0.3);

//     // Animation Parameters
//     wait_times = []
//     animation_times = []
//     for (i = 0; i < paths.length; i++) {
//         animation_times[i] = animationTime(lengths[i], max_length);
//         wait_times[i] = 0.8*t - 0.8*animation_times[i];
//     }

//     // Mouseover
//     svg.addEventListener("mouseover", function() {
//         on = true;
//         // Animate
//         for (i = 0; i < paths.length; i++) {
//             paths[i].style.transition = paths[i].style.WebkitTransition = 'stroke-dashoffset ' + animation_times[i].toString() + 's ease-out';
//             setTimeout(Collapse, wait_times[i]*1000, paths, i);            
//         }
//     })

//     // Mouseout
//     svg.addEventListener("mouseout", function() {
//         on = false;
//         // Animate
//         for (i = 0; i < paths.length; i++) {
//             paths[i].style.transition = paths[i].style.WebkitTransition = 'stroke-dashoffset ' + (0.3*animation_times[i]).toString() + 's ease-out';
//             paths[i].style.strokeDashoffset = lengths[i];
//         }
//     })
// })