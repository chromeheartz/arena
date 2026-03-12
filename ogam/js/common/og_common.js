/** ========================================================================================================================================================
 *
 * OG_util.js 할당 변수 지정
 */

//전역변수 지정 -----> 페이지별로 다른 style 값 필요한 경우 html 태그에 path_role 값 붙으므로 확인하고 작업 하시면 됟니다.
var OG_PAGE_CHK = OG$('meta[name="path_role"]').attr("content");
OG$('html').attr('data-page',OG_PAGE_CHK);


/* ----------------------------  메뉴 ----------------------------- */
/* 메뉴 카테고리 설정 */
var OG_CATE_LINK_SETTING = OG_CATE_LINK_SETTING || {
    __OG_DEFAULT_VALUE_FUNCTION_USE: true /* 이 함수를 사용할 것인지 여부 --->  true 값 유지 요망 (헤더, 사이드 메뉴가 이 함수로 호출됨) */,
    __OG_DEFAULT_VALUE_SUBCATEGORY_TYPE_LIST: [
        /* allCateSet : 가상의 전체 메뉴 생성 여부 0 : 전체 노출 메뉴 없음 1: 실하위카테가 1개 이상일 때 전체 메뉴 노출 2 : 실하위카테가 없어도 전체 메뉴 노출 */
        {
            type: "allView_hover",
            allCateSet: 0,
        } /* 1차 메뉴 기준으로 호출 / hover시 하위 메뉴 노출 */,
        {
            type: "allView_slide",
            allCateSet: 0,
        } /* 1차 메뉴 기준으로 호출 / 클릭시 하위 메뉴 slide 노출 */,
        {
            type: "currentView_list_full",
            allCateSet: 0,
            viewNextSet: 1,
        } /* 현재 카테고리 기준으로 노출 / 모든 분류 리스트 노출 */,
        {
            type: "currentView_list_under",
            allCateSet: 1,
        } /* 현재 카테고리 기준으로 노출 / 기준 하위 메뉴 노출(단순나열) */,
        {
            type: "currentView_list_select",
            allCateSet: 0,
        } /* 현재 카테고리 기준으로 노출 / 셀렉트 형태로 노출 */,
        { type: "allView_custom_sitemap",
            allCateSet: 0,
        },
        { type: "allView_slide",
            allCateSet: 0,
        },
        {
            type: "currentView_list_category",
            allCateSet: 0,
            viewNextSet: 1,
            virtualParentUse: true,
            virtualParentList: [
                { name: "Home", design_page_url: "/", use: true },
                {
                    name: "Shop",
                    cate_no: 1,
                    design_page_url: "javascript:void(0);",
                    use: true,
                },
            ],
        },
    ],
    __OG_DEFAULT_VALUE_SUBCATEGORY_ALL_TXT:
        "전체" /* 가상의 전체 메뉴 타이틀명 : 기존 카테고리명과 동일하게 쓰고 싶다면 빈값으로 입력 */,
};
/* 메뉴 카테고리 커스텀 */
var OG_CATE_LINK_CUSTOM = [
    {
        cate_no : 43,
        add_sub_text: '',
    },
];

/* ----------------------------  특정 요소 관련 ----------------------------- */
/* 아이콘 변경 */
var OG_ICONS_CUSTOM = OG_ICONS_CUSTOM || [
    //{src: 'ico_product_stock', replaceTxt : 'stock'},
    //{src: 'ico_product_recommended', replaceTxt : 'best'},
    //{src: 'ico_product_soldout', replaceTxt : 'soldout'},
    //{src: 'ico_product_new', replaceTxt : 'new'},
    //{src: 'ico_product_pickup', replaceTxt : 'pickup'},
    //{src: 'ico_product_today', replaceTxt : 'producttoday'},
    //{src: 'custom_316474134899949', replaceTxt : '테스트 아이콘'},
];

/**
 * css변수로 높이를 측정해줘야 하는항목 배열에 입력
 * name -> 이후 변수명(ex --topBanner) element 측정해야 되는 요소
 */
var OGSetPropertyArray = OGSetPropertyArray || [
    {name : 'topBanner', element : '#base_topBanner_container'},
    {name : 'header', element : 'header'},
    {name : 'gnb', element : 'header .header_navi'},
    {name : 'footer', element : 'footer'},
    {name: 'bottomnav', element:  '.bottom-nav'},
    {name: 'orderFixArea', element: '#orderFixArea'}
];
/* ----------------------------  특정 요소 관련 ----------------------------- */
/* ----------------------------  상품 가격 ----------------------------- */
/**
 * 상품별/페이지별 실행 영역 세팅(공통) //최종 가격 출력 -> 해당하는 .base_prc_ [변수명.split('Price')[0]]에 뿌려짐
 */
OGbasePrdInfoCall.__OG_DEFAULT_VALUE_FUNCTION_USE = true; //함수 전체 사용할 것인지 여부
OGbasePrdInfoCall.__OG_DEFAULT_VALUE_PRC_CALC_USE = true; //할인율 계산 함수를 사용할 것인지 여부 : 쓰지 않을 경우 false로 바꾸고 개별적으로 지정하세요.

/**
 * 개별 상품 영역 가격
 * name -> 이후 변수명 / element 가격정보를 가지고 있는 element
 * name : (example) + Price, value : [id^="product_prc_(example)"]
 * (example) 부분은 동일해야 합니다. & data-prc가 필요합니다.
 * 양식 기존과 맞춰주세요.
 */
OGbasePrdInfoCall.__OG_DEFAULT_VALUE_PRC_ITEM_LIST= [
    {name: 'customPrice', element : '[id^="product_prc_custom"]'},
    {name: 'sellPrice', element : '[id^="product_prc_sell"]'},
    {name: 'promoPrice', element : '[id^="product_prc_promo"]'},
];

/**
 * 페이지 기준 영역 가격
 * name -> 이후 변수명 / element 가격정보를 가지고 있는 element
 * name : (example) + Price, value : [id^="product_prc_(example)"]
 * (example) 부분은 동일해야 합니다. & data-prc가 필요합니다.
 * 양식 기존과 맞춰주세요.
 */
OGbasePrdInfoCall.__OG_DEFAULT_VALUE_PRC_PAGE_LIST= [
    {name: 'customPrice', element : '#OG_ForFindPrdDetailInfo #product_prc_custom_page'},
    {name: 'sellPrice', element : '#OG_ForFindPrdDetailInfo #product_prc_sell_page'},
    {name: 'promoPrice', element : '#OG_ForFindPrdDetailInfo #product_prc_promo_page'},
];

/* page 기준으로 출력하는 경우 출력해야 되는 요소 기준점 */
OGbasePrdInfoCall.__OG_DEFAULT_VALUE_PRC_PAGE_PRINT_ELEMENT = [
    '.og_prc_infoBox',
];

/**
 * 계산 기준 (순차실행이므로 각 쇼핑몰 계산 우선순위 맞춰서 배열에 넣어주세요)
 * oriEl :최초가 finEl :최종가
 * 개별상품영역/페이지기준 가격에 입력한 변수명을 넣어줍니다.
 */
OGbasePrdInfoCall.__OG_DEFAULT_VALUE_PRC_CALC_STANDARD = [
    {oriEl: 'sellPrice', finEl: 'promoPrice'},
    {oriEl: 'customPrice', finEl: 'sellPrice'},
];

/**
 * 할인율 계산식 입력하시면 됩니다
 * ori -> 최초가 / fin -> 최종가 return 할인율
 */
OGbasePrdInfoCall.__OG_DEFAULT_VALUE_PRC_CALC_DECIMAL_SET = function(ori, fin){
    return Math.ceil(((ori - fin) / ori) * 100);
};
/* ----------------------------  상품 가격 ----------------------------- */
/* ----------------------------  특정 영역 함수 세팅 ----------------------------- */
/**
 * 상품별 실행 영역 세팅
 */
