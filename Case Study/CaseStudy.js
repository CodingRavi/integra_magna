// Navebar Add
$(function(){
  $("#nav-placeholder").load("https://codingravi.github.io/integra_magna/Header.html");
});
 // Footer
 $(function(){
  $("#Footer_placeholder").load("https://codingravi.github.io/integra_magna/Footer.html");
});


// Hero Section Image
window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const angle = scrollY / 12; // Adjust the division factor to control rotation speed
    const parallaxOffset = scrollY * 0.1; // Adjust the multiplier to control parallax effect
    document.querySelector(
      ".challange_move"
    ).style.transform = `rotate(${angle}deg)`;
    document.querySelector(
      ".Decathlon_hero_text"
    ).style.top = `calc(10vw + 5px - ${parallaxOffset}px)`; // Adjust the offset value as needed
  });
  
  //Main script
  
  window.addEventListener("DOMContentLoaded", function () {
    var flickImages = document.querySelectorAll(".image-flick");
  
    function preloadImages(images, callback) {
      var loadedImages = 0;
      var numImages = images.length;
      var imgArray = [];
  
      images.forEach(function (imageUrl) {
        var img = new Image();
        img.onload = function () {
          loadedImages++;
          if (loadedImages === numImages) {
            callback(imgArray);
          }
        };
        img.src = imageUrl;
        imgArray.push(img);
      });
    }
  
    flickImages.forEach(function (image) {
      var imageData = JSON.parse(image.getAttribute("data-image"));
  
      preloadImages(imageData, function (imgArray) {
        var currentIndex = 0;
  
        function changeImage() {
          image.src = imgArray[currentIndex].src;
          currentIndex = (currentIndex + 1) % imgArray.length;
        }
  
        changeImage();
  
        setInterval(changeImage, 1000);
      });
    });
  });
  
