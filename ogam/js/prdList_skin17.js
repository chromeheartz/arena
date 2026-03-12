OG$(".prd_og_main_visual [data-ogcate-type]").on("OGMenuCall", function() {
    /*if(OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE_PARENT_CATE == 1){
        OG$('.og_parent_cate_name a').text(OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE_NAME).attr('href','/prdoudct/list.html?cate_no='+ OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE);
    }else{
        OG$('.og_parent_cate_name a').text(OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE_PARENT_NAME).attr('href','/prdoudct/list.html?cate_no='+ OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE_PARENT_CATE);
    }*/
    if(OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE_NAME !== null){
        OG$('.og_sub_container .prdList .category_name').text(OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE_NAME);
    }
});

OG$('body').on('OGResponsive',function(e){
    switch (OG_responsiveChk){
        case "pc":
            OG$('.og_base_product .prdList:not(.swiper-wrapper)').removeClass('grid2 grid3').addClass('grid4');
            break;
        case "tablet" :
            //OG$('.og_base_product .prdList:not(.swiper-wrapper)').removeClass('grid4 grid2').addClass('grid3');
            OG$('.og_base_product .prdList:not(.swiper-wrapper)').removeClass('grid4 grid3').addClass('grid2');
            break;
        case "mobile" :
            OG$('.og_base_product .prdList:not(.swiper-wrapper)').removeClass('grid4 grid3').addClass('grid2');
            break;
    }
});

if(OG_DEVICE_CHK == 'mobile'){

    OG$('#contents .prd_og_main_visual .img_box img').each(function(){
        let $e = OG$(this);
        if($e.attr('src').indexOf('/category/mobile') == -1){
            $e.remove();
        }
    });

}



OG$('#ec-product-searchdata-form .toggleArea .title:contains("컬러")').parent().addClass('colorChips');
OG$('#ec-product-searchdata-form .toggleArea .title:contains("컬러")').parent().find('.contents').find('button').each(function(){
    let $e = $(this);
    let text = $e.text();
    $e.parent().attr('data-curation-colorchip', text);
});


if(OG$('.og_sub_container .xans-product-searchdata.typePopup .searchCondition').attr('id') == ''){
    OG$('.og_sub_container .xans-product-searchdata.typePopup').addClass('displaynone');
    OG$('.og_curation_button').on('click',function(){
        alert('선택 가능한 필터가 없습니다.');
        return false;
    });
}
OG$('.og_curation_button').on('click',function(){
    let $curation = OG$('.og_sub_container .xans-product-searchdata.typePopup'),
        $e = OG$(this);

    if($e.hasClass('on')){
        $e.removeClass('on');
        $curation.hide();
        if(OG_responsiveChk !== 'pc') {
            OG_util.scrollEnabled();
        }
    }else{
        $e.addClass('on');
        $curation.show();
        if(OG_responsiveChk !== 'pc') {
            OG_util.scrollEnabled();
        }
    }
});


//무한 스크롤
function newXHR() {
    var realXHR = new oldXHR();
    realXHR.addEventListener("readystatechange", function() {
        if (realXHR.readyState == 4 && realXHR.status == 200) {
            setTimeout(function() {
                let $prdList = OG$('.og_base_product .prdList');
                $prdList.find('[id^="anchorBoxId_"]').each(function(i,e){
                    let $e = OG$(e);
                    OGPrdItemInfoCall.init($e);
                });
                //CAPP_ASYNC_METHODS.WishList.execute();
                if(OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE_NAME !== null){
                    OG$('.og_sub_container .prdList .category_name').text(OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE_NAME);
                }
            }, 50);
        }
    }, false);
    return realXHR;
}
var oldXHR = window.XMLHttpRequest;
window.XMLHttpRequest = newXHR;
OG$(window).scroll(function() {
    var winTop = $(window).scrollTop();
    var ftScroll = $('footer').offset().top - $(window).outerHeight() - $('footer').outerHeight();
    var currentPage = Number($('#more_current_page').text());
    var totalPage = Number($('#more_total_page').text());
    if (currentPage <= totalPage && winTop > ftScroll) {
        $('.xans-product-listmore > a').trigger('click');
        window.XMLHttpRequest = newXHR;
        CAPP_ASYNC_METHODS.WishList.execute();
    }else{
        $('.xans-product-listmore').addClass('displaynone');
    }
});


//큐레이션 클릭 제어
OG$('#ec-product-searchdata-form .toggleArea input, #ec-product-searchdata-form .toggleArea label, #ec-product-searchdata-form .toggleArea button').addClass('no_click');
OG$('#ec-product-searchdata-form .toggleArea .contents ul > li').on('click', function(){
    //컬러칩
    if(OG$(this).children('button').hasClass('circle')){
        if(OG$(this).children('button').children('.icoColorCheck').length > 0){
            OG$(this).children('button').children('.icoColorCheck').remove();
            OG$(this).children('button').removeClass('ec_search_selected');
        }else{
            OG$(this).children('button').addClass('ec_search_selected');
            OG$(this).children('button').append('<span class="icoColorCheck"></span>');
        }
    }else{
        //가격
        if(typeof OG$(this).children('button').attr('min_price') !== 'undefined'){
            if(OG$(this).children('button').hasClass('ec_search_selected')){
                OG$(this).children('button').removeClass('ec_search_selected');
            }else{
                OG$(this).children('button').addClass('ec_search_selected').parent().siblings().children('button').removeClass('ec_search_selected');
            }
            var min = Number(OG$(this).children('button').attr('min_price'));
            var max = Number(OG$(this).children('button').attr('max_price'));

            OG$('#ec-product-searchdata-minval').val(min);
            OG$('#ec-product-searchdata-maxval').val(max);

            //일반버튼
        }else{
            if(OG$(this).children('button').hasClass('ec_search_selected')){
                OG$(this).children('button').removeClass('ec_search_selected');
            }else{
                OG$(this).children('button').addClass('ec_search_selected');
            }
        }
    }
    //인풋
    if(OG$(this).find('input').is(':checked')){
        OG$(this).find('input').prop('checked',false);
    }else{
        OG$(this).find('input').prop('checked',true);
    }



});




