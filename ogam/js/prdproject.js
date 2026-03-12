


let cate_no = OG_util.getParameterByName(OG_LOCATION_HREF, 'cate_no');
if(cate_no > 921) {
    // (3)
    if(window.innerWidth > 1366){
        $('.og_project_imgs').attr('df-banner-code', 'event-' + cate_no + '--pc');

        document.write('<script src="/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/5e587c3dc3067fdd3ca0e88aad40a07c.js?v='+ord+'"><\/script>');
    }else{

        $('.og_project_imgs').attr('df-banner-code', 'event-' + cate_no + '--mo');

        document.write('<script src="/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/2e9f2ed2d268995f787d7a12af0457dc.js?v='+ord+'"><\/script>');
    }
    
} else if(cate_no > 713) {
    // (2)

    if(window.innerWidth > 1366){
        $('.og_project_imgs').attr('df-banner-code', 'event-' + cate_no + '--pc');
        document.write('<script src="/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/718b8b441be65cc603e3b08de4bc8b93.js?v='+ord+'"><\/script>');
    }else{
        $('.og_project_imgs').attr('df-banner-code', 'event-' + cate_no + '--mo');
        document.write('<script src="/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/d8be562f65ae0de31b6d3fb0c8ac2ad7.js?v='+ord+'"><\/script>');
    }
} else {
	if(window.innerWidth > 1366){
        $('.og_project_imgs').attr('df-banner-code', 'event-' + cate_no + '--pc');
        //과거 - bcf6a9d3650e7fc34c4a91a9bf8a8c5b
        //변경 - 082e91035ffb5bbdae4d1f5e168a8fb3
        document.write('<script src="/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/082e91035ffb5bbdae4d1f5e168a8fb3.js?v='+ord+'"><\/script>');
    }else{
        $('.og_project_imgs').attr('df-banner-code', 'event-' + cate_no + '--mo');
        document.write('<script src="/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/8555f200b542cfcfb49d3097c1b7ba74.js?v='+ord+'"><\/script>');
    }
}

window.addEventListener('DOMContentLoaded', function(){
    $('.og_project_imgs').find('[df-banner-clone]').each(function(){
        let $e= $(this),
            $styleEl = $e.find('.displaynone'),
            href = $e.children().attr('data-href'),
            target = $e.children().attr('data-target');

        if($e.find('iframe').length > 0){
            $e.addClass('og_iframe_banner');
        }
        if($styleEl.find('a').length > 0){
            $e.find('img').remove();
            $e.append($styleEl.html());
        }else{
            $e.attr('style', $styleEl.html());
            if(href.indexOf('#none') == -1 && href !== ''){
                OG$($e).children().OG_replaceTag('a');
                OG$($e).children().attr('href',href).attr('target',target);
            }
        }
    })

    let projectTitle = $('meta[property="og:title"]').attr('content').split('-')[1].trim();
    $('[data-page="prdProject"] .og_base_product .prdList [id^="anchorBoxId_"] .description .category_name').text(projectTitle);


});


OG$('body').on('OGResponsive',function(e){
    switch (OG_responsiveChk){
        case "pc":
            OG$('.og_base_product .prdList:not(.swiper-wrapper)').removeClass('grid2').addClass('grid3');
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




if($('.og_project_container').html().trim() == ''){
    $('.og_project_category, .og_project_container').addClass('displaynone');
}else{
    let headerHeight = $('header').children().filter(':visible').outerHeight(),
        categoryHeight = $('.og_project_category').outerHeight();

    $('.og_project_category').css('height', categoryHeight);
    $('.og_project_category .tabMenu').css('top', headerHeight);
    //카테고리 클릭 시
    $('.og_project_category .tabMenu li').click(function(){
        let $e = $(this),
            index = $e.index(),
            $prdList = $('.og_project_list').eq(index),
            offsetTop = $prdList.offset().top;
        $('html, body').animate({scrollTop: offsetTop - headerHeight - categoryHeight - 30}, 300);
    });


    // 스크롤 이벤트
    $(window).scroll(function(){
        let st = pageYOffset,
            $menuCate = $('.og_project_category');
        if($menuCate[0].getBoundingClientRect().top <=headerHeight){
            $menuCate.addClass('sticky');
        }else{
            $menuCate.removeClass('sticky');
        }
    });
}








