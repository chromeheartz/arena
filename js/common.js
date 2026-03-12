//window popup script
function winPop(url) {
    window.open(url, "popup", "width=300,height=300,left=10,top=10,resizable=no,scrollbars=no");
}
/**
 * document.location.href split
 * return array Param
 */
function getQueryString(sKey)
{
    var sQueryString = document.location.search.substring(1);
    var aParam       = {};

    if (sQueryString) {
        var aFields = sQueryString.split("&");
        var aField  = [];
        for(var i=0; i<aFields.length; i++){
            aField = aFields[i].split('=');
            aParam[aField[0]] = aField[1];            
        }
    }

    aParam.page = aParam.page ? aParam.page : 1;
    return sKey ? aParam[sKey] : aParam;
};

/**
  *  구매버튼
*/
var globalBuyBtnScrollFunc = function() {
    // 구매버튼 관련변수
    var sFixId = $('#orderFixItem').length > 0  ? 'orderFixItem' : 'fixedActionButton',
        $area = $('#orderFixArea'),
        $item = $('#' + sFixId + '').not($area);

    $(window).scroll(function(){
        try {
             // 구매버튼 관련변수
            var iCurrentHeightPos = $(this).scrollTop() + $(this).height(),
                iButtonHeightPos = $item.offset().top;

            if (iCurrentHeightPos > iButtonHeightPos || iButtonHeightPos < $(this).scrollTop() + $item.height()) {
                if (iButtonHeightPos < $(this).scrollTop() - $item.height()) {
                    $area.fadeIn('fast');
                } else {
                    $area.hide();
                }
            } else {
                $area.fadeIn('fast');
            }
        } catch(e) { }
    });
};

$(function(){
    // tab
    $.eTab = function(ul) {
        $(ul).find('a').on('click', function() {
            var _li = $(this).parent('li').addClass('selected').siblings().removeClass('selected'),
                _target = $(this).attr('href'),
                _siblings = '.' + $(_target).attr('class');
            $(_target).show().siblings(_siblings).hide();
            return false
        });
    }
    if ( window.call_eTab ) {
        call_eTab();
    };
    globalBuyBtnScrollFunc();



});

// 고객센터 : 메뉴 스타일
$(document).ready(function(){
    /*
    const boardPara = document.location.href;
    if(boardPara.includes('board_no=1') || boardPara.includes('/1/')) {
        $('.board-notice').addClass('this');
    }
    if(boardPara.includes('board_no=3') || boardPara.includes('/3/')) {
        $('.board-fna').addClass('this');
    }

    if(boardPara.includes('categoryno')) {
        const boardPara1 = document.location.href.split('categoryno');
        if(boardPara1[0].includes('/3/'))
            $('.board-notice').removeClass('this');
    }

    // 자주 묻는 질문 : 탭 스타일
    if(boardPara.includes('&category_no=')) {
        const fnaParaPlus = Number(document.location.href.slice(-1)) + 1;
        if(isNaN(fnaParaPlus) == true)
            $('.option_wrap ul li:first-child').addClass('this');
        else
            $('.option_wrap ul li:nth-child(' + fnaParaPlus + ')').addClass('this');
    }

    const fnaPara = boardPara.split('?board_no=3');
    if(fnaPara[1] == '')
        $('.option_wrap ul li:first-child').addClass('this');

     */
});

//--------> 이미지 최적화 - browser-image-compression
window.onload = function () {
    var images = document.querySelectorAll("img");

    var isMobileDevice = window.matchMedia("(max-width: 768px)").matches;

    function compressImage(image, quality, maxSizeMB) {

        // 이미 압축했거나 base64면 실행 안함
        if (image.dataset.compressed || image.src.startsWith("data:")) return;

        image.dataset.compressed = "true";

        fetch(image.src)
            .then(function (res) {
                return res.blob();
            })
            .then(function (blob) {
                return imageCompression(blob, {
                    maxSizeMB: maxSizeMB,
                    maxWidthOrHeight: 1920,
                    initialQuality: quality,
                    useWebWorker: true
                });
            })
            .then(function (compressedFile) {
                return imageCompression.getDataUrlFromFile(compressedFile);
            })
            .then(function (dataUrl) {
                image.src = dataUrl;
            })
            .catch(function (err) {
                console.error("이미지 압축 중 오류 발생:", err);
            });
    }

    images.forEach(function (image) {

        // lazy loading 적용
        image.setAttribute("loading", "lazy");

        image.addEventListener("load", function () {

            compressImage(
                image,
                isMobileDevice ? 0.3 : 0.8, // 품질
                isMobileDevice ? 0.8 : 2     // 최대 용량(MB)
            );

        });

    });
};

//--------> 이미지 최적화 - (browser-image-compression)