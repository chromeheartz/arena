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

if(OG$('.og_sub_container .xans-product-searchdata.typePopup .searchCondition').attr('id') == ''){
    OG$('.og_sub_container .xans-product-searchdata.typePopup').addClass('displaynone');
    OG$('.og_curation_button').on('click',function(){
        alert('선택 가능한 필터가 없습니다.');
        return false;
    });
}
// OG$('.og_curation_button').on('click',function(){
//     let $curation = OG$('.og_sub_container .xans-product-searchdata.typePopup'),
//         $e = OG$(this);
//
//     console.log($e,$e.hasClass('on'),$curation)
//     if($e.hasClass('on')){
//         $e.removeClass('on');
//         $curation.hide();
//         if(OG_responsiveChk !== 'pc') {
//             OG_util.scrollEnabled();
//         }
//     }else{
//         $e.addClass('on');
//         $curation.show();
//         if(OG_responsiveChk !== 'pc') {
//             OG_util.scrollEnabled();
//         }
//     }
// });

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



window.addEventListener('load', function(){
    CAPP_ASYNC_METHODS.WishList.execute();

    $('html .og_base_product').addClass('prd_done'); 
    $('html .og_base_product .prdList [id^="anchorBoxId_"]').addClass('og_group_done');

    let keyword = OG_util.getParameterByName(OG_LOCATION_HREF,'query');
    if(keyword !== '*' && keyword !== ''){
        $('#ec-product-searchdata-keyword').val(keyword);
    }

    $('.og_base_product .prdList [id^="anchorBoxId_"] .description .category_name').each(function(){
        $(this).text('#' + OG_util.removeBlankFunc(keyword));
    });

    ( OGCategoryModify = function(){
        OG$('html .dalue_css_column_content_category').children().each(function(i,e){
            let $e = OG$(this);
            let checkOnClick = OG_util.onlyNumbFunc($e.attr('onClick').split(',')[4]);
            if(checkOnClick !== 0){
                let test = OGBaseMenuCall.__OG_DEFAULT_VALUE_SUBCATEGORY_DATA_TREE.filter(function(e, i){
                    if(Number(e.cate_no) === checkOnClick){
                        return true;
                    }
                })[0];
                if(typeof test === 'undefined'){
                    $e.addClass('displaynone');
                }
            }
        })
    })();

    OG$('.dalue_css_filter_row').OG_observerFunc(function(a) {
        //자식 노드 변경될 때 실행
        setTimeout(function(){
            OGCategoryModify();
        },0);
    }, {
        attributes: true,
        childList: true,
        subtree: true
    });

    OG$('.og_base_product .prdList').OG_observerFunc(function(a) {
        setTimeout(function(){
            OG$('.og_base_product .prdList').children().removeClass('done');
            OGPrdItemInfoCall.init();
            $('.og_base_product .prdList [id^="anchorBoxId_"] .description .category_name').each(function(){
                $(this).text('#' + OG_util.removeBlankFunc(keyword));
            });
            CAPP_ASYNC_METHODS.WishList.execute();
            $('html .og_base_product .prdList [id^="anchorBoxId_"]').addClass('og_group_done');
        },300);
    }, {
        attributes: true,
        childList: true,
        subtree: false
    });


});




