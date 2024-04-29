
        window.addEventListener('DOMContentLoaded', function () {
            // Get all elements with class "image-flick"
            var flickImages = document.querySelectorAll('.image-flick');

            // Function to preload images and store them in an array
            function preloadImages(images, callback) {
                var loadedImages = 0;
                var numImages = images.length;
                var imgArray = [];

                // Load each image and push it into imgArray
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

            // Iterate through each image with class "image-flick"
            flickImages.forEach(function (image) {
                // Get the data-image attribute value
                var imageData = JSON.parse(image.getAttribute('data-image'));

                // Preload the images and store them in an array
                preloadImages(imageData, function (imgArray) {
                    var currentIndex = 0;

                    // Function to change image
                    function changeImage() {
                        // Set the src attribute of the image to the next image in imgArray
                        image.src = imgArray[currentIndex].src;
                        // Increment currentIndex and reset to 0 if exceeds the length of imgArray
                        currentIndex = (currentIndex + 1) % imgArray.length;
                    }

                    // Call changeImage function
                    changeImage();

                    // Optionally, you can set a time interval to automatically change the image
                    setInterval(changeImage, 1000); // Change image every 3 seconds (3000 milliseconds)
                });
            });
        });
    