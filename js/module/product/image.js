/**
 *  zoom
 */
$(function () {
  $.fn.prdZoom = function (param) {
    var ul = param.target.find('.xans-product-addimage > ul'),
      detail = param.target.find('a#prdDetailImg'),
      swipe = param.target.find('.xans-product-mobileimage > ul > li'),
      add = param.target.find('.xans-product-addimage > ul > li');

    var zoom = {
      init: function () {
        function structMobile() {
          swipe.off().on('click', function () {
            var sZoomUrl =
              '/product/image_zoom.html' +
              $(this).data('param') +
              '&order=' +
              $(this).index();
            zoom.showZoom(sZoomUrl);
          });
          add.mouseover(function () {
            try {
              $xans_product_mobileimage_slider_0.moveTab($(this).index());
            } catch (e) {}
            detail.data('order', $(this).index());
          });
          detail.off().on('click', function () {
            var iOrder = $(this).data('order') || 0,
              sZoomUrl =
                '/product/image_zoom.html' +
                $(this).data('param') +
                '&order=' +
                iOrder;
            zoom.showZoom(sZoomUrl);
          });
        }
        structMobile();
      },
      showZoom: function (sZoomUrl) {
        window.open(
          sZoomUrl,
          'image_zoom',
          'toolbar=no,scrollbars=auto,resizable=yes,width=560,height=710,left=0,top=0',
          this
        );
        return false;
      },
    };
    zoom.init();
  };

  $.fn.prdZoom({
    target: $('.xans-product-image'),
  });
});

//최적화 - 이미지 압축시켜 로딩 속도 개선
window.onload = function () {
  // 모든 상품 이미지 요소 선택
  var productImages = document.querySelectorAll('img');

  // 현재의 이미지 URL을 blob으로 변환
  productImages.forEach(function (img) {
    fetch(img.src)
      .then((res) => res.blob())
      .then((blob) => {
        // compressor.js 사용하여 이미지 압축

        const isMobileDevice =
          navigator.userAgent.match(
            /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i
          ) || window.matchMedia('(max-width: 768px)').matches;

        new Compressor(blob, {
          quality: isMobileDevice ? 0.3 : 0.8,
          maxWidth: isMobileDevice ? 768 : undefined,
          success(result) {
            img.src = URL.createObjectURL(result);
          },
          error(err) {
            console.log(err.message);
          },
        });
      });
  });
};

//------------->기존 코드

// /**
//  *  zoom
//  */
// $(function(){
//     $.fn.prdZoom = function(param){
//         var ul     = param.target.find('.xans-product-addimage > ul'),
//             detail = param.target.find('a#prdDetailImg'),
//             swipe  = param.target.find('.xans-product-mobileimage > ul > li'),
//             add    = param.target.find('.xans-product-addimage > ul > li');

//         var zoom = {
//             init : function(){
//                 function structMobile(){
//                     swipe.off().on('click', function(){
//                         var sZoomUrl = '/product/image_zoom.html' + $(this).data('param') + '&order=' + $(this).index();
//                         zoom.showZoom(sZoomUrl);
//                     });
//                     add.mouseover(function(){
//                         try {
//                             $xans_product_mobileimage_slider_0.moveTab($(this).index());
//                         } catch (e) { }
//                         detail.data('order', $(this).index());
//                     });
//                     detail.off().on('click', function(){
//                         var iOrder =  $(this).data('order') || 0,
//                             sZoomUrl = '/product/image_zoom.html' + $(this).data('param') + '&order=' + iOrder;
//                         zoom.showZoom(sZoomUrl);
//                     });
//                 }
//                 structMobile();
//             },
//             showZoom : function(sZoomUrl){
//                 window.open(sZoomUrl, 'image_zoom', 'toolbar=no,scrollbars=auto,resizable=yes,width=560,height=710,left=0,top=0', this);
//                 return false;
//             }
//         }
//         zoom.init();
//     };

//     $.fn.prdZoom({
//         target : $('.xans-product-image')
//     });
// });

// //최적화 - 이미지 압축시켜 로딩 속도 개선
// // 모든 상품 이미지 요소 선택
// var productImages = document.querySelectorAll('img');

// productImages.forEach(function(img) {
//     // 현재의 이미지 URL을 blob으로 변환
//     fetch(img.src)
//         .then(res => res.blob())
//         .then(blob => {
//             // compressor.js 사용하여 이미지 압축
//             new Compressor(blob, {
//                 quality: 0.6, // 품질 설정 (0-1 사이의 값)
//                 success(result) {
//                     // 압축된 blob을 다시 URL로 변환하고 원본 이미지 src로 설정
//                     img.src = URL.createObjectURL(result);
//                 },
//                 error(err) {
//                     console.log(err.message);
//                 },
//             });
//         });
// });

//------------->기존 코드
