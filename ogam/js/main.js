
document.write('<script src="/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/d835870fa77f5f3cbbc26a0e1eee35d3.js?v='+ord+'"><\/script>');

//메인 페이지 축소 및 확대 감지 리사이즈
// let flag = window.innerWidth;
// let flag_chk;
// let flag_start = 0;
// OG$(window).resize(function(){
//     flag_chk = window.innerWidth;
//     if(Math.abs(flag_chk - flag) > 200 && flag_start == 0){
//         flag_start ++;
//         location.reload();
//     }
// });


OG$('.og_section_tab').find('li').each(function(){
    var $e = OG$(this);
    var index = $e.index();
    var chkVisiblility = (OG_util.checkAvailability(OG_MAIN_TAB_HIDDEN_CATEGORY_NEW_BEST_SELECTION, $e.text().toLowerCase().trim()));
    if(chkVisiblility){
        $e.remove();
    }else{
        let text = $e.text().trim();
        $e.closest('.og_section').find('.og_section_content_box .og_base_product').eq(index).find('li[id^="anchorBoxId_"]').each(function(){
            let $e2= OG$(this);;
            $e2.find('.category_name').text(text);
            let $link = $e2.find('[name^="anchorBoxName_"]');
            let $link2 = $e2.find('.name > a');
            let link = $link.attr('href');
            let newLink = link.replace('cate_no=1','cate_no=' + $e.attr('data-cate'));
            $link.attr('href', newLink);
            $link2.attr('href', newLink);
        })
    }
});


/*
OG$('.og_section_select select option').each(function(){
    let $e = $(this);
    let text = $e.text().toLowerCase().trim();
    var chkVisiblility = (OG_util.checkAvailability(OG_MAIN_TAB_HIDDEN_CATEGORY_ARENA_SELECTION, text));
    if(chkVisiblility){
        $e.remove();
    }
});*/


