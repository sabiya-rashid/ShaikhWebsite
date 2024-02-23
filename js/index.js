const circle = document.getElementById('circle');
let rotation = 0;
let lastTime = null;

function rotateCircle(timestamp) {
    if (!lastTime) {
        lastTime = timestamp;
    }
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    rotation += 0.023 * deltaTime; // Adjust rotation speed here
    circle.style.transform = `rotate(${rotation}deg)`; // Apply rotation

    requestAnimationFrame(rotateCircle);
}

requestAnimationFrame(rotateCircle);

// document.addEventListener("DOMContentLoaded", function () {
//     const playBtn = document.querySelector('.play-btn');
//     const videoIframeContainer = document.querySelector('.video-iframe-container');

//     playBtn.addEventListener('click', function () {
//         // Change the source of the iframe to your video URL
//         const videoUrl = "";
//         document.querySelector('.video-iframe').src = videoUrl;

//         // Show the iframe container
//         videoIframeContainer.style.display = 'block';
//     });
// });

// $(function () {
//     var path = window.location.href;
//     $('#navDiv .nav-link').each(function () {
//         if (this.href === path) {
//             $(this).addClass('active');
//         }
//     })
// })
document.addEventListener('DOMContentLoaded', function () {
    var path = window.location.href;
    var links = document.querySelectorAll('#navDiv .nav-link');
    links.forEach(function (link) {
        if (link.href === path) {
            link.classList.add('active');
        }
    });
});