OG$('#ec-product-searchdata-form .toggleArea .colorChip button').each(function(){
    let hexCode = OG$(this).attr('svalue');
    if(typeof hexCode !== 'undefined'){
        hexCode = hexCode.replace('color=','');
        if(OGFindColorChipLuma(hexCode) == 'white'){
            OG$(this).addClass('light');
        }
    }
});


OG$('.xans-product-searchdata:not(.typePopup) [search_value^="color="]').each(function(){
    let $e = OG$(this);

    if($e.siblings('.icoColor').length == 0){
        let color = $e.attr('search_value');
        color = color.replace('color=','');
        $e.parent().addClass('no_text');
        $e.parent().prepend('<span class="icoColor" style="background-color:'+ color +';">'+color+'</span>');
    }else{
    }
});

OG$('.xans-product-searchdata:not(.typePopup) .xans-product-searchconditiondata .icoColor').each(function(){
    let hexCode = OG$(this).text();
    if(typeof hexCode !== 'undefined'){
        if(OGFindColorChipLuma(hexCode) == 'white'){
            OG$(this).addClass('light');
        }
    }
});



$(document).ready(function(){

    if(OG_PAGE_CHK == 'PRODUCT_LIST'){
        if(OG$('.og_sub_container .xans-product-searchdata:not(.typePopup) .og_inner').children().length == 0){
            OG$('.og_sub_container .xans-product-searchdata:not(.typePopup)').remove();
        }
    }

    OG$('#og_search_data_view .xans-product-searchconditiondata .list li').each(function(i,e){
        let $e = OG$(e);
        let text = $e.text();
        if(text.indexOf('컬러 :')> -1){
            $e.addClass('og_color_data');
            const regex = /컬러 : ([A-Z]+)삭제/g;
            const colors = [];
            let match;
            while ((match = regex.exec(text)) !== null) {
                colors.push(match[1]);
            }
            let $colorChip = OG$('<span class="og_color_chips"></span>');
            $colorChip.css('background', 'var(--colorchip-'+ colors[0].toLowerCase() +')');
            $e.prepend($colorChip);
            let rgba = $colorChip.css('background-color');
            if(rgba.indexOf('rgb(') > -1){
                rgba = rgba.replace('rgb(', '').replace(')','').split(',');
                let hexCode = OG_util.rgbToHex(rgba[0], rgba[1], rgba[2]);
                if(OGFindColorChipLuma(hexCode) == 'white'){
                    $colorChip.addClass('light');
                }
            }
        }else{
            const regex = /[가-힣A-Za-z]+ : ([^삭제]+)삭제/g;
            const matches = [];
            let match;
            while ((match = regex.exec(text)) !== null) {
                matches.push(match[1]);
            }
            $e.prepend('<span>'+matches[0].trim()+'</span>')
        }
    })



    $.ajax({
        url: '/ogam/ajax/product/list.html?cate_no=' + OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE,
        type: 'GET',
        dataType: 'html',
        success: function (html) {
            $('.prd_og_main_visual .og_inner').append($(html).find('.prd_og_main_visual .prd_box'));
            OG$('.prd_og_main_visual .og_base_product .prdList').addClass('og_swiper').OG_swiperFunc({
                slidesPerView: 3,
                spaceBetween: 36,
                breakpoints : {
                    350: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1367: {
                        slidesPerView: 3,
                        spaceBetween: 36,
                    },
                },
                loop: false,
            });
        },
    });





    OG$('#ec-product-searchdata-form .header .btnClose2').on('click', function(){
        let $curation = OG$('.og_sub_container .xans-product-searchdata.typePopup'),
            $e = OG$(this);
        $curation.hide();
        if(OG_responsiveChk !== 'pc') {
            OG_util.scrollEnabled();
        }
        OG$('.og_curation_button').removeClass('on');
    });


    OG$('.og_sub_container .xans-product-searchdata.typePopup').on('click', function(e){
        if(OG_responsiveChk !== 'pc'){
            if(OG$(e.target)[0] == OG$(this)[0]){
                let $curation = OG$('.og_sub_container .xans-product-searchdata.typePopup');
                $curation.hide();
                OG$('.og_curation_button').removeClass('on');
                if(OG_responsiveChk !== 'pc') {
                    OG_util.scrollEnabled();
                }
            }
        }
    });


    OG$('[data-curation-colorchip]').each(function(){
        let $e = $(this);
        let color = $e.attr('data-curation-colorchip').toLowerCase();
        $e.css('background','var(--colorchip-'+color+')');

        let rgba = OG$(this).css('background-color');

        if(rgba.indexOf('rgb(') > -1){
            rgba = rgba.replace('rgb(', '').replace(')','').split(',');
            let hexCode = OG_util.rgbToHex(rgba[0], rgba[1], rgba[2]);
            if(OGFindColorChipLuma(hexCode) == 'white'){
                $e.addClass('light');
            }
        }
    });







});


window.addEventListener('load', function(){


})