window.addEventListener("DOMContentLoaded", function(event) {






    OG$('.main_og_main_visual').find('li').each(function(){
        let reg = /\[(.*?)\]/g;
        let str = OG$(this).attr('data-header-change-text-trigger-color');
        let result = Array.from(str.matchAll(reg), match => `${match[0]}`);
        result = result[0];
        if(typeof result !== 'undefined'){
            str = str.replace(result,'').trim();
            OG$(this).attr('data-header-change-text-trigger-color',str);
            result = result.substring(1,result.length-1);
            if(result.indexOf('mp4') > -1){
                let video = '<video poster="" preload="metadata" autoPlay="" loop="" muted="" playsInline="" data-keepplaying="" name="media" style="width: auto; height: 490px; min-width: 100%; min-height: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); object-fit: cover;">';
                video += '<source src="'+ result +'#t=0.5" type="video/mp4"></video>';
                OG$(this).find('a').html(video);
            }else{
                OG$(this).find('a').html('<img src="'+ result +'">');
            }
        }
    });


    //탭 클릭 시 상품 호출+여닫힘 제어, 이미 상품 호출 되었으면 여닫힘만 제어
    OG$('.og_section_tab').find('li').on('click',function(){
        var $e = OG$(this);

        if($e.closest('[data-section-type="arenaSelection"]').length == 0){
            var index = $e.index();
            $e.addClass('selected').siblings().removeClass('selected');
            var cateNum = Number($e.attr('data-cate'));
            var cateName = $e.children().text();
            var url = OGPrdDynamicCall.__OG_DEFAULT_VALUE_AJAX_URL[1];
            var $prdList = $e.closest('.og_section').find('.og_section_content_box').children('[data-index="'+ index +'"]').find('.prdList');
            var orderType = '';
            var listMainNum = Number($e.closest('.og_section').find('.og_section_content_box').children('[data-index="'+ index +'"]').attr('og-module-num'));

            if($e.closest('[data-section-type]').attr('data-section-type') == 'newArrivals'){
                orderType = '&sort_method=5#Product_ListMenu';
            }else if($e.closest('[data-section-type]').attr('data-section-type') == 'weeklyBest'){
                orderType = '&sort_method=6#Product_ListMenu';
            }

            if($prdList.children().length == 0){
                if($e.closest('[data-section-type]').attr('data-section-type') == 'newArrivals'){
                    /*var moredata = {
                        'count' : 8,
                        'page' : 1,
                        'cate_no' : cateNum,
                        'OGmodule': "xans-product-listnormal",
                        'sort_method' : 5,
                        'idx' : 999,
                    };*/
                    var moredata = {
                        'count' : 8,
                        'page' : 1,
                        'OGmodule': "xans-product-listnormal",
                        'idx' : 999,
                        'sort_method' : 0,
                        'display_group' : (listMainNum+1),
                    };
                    $e.closest('.og_section').find('.og_section_content_box').children('[data-index="'+ index +'"]').addClass('og_prd_swiper_trans');
                }else if($e.closest('[data-section-type]').attr('data-section-type') == 'weeklyBest'){
                    /*var moredata = {
                        'count' : 8,
                        'page' : 1,
                        'cate_no' : cateNum,
                        'OGmodule': "xans-product-listnormal",
                        'sort_method' : 6,
                        'idx' : 999,
                    };*/
                    var moredata = {
                        'count' : 8,
                        'page' : 1,
                        'sort_method' : 0,
                        'OGmodule': "xans-product-listnormal",
                        'idx' : 999,
                        'display_group' : (listMainNum+1),
                    };
                }

                $prdList.on('OGSwiperCall', function(){
                    if($e.closest('.og_section').find('.og_section_content_box').children('[data-index="'+ index +'"]').css('min-height') === '0px'){
                        let minHeight = $e.closest('.og_section').find('.og_section_content_box').children('[data-index="'+ index +'"]').outerHeight();
                        $e.closest('.og_section').find('.og_section_content_box').children('[data-index]').css('min-height', minHeight + 'px');
                    }
                });

                OGPrdDynamicCall.displayMore(url, $prdList, moredata).then(function(){

                    $prdList.find('[id^="anchorBoxId_"]').each(function(i,e){
                        let $e = OG$(e);
                        $e.removeClass('done');
                        $e.find('.category_name').text(cateName);
                        OGPrdItemInfoCall.init($e);
                        let $link = $e.find('[name^="anchorBoxName_"]');
                        let $link2 = $e.find('.name > a');
                        let link = $link.attr('href');
                        let newLink = link.replace('cate_no=1','cate_no=' + cateNum);
                        $link.attr('href', newLink);
                        $link2.attr('href', newLink);
                    });
                    //CAPP_ASYNC_METHODS.WishList.execute();
                    //$prdList.children().filter(':not(:nth-child(-n+8))').remove();


                    if($e.closest('[data-section-type]').attr('data-section-type') == 'newArrivals'){

                        $prdList.addClass('og_swiper').attr({
                            'data-ogswipe-name': 'newArrivals_product' + cateNum,
                            'data-ogswipe-module' : 'navigation',
                        }).OG_swiperFunc({
                            slidesPerView: 3,
                            spaceBetween: 20,
                            autoplay: {
                                delay: 6000,
                                disableOnInteraction: false,
                            },
                            speed: 900,
                            loop: true,
                            breakpoints : {
                                350 : {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1025: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                }
                            },
                        });

                    }else if($e.closest('[data-section-type]').attr('data-section-type') == 'weeklyBest'){
                        $prdList.addClass('og_swiper').attr({
                            'data-ogswipe-name': 'weeklyBest_product' + cateNum,
                            'data-ogswipe-module' : 'scrollbar',
                        }).OG_swiperFunc({
                            slidesPerView: 5,
                            spaceBetween: 20,
                            autoplay: {
                                delay: 6000,
                                disableOnInteraction: false,
                            },
                            loop: false,
                            speed: 900,
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
                                1025: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1366: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                            }
                        });
                    }
                });
            }
            $e.closest('.og_section').find('.tab_link_btn a').attr('href', $e.children().attr('data-href') + orderType);
            $e.closest('.og_section').find('.og_section_content_box').children('[data-index="'+ index +'"]').addClass('selected').siblings().removeClass('selected');
        }
    });




    OG$('[data-section-type="arenaSelection"] .selection_ul li').each(function(){
        let $e = OG$(this),
            index = $e.index(),
            $option = $e.parents('[data-section-type="arenaSelection"]').find('.og_section_tab li').eq(index),
            href = $option.find('a').attr('data-href'),
            cate = $option.attr('data-cate'),
            name = $option.text(),
            $makeprdElement = '<div data-index="'+ index +'" class="og_base_product ec-base-product og_prd_swiper_grid" data-cate="'+ cate +'"><div class="prdList"></div></div>';
        OG$('[data-section-type="arenaSelection"] .og_section_content_box .og_prd_area').append($makeprdElement);
        $e.find('a').attr('href', href).append('<div class="text_box"><span class="name">'+ name +'</span><span class="fixed_txt">더보기</span></div>');
    });
    OG$('[data-section-type="arenaSelection"] .selection_ul').addClass('og_swiper').OG_swiperFunc(/*{
        slidesPerView: 1,
        spaceBetween: 0,
    }*/);

    //OG_optionCustomUtil.find(OG$('.og_section_select select'));
    //OG$('.og_section_select .og_data_select li[data-value="*"]').remove();

    function isPC() {
        return window.matchMedia('(min-width: 1366px)').matches;
    }

    /* ===============================
   MODE STATE
================================ */
    var __MAIN_VISUAL_MODE__ = isPC() ? 'pc' : 'mo';

    /* ===============================
   PC MAIN VISUAL
================================ */

    function updateMainVisualProgress(swiper){
        if (!swiper || !swiper.slides) return;

        var total = swiper.slides.length - swiper.loopedSlides * 2 || swiper.slides.length;
        var current = swiper.realIndex + 1;

        OG$('.main-visual-progress .bar').css({
            width: (current / total) * 100 + '%'
        });
    }

    function updateMainVisualPagination(swiper){
        if (!swiper || !swiper.slides) return;

        var current = swiper.realIndex + 1;
        var total   = swiper.slides.length - swiper.loopedSlides * 2 || swiper.slides.length;

        OG$('.main-visual-pagination .current').text(current < 10 ? '0' + current : current);
        OG$('.main-visual-pagination .total').text(total < 10 ? '0' + total : total);
    }

    var $pcMainVisualSwiper = OG$('.main-visual-wrapper .main_og_main_visual ul');
    if (OG$('.main-visual-wrapper .og_swiper_prev').length === 0) {
        OG$('.main-visual-wrapper').append(
            '<button class="og_swiper_prev main-visual-prev"></button>' +
            '<button class="og_swiper_next main-visual-next"></button>'
        );
    }
    $pcMainVisualSwiper.OG_swiperFunc({
        autoplay: {
            delay: 30000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.main-visual-wrapper .og_swiper_prev',
            nextEl: '.main-visual-wrapper .og_swiper_next',
        },
        on: {
            init: function () {
                if (!isPC()) return;
                headerBgChange();
                updateMainVisualPagination(this);
                updateMainVisualProgress(this);
            },
            slideChangeTransitionEnd: function () {
                if (!isPC()) return;
                headerBgChange();
                updateMainVisualPagination(this);
                updateMainVisualProgress(this);
            }
        }
    });

    /* ===============================
   MOBILE MAIN VISUAL
================================ */

    function updateMainVisualMoProgress(swiper){
        if (!swiper || !swiper.slides) return;

        var total = swiper.slides.length - swiper.loopedSlides * 2 || swiper.slides.length;
        var current = swiper.realIndex + 1;

        OG$('.main-visual-mo-progress .bar').css({
            width: (current / total) * 100 + '%'
        });
    }

    function updateMainVisualMoPagination(swiper){
        if (!swiper || !swiper.slides) return;

        var current = swiper.realIndex + 1;
        var total   = swiper.slides.length - swiper.loopedSlides * 2 || swiper.slides.length;

        OG$('.main-visual-mo-pagination .current').text(current < 10 ? '0' + current : current);
        OG$('.main-visual-mo-pagination .total').text(total < 10 ? '0' + total : total);
    }

    var $moMainVisualSwiper = OG$('.main-visual-mo-wrapper .main_og_main_visual ul');

    $moMainVisualSwiper.OG_swiperFunc({
        autoplay: {
            delay: 30000,
            disableOnInteraction: false,
        },
        on: {
            init: function () {
                if (isPC()) return;
                headerBgChange();
                updateMainVisualMoPagination(this);
                updateMainVisualMoProgress(this);
            },
            slideChangeTransitionEnd: function () {
                if (isPC()) return;
                headerBgChange();
                updateMainVisualMoPagination(this);
                updateMainVisualMoProgress(this);
            }
        }
    });

    /* ===============================
   SYNC FUNCTION
================================ */

    function syncMainVisualPagination() {

        if (isPC()) {
            var swiperName = OG$('.main-visual-wrapper .main_og_main_visual ul')
            .attr('data-ogswipe-name');
            var pcSwiper = window[swiperName];
            if (!pcSwiper) return;

            updateMainVisualPagination(pcSwiper);
            updateMainVisualProgress(pcSwiper);

        } else {
            var swiperName = OG$('.main-visual-mo-wrapper .main_og_main_visual ul')
            .attr('data-ogswipe-name');
            var moSwiper = window[swiperName];
            if (!moSwiper) return;

            updateMainVisualMoPagination(moSwiper);
            updateMainVisualMoProgress(moSwiper);
        }
    }

    /* ===============================
   RESIZE HANDLER (핵심)
================================ */

    var __mvResizeTimer = null;
    window.addEventListener('resize', function () {
        clearTimeout(__mvResizeTimer);

        __mvResizeTimer = setTimeout(function () {

            var nextMode = isPC() ? 'pc' : 'mo';

            if (__MAIN_VISUAL_MODE__ !== nextMode) {

                __MAIN_VISUAL_MODE__ = nextMode;

                if (nextMode === 'pc') {
                    var swiperName = OG$('.main-visual-wrapper .main_og_main_visual ul')
                    .attr('data-ogswipe-name');
                    var pcSwiper = window[swiperName];

                    if (pcSwiper) {
                        pcSwiper.slideToLoop(0, 0, false);
                        updateMainVisualPagination(pcSwiper);   // ⭐ 0 패딩 보장
                        updateMainVisualProgress(pcSwiper);
                    }

                } else {
                    var swiperName = OG$('.main-visual-mo-wrapper .main_og_main_visual ul')
                    .attr('data-ogswipe-name');
                    var moSwiper = window[swiperName];

                    if (moSwiper) {
                        moSwiper.slideToLoop(0, 0, false);
                        updateMainVisualMoPagination(moSwiper); // ⭐ 0 패딩 보장
                        updateMainVisualMoProgress(moSwiper);
                    }
                }

                return;
            }



            syncMainVisualPagination();

        }, 150);
    });


    /* ===============================
   LOAD
================================ */

    window.addEventListener('load', function () {
        __MAIN_VISUAL_MODE__ = isPC() ? 'pc' : 'mo';
        syncMainVisualPagination();
    });



    var arenaSelectionPrdCall = function(index){
        let $option = OG$('[data-section-type="arenaSelection"]').find('.og_section_tab li').eq(index),
            $e = OG$('[data-section-type="arenaSelection"] .og_swiper li').eq(index),
            listMainNum = Number($e.attr('data-call-listmain')),
            cateName = $option.text();
        var $prdList = $e.closest('.og_section').find('.og_section_content_box .og_prd_area').children('[data-index="'+ index +'"]').find('.prdList'),
            cateNo = $prdList.closest('.og_base_product').attr('data-cate');

        if($prdList.children().length == 0){
            var moredata = {
                'count' : 6,
                'page' : 1,
                'OGmodule': "xans-product-listnormal",
                'sort_method' : 6,
                'idx' : 999,
                'display_group' : (listMainNum+1),
            };

            var url = OGPrdDynamicCall.__OG_DEFAULT_VALUE_AJAX_URL[1];
            OGPrdDynamicCall.displayMore(url, $prdList, moredata).then(function(res){
                $prdList.on('OGSwiperCall', function(){
                    $prdList.find('[id^="anchorBoxId_"]').each(function(i,e){
                        let $e = OG$(e);
                        $e.removeClass('done');
                        $e.find('.category_name').text(cateName);
                        OGPrdItemInfoCall.init($e);
                        let $link = $e.find('[name^="anchorBoxName_"]');
                        let $link2 = $e.find('.name > a');
                        let link = $link.attr('href');
                        let newLink = link.replace('cate_no=1','cate_no=' + cateNo);
                        $link.attr('href', newLink);
                        $link2.attr('href', newLink);
                    });
                    if(OG_responsiveChk == 'pc'){
                        $('[data-section-type="arenaSelection"] .og_section_content_box').css('height', $('[data-section-type="arenaSelection"] .og_section_content_box').outerHeight());
                    }else{
                        //$('[data-section-type="arenaSelection"] .og_prd_area').css('height', $('[data-section-type="arenaSelection"] .og_prd_area').outerHeight());
                    }

                });


                //$prdList.children().filter(':not(:nth-child(-n+6))').remove();
                // CAPP_ASYNC_METHODS.WishList.execute();

                $prdList.addClass('og_swiper').attr({
                    'data-ogswipe-name': 'arena_selection_product' + listMainNum,
                }).OG_swiperFunc({
                    slidesPerView: 3,
                    spaceBetween: 20,
                    loop: false,
                    breakpoints : {
                        350: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                            grid: {
                                fill: 'row',
                                rows: 3,
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
                        1600: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            grid: {
                                fill: 'row',
                                rows: 2,
                            },
                        },
                    }
                });

            });
        }
        /*OG$('[data-section-type="arenaSelection"]').find('.og_section_select .og_data_view strong').text(OG$('[data-section-type="arenaSelection"]').find('.og_section_select .og_data_select li').eq(index).attr('data-value'));
        OG$('[data-section-type="arenaSelection"]').find('.og_section_select .og_data_select li').eq(index).addClass('selected').siblings().removeClass('selected');*/
        OG$('[data-section-type="arenaSelection"] .tab_link_btn a').attr('href', '/product/list.html?cate_no=' + cateNo);
        OG$('[data-section-type="arenaSelection"] .og_section_tab li').eq(index).addClass('selected').siblings().removeClass('selected');
        OG$('[data-section-type="arenaSelection"]').find('.og_section_content_box .og_prd_area').children('[data-index="'+ index +'"]').addClass('selected').siblings().removeClass('selected');
    };


    window['ogswipe_arenaSelection'].on('slideChange', function () {
        var index = this.realIndex;
        arenaSelectionPrdCall(index);
    });


    OG$('[data-section-type="arenaSelection"] .og_section_tab li').on('click',function(){
        let $option = OG$(this),
            index = $option.index();
        window['ogswipe_arenaSelection'].slideTo(index,300,true);
    });

    OG$('.og_section_tab').find('li:first-child').trigger('click');


    OG$('[data-section-type="infoBanner"] .og_section_content_box > * ul').addClass('og_swiper').OG_swiperFunc({
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        speed: 900,
        autoplay: {
            delay: 10000,
        },
        on: {
            init: function () {
                setTimeout(function(){
                    let BnouterHeight = $('[df-banner-code="info-banner--pc"] .swiper-slide-active').outerWidth()*(600/1003);
                    OG$('[df-banner-code="info-banner--pc"] .swiper-slide').css('height',BnouterHeight);
                },2000)
            },
        },
    });

    OG$('[data-section-type="middleBanner"] ul').addClass('og_swiper').OG_swiperFunc({
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 900,
    });




});

