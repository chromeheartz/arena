// ============================================================================================================================================================================================================================= //
// 상품상세 페이지 JS
// @ogam 2022
// ============================================================================================================================================================================================================================= //

/**
 * 상품상세 페이지 실행
 */
let scrollFlag = false;
//이미지 엑박처리 확인
$('#prdDetail img').each(function () {
    let $e = $(this);
    $e.on('error', function () {
        $e.remove();
    });
})

var OG_prdDetailFunc = {
    __OG_DEFAULT_VALUE_FUNCTION_USE: true, //이 함수 사용할 것인지
    __OG_DEFAULT_VALUE_THUMBNAIL_IMG_CHANGE: (OG_DEVICE_CHK == 'pc') ? true : true, /* 이미지 변경 */
    __OG_DEFAULT_VALUE_DETAIL_SCROLLBAR_PC: (OG_DEVICE_CHK == 'pc') ? false : false, /* 상품 상세 설명 영역에 커스텀 스크롤 바 노출 여부 (PC) */
    __OG_DEFAULT_VALUE_POPUP_SCROLLBAR_PC: (OG_DEVICE_CHK == 'pc') ? true : false, /* 팝업창 영역에 커스텀 스크롤 바 노출 여부 (PC) */
    __OG_DEFAULT_VALUE_OPTIONAREA_SCROLLBAR_PC: (OG_DEVICE_CHK == 'pc') ? true : false, /* 상품 옵션 영역에 커스텀 스크롤 바 노출 여부 (PC) */
    __OG_DEFAULT_VALUE_OPTIONAREA_SCROLLBAR_MO: (OG_DEVICE_CHK == 'pc') ? false : true, /* 상품 옵션 영역에 커스텀 스크롤 바 노출 여부 -> true일 경우 처리 후 값 변경됨 (MO) */
    __OG_DEFALUT_VALUE_REQUIRED_OPTION_CHK: (OG_DEVICE_CHK == 'pc') ? false : true, /* 필수옵션 미선택 시 알림 체크 */
    __OG_DEFAULT_VALUE_EASY_PAYMENT_BOX_MOVE: (OG_DEVICE_CHK == 'pc') ? false : true, /* 간편결제 영역 이동 여부 체크 */
    __OG_DEFAULT_VALUE_DETAIL_INFO_TABBAR_TYPE: (OG_DEVICE_CHK == 'pc') ? 'multiple' : 'single', /* 탭바 노출 형식 */
    __OG_DEFAULT_VALUE_DETAIL_SELECT_CUSTOM: (OG_DEVICE_CHK == 'pc') ? true : true, /* 셀렉트 박스 출력 대신 ul/li 구조를 사용할 것인지 여부 */
    __OG_DEFAULT_VALUE_DETAIL_OPTION_SWIPER_USE: (OG_DEVICE_CHK == 'pc') ? true : true, /* 옵션에 swiper를 생성할 것인지 여부 */
    __OG_DEFAULT_VALUE_OPTION_SELECT_NEED_CHOICE_ALERT: '상품을 선택해주세요.', //상품 선택 없이 장바구니/구매하기 버튼 클릭 시 alert
    __OG_DEFAULT_VALUE_OPTION_SELECT_NEED_REQUIRED_ALERT: '필수 옵션을 선택해주세요.', //필수 옵션 선택 없이 장바구니/구매하기 버튼 클릭 시 alert
    __OG_DEFAULT_VALUE_TABBAR_MOVE_FIXED_AREA_HEIGHT: 0, /* 스크롤 시 상단에 고정 영역 높이 */
    __OG_DEFAULT_VALUE_FIXED_OPTION_AREA_USE: (OG_DEVICE_CHK == 'pc') ? true : false, //고정 상품 옵션 영역 사용 여부
    __OG_DEFAULT_VALUE_THUMBNAIL_IMG_SLIDE_TO_ACTIVE: (OG_DEVICE_CHK == 'pc') ? true : true, //bigImage 영역에 active 영역으로 슬라이드할것인지 여부
    __OG_DEFAULT_VALUE_THUMBNAIL_IMG_SLIDE_TO_ACTIVE_SPEED: (OG_DEVICE_CHK == 'pc') ? 300 : 300, ////bigImage 영역에 active 영역으로 슬라이드 여부가 true일때 속도

    /**
     * 페이지 init 전 실행
     */
    initBefore: function () {
        if (OG_prdDetailFunc.__OG_DEFAULT_VALUE_DETAIL_OPTION_SWIPER_USE) {
            var num = 0;
            OG$('ul[product_type]').each(function () {
                var $this = OG$(this);
                if ($this.hasClass('ec-product-preview')) {
                    OG_prdDetailCustom.preivewOptionStyleCustom($this);
                    $this.addClass('og_swiper');
                    $this.attr('data-ogswipe-name', 'product_swiper' + num);
                    $this.attr('data-ogswipe-module', 'scrollbar');
                    $this.attr('data-ogswipe-custom', 'false');
                    num++;
                    $this.OG_observerFunc(function () {
                        $this.children().addClass('swiper-slide');
                        OG_prdDetailCustom.preivewOptionStyleCustom($this);
                        window[$this.attr('data-ogswipe-name')].update();
                        window[$this.attr('data-ogswipe-name')].slideTo(0, 0, true);
                    }, {
                        attributes: false,
                        childList: true,
                        subtree: false
                    });
                }
            });
        }
    },
    init: function () {
        /**
         * 상품 상세 페이지 초기화 실행
         */
        /*
        OG$('ul[product_type]').closest('.base_swiper_container').each(function () {
            var $this = OG$(this);
            var $value = $this.children('.value');
            $this.find('.swiper-container').append($value);
        });*/
        /**
         * 썸네일 이미지 변경
         */
        /*
        if(OG_prdDetailFunc.__OG_DEFAULT_VALUE_THUMBNAIL_IMG_CHANGE){
            (thumbInit = function () {
                //상품 상세 이미지에 keyImg
                var keyImgSrc = OG$('.keyImg .BigImage').attr('src');
                OG$('.listImg li:first-child').addClass('selected');
                OG$('.listImg li:first-child img').attr('src', keyImgSrc);
            })();
        }*/
        /**
         * 상품 상세 페이지 초기화
         */
        switch (OG_DEVICE_CHK) {
            case 'pc':
                if (OG_SUBCONTAINER_DATA_PAGE != 'prdDetail') {
                    OG$('.prdDetail_optionArea_scrollContent').removeClass('og_mcustomScrollbar');
                }
                //레이어 여닫힘 제어
                /*
                EC$(document).on('click', 'a[name="EC-stockdesign"]', function(e) { //재고
                    var iProductNo = EC$(this).attr('product_no');
                    var sPageType = EC$(this).attr('page_type');
                    var $layer = EC$(this).parent().find('.ec-shop-detail-stock-layer .EC-stockLayer');
                    $layer.addClass('on');
                    OG_util.makeDimmed(true,1,$layer);
                    OG$('.ec-shop-detail-stock-layer .EC-stockLayer').find('[onClick*="STOCKLAYER.closeStockLayer"]').on('click',function(){
                        let $layer = OG$(this).parent().find('.ec-shop-detail-stock-layer .EC-stockLayer');
                        $layer.removeClass('on');
                        OG_util.removeDimmed();
                    });
                });
                EC$(document).on('click', '.eProductDetailInfo', function() { //상세정보
                    var aProductId = EC$(this).attr('id').split('_');
                    var iProductNum = aProductId[1];
                    var $layer = OG$('#product_description_'+iProductNum).find('.ec-base-layer');
                    $layer.addClass('on');
                    OG_util.makeDimmed(true,1,$layer);
                });
                EC$(document).on('click', '.eLayerCloseButton', function() { //레이어 닫기
                    var aProductId = EC$(this).attr('id').split('_');
                    var iProductNum = aProductId[1];
                    EC$('#product_description_'+iProductNum).find('.ec-base-layer').removeClass('on');
                });
                EC$(document).on('click', '.size_guide_info', function() { //사이즈 가이드
                    setTimeout(function(){
                        var $layer = OG$('#sSizeGuideLayer').find('.ec-base-layer');
                        $layer.addClass('on');
                        OG_util.makeDimmed(true,1,$layer);
                    },600);
                });*/
                break;
            case 'mobile':
                /**
                 * iScrollbar 정의
                 */
                /*
                if(OG_prdDetailFunc.__OG_DEFAULT_VALUE_OPTIONAREA_SCROLLBAR_MO){
                    OG_prdDetailFunc.__OG_DEFAULT_VALUE_OPTIONAREA_SCROLLBAR_MO = new IScroll('.prdDetail_optionArea_inner', {
                        mouseWheel: true,
                        snapSpeed: 1000,
                        fadeScrollbars: true,
                        shrinkScrollbars: 'clip',
                        click: false,
                        tap: true,
                        resizePolling: 100,
                        scrollbars: 'custom',
                        interactiveScrollbars: true,
                        resizeScrollbars: false,
                    });
                }*/
                //레이어 여닫힘 제어
                /*
                EC$(document).on('click', 'a[name="EC-stockdesign"]', function(e) { //재고
                    var iProductNo = EC$(this).attr('product_no');
                    var sPageType = EC$(this).attr('page_type');
                    var $layer = EC$(this).parent().find('.ec-shop-detail-stock-layer .EC-stockLayer');
                    $layer.addClass('on');
                    OG$('.ec-shop-detail-stock-layer .EC-stockLayer').find('[onClick*="STOCKLAYER.closeStockLayer"]').on('click',function(){
                        let $layer = OG$(this).parent().find('.ec-shop-detail-stock-layer .EC-stockLayer');
                        $layer.removeClass('on');
                    });
                });
                EC$(document).on('click', '.eProductDetailInfo', function() { //상세정보
                    var aProductId = EC$(this).attr('id').split('_');
                    var iProductNum = aProductId[1];
                    var $layer = OG$('#product_description_'+iProductNum).find('.ec-base-layer');
                    $layer.addClass('on');
                });
                EC$(document).on('click', '.eLayerCloseButton', function() { //레이어 닫기
                    var aProductId = EC$(this).attr('id').split('_');
                    var iProductNum = aProductId[1];
                    EC$('#product_description_'+iProductNum).find('.ec-base-layer').removeClass('on');
                });
                EC$(document).on('click', '.size_guide_info', function() { //사이즈 가이드
                    setTimeout(function(){
                        var $layer = OG$('#sSizeGuideLayer').find('.ec-base-layer');
                        $layer.addClass('on');
                    },600);
                });*/


                OG$('#orderFixArea .ec-base-button > *').on('click', function (e) {
                    //OG$('.og_sub_container .xans-product-detail .detailArea .optionArea').fadeIn();
                    //OG$('#orderFixArea').addClass('hidden');
                    //OG_util.scrollDisabled();
                    $('.aside_mypage .btnClose').trigger('click');
                    if (OG_prdDetailFunc.optionRequiredChkFunc() == 'true') {
                        if ($(e.target).attr('id') == 'actionBuy_check') {
                            product_submit(1, '/exec/front/order/basket/', this);
                        } else {
                            product_submit(2, '/exec/front/order/basket/', this);
                        }
                    } else {
                        let offsetTop = OG$('.og_sub_container .xans-product-detail .detailArea .optionArea').offset().top - OG_header - 50;
                        OG$('html, body').animate({
                            scrollTop: offsetTop + 1
                        }, 0);
                    }
                });

                OG$('.og_sub_container .xans-product-detail .detailArea .optionArea').on('click', function (e) {
                    let target = e.target,
                        $target = OG$(target),
                        $e = OG$(this);
                    if (target == $e[0]) {
                        OG$('.og_sub_container .xans-product-detail .detailArea .optionArea').fadeOut();
                        OG_util.scrollEnabled();
                        OG$('#orderFixArea').removeClass('hidden');
                    }
                });


                break;
            default:
                console.log('error');
                break;
        }
        OG_prdDetailFunc.optionRequiredChkFunc(); /* 필수 옵션 선택 되어있는지 체크 */
        OG_prdDetailFunc.productOptionArea(); /* 옵션 영역 함수 실행 */
        OG_prdDetailFunc.totalProductsArea(); /* totalProducts 영역 함수 실행 */
        OG_prdDetailFunc.tabArea(); /* tabBar 영역 함수 실행 */
        OG_prdDetailFunc.thumbnail(); /* 썸네일 함수 실행 */
        OG_prdDetailFunc.share(); /* 공유하기 */

        //추가된 상품 옵션 제거 시 동작(초기화)
        EC$(document).on('click', '.option_box_del, .option_add_box_del', function () {
            EC$('select[product_type], select[name^="addproduct_option_name"]').each(function () {
                let $select = EC$(this);
                $select.val('*').trigger('change');
            });
            EC$('ul[product_type]').each(function () {
                var $this = EC$(this);
                $this.find('.ec-product-selected').trigger('click');
                /*if($this.hasClass('ec-product-preview')){
                    window[$this.attr('data-ogswipe-name')].update();
                    window[$this.attr('data-ogswipe-name')].slideTo( 0 , 0 , true );
                }*/
            });
        });






    },
    initLast: function () {
        /* init 이후 실행 */
        OG_prdDetailFunc.scrollObserver(); //스크롤 움직임 감지 함수 실행
        //세트 상품 함수 실행
        OG$('.og_product_set .product_list > li').each(function () {
            var $this = OG$(this);
            // * ============================ 상품 가격 ============================ * //
            OGbasePrdInfoCall.calc($this);
            // * ============================ 상품 가격 ============================ * //
        });
    },
    thumbnail: function () {
        /**
         * .BigImage에 src 변경이 발생하면 trigger
         * 추가 이미지 모듈 (product_addimage)의 경우 노출되는 이미지 1. 해당 상품의 축소 이미지 2. 그 다음부터 추가이미지임
         * 축소이미지 -> /small/ , 추가 이미지 : /extra/small/
         */
        //메인 썸네일 이미지가 바뀌면 -> 작은 썸네일 영역에 active
        let mouseAction = ImageAction.sUseAddimageAction; //O 마우스 오버 C 마우스 클릭
        var bigImageChange = function (a, b) {
            let src = OG$('.BigImage').attr('src');
            if (src.indexOf(OG_LOCATION_HOSTNAME) > -1) {
                src = src.split(OG_LOCATION_HOSTNAME)[1];
            }
            //let lastIndex = src.lastIndexOf('/');
            //src = src.slice(lastIndex+1);
            OG$('.ThumbImage').closest('li').removeClass('selected');
            if (OG$('.ThumbImage[src*="' + src + '"]').length == 0) {
                OG$('.ThumbImage').closest('li').eq(0).addClass('selected');
            } else {
                OG$('.ThumbImage[src*="' + src + '"]').closest('li').addClass('selected');
            }

            $('.ThumbImage').off('mouseover');

            OG$('.xans-product-detail .imgArea .imgBox .prdImg img').attr('src', OG$('.ThumbImage').closest('ul').find('li.selected').find('img').attr('src'));



            if (OG_prdDetailFunc.__OG_DEFAULT_VALUE_THUMBNAIL_IMG_SLIDE_TO_ACTIVE) {
                if (typeof OGswipe_prdDetail_listImg !== 'undefined') {
                    OGswipe_prdDetail_listImg.update();
                    OGswipe_prdDetail_listImg.slideTo(OG$('.ThumbImage[src*="' + src + '"]').closest('li').index(), OG_prdDetailFunc.__OG_DEFAULT_VALUE_THUMBNAIL_IMG_SLIDE_TO_ACTIVE_SPEED, true);
                }
            }
        }
        if ($('.BigImage').length > 0) {
            OG$('.BigImage').OG_observerFunc(bigImageChange, {
                attributes: true,
                childList: false,
                subtree: false
            });
        }





    },
    totalProductsArea: function () {
        /**
         * 옵션 추가/삭제/수량조절 될때 동작 제어
         */
        (OGTotalProductsChangeFunc = function () {
            //옵션이 추가/삭제될때 실행
            OG$('#totalProducts table').OG_observerFunc(OG_commonCustom.totalProductsCustom, {
                attributes: false,
                childList: true,
                subtree: true
            });
            /**
             * 가격이 변할 때 실행
             */
            // OG$('#og_totalProducts #totalPrice.og_totalPrice .total').OG_observerFunc(OG_prdDetailFunc.totalPriceCustom, {
            //     attributes: true,
            //     childList: true,
            //     subtree: true
            // });
        })();
    },
    productOptionArea: function () {



    },
    tabArea: function () {
        /**
         * 상품 상세 탭(리뷰/상품보기 등) 동작 제어
         */
        switch (OG_DEVICE_CHK) {
            case 'pc':
                if (OG_prdDetailFunc.__OG_DEFAULT_VALUE_DETAIL_INFO_TABBAR_TYPE == 'single') {
                    /*OG$('#prdDetail_additional_tab li').on('click',function(){
                        var $this = OG$(this);
                        var href = $this.children().attr('data-href');
                        var $hrefTab = OG$(href);
                        if($hrefTab.length > 0){
                            var srollTopValue = Math.round( $hrefTab.offset().top - OG_util.onlyNumbFunc(OG$('#prdDetail_additional_tab').css('top')) - OG$('#prdDetail_additional_tab').outerHeight() );
                            OG$('html, body').animate({
                                scrollTop: srollTopValue + 1
                            }, 0);
                        }
                    });*/

                    OG$('.og_sub_container #prdDetail_additional_tabContent > *').eq(0).addClass('selected');

                    OG$('#prdDetail_additional_tab li').on('click', function () {
                        var $this = OG$(this);
                        var href = $this.children().attr('data-href');
                        var $hrefTab = OG$(href);
                        if ($hrefTab.length > 0 && $hrefTab.hasClass('displaynone') == false) {
                            $this.addClass('selected').siblings().removeClass('selected');
                            $hrefTab.addClass('selected').siblings().removeClass('selected');
                        }
                    });


                } else {
                    OG$('[id^="prdDetail_additional_tab"] > li').on('click', function () {
                        var $this = OG$(this);
                        var $tabbar = $this.closest('[id^="prdDetail_additional_tab"]');
                        var href = $this.children().attr('data-href');
                        var $hrefTab = OG$(href);
                        if ($hrefTab.length > 0) {
                            var srollTopValue = Math.round($hrefTab.offset().top);
                            OG$('html, body').animate({
                                scrollTop: srollTopValue - OG_prdDetailFunc.__OG_DEFAULT_VALUE_TABBAR_MOVE_FIXED_AREA_HEIGHT - OG$('[id^="prdDetail_additional_tab"]').outerHeight() - 50
                            }, 0);
                        }
                    });
                }
                break;
            case 'mobile':
                if (OG_prdDetailFunc.__OG_DEFAULT_VALUE_DETAIL_INFO_TABBAR_TYPE == 'single') {
                    /* OG$('#prdDetail_additional_tab li').on('click',function(){
                         var $this = OG$(this);
                         var href = $this.children().attr('data-href');
                         var $hrefTab = OG$(href);
                         if($hrefTab.length > 0){
                             var srollTopValue = Math.round( $hrefTab.offset().top - OG_util.onlyNumbFunc(OG$('#prdDetail_additional_tab').css('top')) - OG$('#prdDetail_additional_tab').outerHeight() );
                             OG$('html, body').animate({
                                 scrollTop: srollTopValue + 1
                             }, 0);
                         }
                     });*/

                    OG$('.og_sub_container #prdDetail_additional_tabContent > *').eq(0).addClass('selected');

                    OG$('#prdDetail_additional_tab li').on('click', function () {
                        var $this = OG$(this);
                        var href = $this.children().attr('data-href');
                        var $hrefTab = OG$(href);
                        if ($hrefTab.length > 0 && $hrefTab.hasClass('displaynone') == false) {
                            $this.addClass('selected').siblings().removeClass('selected');
                            $hrefTab.addClass('selected').siblings().removeClass('selected');
                        }



                    });

                } else {
                    OG$('[id^="prdDetail_additional_tab"] > li').on('click', function () {
                        var $this = OG$(this);
                        var $tabbar = $this.closest('[id^="prdDetail_additional_tab"]');
                        var href = $this.children().attr('data-href');
                        var $hrefTab = OG$(href);
                        if ($hrefTab.length > 0) {
                            var srollTopValue = Math.round($hrefTab.offset().top);
                            OG$('html, body').animate({
                                scrollTop: srollTopValue - OG_prdDetailFunc.__OG_DEFAULT_VALUE_TABBAR_MOVE_FIXED_AREA_HEIGHT
                            }, 0);
                        }
                    });
                }
                break;
            default:
                console.log('error');
                break;
        }
    },
    optionRequiredChkFunc: function () {
        /**
         * 필수옵션 선택되어있는지 확인
         */
        var chk = false;
        var prdLength = OG$('#totalProducts .option_products tr').length;
        if (prdLength == 0) {
            if (!OG$('.prdDetail_option_select .prdDetail_noOption').hasClass('displaynone')) {
                chk = 'true';
            } else {
                chk = 'false1'; /* 선택된 옵션 없음*/
            }
        } else {
            if (checkOptionRequired() == false) {
                chk = 'false2'; /* 선택된 옵션이 있지만 필수옵션이 모두 선택되지 않음 */
            } else {
                chk = 'true'; /* 선택된 옵션이 있고 모든 필수옵션이 선택됨 */
            }
        }
        if (OG_prdDetailFunc.__OG_DEFALUT_VALUE_REQUIRED_OPTION_CHK) {
            let basketButton = '[onClick*="product_submit(2"]';
            let buyButton = '[onClick*="product_submit(1"]';
            let soldOutButton = '[onClick*="restock"]';
            let wishButton = '[onClick*="add_wishlist"]';
            let naverButton = '[id^="NaverChk_Button"]';

            switch (chk) {
                case 'false1':
                    OG$('#totalProducts').addClass('noProduct');
                    //OG$('#wrap').find(buyButton, basketButton).addClass('noEvent');
                    //OG$('#wrap').find(buyButton, basketButton).parent().attr('onClick', 'OG$(".og_open_optionArea_button").trigger("click");');
                    OG$('#wrap').find(buyButton).addClass('noEvent');
                    OG$('#wrap').find(buyButton).parent().attr('onClick', 'alert("' + OG_prdDetailFunc.__OG_DEFAULT_VALUE_OPTION_SELECT_NEED_CHOICE_ALERT + '")');
                    OG$('#wrap').find(basketButton).addClass('noEvent');
                    OG$('#wrap').find(basketButton).parent().attr('onClick', 'alert("' + OG_prdDetailFunc.__OG_DEFAULT_VALUE_OPTION_SELECT_NEED_CHOICE_ALERT + '")');

                    OG$('#wrap').find(naverButton).addClass('noEvent');
                    OG$('#wrap').find(naverButton).parent().attr('onClick', 'alert("' + OG_prdDetailFunc.__OG_DEFAULT_VALUE_OPTION_SELECT_NEED_CHOICE_ALERT + '")');

                    break;
                case 'false2':
                    OG$('#totalProducts').removeClass('noProduct');
                    //OG$('#wrap').find(buyButton, basketButton).addClass('noEvent');
                    //OG$('#wrap').find(buyButton, basketButton).parent().attr('onClick', 'OG$(".OG_open_optionArea_button").trigger("click");');
                    OG$('#wrap').find(buyButton).addClass('noEvent');
                    OG$('#wrap').find(buyButton).parent().attr('onClick', 'alert("' + OG_prdDetailFunc.__OG_DEFAULT_VALUE_OPTION_SELECT_NEED_REQUIRED_ALERT + '")');
                    OG$('#wrap').find(basketButton).addClass('noEvent');
                    OG$('#wrap').find(basketButton).parent().attr('onClick', 'alert("' + OG_prdDetailFunc.__OG_DEFAULT_VALUE_OPTION_SELECT_NEED_REQUIRED_ALERT + '")');

                    OG$('#wrap').find(naverButton).addClass('noEvent');
                    OG$('#wrap').find(basketButton).parent().attr('onClick', 'alert("' + OG_prdDetailFunc.__OG_DEFAULT_VALUE_OPTION_SELECT_NEED_REQUIRED_ALERT + '")');

                    break;
                case 'true':
                    OG$('#totalProducts').removeClass('noProduct');
                    OG$('#wrap').find(buyButton).removeClass('noEvent');
                    OG$('#wrap').find(buyButton).parent().removeAttr('onClick');
                    OG$('#wrap').find(basketButton).removeClass('noEvent');
                    OG$('#wrap').find(basketButton).parent().removeAttr('onClick');

                    OG$('#wrap').find(naverButton).removeClass('noEvent');
                    OG$('#wrap').find(naverButton).parent().removeAttr('onClick');

                    break;
            }
        }
        return chk;
    },
    totalPriceCustom: function () {
    //     const $el = OG$('#og_totalProducts #totalPrice.og_totalPrice .total');
    // console.log('💰 합계(텍스트):', $el.text());
    // console.log('💰 합계(HTML):', $el.html());
    //     /* 총합 가격 변경 시 커스텀 */
    //     if (typeof OG_prdDetailCustom !== 'undefined') {
    //         if (typeof OG_prdDetailCustom['totalProductsCustom'] !== 'undefined') {
    //             OG_prdDetailCustom.totalPriceCustom();
    //         }
    //     }
    },
    positionMove: function (flag) {

    },
    scrollObserver: function () {

    },
    share: function () {

        let $shareArea = OG$('.og_share_area'),
            $sharePopup = $shareArea.find('.share_popup'),
            $shareButtons = $sharePopup.find('.share');

        $shareArea.find('.share_button').on('click', function (e) {
            if ($sharePopup.is(":visible")) {
                $sharePopup.fadeOut();
                OG$('#orderFixArea').removeClass('share');
                if (e.stopPropagation) e.stopPropagation();
                else e.cancelBubble = true; // IE 대응
            } else {
                $sharePopup.fadeIn();
                OG$('#orderFixArea').addClass('share');
            }
        });

        $sharePopup.find('.close_button').on('click', function (e) {
            $sharePopup.fadeOut();
            OG$('#orderFixArea').removeClass('share');
            if (e.stopPropagation) e.stopPropagation();
            else e.cancelBubble = true; // IE 대응
        });

        $shareButtons.on('click', function () {
            let $e = OG$(this),
                type = $e.attr('data-share'),
                link = '';
            switch (type) {
                case 'facebook':
                    let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
                    link = facebook + OG_LOCATION_HREF;
                    window.open(link);
                    break;
                case 'kakao':
                    try {
                        if (Kakao) {
                            Kakao.init("9fc4e8e7c48aa6db2fb7f1ecc64643e5");
                        }
                    } catch (e) { };
                    Kakao.Link.sendDefault({
                        objectType: "feed",
                        content: {
                            title: OG$('meta[property="OGFindInfo:title"]').attr('content'),
                            imageUrl: OG$('meta[property="OGFindInfo:image"]').attr('content'),
                            imageWidth: 420,
                            imageHeight: 300,
                            link: {
                                mobileWebUrl: OG_LOCATION_HREF,
                                webUrl: OG_LOCATION_HREF
                            }
                        },
                        buttonTitle: "상품 보기",
                    });
                    break;
                case 'url':

                    // 링크복사 시 화면 크기 고정
                    OG$('html').find('meta[name=viewport]').attr('content', 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no');
                    var html = "<input id='clip_target' type='text' value='' style='position:absolute;top:-9999em;'/>";
                    OG$(this).append(html);
                    var input_clip = document.getElementById("clip_target"); //현재 url 가져오기
                    var _url = window.location.href;
                    OG$("#clip_target").val(_url);
                    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                        var editable = input_clip.contentEditable;
                        var readOnly = input_clip.readOnly;
                        input_clip.contentEditable = true;
                        input_clip.readOnly = false;
                        var range = document.createRange();
                        range.selectNodeContents(input_clip);
                        var selection = window.getSelection();
                        selection.removeAllRanges();
                        selection.addRange(range);
                        input_clip.setSelectionRange(0, 999999);
                        input_clip.contentEditable = editable;
                        input_clip.readOnly = readOnly;
                    } else {
                        input_clip.select();
                    }
                    try {
                        var successful = document.execCommand('copy');
                        input_clip.blur();
                        if (successful) {
                            alert("URL이 복사 되었습니다. 원하시는 곳에 붙여넣기 해 주세요.");
                            // 링크복사 시 화면 크기 고정
                            OG$('html').find('meta[name=viewport]').attr('content', 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes');
                        } else {
                            alert('이 브라우저는 지원하지 않습니다.');
                        }
                    } catch (err) {
                        alert('이 브라우저는 지원하지 않습니다.');
                    }

                    //navigator.clipboard.writeText(window.location.href);
                    //alert('url이 복사 되었습니다. 원하시는 곳에 붙여넣어주세요.');
                    break;
                case 'twitter':
                    let twitter = 'https://twitter.com/intent/tweet?text=';
                    link = twitter + OG_LOCATION_HREF;
                    window.open(link);
                    break;
            }
            return false;
        });

        /*
                let url = OG$(location).attr('href');
                OG$('.url').val(url);
        
                OG$('.copy').click(function () {
                    OG$('.url').select();
                    document.execCommand("copy");
        
                    OG$('.clip_alert').addClass('on');
                    setTimeout(function () {
                        OG$('.clip_alert').removeClass('on')
                    }, 1000)
                })*/



        // 카카오톡 공유하기 기능
        function send_kakao_talk_url() {
            /*try {
                if (Kakao) {
                    Kakao.init("358bcdf202588245ddb884a3f129f62c");
                }
            } catch(e) {};

            Kakao.Link.sendDefault({
                objectType : "feed",
                content : {
                    title : "{$name|striptag}",
                    imageUrl : "http:{$small_img}",
                    imageWidth : 420,
                    imageHeight : 300,
                    link : {
                        mobileWebUrl : "/product/detail.html?product_no={$product_no}",
                        webUrl : "/product/detail.html?product_no={$product_no}"
                    }
                },
                buttonTitle : "상품 보기",
            });*/
        }
    }
};


// * ===================================================== prd detail ================================================================ */


/**
 * 기본 기능 사용 세팅
 */
OG_prdDetailFunc.__OG_DEFAULT_VALUE_FUNCTION_USE = true; //이 함수 사용할 것인지
OG_prdDetailFunc.__OG_DEFAULT_VALUE_THUMBNAIL_IMG_CHANGE = (OG_DEVICE_CHK == 'pc') ? true : true; /* 이미지 변경 (MO) */
OG_prdDetailFunc.__OG_DEFAULT_VALUE_DETAIL_SCROLLBAR_PC = (OG_DEVICE_CHK == 'pc') ? false : false; /* 상품 상세 설명 영역에 커스텀 스크롤 바 노출 여부 (PC) */
OG_prdDetailFunc.__OG_DEFAULT_VALUE_POPUP_SCROLLBAR_PC = (OG_DEVICE_CHK == 'pc') ? true : false; /* 팝업창 영역에 커스텀 스크롤 바 노출 여부 (PC) */
OG_prdDetailFunc.__OG_DEFAULT_VALUE_OPTIONAREA_SCROLLBAR_MO = (OG_DEVICE_CHK == 'pc') ? false : true; /* 상품 옵션 영역에 커스텀 스크롤 바 노출 여부 -> true일 경우 처리 후 값 변경됨 (MO) */
OG_prdDetailFunc.__OG_DEFALUT_VALUE_REQUIRED_OPTION_CHK = (OG_DEVICE_CHK == 'pc') ? true : true; /* 필수옵션 미선택 시 알림 체크 */
OG_prdDetailFunc.__OG_DEFAULT_VALUE_EASY_PAYMENT_BOX_MOVE = (OG_DEVICE_CHK == 'pc') ? false : true; /* 간편결제 영역 이동 여부 체크 */
OG_prdDetailFunc.__OG_DEFAULT_VALUE_DETAIL_INFO_TABBAR_TYPE = (OG_DEVICE_CHK == 'pc') ? 'single' : 'single'; /* 탭바 노출 형식 */
OG_prdDetailFunc.__OG_DEFAULT_VALUE_DETAIL_SELECT_CUSTOM = (OG_DEVICE_CHK == 'pc') ? false : false; /* 셀렉트 박스 출력 대신 ul/li 구조를 사용할 것인지 여부 */
OG_prdDetailFunc.__OG_DEFAULT_VALUE_DETAIL_OPTION_SWIPER_USE = (OG_DEVICE_CHK == 'pc') ? false : false; /* 옵션에 swiper를 생성할 것인지 여부 */
OG_prdDetailFunc.__OG_DEFAULT_VALUE_DETAIL_SELECT_CUSTOM_SUB_TXT_SIGN = '▶'; /* 커스텀 형태 서브 텍스트 구분자 */
OG_prdDetailFunc.__OG_DEFAULT_VALUE_OPTION_SELECT_NEED_CHOICE_ALERT = '상품을 선택해주세요.'; //상품 선택 없이 장바구니/구매하기 버튼 클릭 시 alert
OG_prdDetailFunc.__OG_DEFAULT_VALUE_OPTION_SELECT_NEED_REQUIRED_ALERT = '필수 옵션을 선택해주세요.'; //필수 옵션 선택 없이 장바구니/구매하기 버튼 클릭 시 alert
OG_prdDetailFunc.__OG_DEFAULT_VALUE_FIXED_OPTION_AREA_USE = (OG_DEVICE_CHK == 'pc') ? false : false; //고정 상품 옵션 영역 사용 여부
OG_prdDetailFunc.__OG_DEFAULT_VALUE_THUMBNAIL_IMG_SLIDE_TO_ACTIVE = (OG_DEVICE_CHK == 'pc') ? false : false; //bigImage 영역에 active된 영역으로 슬라이드할것인지 여부
OG_prdDetailFunc.__OG_DEFAULT_VALUE_THUMBNAIL_IMG_SLIDE_TO_ACTIVE_SPEED = (OG_DEVICE_CHK == 'pc') ? 300 : 300; //bigImage 영역에 active된 영역으로 슬라이드 여부가 true일때 속도

/**
 * 커스텀해야 하는 swiper가 있다면 swipername과 option 입력
 */
switch (OG_DEVICE_CHK) {
    case 'pc':
        break;
    case 'mobile':
        OG_SwiperCustomArray.push({
            swiperName: 'prdDetail_listImg',
            swiperOption: {
                direction: "vertical",
                slidesPerView: 'auto',
                observer: true,
                observeParents: true,
                mousewheel: true,
            }
        });
        break;
    default:
        console.log('error');
        break;
}

/**
 * 쇼핑몰별 커스텀 함수 입력
 */
var OG_prdDetailCustom = {
    __benefitCustomChk: '',
    init: function () {


        $('.product_code .desc').text($('[data-title="자체상품코드"] .desc').text());




        OG$('.og_sub_container .xans-product-detail .infoArea .xans-product-option td > .ec-product-button.ec-product-preview > li > a').each(function () {
            let $e = OG$(this);
            let hexCode = OG$(this).attr('style');
            if (hexCode.indexOf('background-color') > -1) {
                hexCode = hexCode.replace('background-color:', '');
                if (typeof hexCode !== 'undefined') {
                    if (OGFindColorChipLuma(hexCode) == 'white') {
                        OG$(this).addClass('light');
                    }
                }
            }
        });

        let $sizeOption = OG$('.og_sub_container .xans-product-detail .infoArea .xans-product-option th:contains("사이즈")').closest('tr');
        let $sizeGuide = OG$('.sizeGuide');
        let $cremaSizeGuide = OG$('.crema_sizeGuide');
        let $bigAndSmall = OG$('.bigandsmall');


        if ($sizeGuide.length > 0) {
            $sizeOption.find('th').append($sizeGuide);
        }

        /*if($cremaSizeGuide.length > 0){
            $sizeOption.find('td').append($cremaSizeGuide);
        }*/
        if ($bigAndSmall.length > 0) {
            $sizeOption.find('td').append($bigAndSmall);
        }



        var $listImg = OG$('.og_sub_container .xans-product-detail .imgArea .listImg .list');
        var $timyImg = OG$('<li class="xans-record-"></li>').append(OG$('.thumbnail2 img').addClass('ThumbImage'));
        $timyImg.insertAfter($listImg.children().eq(0));

        $listImg.children().click(function () {
            console.log('click');
            OG$(this).siblings().removeClass('selected').addClass('ttttt');
            OG$(this).addClass('selected');
            OG$('.BigImage').attr('src', OG$(this).find('img').attr('src'));
        });


        /*var listImgLength = $listImg.children().length;
        if(listImgLength > 10){

            let $newListImg = $listImg.clone().empty();
            let $newListImg2 = $listImg.clone().empty();

            $listImg.children().each(function(){
                let $e = OG$(this);
                let index = $e.index();
                if(index >= 9 && index <= 18){
                    $newListImg.append($e.clone());
                }else if(index >= 19 && index <= 28){
                    $newListImg2.append($e.clone());
                }
            });
            $newListImg.insertAfter($listImg);
            $newListImg2.insertAfter($listImg.next());

            $listImg.children().each(function(){
                let $e = OG$(this);
                let index = $e.index();
                if(index == 0){
                    $e.addClass('selected');
                    $e.on('click',function(){
                        if($e.hasClass('selected')){
                            $e.removeClass('selected');
                        }else{
                            $e.addClass('selected');
                        }
                    });
                }
            });
        }else{
            $listImg.children().eq(0).addClass('selected');
        }*/


        OG$('.og_sub_container .xans-product-detail .imgArea .listImg .inner .list li').eq(0).addClass('selected');
        OG$('.og_sub_container .xans-product-detail .imgArea .listImg .inner .list li').eq(0).find('img').attr('src', OG$('.xans-product-detail .imgArea .prdImg img').attr('src'));

        OG$('body').on('OGResponsive', function (e) {
            if (OG_responsiveChk !== 'pc') {
                window.addEventListener('load', function () {
                    if (OG$('.og_sub_container .xans-product-detail .infoArea.og_sticky .infoArea_inner').hasClass('og_mcustomScrollbar')) {
                        OG$('.og_sub_container .xans-product-detail .infoArea.og_sticky .infoArea_inner').removeClass('og_mcustomScrollbar').mCustomScrollbar('destroy');
                    }
                    OG$('.og_sub_container .xans-product-detail .infoArea.og_sticky .infoArea_inner').insertAfter('.og_sub_container .xans-product-detail .imgArea .imgBox');
                    if ( OG$('.og_sub_container .xans-product-detail .imgArea .listImg .og_swiper').length == 0){

  let $clone = OG$('.og_sub_container .xans-product-detail .imgArea .listImg .list')
    .eq(0)
    .clone()
    .addClass('og_swiper')
    .removeAttr('style')
    .attr({
      'data-ogswipe-name' : 'listImg',
      'data-ogswipe-module' : 'bullets',   // ✅ 변경
      'data-ogswipe-loop': 'true',
    });

  const $wrap = OG$('.og_sub_container .xans-product-detail .imgArea .listImg');
  $wrap.append($clone);

  // ✅ 추가: pagination DOM 생성
  if ($wrap.find('.swiper-pagination').length === 0) {
    $wrap.append('<div class="swiper-pagination"></div>');
  }

  // ✅ 추가: bullets 옵션으로 초기화
  const $swiper = $wrap.find('.og_swiper');
  $swiper.OG_swiperFunc({
    loop: true,
    pagination: {
      el: $wrap.find('.swiper-pagination')[0],
      clickable: true,
      type: 'bullets'
    }
  });
}

                })
            } else {
                $listImg.OG_swiperFunc({
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    loop: false,
                    //mousewheel: true,
                });
                if (OG$('.og_sub_container .xans-product-detail .infoArea.og_sticky').children().length == 0) {
                    OG$('.og_sub_container .xans-product-detail .infoArea.og_sticky').append(OG$('.infoArea_inner'));
                }
                OG$('.og_sub_container .infoArea_inner').addClass('og_mcustomScrollbar');
                OGmcustomScrollbar();
                OG$('.og_sub_container .xans-product-detail .imgArea .listImg .og_swiper').remove();
            }
        });



        OG$('body').on('OGResponsive', function (e) {

            if (OG_responsiveChk === 'pc') {
                OG$('.xans-product-relationlist.og_base_product .prdList').removeClass('grid2').addClass('grid4');
            } else {
                OG$('.xans-product-relationlist.og_base_product .prdList').removeClass('grid4').addClass('grid2');
            }
        });

        //


        OG$('[data-ogswipe-name*="relation_prd"]').find('.category_name').text('추천스타일');

        /*
        OG$('[data-ogswipe-name="relation_prd"]').addClass('og_swiper').OG_swiperFunc({
            slidesPerView: 4,
            spaceBetween: 20,
            loop: false,
            breakpoints : {
                350: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    grid: {
                        fill: 'row',
                        rows: 2,
                    },
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    grid: {
                        fill: 'row',
                        rows: 2,
                    },
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    grid: {
                        fill: 'row',
                        rows: 2,
                    },
                },
                1025: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1366: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }
        });*/




        let $wisthIcon = OG$('[onclick*="wishlist"]');
        (wishIconFunction = function () {
            setTimeout(function () {
                let localWishList = JSON.parse(sessionStorage.getItem('localWishList' + OG_SHOP_NUM));
                let userWisthList = localWishList.wishList;
                let productNumForWishChk = Number(iProductNo);
                userWisthList.forEach(function (e, i) {
                    if (e == productNumForWishChk) {
                        $wisthIcon.addClass('on');
                    }
                });
            }, 800)
        })();
        $wisthIcon.on('click', function () {
            wishIconFunction();
        });


        switch (OG_DEVICE_CHK) {
            case 'pc':
                OG$('#go_crema_review_tab').on('click', function () {
                    let offsetTop = OG$('#prdReview').offset().top;
                    console.log(offsetTop);
                    OG$('html,body').animate({ scrollTop: offsetTop }, 'slow');
                });
                OG$(document).on('click', '.optionArea_open_button', function () {
                    if (OG$('.prdDetail_optionArea').hasClass('on')) {
                        OG$('.prdDetail_optionArea_inner').fadeOut().promise().done(function () {
                            OG$('.prdDetail_optionArea').removeClass('on');
                        });
                    } else {
                        OG$('.optionArea_open_button').hide();
                        OG$('.prdDetail_optionArea_inner').fadeIn().promise().done(function () {
                            OG$('.prdDetail_optionArea').addClass('on');
                            OG$('.optionArea_open_button').css('display', '');
                        });
                    }
                });
                break;
            case 'mobile':
                break;
            default:
                console.log('error');
                break;
        }

        $('#og_stock_layer_open_prddetail').on('click', function () {
            $('.og_stock_layer').fadeIn();
            OG_util.scrollDisabled();
        })





    },
    totalProductsCustom: function () {
        //모두 선택되었으면 셀렉트 초기화
        OG$('select[product_type], select[name^="addproduct_option_name"]').each(function () {
            let $baseDataConnect = OG$(this).prev();
            $baseDataConnect.find('[data-value="*"]').trigger('click');
        });
    },
    totalPriceCustom: function () {
    },
    preivewOptionStyleCustom: function ($this) {
        /**
         * 컬러칩 색상 텍스트 시각적 접근성 향상용 텍스트 컬러 변경 (임시)
         */
        $this.find('li').each(function () {
            let $li = OG$(this),
                $a = $li.children('a'),
                bg = $a.css('background-color');

            if ($li.find('img').length == 0) {
                if (bg) {
                    if (bg.indexOf('#') > -1) bg = OG_util.hexToRgb(bg);
                    bg = bg.split('rgb(')[1].split(')')[0].split(',');
                    $a.css('color', getContrastYIQ(Number(bg[0]), Number(bg[1]), Number(bg[2])));
                }
            }
        });
        function invert(rgb) {
            rgb = Array.prototype.join.call(arguments).match(/(-?[0-9\.]+)/g);
            for (var i = 0; i < rgb.length; i++) {
                rgb[i] = (i === 3 ? 1 : 255) - rgb[i];
            }
            return rgb;
        }
        function getContrastYIQ(r, g, b) {
            //var yiq = ((r*299)+(g*587)+(b*114))/1000;
            //return (yiq >= 128) ? 'black' : 'white';
            const contrastRatio = (r + g + b) / (255 * 3);
            return contrastRatio >= 0.55 ? '#222' : '#f4f4f4';
        }
    },
    initLast: function () {

        if (OG$('.xans-product-detail .productSet.additional .product > li').length == 0) {

            let $copyEl = OG$(`<div class="xans-element- xans-product xans-product-addproduct productSet additional">
                            <ul class="product">
                                <li class="xans-record-">
                                    <div class="information">
                                        <div class="thumbnail"><a><img></a></div>
                                    </div>
                                <li>
                            </ul>
                       </div>`);

            $copyEl.find('.product > li').first().addClass('selected');
            $copyEl.find('.product > li').first().find('a').attr('href', OG_LOCATION_HREF);
            $copyEl.find('.product > li').first().find('img').attr('src', $('.BigImage').attr('src'));
            $copyEl.insertBefore($('table.xans-product-option'));

        } else {
            let $copyEl = OG$('.xans-product-detail .productSet.additional .product > li').first().clone();
            $copyEl.addClass('selected');
            $copyEl.find('a').attr('href', OG_LOCATION_HREF);
            $copyEl.find('img').attr('src', $('.BigImage').attr('src'));
            OG$('.xans-product-detail .productSet.additional .product').prepend($copyEl);

            OG$('.xans-product-detail .productSet.additional .product > li .thumbnail > a').each(function () {
                let $e = OG$(this);
                let link = $e.attr('href');
                link = link + '&cate_no=' + iCategoryNo;
                $e.attr('href', link);
            });

        }



        OG$('.og_sub_container #prdInfo .contents').on('scroll', function (e) {
            let scrollLeft = OG$(e.target).scrollLeft();
            if (scrollLeft > 0) {
                OG$(e.target).parent().addClass('scroll');
            } else {
                OG$(e.target).parent().removeClass('scroll');
            }
        });

        if (iProductNo == '2732') {
            $('.xans-product-detail .productSet.additional, .crema_sizeGuide, #og_totalProducts .ec-base-help').addClass('displaynone');
            if ($('.prdDetail_noOption .single_product').length > 0 && $('#totalProductsOption tbody').children().length == 0) {
                $('#totalProductsOption').addClass('layout_hidden')
            }
            $('.prdDetail_menu_container').addClass('displaynone');
            $('.xans-product-detail .regularDelivery .gLabel:contains("정기배송")').html($('.xans-product-detail .regularDelivery .gLabel:contains("정기배송")').html().replace('정기배송', '자동갱신'));
            $('.xans-product-detail .regularDelivery .gLabel:contains("1회구매")').html($('.xans-product-detail .regularDelivery .gLabel:contains("1회구매")').html().replace('1회구매', '12개월 구매'));
            $('.xans-product-detail .regularDelivery .gLabel:contains("자동갱신")').addClass("displaynone");
            $('#btnRegularDelivery').text('신청하기');
        }
    }
}


/** ========================================================================================================================================================
 *
 * 함수 실행
 */
/**
 * document ready 전 실행되어야 하는 내용 실행
 */
OG_prdDetailFunc.initBefore();

/**
 * document ready시 실행
 */

OG_prdDetailFunc.init(); //상품 상세 페이지 함수 실행
OG_prdDetailCustom.init(); //해당 쇼핑몰 커스텀 함수
if (OG$('.product_coupondetail').length == 0) {
    OG$('.coupon_download').closest('li').addClass('displaynone');
}

window.addEventListener("DOMContentLoaded", function (event) {
    OG_prdDetailCustom.initLast();
});
/**
 * window load 시 실행
 */
window.addEventListener("load", function (event) {
    OG_prdDetailFunc.initLast();
});

/** 오류 방지 위한 함수 추가(없을 경우 에러)
 * document.location.href split
 * return array Param
 */
var getQueryString = function (sKey) {
    var sQueryString = document.location.search.substring(1);
    var aParam = {};
    if (sQueryString) {
        var aFields = sQueryString.split("&");
        var aField = [];
        for (var i = 0; i < aFields.length; i++) {
            aField = aFields[i].split('=');
            aParam[aField[0]] = aField[1];
        }
    }
    aParam.page = aParam.page ? aParam.page : 1;
    return sKey ? aParam[sKey] : aParam;
};

let flag = (window.innerWidth < 1024) ? 'a' : 'b';
let flag_chk;
let flag_start = 0;
$(window).resize(function () {
    flag_chk = (window.innerWidth < 1024) ? 'a' : 'b';
    if (flag !== flag_chk && flag_start == 0) {
        flag_start++;
        location.reload();
    }
});

OG$('body').on('OGResponsive', function (e) {
    switch (OG_responsiveChk) {
        case "pc":
            OG$('.og_base_product .prdList:not(.swiper-wrapper)').removeClass('grid2 grid3').addClass('grid4');
            break;
        case "tablet":
            //OG$('.og_base_product .prdList:not(.swiper-wrapper)').removeClass('grid4 grid2').addClass('grid3');
            OG$('.og_base_product .prdList:not(.swiper-wrapper)').removeClass('grid4 grid3').addClass('grid2');
            break;
        case "mobile":
            OG$('.og_base_product .prdList:not(.swiper-wrapper)').removeClass('grid4 grid3').addClass('grid2');
            break;
    }
});

// 고객리뷰개선
$(function () {
    $('#prdDetail_additional_tab > ul > li.review').click(function () {
        var reviewTop = $('#prdReview').offset();
        var headerHeight = $('header').outerHeight(true);
        $('body, html').stop().animate({ scrollTop: reviewTop.top - headerHeight }, 1000);
    });
});

$(function () {
    $('.prdDetail_infoBox > .og_review_and_share_area > .og_review_area').click(function () {
        var reviewTop = $('#prdReview').offset();
        var headerHeight = $('header').outerHeight(true);
        $('body, html').stop().animate({ scrollTop: reviewTop.top - headerHeight }, 1000);
    });
});