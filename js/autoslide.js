$(function () {
  $(".giftbox").click(function () {
    $(".mainimg").vegas({
      slides: [
        { src: "./static/img/bg.jpg" },
        { src: "./static/img/bg_2.jpg" },
        { src: "./static/img/bg2.jpg" },
        { src: "./static/img/bg4.mp4" },
      ],
      delay: 3500,
    });
  });
});
