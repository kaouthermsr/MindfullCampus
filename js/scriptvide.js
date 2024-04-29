document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: false,
    autoplay: {
      delay: 3500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Pause video on slide change
  mySwiper.on("slideChange", function () {
    var videos = document.querySelectorAll(".swiper-video iframe");
    videos.forEach(function (video) {
      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });
  });
});