OGPrdItemInfoCall.__OG_DEFAULT_VALUE_FUNCTION_USE = true; //상품 영역 함수 전체 사용 여부
OGPrdItemInfoCall.__OG_DEFAULT_VALUE_PRC_CALC_USE = true; //상품 영역 할인율 계산 사용 여부
OGPrdItemInfoCall.__OG_DEFAULT_VALUE_ICON_CHANGE_USE = true; //상품 영역 아이콘 변경 사용 여부
OGPrdItemInfoCall.__OG_DEFAULT_VALUE_CUSTOM_FUNCTION_USE = true; //상품 영역 커스텀 함수 사용 여부
OGPrdItemInfoCall.__OG_DEFAULT_VALUE_BASKETCONFIRM_FUNCTION_USE = false; //장바구니 확인창 수정 함수 사용 여부

/**
 * 상품별 추가 실행되어야 하는 함수 있다면 입력
 */
var basePrdItemInfoCallCustom = function(el){
    var $this = el;
    if($this.find('.spec > li .color .chips').length > 0){
        $this.find('.spec > li .color .chips').each(function(){
            let hexCode = OG$(this).attr('title');
            if(OGFindColorChipLuma(hexCode) == 'white'){
                OG$(this).addClass('light');
            }
        });
    }

    let $customIcons = $this.find('img[src*="/web/upload/custom_"]');
    let $colorchipEl = $('<div class="og_color_chips"></div>');
    $customIcons.each(function(){
        let $e = $(this);
        $colorchipEl.append($e);
    });
    $colorchipEl.insertAfter($this.find('.og_promotion_icons'));

    let executivesMember = ($this.find('.spec [data-name="임직원상품"]').length > 0) ? $this.find('.spec [data-name="임직원상품"] > span').text() : '';
    if(executivesMember == 'y'){ executivesMember = 'prd_executives'; }
    else if(executivesMember == 'n'){ executivesMember = 'prd_not_executives'}
    else{executivesMember = ''}

    let eliteMember = ($this.find('.spec [data-name="선수 상품"]').length > 0) ? $this.find('.spec [data-name="선수 상품"] > span').text() : '';
    if(eliteMember == 'y'){ eliteMember = 'prd_elite' }
    else if(eliteMember == 'n'){ eliteMember = 'prd_not_elite'}
    else{eliteMember = ''}

    $this.addClass(executivesMember + ' ' + eliteMember);
    prdViewChk();
};

/**
 * 페이지별 실행 영역 세팅
 */
OGPrdPageInfoCall.__OG_DEFAULT_VALUE_FUNCTION_USE = true; //페이지 기준 함수 전체 사용 여부
OGPrdPageInfoCall.__OG_DEFAULT_VALUE_PRC_CALC_USE = true; //페이지 기준 할인율 계산 사용 여부
OGPrdPageInfoCall.__OG_DEFAULT_VALUE_ICON_CHANGE_USE = true; //페이지 기준 아이콘 변경 사용 여부
OGPrdPageInfoCall.__OG_DEFAULT_VALUE_CUSTOM_FUNCTION_USE = true; //페이지 기준 커스텀 함수 사용 여부
OGPrdPageInfoCall.__OG_DEFAULT_VALUE_BASKETCONFIRM_FUNCTION_USE = false; //페이지 기준 장바구니 확인창 수정 함수 사용 여부

/**
 * 페이지별 추가 실행되어야 하는 함수 있다면 입력
 */
var basePrdPageInfoCallCustom = function(){
    let $customIcons = $('.detailArea img[src*="/web/upload/custom_"]');
    let $colorchipEl = $('<div class="og_color_chips displaynone"></div>');

    $customIcons.each(function(){
        let $e = $(this);
        $colorchipEl.append($e);
    });
    $colorchipEl.insertAfter($('.detailArea .og_promotion_icons'));


    let executivesMember = ($('.og_basic_prd_info .prdDetail_info[data-title*="임직원상품"]').length > 0) ? $('.og_basic_prd_info .prdDetail_info[data-title*="임직원상품"] .desc').text() : '';
    if(executivesMember == 'y'){ executivesMember = 'prd_executives' }
    else if(executivesMember == 'n'){ executivesMember = 'prd_not_executives'}
    else{executivesMember = ''}

    let eliteMember = ($('.og_basic_prd_info .prdDetail_info[data-title*="선수 상품"]').length > 0) ? $('.og_basic_prd_info .prdDetail_info[data-title*="선수 상품"] .desc').text() : '';
    if(eliteMember == 'y'){ eliteMember = 'prd_elite' }
    else if(eliteMember == 'n'){ eliteMember = 'prd_not_elite'}
    else{eliteMember = ''}
    $('.og_sub_container[data-page="prdDetail"]').addClass(executivesMember + ' ' + eliteMember);


};
/* ----------------------------  특정 영역 함수 세팅 ----------------------------- */
/* ----------------------------  스와이퍼 ----------------------------- */
/**
 * swiper basic option
 */
OG_SwiperBasicOption = {
    slidesPerView : 'auto',
    spaceBetween : 0,
    speed : 300,
    loop: false,
};

/**
 * 커스텀해야 하는 swiper가 있다면 swipername과 option 입력
 */
OG_SwiperCustomArray.push();

/* ----------------------------  스와이퍼 ----------------------------- */

let headerColorState = '';
let headerBgState = '';

/** ========================================================================================================================================================
 *
 * 공통 실행 함수
 */