/* ===============================
   STYLES PICKS SWIPER
================================ */

window.addEventListener('load', function () {

    setTimeout(function () {

        var $prdList = OG$('.style-picks-section .prdList');
        if (!$prdList.length) return;

        /* ===============================
           1. Cafe24 script 전부 제거
        ================================ */
        $prdList.find('script').remove();

        /* ===============================
           2. li 수집 (4개 이상 가정)
        ================================ */
        var $items = $prdList.children('li');
        if ($items.length <= 4) return;

        /* ===============================
           3. Swiper wrapper 재빌드
        ================================ */
        var swiperName = 'stylePicksSwiper';

        var $newWrapper = OG$(
            '<div class="style-picks-swiper-wrap">' +
            '<button class="og_swiper_prev"></button>' +
            '<button class="og_swiper_next"></button>' +
            '<ul class="prdList og_swiper"></ul>' +
            '</div>'
        );

        var $newList = $newWrapper.find('.prdList');

        $items.each(function () {
            OG$(this)
                .addClass('swiper-slide')
                .appendTo($newList);
        });

        /* ===============================
           4. 기존 DOM 교체
        ================================ */
        $prdList.replaceWith($newWrapper);

        /* ===============================
           5. Swiper 초기화 (화살표 포함)
        ================================ */
        $newList
            .attr({
            'data-ogswipe-name': swiperName,
            'data-ogswipe-module': 'navigation',
        })
            .OG_swiperFunc({
            slidesPerView: 1.8,
            spaceBetween: 4,
            speed: 800,
            loop: false,
            navigation: {
                nextEl: '.style-picks-swiper-wrap .og_swiper_next',
                prevEl: '.style-picks-swiper-wrap .og_swiper_prev',
            },
            breakpoints: {
                0: {
                    slidesOffsetBefore: 16,
                    },
                350: {
                    slidesPerView: 2.5,
                    spaceBetween: 4,
                    slidesOffsetBefore: 16,
                },
                768: {
                    slidesPerView: 3.4,
                    spaceBetween: 8,
                    slidesOffsetBefore: 16,
                    slidesOffsetAfter: 16,
                },
                1336: {
                    slidesPerView: 4,
                    spaceBetween: 8,
                    slidesOffsetBefore: 44,
                    slidesOffsetAfter: 44,
                },
                1832: {
                    slidesPerView: 4,
                    spaceBetween: 8,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                },
           
            },
            on: {
                init: function () {
                    OG$('.style-picks-section').removeClass('hidden');
                }
            }
        });


    },300); // Cafe24 렌더링 대기

});

