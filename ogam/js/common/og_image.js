//--------> 이미지 최적화 - browser-image-compression

window.onload = function() {
    var images = document.querySelectorAll('img'); // 모든 이미지 선택

    var compressImage = function(image, quality, maxSizeMB) {
        ImageCompression(image.src, {
            maxSizeMB: maxSizeMB,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        })
            .then(function(compressedFile) {
                return ImageCompression.getDataUrlFromFile(compressedFile);
            })
            .then(function(dataUrl){
                image.src = dataUrl;
            })
    };

    var isMobileDevice = window.matchMedia("(max-width: 768px)").matches; // 뷰포트 너비가 768px 이하인 경우

    images.forEach(function(image) {
        image.addEventListener('load', function() {
            compressImage(
                image,
                isMobileDevice ? 0.3 : 0.8, // 품질 설정값
                isMobileDevice ? 0.8 : 2       // 최대 용량 (MB)
            );
        });
    });

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('loading', 'lazy');
    }
};

//--------> 이미지 최적화 - (browser-image-compression)