var OG_commonCustom = OG_commonCustom || {
    __OG_DEFAULT_VALUE_DETAIL_SELECT_CUSTOM_SUB_TXT_SIGN : '▶',
    __OG_DEFAULT_VALUE_OPTION_SOLDOUT_FIXED_TXT: '[품절]', //품절 옵션 텍스트
    __OG_DEFAULT_VALUE_OPTION_REQUIRED_FIXED_TXT: '[필수]', //필수 옵션 텍스트
    __OG_DEFAULT_VALUE_OPTION_OPTIONAL_FIXED_TXT: '[선택]', //선택 옵션 텍스트
    __OG_DEFAULT_VALUE_OPTION_DEFAULT_FIXED_TXT: '옵션선택', //옵션 선택 기본값

    initBefore : function(){
        var $goBackBtn = OG$('.go_back_btn');
        var documentFeferrer = document.referrer;
        if( (documentFeferrer.indexOf('/member/login.html') > -1 || documentFeferrer.indexOf('/member/member_login.html') > -1 || documentFeferrer.indexOf('/member/join.html') > -1 || documentFeferrer.indexOf('Api/Member') > -1) && OG_MEMBER_CHECK){
            $goBackBtn.children('a').attr('onClick','location.href="'+ OG_SKIN_NUM+'"');
        }else{
            if(documentFeferrer.indexOf('/order/orderform.html') > -1 && OG_LOCATION_HREF.indexOf('/order/orderform.html') > -1){
                $goBackBtn.children('a').attr('onClick','location.href="/order/basket.html"');
            }
        }

        if(documentFeferrer == ''){
            $goBackBtn.children('a').attr('onClick','location.href="'+ OG_SKIN_NUM+'"');
        }

        if( (OG_LOCATION_HREF.indexOf('/member/login.html') > -1 || OG_LOCATION_HREF.indexOf('/member/member_login.html') > -1 || OG_LOCATION_HREF.indexOf('/member/join.html') > -1) && OG_MEMBER_CHECK){
            if(OG_LOCATION_HREF.indexOf('returnUrl') > -1){
                var returnUrl = OG_LOCATION_HREF.split('returnUrl=')[1];
                var forCheck = returnUrl.toUpperCase();
                if(forCheck.indexOf('ORDER/ORDERFORM.HTML') > -1){
                    window.location.href='/order/orderform.html?basket_type=all_buy&delvtype=A';
                }else{
                    if(forCheck.indexOf('LOGIN') > -1 || forCheck.indexOf('MEMBER') > -1 || forCheck.indexOf('AUTH') > -1){
                        window.location.href= OG_SKIN_NUM;
                    }else{
                        window.location.href=returnUrl;
                    }
                }
            }else{
                window.location.href=OG_SKIN_NUM;
            }
        }

    },

    init : function(){
        /**
         * side menu 동작 제어
         */
        OG$('#base_sidebar_container .close_button').on('click',function(){
            OG$('#base_sidebar_container').removeClass('on');
        });
        OG$('#base_header_container .sidebar_button').off().on('click',function(){
            if(OG$('#base_sidebar_container').hasClass('on')){
                OG$('#base_sidebar_container').removeClass('on');
                OG$('#base_header_container').removeClass('off');
                OG$('#base_header_container .sidebar_button').removeClass('off');
            }else{
                OG$('#base_sidebar_container').addClass('on');
                OG$('#base_header_container').addClass('off').removeClass('on');
                OG$('#base_header_container .sidebar_button').addClass('off');

                OG$('#base_search_container').removeClass('on');
                OG$('#base_header_container .search_button').removeClass('off');
            }
        });

        OG$('#base_header_container .search_button').off().on('click',function(){
            var $this = OG$(this);
            if(OG$('#base_search_container').hasClass('on')){
                OG$('#base_search_container').removeClass('on');
                OG$('#base_header_container').removeClass('off');
                OG$('#base_header_container .search_button').removeClass('off');
            }else{
                OG$('#base_search_container').addClass('on');
                OG$('#base_header_container').addClass('off').removeClass('on');
                OG$('#base_header_container .search_button').addClass('off');

                OG$('#base_sidebar_container').removeClass('on');
                OG$('#base_header_container .sidebar_button').removeClass('off');
            }
        });

        var temp = '';
        OG$('#keyword').on('keypress, blur', OG_util.debounce(function (e) {
            temp = OG$('#keyword').val();
        }, 50));
        OG$('#keyword').on('focus', function (e) {
            OG$('#keyword').val(temp);
            temp = '';
        });
        OG$('#base_search_container .OG_delete_button').on('click',function(){
            OG$('#keyword').val('');
            temp = '';
        });

        /**
         * 접속한 페이지와 헤더 대메뉴가 일치할때 selected 클래스 추가
         */
        OG$('#base_header_container .menu_1li').each(function(){
            var $menu = OG$(this).children('a');
            if(OG_LOCATION_HREF.indexOf($menu.attr('href')) > -1){
                $menu.parent().addClass('selected');
            }
        });

        OG$('.menu_1li.sitemap').on('click',function(){
            let $e = OG$(this);
            if($e.hasClass('on')){
                $e.removeClass('on');
                OG$('.header_sitemap').removeClass('on');
                OG$('header').removeClass('open');
                OG_util.scrollEnabled();
                
                $('header').find('.menu_1li').removeClass('hover');
            }else{
                $e.addClass('on');
                OG$('.header_sitemap').addClass('on');
                OG$('header').addClass('open');
                OG_util.scrollDisabled();
                
                $('header').find('.menu_1li').removeClass('hover');
            }
        });

        OG$('.menu_1li.menu').on('click',function(){

            let $e = OG$(this);
            if($e.hasClass('on')){
                OG$('aside .btnClose').trigger('click');
            }else{
                $e.addClass('on');
                OG$('aside').addClass('on');
                OG_util.scrollDisabled();
                $('header').attr('data-header-change-text-color', '');
                $('header').attr('data-header-change-bg', '');
            }
            OG$('aside .btnClose').on('click',function(){
                OG$('aside').removeClass('on');
                OG$('.menu_1li.menu').removeClass('on');
                OG_util.scrollEnabled();
                $('header').attr('data-header-change-text-color', headerColorState);
                $('header').attr('data-header-change-bg', headerBgState);
            });
        });


        let func = function(){
            let getPathName = OG_LOCATION_PATHNAME;
            let cateNameList = [
                {
                    path : '/shopinfo/smart_pickup.html',
                    cateName : '스마트픽업'
                },
                {
                    path : '/shopinfo/nuderacer.html',
                    cateName : '누드레이서'
                },
                {
                    path : '/shopinfo/big_small.html',
                    cateName : 'CUSTOMIZE'
                },
                {
                    path : '/shopinfo/overnight_delivery.html',
                    cateName : '당일배송'
                },
            ];

            let chkCate = false;
            cateNameList.forEach(function(e, i){
                if(e.path == getPathName){
                    cateName = e.cateName;
                    chkCate = true;
                }
            });

            if(chkCate){
                $('.cate_num').find('.og_base_product .prdList [id^="anchorBoxId_"] .description .category_name').each(function(){
                    $(this).text(cateName);
                });
            }else{
                if($('.lookbook_append').find('.prdList').children().length > 0){
                    $('.lookbook_append').prepend('<h3>연관 상품</h3>')
                    $('.lookbook_append').find('.og_base_product .prdList [id^="anchorBoxId_"] .description .category_name').each(function(){
                        $(this).text('연관상품');
                    });
                }
            }

            //CAPP_ASYNC_METHODS.WishList.execute(); // 좋아요기능
            prdViewChk();
        }

        $('.cate_num').each(function () {
            let $this = OG$(this);
            let cateNum = OG_util.onlyNumbFunc($this.attr('data-cate'));
            var url = OGPrdDynamicCall.__OG_DEFAULT_VALUE_AJAX_URL[0];
            var moredata = {
                'count' : 200,
                'page' : 1,
                'cate_no' : cateNum,
                'OGmodule': "xans-product-listnormal",
                'sort_method' : 6,
                'idx' : 999,
            };

            let $prdList;
            if($('.lookbook_append').length == 0){
                $this.append('<div class="og_base_product ec-base-product"><div class="prdList grid4"></div></div>');
                $prdList = $this.find('.prdList');
            }else{
                $('.lookbook_append').append('<div class="og_base_product ec-base-product"><div class="prdList grid4"></div></div>');
                $prdList = $('.lookbook_append').find('.prdList');
            }

            let callPrd = function(func){
                OGPrdDynamicCall.displayMore(url, $prdList, moredata).then(function(resolve){
                    if(resolve !== 'end'){
                        moredata = {
                            'count' : 200,
                            'page' : Number(moredata['page']) + 1,
                            'cate_no' : cateNum,
                            'OGmodule': "xans-product-listnormal",
                            'sort_method' : 6,
                            'idx' : 999,
                        }
                        callPrd(func);
                    }else{
                        $prdList.find('[id^="anchorBoxId_"]').each(function(i,e){
                            let $e = OG$(e);
                            $e.removeClass('done');
                            OGPrdItemInfoCall.init($e);
                        });
                        func();
                    }
                });
            }
            callPrd(func);
        });
        func();


        $('.OG_DELV_FREE_STANDARD_VALUE').text(OG_util.comma(OG_DELV_FREE_STANDARD_VALUE));

        $('img[src*="ico_product_point.gif"]').attr('src', '/web/upload/icon_202301101440442900.png');



    },

    initLast : function(){





    },


    timerDisplay: function(el, displayChk, openTime, closeTime) {
        /**
         * timer별 display 제어
         */
        try {
            if (el == null) {
                throw 'element-error';
            } else {
                var openChk = String(Object.prototype.toString.call(openTime));
                var closeChk = String(Object.prototype.toString.call(closeTime));
                if (openChk !== '[object Date]') {
                    openTime = OG_TODAY_CHK;
                    openChk = false;
                }
                if (closeChk !== '[object Date]') {
                    closeChk = false;
                    closeTime = OG_TODAY_CHK;
                }
                if (closeChk == false && openChk == false) {//console.log('동작X');
                } else {
                    if (openTime > closeTime) {
                        //throw 'oepnTime-error';
                        if (OG_TODAY_CHK == openTime && OG_TODAY_CHK == closeTime) {
                            if (displayChk === false) {
                                el.style.display = '';
                                return true;
                            } else {
                                return true;
                            }
                        } else {
                            if (OG_TODAY_CHK >= openTime) {
                                if (displayChk === false) {
                                    el.style.display = '';
                                    return true;
                                } else {
                                    return true;
                                }
                            } else {
                                if (OG_TODAY_CHK >= closeTime && OG_TODAY_CHK < openTime) {
                                    if (displayChk) {
                                        el.style.display = 'none';
                                        //el.parentNode.removeChild(el);
                                        return false;
                                    } else {
                                        return false;
                                    }
                                } else {
                                    if (displayChk === false) {
                                        el.style.display = '';
                                        return true;
                                    } else {
                                        return true;
                                    }
                                }
                            }
                        }
                    } else {
                        if (OG_TODAY_CHK == openTime && OG_TODAY_CHK == closeTime) {
                            if (displayChk === false) {
                                el.style.display = '';
                                return true;
                            } else {
                                return true;
                            }
                        } else {
                            if (OG_TODAY_CHK < openTime || OG_TODAY_CHK >= closeTime) {
                                if (displayChk) {
                                    el.style.display = 'none';
                                    //el.parentNode.removeChild(el);
                                    return false;
                                } else {
                                    return false;
                                }
                            } else {
                                if (displayChk === false) {
                                    el.style.display = '';
                                    return true;
                                } else {
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        } catch (e) {
            if (e === 'element-error') {
                console.log('element를 찾을 수 없습니다.');
            } else {
                if (e === 'oepnTime-error') {
                    console.log('시작 시간에 오류가 있습니다. 시작 시간을 다시 확인해주세요.');
                }
                el.style.display = 'none';
            }
            return false;
        }
    },

    /**
     * 옵션 선택 영역 함수
     */
    totalProductsCustom : function(){
        /**
         * 추가된 옵션의 dash 제거 & 디자인 커스텀용 css 부여
         */
        switch (OG_DEVICE_CHK) {
            case 'pc':
                OG$('#totalProducts tbody tr[class*="product"]:not(.done) .quantity').addClass('og_quantity');
                OG$('#totalProducts tbody tr[class*="product"]:not(.done) .quantity').find('a:nth-of-type(1)').addClass('up');
                OG$('#totalProducts tbody tr[class*="product"]:not(.done) .quantity').find('a:nth-of-type(2)').addClass('down');
                OG$('#totalProducts tbody tr[class*="product"]:not(.done) .delete').wrap('<div class="og_button og_delete_button"></div>');
                OG_prdDetailFunc.optionRequiredChkFunc(); //필수옵션 체크되었는지 검증 함수 실행
                break;
            case 'mobile':
                OG$('#totalProducts tbody tr[class*="product"]:not(.done) input[type=number]').parent().addClass('og_quantity'); //수량 버튼 디자인 커스텀용 class 부여
                OG$('#totalProducts tbody tr[class*="product"]:not(.done) .center > a').wrap('<div class="og_button og_delete_button"></div>'); //삭제 버튼 디자인 커스텀용 class 부여
                OG$('.prdDetail_optionArea select').blur();
                OG_prdDetailFunc.optionRequiredChkFunc(); //필수옵션 체크되었는지 검증 함수 실행
                break;
            default:
                console.log('error');
                break;
        }
        /**
         * 추가된 옵션의 dash 제거 & 디자인 커스텀용 css 부여
         */
       OG$('#totalProducts tbody tr[class*="product"]:not(.done)').each(function () {
    var $tr = OG$(this);

    // 👉 기존 네 코드
    if ($tr.find('td:first-child p.product').html()) {
        var productTxt = $tr.find('td:first-child p.product').html().split('<br> - ');
        var productName = productTxt[0];
        var productOption = productTxt[1];
        var productOptionOnlyText = productOption.replace('<span>', '').replace('</span>', '');

        if (productOptionOnlyText.indexOf('(-') > -1) {
            productOptionOnlyText = productOptionOnlyText.split('(-')[0];
        }
        if (productOptionOnlyText.indexOf('(+') > -1) {
            productOptionOnlyText = productOptionOnlyText.split('(+')[0];
        }

        if (productOptionOnlyText == productName) {
            $tr.find('td:first-child p.product')
                .addClass('type1')
                .html(productName + '<span class="displaynone">' + productOptionOnlyText + '</span>');
        } else {
            $tr.find('td:first-child p.product')
                .addClass('type2')
                .html(productName + '<span>' + productOptionOnlyText + '</span>');
        }
    }

    // 👉 🔥 여기서부터 네가 추가할 코드 🔥
    var $priceTd = $tr.find('td.right');
    var $price = $priceTd.find('.ec-front-product-item-price');

    if ($price.length) {
        $tr.find('td:first-child p.product').append(
            '<span class="og_product_price">' + $price.text() + '</span>'
        );
        $priceTd.empty();
    }
});

        OG$('#totalProducts tbody tr[class*="product"]').addClass('done');

        if(typeof OG_prdDetailCustom !== 'undefined'){
            OG_prdDetailCustom.totalProductsCustom();
        }
    },
    totalPriceCustom : function(){


    },

    ajaxRequestAfter : function(){
        let $layers = OG$('.ec-base-layer, [class*="OG_"][class*="_layer"], .ec-base-tooltip, OG_base_tooptip');
        let chkXHR = window['oldURL'];
        let chkXHR2 = window['oldResponseText'];
        let $layerChk = null;
        let test2 = function(idx, el, arr){
            let $el = OG$(el);
            if( $el.find('*').filter($layers).length > 0 ){
                $layerChk = $el.find('*').filter($layers);
            }else{
                $.each(el.classList, function(i, e){
                    if( (e.indexOf('ec-base-layer') > -1) || (e.indexOf('OG_') > -1 && e.indexOf('_layer') > -1) || (e.indexOf('ec-base-tooltip') > -1) || (e.indexOf('OG_base_tooptip') > -1)){
                        $layerChk = $el;
                    }
                });
            }
            return $el;
        };
        if(chkXHR2.indexOf('<html>') > -1 && chkXHR2.indexOf('<head>') > -1){
            OG$(chkXHR2).filter(test2);
        };
        if($layerChk != null){
            try {
                setTimeout(function(){
                    layerLayoutModify();
                },650);
            } catch (err) {
                setTimeout(function(){
                    OG$ = window.OG$ = jQuery.noConflict(true);
                    layerLayoutModify();
                },650);
            };
            function layerLayoutModify(){
                let classChk = '.' + $layerChk.attr('class').trim().split(' ').join('.');
                if(typeof $layerChk.attr('id') !== 'undefined'){
                    classChk = '#' + $layerChk.attr('id') + classChk;
                }
                if(typeof OG$(topDocument).find(classChk).length !== 'undefined'){
                    $layerChk = OG$(topDocument).find(classChk);
                    if($layerChk.hasClass('on') == false){
                        $layerChk.addClass('on');
                        OG_util.makeDimmed(true,1,$layerChk);
                    };
                }
                OGmcustomScrollbar();
            };
        }else{
            setTimeout(OGmcustomScrollbar,650);
        }
    },

};


/** ========================================================================================================================================================
 *
 * 함수 실행 순서
 * 0) OG_util.js
 * 1) 개별 페이지 진입 시 함수 실행
 * 2) OG_common.js 진입 시 함수 실행
 * 3) OGreadyBefore
 * 4) OGready
 * 5) 개별 페이지 DOMContentLoaded
 * 6) OG_common.js DOMContentLoaded
 * 7) OGloadBefore
 * 8) OGload
 * 9) 개별페이지 load
 * 10) OG_common.js load
 */
/* 페이지 진입 시 실행 */
var scroll;
var scrollMoveTop;
var OG_LocomotiveScroll;
var OG_headerBgChangeFunc = function(){
    if(typeof $header.attr('data-theme') === 'undefined'){
        $header.attr('data-theme','transparent');
    }else{
        //$header.removeAttr('data-theme');
    }
    $header.css('opacity','1');
}
var OG_headerBgBackFunc = function(){
    if(typeof $header.attr('data-theme') !== 'undefined'){
        $header.removeAttr('data-theme');
    }
    $header.css('opacity','1');
}

OG$('body').on('OGreadyBefore',function(e){
    console.log('---------------------------------------- OGreadyBefore ------------------------------------- ');
    OG_commonBaseFunc.initBefore();
});

OG$('body').on('OGready',function(e){
    console.log('---------------------------------------- OGready ------------------------------------- ');
    OG_commonBaseFunc.init();
    OG_commonCustom.init();
});

window.addEventListener("DOMContentLoaded", function(event) {
    console.log('---------------------------------------- common.js - DOMContentLoaded ------------------------------------- ');
    headerBgChange();
    /*OG$('body #dalue_search_autocomplete_layer_0 .dalue_css_autocomplete_wrap').OG_observerFunc(function() {

        return false;
    }, {
        attributes: true,
        childList: true,
        subtree: true
    });*/

});


OG$('body').on('OGloadBefore',function(e){
    console.log('---------------------------------------- OGloadBefore ------------------------------------- ');
});

OG$('body').on('OGload',function(e){
    console.log('---------------------------------------- OGload ------------------------------------- ');
    OG_commonBaseFunc.initLast();

    if(OG_LOCATION_PARAMETERS.indexOf('&listpage=') > -1){
        let listPage = OG_LOCATION_HREF.split('&listpage=')[1];
        $('.ec-base-button').find('a:contains("목록")').attr('href',listPage);
        $('.ec-base-button').find('a:contains("취소")').attr('href',listPage);
        $('.ec-base-button').find('a:contains("목록")').attr('href',listPage);

        $('.ec-base-button').find('a:contains("답변")').attr('href',$('.ec-base-button').find('a:contains("답변")').attr('href') + '&listpage=' + listPage);
        $('.ec-base-button').find('a:contains("수정")').attr('href',$('.ec-base-button').find('a:contains("수정")').attr('href') + '&listpage=' + listPage);
    }
    if((OG_LOCATION_PATHNAME.indexOf('board') > -1) && (OG_LOCATION_PATHNAME.indexOf('list') > -1)){
        let listPageHref = (OG_LOCATION_PARAMETERS == '') ? OG_LOCATION_PATHNAME : OG_LOCATION_PATHNAME + '?' + OG_LOCATION_PARAMETERS;
        $('.xans-board-list a[href*="&listpage="]').each(function(){
            let $e = $(this);
            let href = $e.attr('href');
            href = href.split('&listpage=')[0];
            $e.attr('href',href + '&listpage=' + listPageHref)
        });
        //글쓰기
        let writeAddr = $('[class^="btn"]:contains("글쓰기")').attr('href');
        if(writeAddr.indexOf('&listpage') > -1){
            writeAddr = writeAddr.split('&listpage=')[0];
        }
        $('[class^="btn"]:contains("글쓰기")').attr('href', writeAddr + '&listpage=' + listPageHref);
    }



    if($('[onclick*="MemberAction"]').length == 0){
        (function() {
            var oldXHR = window.XMLHttpRequest;
            function newXHR() {
                var realXHR = new oldXHR();
                realXHR.addEventListener("readystatechange", function() {
                    if (realXHR.readyState == 4 && realXHR.status == 200) {
                        var chkXHR = realXHR.responseURL;
                        window['oldURL'] = chkXHR;
                        window['oldResponseText'] = realXHR.responseText;
                        let OG_WINDOW_AJAX_REQUEST = new CustomEvent('OGajaxRequestAfter');
                        document.body.dispatchEvent(OG_WINDOW_AJAX_REQUEST);
                    };
                }, false);
                return realXHR;
            };
            window.XMLHttpRequest = newXHR;
        })();
    }
});


window.addEventListener("load", function(event) {
    console.log('---------------------------------------- common.js - window load ------------------------------------- ');

    // 임시 주석
    // OG_commonBaseFunc.init();

    setTimeout(function(){
        $('#searchBarForm .xans-layout-searchheader').append($('#dalue_search_recentQuery_layer_0'));
        $('#searchBarForm .xans-layout-searchheader').append($('#dalue_search_autocomplete_layer_0'));

        $('#query').focus();
        $('#query').focus();
        $('.eSearch').on('click',function(){
            OG$('header .header_mypage .menu_1li.sitemap').removeClass('on');
            OG$('.header_sitemap').removeClass('on');
            OG$('header').removeClass('open');
            $('#query').focus();
            if(OG_responsiveChk == 'mobile'){
                OG_util.scrollDisabled();
                $('#searchBarForm .xans-layout-searchheader .btnClose').on('click', function(){
                    OG_util.scrollEnabled();
                })
            }else{
                OG_util.scrollEnabled();
            }
            $('#dalue_search_recentQuery_layer_0 .dalue_css_autocomplete_item').each(function(){
                let $e = $(this);
                $e.children().remove();
                let text = $e.text().replaceAll('&nbsp;','').trim();
                $e.html(text);
            });
            if($('#dalue_search_recentQuery_layer_0 .dalue_css_autocomplete_wrap .dalue_css_autocomplete_header:nth-child(5)').find('.time').length == 0){
                OG_util.getServerTime().then(function(r){
                    let time = r[1]+ '-' + r[2] + '-' + r[3] + ' ' + r[4]+ ':' + r[5]+ ':' + r[6];
                    $('#dalue_search_recentQuery_layer_0 .dalue_css_autocomplete_wrap .dalue_css_autocomplete_header:nth-child(5)').append('<p class="time">'+ time +'</p>');
                });
            }else{
                OG_util.getServerTime().then(function(r){
                    let time = r[1]+ '-' + r[2] + '-' + r[3] + ' ' + r[4]+ ':' + r[5]+ ':' + r[6];
                    $('#dalue_search_recentQuery_layer_0 .dalue_css_autocomplete_wrap .dalue_css_autocomplete_header:nth-child(5) p').text(time);
                });
            }

            $('#query').focus(function(){
                OG_util.getServerTime().then(function(r){
                    let time = r[1]+ '-' + r[2] + '-' + r[3] + ' ' + r[4]+ ':' + r[5]+ ':' + r[6];
                    $('#dalue_search_recentQuery_layer_0 .dalue_css_autocomplete_wrap .dalue_css_autocomplete_header:nth-child(5) p').text(time);
                });
            });
        });
    },500);


});
OG$('body').on('OGVisible',function(e){
    //console.log('---------------------------------------- 보임 ------------------------------------- ');
});
OG$('body').on('OGNotvisible',function(e){
    //console.log('---------------------------------------- 안보임 ------------------------------------- ');
});
OG$('body').on('OGbeforeunload',function(e){
    //console.log('---------------------------------------- 떠나는중 ------------------------------------- ');
    OG$('.header_sitemap').removeClass('on');
    OG$('body').removeClass('done');

    setTimeout(function(){
        OG$('body').addClass('done');
    },5000);
});
OG$('body').on('OGunload',function(e){
    //console.log('---------------------------------------- 떠남 ------------------------------------- ');
});
OG$('body').on('OGScroll',function(e){
    //console.log('---------------------------------------- 스크롤중 ------------------------------------- ');
    OGBaseScroll.execute();
    headerBgChange();
    let st = e.originalEvent.detail.st;
    if(st <= 0){
        OG$('header').removeClass('fixed');
        $('.renewal-header').removeClass('active-on');
        $('html').removeClass('noscroll');
    }else{
        OG$('header').addClass('fixed');
        $('.renewal-header').addClass('active-on');
        
    }
});

OG$('body').on('OGMenuCall', function(){

    let $aside = OG$('aside');
    $aside.find('.submenu > a').append('<div class="arrow"></div>');
    $aside.find('.submenu > a').each(function(){
        let $e = OG$(this);
        $e.attr('data-href', $e.attr('href')).attr('href','javascript:void(0);');
    });
    $aside.find('.submenu > a').on('click',function(e){
        window.location.href = $(this).attr('data-href');
    });


    $aside.find('li[class*="menu"] .arrow').off().on('click',function(event){
        //상위전파 막기
        if (event.stopPropagation) event.stopPropagation();
        else event.cancelBubble = true; // IE 대응
        var $clickMenu = OG$(this).closest('li');
        if($clickMenu.hasClass('fixed') == false) {
            if ($clickMenu.children('ul[class*="menu"]').hasClass('on')) {
                $clickMenu.removeClass('on');
                $clickMenu.children('ul[class*="menu"]').hide();
                $clickMenu.children('ul[class*="menu"]').removeClass('on');
            } else {
                $clickMenu.addClass('on');
                $clickMenu.siblings().removeClass('on').find('li[class*="menu"]').removeClass('on');
                $clickMenu.children('ul[class*="menu"]').fadeIn();
                $clickMenu.children('ul[class*="menu"]').addClass('on');
                $clickMenu.siblings().find('ul[class*="menu"]').hide();
                $clickMenu.siblings().find('ul[class*="menu"]').removeClass('on');
            }
            ;
        }
    });


    if(OG_MEMBER_CHECK == false){
        $('[data-cate="257"]').hide();
        $('[data-cate="259"]').hide();
        OG$('body').addClass('done');
    }


})

let observePrdImage = function(){
    OG_util.IntersectionObserver('.ec-base-prdInfo .prdBox .thumbnail img',{
        root: null,
        rootMargin:  '0px 0px 0px 0px',
        threshold: [0]
    }, function(a, b, c){
        if(a.isIntersecting){
            let $e = $(a.target);
            let productNo = OG_util.getParameterByName($e.closest('a').attr('href'),'product_no');
            if($e.attr('src').indexOf('tiny') == -1){
                $e.addClass('done');
            }else{
                if($e.hasClass('done') == false){
                    $.ajax({
                        type: "GET",
                        url:"/ogam/html/ajax/prddetail.html?product_no=" + productNo,
                        dataType:"html",
                        success : function(html){
                            $e.attr('src', $(html).find('#prdDetailImg img').attr('src'));
                            if(productNo == '2732'){
                                //$e.closest('.ec-base-prdInfo').find('a').attr('href', '/shoplus/membership/src/membership_detail.html?product_no=2732');
                                if($e.closest('.ec-base-prdInfo').find('[title="배송주기"]').length > 0){
                                    $e.closest('.ec-base-prdInfo').find('[title="배송주기"]').html($e.closest('.ec-base-prdInfo').find('[title="배송주기"]').html().replace('배송주기', '갱신주기'));
                                }
                                if($e.closest('.ec-base-prdInfo').find('.description .info li:contains("배송주기")').length > 0){
                                    //$e.closest('.ec-base-prdInfo').find('.description .info li:contains("개별배송")').addClass('displaynone');
                                    $e.closest('.ec-base-prdInfo').find('.description .info li:contains("배송주기")').html($e.closest('.ec-base-prdInfo').find('.description .info li:contains("배송주기")').html().replace('배송주기', '자동갱신'));
                                }
                                if($e.parents('#contents').find('#btn_payment span:contains("정기배송")').length > 0){
                                    $e.parents('#contents').find('#btn_payment span:contains("정기배송")').html($e.parents('#contents').find('#btn_payment span:contains("정기배송")').html().replace('정기배송', '자동갱신'));
                                }
                            }


                            let executivesMember = ($(html).find('.og_basic_prd_info .prdDetail_info[data-title*="임직원상품"]').length > 0) ? $(html).find('.og_basic_prd_info .prdDetail_info[data-title*="임직원상품"] .desc').text() : '';
                            if(executivesMember == 'y'){ executivesMember = 'prd_executives' }
                            else if(executivesMember == 'n'){ executivesMember = 'prd_not_executives'}
                            else{executivesMember = ''}

                            let eliteMember = ($(html).find('.og_basic_prd_info .prdDetail_info[data-title*="선수 상품"]').length > 0) ? $(html).find('.og_basic_prd_info .prdDetail_info[data-title*="선수 상품"] .desc').text() : '';
                            if(eliteMember == 'y'){ eliteMember = 'prd_elite' }
                            else if(eliteMember == 'n'){ eliteMember = 'prd_not_elite'}
                            else{eliteMember = ''}

                            $e.closest('.ec-base-prdInfo').addClass(executivesMember + ' ' + eliteMember);

                            $e.addClass('done');
                        },
                    });
                }
            }

        }
    });
}




OG$('html').on('click', '[onCLick*="DalueSearch.removeJsonCookie"]' ,function(){
    setTimeout(function(){
        OG$('#query').focus();
    },0);
});

OG$('body').on('OGMemberCall',function(){

    OG$('html').find('header .header_sitemap .menu_2li > a').on('click',function(){
        if($(this).attr('href').indexOf('#') > -1){
            setTimeout(function(){
                location.reload();
            },500);
        }
    });

    $('.ec-base-prdInfo .prdBox .thumbnail img').each(function(){
        let $e = $(this);
        let productNo = OG_util.getParameterByName($e.closest('a').attr('href'),'product_no');
        if($e.attr('src').indexOf('tiny') == -1){
            $e.addClass('done');
        }else{
            if($e.hasClass('done') == false){
                $.ajax({
                    type: "GET",
                    url:"/ogam/html/ajax/prddetail.html?product_no=" + productNo,
                    dataType:"html",
                    success : function(html){
                        $e.attr('src', $(html).find('#prdDetailImg img').attr('src'));
                        if(productNo == '2732'){
                            //$e.closest('.ec-base-prdInfo').find('a').attr('href', '/shoplus/membership/src/membership_detail.html?product_no=2732');
                            if($e.closest('.ec-base-prdInfo').find('[title="배송주기"]').length > 0){
                                $e.closest('.ec-base-prdInfo').find('[title="배송주기"]').html($e.closest('.ec-base-prdInfo').find('[title="배송주기"]').html().replace('배송주기', '갱신주기'));
                            }
                            if($e.closest('.ec-base-prdInfo').find('.description .info li:contains("배송주기")').length > 0){
                                //$e.closest('.ec-base-prdInfo').find('.description .info li:contains("개별배송")').addClass('displaynone');
                                $e.closest('.ec-base-prdInfo').find('.description .info li:contains("배송주기")').html($e.closest('.ec-base-prdInfo').find('.description .info li:contains("배송주기")').html().replace('배송주기', '자동갱신'));
                            }
                            if($e.parents('#contents').find('#btn_payment span:contains("정기배송")').length > 0){
                                $e.parents('#contents').find('#btn_payment span:contains("정기배송")').html($e.parents('#contents').find('#btn_payment span:contains("정기배송")').html().replace('정기배송', '자동갱신'));
                            }
                        }

                        let executivesMember = ($(html).find('.og_basic_prd_info .prdDetail_info[data-title*="임직원상품"]').length > 0) ? $(html).find('.og_basic_prd_info .prdDetail_info[data-title*="임직원상품"] .desc').text() : '';
                        if(executivesMember == 'y'){ executivesMember = 'prd_executives' }
                        else if(executivesMember == 'n'){ executivesMember = 'prd_not_executives'}
                        else{executivesMember = ''}

                        let eliteMember = ($(html).find('.og_basic_prd_info .prdDetail_info[data-title*="선수 상품"]').length > 0) ? $(html).find('.og_basic_prd_info .prdDetail_info[data-title*="선수 상품"] .desc').text() : '';
                        if(eliteMember == 'y'){ eliteMember = 'prd_elite' }
                        else if(eliteMember == 'n'){ eliteMember = 'prd_not_elite'}
                        else{eliteMember = ''}

                        $e.closest('.ec-base-prdInfo').addClass(executivesMember + ' ' + eliteMember);

                        prdViewChk();
                        $e.addClass('done');
                    },
                });
            }
        }
    })

    prdViewChk();
    resizeGnbLi();

    function syncSitemapActiveByCate(cate) {
    const $scope = $('.header_dim');
    if (!$scope.length) return;

    // 기존 active 제거
    $scope.find('.menu_1ul.list .menu_1li > a.active').removeClass('active');

    // 같은 cate 가진 sitemap 1deps a에 active
    $scope
        .find('.menu_1ul.list .menu_1li[data-cate="' + cate + '"] > a')
        .addClass('active');
}

$('header .header_mypage .menu_1ul .menu_1li').mouseenter(function (e) {
    $(".renewal-header").addClass('active-on')
    
})



$('header .header_navi .menu_1li').mouseenter(function (e) {

    const cate = $(this).data('cate'); // 🔥 핵심
    $(".renewal-header").addClass('active-on')
    

    if ($('.header_sitemap').hasClass('on') == false) {
        resizeGnbLi();
        $('header').addClass('open');
        $(this).addClass('hover');
        $(this).siblings().removeClass('hover');

        // 🔥 sitemap 1deps active 동기화
        syncSitemapActiveByCate(cate);

        if ($(this).children('ul').children('li').length == 0) {

        } else {
            $('.menu_1li.sitemap').addClass('on');
            $('.header_sitemap').addClass('on');
        }
    } else {
        $(this).addClass('hover');
        $(this).siblings().removeClass('hover');

        // 🔥 sitemap 1deps active 동기화
        syncSitemapActiveByCate(cate);
    }
});

$('header').mouseleave(function (e) {
$(".renewal-header").removeClass('active-on')
$('html').removeClass('noscroll');
    // sitemap active 해제
    
    $('.header_dim')
        .find('.menu_1ul.list .menu_1li > a.active')
        .removeClass('active');

    if ($('.header_sitemap').hasClass('on') == false) {
        $('header').removeClass('open');
        $('header').find('.menu_1li').removeClass('hover');
    } else {
        $('.menu_1li.sitemap').removeClass('on');
        $('.header_sitemap').removeClass('on');
        $('header').find('.menu_1li').removeClass('hover');
    }
});


    if(OG_MEMBER_CHECK){
        OG$('body').addClass('done');
    }
    headerColorState = OG$('header').attr('data-header-change-text-color');
    headerBgState = OG$('header').attr('data-header-change-bg');
})

function resizeGnbLi(){
    $('header .header_navi .menu_1li .menu_2ul').each(function(){
        $(this).css('width','').removeClass('full');
        let $e = $(this),
            ulWidth = $e.outerWidth(),
            headernaviWidth = $('header .header_navi').outerWidth();
        if(ulWidth >= headernaviWidth - 10){
            $e.css('width', '100%').addClass('full');
        }else{
            $e.css('width', $('header .header_navi').outerWidth() + 'px');
        }
    })
}


// var wishListIconChk = setTimeout(function(){CAPP_ASYNC_METHODS.WishList.execute();},400);
var prdViewChkFlag = false;
var prdViewChkFunc;

function prdViewChk(){

    if(OG_MEMBER_CHECK){
        if(OG_MEMBER_ID !== null){
            testCheckFunc();
        }
    }else{
        testCheckFunc();
    }

    function testCheckFunc(){

        let executivesMember = (OG_MEMBER_GROUPNAME == '임직원') ? true : false;
        let eliteMember = (OG_MEMBER_GROUPNAME == 'ELITE') ? true : false;
        let managerMember = (OG_MEMBER_GROUPNAME == '관리자') ? true : false;

        if(! managerMember){
            if(executivesMember){
                switch (OG_PAGE_CHK){
                    case 'PRODUCT_DETAIL' :
                        if ($('.og_sub_container.prd_not_executives').length > 0) {
                            alert('접근 불가한 상품입니다.');
                            window.location.href = '/';
                        }
                        break;
                    case 'ORDER_BASKET' :
                        $('.prd_not_executives').each(function(){
                            let $e= $(this),
                                index = OG_util.onlyNumbFunc($e.find('[id^="basket_chk_id"]').attr('id'));
                            var aData = [];
                            var iProdNo = aBasketProductData[index].product_no;
                            var sOptId = aBasketProductData[index].opt_id;
                            var sProductType = aBasketProductData[index].product_type;
                            var sIsSetProduct = aBasketProductData[index].is_set_product;
                            var iBasketPrdNo = aBasketProductData[index].basket_prd_no;
                            var iCustomDataIdx = aBasketProductData[index].custom_data_idx;
                            var sKey = iProdNo + ':' + sOptId + ':' + sIsSetProduct + ':' + iBasketPrdNo + ':' + iCustomDataIdx;
                            aData.push(sKey);
                            Basket._callBasketAjax({
                                command: 'select_delete',
                                checked_product: aData.join(','),
                                delvtype: sProductType
                            });
                        });
                        break;
                    case 'PRODUCT_LIST' :
                        $('.prd_not_executives').remove();
                        if($('.prd_executives:not(.og_group_done)').length < 4){
                            setTimeout(function(){
                                // Uncaught ReferenceError: OGprdCallChk is not defined 오류 나서 주석 처리
                                // OGprdCallChk (true);
                            },100);
                        }
                        $('.og_base_product .prdList [id^="anchorBoxId_"]').addClass('og_group_done');
                        break;
                    default :
                        $('.prd_not_executives').remove();
                        $('.og_base_product .prdList [id^="anchorBoxId_"]').addClass('og_group_done');
                        break;
                }
            }else{
                $('[data-cate="257"]').hide();
                $('[data-cate="259"]').hide();


                if(eliteMember){
                    switch (OG_PAGE_CHK){
                        case 'PRODUCT_DETAIL' :
                            if ($('.og_sub_container.prd_executives:not(.prd_elite)').length > 0) {
                                alert('접근 불가한 상품입니다.');
                                window.location.href = '/';
                            }
                            break;
                        case 'ORDER_BASKET' :
                            $('.prd_executives:not(.prd_elite)').each(function(){
                                let $e= $(this),
                                    index = OG_util.onlyNumbFunc($e.find('[id^="basket_chk_id"]').attr('id'));
                                var aData = [];
                                var iProdNo = aBasketProductData[index].product_no;
                                var sOptId = aBasketProductData[index].opt_id;
                                var sProductType = aBasketProductData[index].product_type;
                                var sIsSetProduct = aBasketProductData[index].is_set_product;
                                var iBasketPrdNo = aBasketProductData[index].basket_prd_no;
                                var iCustomDataIdx = aBasketProductData[index].custom_data_idx;
                                var sKey = iProdNo + ':' + sOptId + ':' + sIsSetProduct + ':' + iBasketPrdNo + ':' + iCustomDataIdx;
                                aData.push(sKey);
                                Basket._callBasketAjax({
                                    command: 'select_delete',
                                    checked_product: aData.join(','),
                                    delvtype: sProductType
                                });
                            });
                            break;
                        case 'PRODUCT_LIST' :
                            $('.prd_executives:not(.prd_elite)').remove();
                            if($('.prd_not_executives:not(.prd_elite):not(.og_group_done)').length < 4){
                                setTimeout(function(){
                                    // OGprdCallChk (true);
                                },100);
                            }
                            $('.og_base_product .prdList [id^="anchorBoxId_"]').addClass('og_group_done');
                            
                            break;
                        default :
                            $('.prd_executives:not(.prd_elite)').remove();
                            $('.og_base_product .prdList [id^="anchorBoxId_"]').addClass('og_group_done');
                            break;
                    }

                }else{
                    switch (OG_PAGE_CHK){
                        case 'PRODUCT_DETAIL' :
                            if ($('.og_sub_container.prd_executives').length > 0) {
                                alert('접근 불가한 상품입니다.');
                                window.location.href = '/';
                            }
                            break;
                        case 'ORDER_BASKET' :
                            $('.prd_executives').each(function(){
                                let $e= $(this),
                                    index = OG_util.onlyNumbFunc($e.find('[id^="basket_chk_id"]').attr('id'));
                                var aData = [];
                                var iProdNo = aBasketProductData[index].product_no;
                                var sOptId = aBasketProductData[index].opt_id;
                                var sProductType = aBasketProductData[index].product_type;
                                var sIsSetProduct = aBasketProductData[index].is_set_product;
                                var iBasketPrdNo = aBasketProductData[index].basket_prd_no;
                                var iCustomDataIdx = aBasketProductData[index].custom_data_idx;
                                var sKey = iProdNo + ':' + sOptId + ':' + sIsSetProduct + ':' + iBasketPrdNo + ':' + iCustomDataIdx;
                                aData.push(sKey);
                                Basket._callBasketAjax({
                                    command: 'select_delete',
                                    checked_product: aData.join(','),
                                    delvtype: sProductType
                                });
                            });
                            break;
                        case 'PRODUCT_LIST' :
                            $('.prd_executives').remove();
                            if($('.prd_not_executives:not(.og_group_done)').length < 4){
                                setTimeout(function(){
                                    // OGprdCallChk (true);
                                },100);
                            }
                            $('.og_base_product .prdList [id^="anchorBoxId_"]').addClass('og_group_done');
                            
                            break;
                        default :
                            $('.prd_executives').remove();
                            $('.og_base_product .prdList [id^="anchorBoxId_"]').addClass('og_group_done');
                            break;
                    }
                }
            }


            if(eliteMember){
                switch (OG_PAGE_CHK){
                    case 'PRODUCT_DETAIL' :
                        if ($('.og_sub_container.prd_not_elite').length > 0) {
                            alert('접근 불가한 상품입니다.');
                            window.location.href = '/';
                        }
                        break;
                    case 'ORDER_BASKET' :
                        $('.prd_not_elite').each(function(){
                            let $e= $(this),
                                index = OG_util.onlyNumbFunc($e.find('[id^="basket_chk_id"]').attr('id'));
                            var aData = [];
                            var iProdNo = aBasketProductData[index].product_no;
                            var sOptId = aBasketProductData[index].opt_id;
                            var sProductType = aBasketProductData[index].product_type;
                            var sIsSetProduct = aBasketProductData[index].is_set_product;
                            var iBasketPrdNo = aBasketProductData[index].basket_prd_no;
                            var iCustomDataIdx = aBasketProductData[index].custom_data_idx;
                            var sKey = iProdNo + ':' + sOptId + ':' + sIsSetProduct + ':' + iBasketPrdNo + ':' + iCustomDataIdx;
                            aData.push(sKey);
                            Basket._callBasketAjax({
                                command: 'select_delete',
                                checked_product: aData.join(','),
                                delvtype: sProductType
                            });
                        });
                        break;
                    case 'PRODUCT_LIST' :
                        $('.prd_not_elite').remove();
                        if($('.prd_elite:not(.og_group_done)').length < 4){
                            setTimeout(function(){
                                // OGprdCallChk (true);
                            },100);
                        }
                        $('.og_base_product .prdList [id^="anchorBoxId_"]').addClass('og_group_done');
                        
                        break;
                    default :
                        $('.prd_not_elite').remove();
                        $('.og_base_product .prdList [id^="anchorBoxId_"]').addClass('og_group_done');
                        break;
                }
            }else{

                if(executivesMember){
                    switch (OG_PAGE_CHK){
                        case 'PRODUCT_DETAIL' :
                            if ($('.og_sub_container.prd_elite:not(.prd_executives)').length > 0) {
                                alert('접근 불가한 상품입니다.');
                                window.location.href = '/';
                            }
                            break;
                        case 'ORDER_BASKET' :
                            $('.prd_elite:not(.prd_executives)').each(function(){
                                let $e= $(this),
                                    index = OG_util.onlyNumbFunc($e.find('[id^="basket_chk_id"]').attr('id'));
                                var aData = [];
                                var iProdNo = aBasketProductData[index].product_no;
                                var sOptId = aBasketProductData[index].opt_id;
                                var sProductType = aBasketProductData[index].product_type;
                                var sIsSetProduct = aBasketProductData[index].is_set_product;
                                var iBasketPrdNo = aBasketProductData[index].basket_prd_no;
                                var iCustomDataIdx = aBasketProductData[index].custom_data_idx;
                                var sKey = iProdNo + ':' + sOptId + ':' + sIsSetProduct + ':' + iBasketPrdNo + ':' + iCustomDataIdx;
                                aData.push(sKey);
                                Basket._callBasketAjax({
                                    command: 'select_delete',
                                    checked_product: aData.join(','),
                                    delvtype: sProductType
                                });
                            });
                            break;
                        case 'PRODUCT_LIST' :
                            $('.prd_elite:not(.prd_executives)').remove();
                            if($('.prd_not_elite:not(.og_group_done)').length < 4){
                                setTimeout(function(){
                                    // OGprdCallChk (true);
                                },100);
                            }
                            $('.og_base_product .prdList [id^="anchorBoxId_"]').addClass('og_group_done');
                            
                            break;
                        default :
                            $('.prd_elite:not(.prd_executives)').remove();
                            $('.og_base_product .prdList [id^="anchorBoxId_"]').addClass('og_group_done');
                            break;
                    }
                }else{
                    switch (OG_PAGE_CHK){
                        case 'PRODUCT_DETAIL' :
                            if ($('.og_sub_container.prd_elite').length > 0) {
                                alert('접근 불가한 상품입니다.');
                                window.location.href = '/';
                            }
                            break;
                        case 'ORDER_BASKET' :
                            $('.prd_elite').each(function(){
                                let $e= $(this),
                                    index = OG_util.onlyNumbFunc($e.find('[id^="basket_chk_id"]').attr('id'));
                                var aData = [];
                                var iProdNo = aBasketProductData[index].product_no;
                                var sOptId = aBasketProductData[index].opt_id;
                                var sProductType = aBasketProductData[index].product_type;
                                var sIsSetProduct = aBasketProductData[index].is_set_product;
                                var iBasketPrdNo = aBasketProductData[index].basket_prd_no;
                                var iCustomDataIdx = aBasketProductData[index].custom_data_idx;
                                var sKey = iProdNo + ':' + sOptId + ':' + sIsSetProduct + ':' + iBasketPrdNo + ':' + iCustomDataIdx;
                                aData.push(sKey);
                                Basket._callBasketAjax({
                                    command: 'select_delete',
                                    checked_product: aData.join(','),
                                    delvtype: sProductType
                                });
                            });
                            break;
                        case 'PRODUCT_LIST' :
                            $('.prd_elite').remove();
                            if($('.prd_not_elite:not(.og_group_done)').length < 4){
                                setTimeout(function(){
                                    // OGprdCallChk (true);
                                },100);
                            }
                            $('.og_base_product .prdList [id^="anchorBoxId_"]').addClass('og_group_done');
                            
                            break;
                        default :
                            $('.prd_elite').remove();
                            $('.og_base_product .prdList [id^="anchorBoxId_"]').addClass('og_group_done');
                            break;
                    }
                }



            }



        }else{
            switch (OG_PAGE_CHK){
                case 'PRODUCT_LIST' :
                    $('.og_base_product .prdList [id^="anchorBoxId_"]').addClass('og_group_done');
                    break;
                default :
                    break;
            }
        }
        



        // clearTimeout(wishListIconChk);
        // wishListIconChk = setTimeout(function(){CAPP_ASYNC_METHODS.WishList.execute();},400);
    }
}




var headerBgChange = function(){
    let $header = OG$('header'),
        $mainVisual = OG$('[class*="og_main_visual"]').filter(':visible');
    if($mainVisual.length > 0){
        let headerPosition = $header[0].getBoundingClientRect(),
            mainVisualPosition = $mainVisual[0].getBoundingClientRect();
        if(Math.abs(mainVisualPosition.y) > Math.abs(mainVisualPosition.height)){
            //console.log('지나갔습니다');
            $header.attr('data-header-change-text-color','');
            $header.attr('data-header-change-bg','');
        }else{
            //console.log('안지나갔습니다');
            $header.attr('data-header-change-bg','transparent');
            $mainVisual.find('[data-header-change-text-trigger-color]').each(function(){
                let $slide = OG$(this);
                if($slide.hasClass('swiper-slide')){
                    if($slide.hasClass('swiper-slide-active')){
                        if($slide.attr('data-header-change-text-trigger-color') == 'black'){
                            $header.attr('data-header-change-text-color','white');
                        }else{
                            $header.attr('data-header-change-text-color','');
                        }
                    }
                }else{
                    $slide = $slide.eq(0);
                    if($slide.attr('data-header-change-text-trigger-color') == 'black'){
                        $header.attr('data-header-change-text-color','white');
                    }else{
                        $header.attr('data-header-change-text-color','');
                    }
                }
            });
        }
    }
};

let resChk = false;
OG$('body').on('OGResponsive',function(e){
    if(resChk == false){
        if(OG_responsiveChk !== 'pc'){

        }
        OG$('#footer .inner .footer_left .company_name').on('click',function(e){
            console.log('footer-click');
            let $e = OG$(this);
            if($e.hasClass('on')){
                $e.next().slideUp();
                $e.removeClass('on');
            }else{
                $e.next().slideDown();
                $e.addClass('on');
            }
        });
        // let flag = (window.innerWidth < 1366) ? 'a' : 'b';
        // let flag_chk;
        // let flag_start = 0;
        // //if(OG_LOCATION_PATHNAME.indexOf('/search.html') == -1){
        // OG$(window).resize(function(){
        //     flag_chk = (window.innerWidth < 1366) ? 'a' : 'b';
        //     if(flag !== flag_chk && flag_start == 0){
        //         flag_start ++;
        //         location.reload();
        //     }
        // });
        //}
        resChk = true;
    }
});

function OGFindColorChipLuma (hexColor) {
    const c = hexColor.substring(1)                     // 색상 앞의 # 제거
    const rgb = parseInt(c, 16)                         // rrggbb를 10진수로 변환
    const r = (rgb >> 16) & 0xff              // red 추출
    const g = (rgb >> 8) & 0xff               // green 추출
    const b = (rgb >> 0) & 0xff               // blue 추출
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b   // per ITU-R BT.709
    // 색상 선택
    return luma > 230 ? "white" : "black"
}

OG$('.btn_top').click(function () {
    OG$('html, body').animate({scrollTop:0},400);
    return false;
})

// 모든 img태그에 lazy load 적용
var images = document.querySelectorAll('img');
if (images.length > 0) {

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('loading', 'lazy');
    }
}