window.addEventListener('load', function(){



    setTimeout(function(){
        $('.app-smart-popup a').each(function(){
            let $e = $(this);
            let href = $e.attr('href');
            if((href.indexOf('member/join.html')>-1 || href.indexOf('member/login.html')>-1) && OG_MEMBER_CHECK){
                $e.attr('href','/myshop/coupon/coupon.html');
            }
        });

    },1000);


})

// 모든 img태그에 lazy load 적용
var images = document.querySelectorAll('img');
if (images.length > 0) {

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('loading', 'lazy');
    }
}


// S::: Circle swiper :::S //
document.addEventListener('DOMContentLoaded', function () {

    setTimeout(function() {
        const categorySwiper = new Swiper('.main-category-swiper', {
            slidesPerView: 4.3,
            spaceBetween: 8,
            speed: 800,
            loop: false,

            observer: true,
            observeParents: true,
            watchOverflow: true,

            navigation: {
                nextEl: '.circle-swiper-button-next',
                prevEl: '.circle-swiper-button-prev',
            },

            breakpoints: {
                 0: {
                    },
                350: {
                    slidesPerView: 2.5,
                    spaceBetween: 4,
                },
                768: {
                    slidesPerView: 3.4,
                    spaceBetween: 8,
                    slidesOffsetAfter: 16,
                },
                1336: {
                    slidesPerView: 5.3,
                    spaceBetween: 8,
                },
                1832: {
                    slidesPerView: 6,
                    spaceBetween: 8,
                },
            },
            on: {
                init: function () {
                    // 초기화 후 억지로 가로 길이 다시 재기
                    const self = this;
                    setTimeout(() => self.update(), 500);
                }
            }
        });
    }, 500);

});
// E::: Circle swiper :::E //

