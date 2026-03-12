//--------> 이미지 최적화 - browser-image-compression

window.onload = function () {
  var images = document.querySelectorAll(
    'img, .og_bg_img_wrap > .bg_img df-bannermanager df-bannermanager-prdlist-visual-img--pc > img'
  ); // 모든 이미지, df-bannder-clone의 이미지

  var compressImage = function (image, quality, maxSizeMB) {
    ImageCompression(image.src, {
      maxSizeMB: maxSizeMB,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    })
      .then(function (compressedFile) {
        return ImageCompression.getDataUrlFromFile(compressedFile);
      })
      .then(function (dataUrl) {
        image.src = dataUrl;
      });
  };

  var isMobileDevice = window.matchMedia('(max-width: 768px)').matches; // 뷰포트 너비가 768px 이하인 경우

  images.forEach(function (image) {
    image.addEventListener('load', function () {
      setTimeout(function () {
        // setTimeout 사용하여 비동기 처리
        compressImage(
          image,
          isMobileDevice ? 0.3 : 0.8, // 품질 설정값
          isMobileDevice ? 0.5 : 2 // 최대 용량 (MB)
        );
      }, 500); // 여기서 숫자는 지연시간(ms)입니다.
      // 필요에 따라 조절할 수 있습니다.
    });
  });

  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute('loading', 'lazy');
  }
};

//--------> 이미지 최적화 - (browser-image-compression)
