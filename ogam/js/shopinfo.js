
/*
* rwdImageMaps jQuery plugin v1.6
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2016 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").on('load',function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(OG$);










if(OG_PAGE_CHK == "ETC"){
    // 빅앤스몰 페이지 레이아웃 수정
    if( $('.og_sub_container').children('df-bannermanager-pc-customorder') && $('.og_sub_container').length == 1  ){
        $('#container #contents').css('margin', '100px auto 0');

        var mo = matchMedia("screen and (max-width: 1366px)");
        if(mo.media){
            $('#container #contents').css('margin', '50px auto 0');
        }
    }
}

$('.historyNav ul li').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    const data = $(this).attr('data-move');
    $('html, body').animate( { scrollTop : $(`#${data}`).offset().top }, 500 );
})

$(window).on('scroll', function () {
    const scrollY = $(this).scrollTop() + $(this).height()* 2/3;
    $('.fade, .banner_inter2').each(function () {
        if (scrollY > $(this).offset().top) $(this).addClass('on');
        else $(this).removeClass('on');
    });
    $('.banner_inter').addClass('on');
    if($(this).scrollTop() == 0){
        $('.banner_inter').removeClass('on');
    }
})



window.addEventListener('DOMContentLoaded', function(){


    OG$('map').each(function(){
        let $e = $(this);
        $e.prev('img').attr('alt', '');
        $e.prev('img').attr('usemap', '#' + $e.attr('name'));
    })

    OG$('img[usemap]').rwdImageMaps();

    function controllerLineStart(){
        $('.smart_pickup .mo_pickup .controller').addClass('on');
    }
    function controller1Start(){
        $('.smart_pickup .mo_pickup .controller span').eq(0).addClass('on');
        $('.smart_pickup .mo_pickup .controller_box').eq(0).addClass('on');
    }
    function controller2Start(){
        $('.smart_pickup .mo_pickup .controller span').eq(0).removeClass('on');
        $('.smart_pickup .mo_pickup .controller span').eq(1).addClass('on');
        $('.smart_pickup .mo_pickup .controller_box').eq(0).removeClass('on');
        $('.smart_pickup .mo_pickup .controller_box').eq(1).addClass('on');
        $('.smart_pickup .mo_pickup .img_box').addClass('on');
    }

    function controllerEnd(){
        clearTimeout(controller1);
        clearTimeout(controllerLine);
        clearTimeout(controller2);
        clearTimeout(controllerStop);
        clearTimeout(full);
        $('.smart_pickup .mo_pickup .controller').removeClass('on');
        $('.smart_pickup .mo_pickup .controller span').removeClass('on');
        $('.smart_pickup .mo_pickup .img_box').removeClass('on');
        $('.smart_pickup .mo_pickup .controller_box').removeClass('on');
        full = setTimeout(test,0);
    }


    function test (){
        controller1 = setTimeout(controller1Start);
        controllerLine = setTimeout(controllerLineStart, 3000);
        controller2 = setTimeout(controller2Start, 4000);
        controllerStop = setTimeout(controllerEnd, 7000);
    }

    let controllerLine;
    let controller1;
    let controller2;
    let controllerStop;
    let full;

    let intersectionChk = 0;

    OG_util.IntersectionObserver( '.mo_pickup .cnt_wrap',  {
        root: null,
        rootMargin: OG_topHeight+'px ' + "0px " + 0 + 'px ' + "0px",
        threshold: [0]
    }, function(a,b,c) {
        if(intersectionChk > 0){
            if(a.isIntersecting){
                full = setTimeout(test,0);
            }else{
                clearTimeout(controller1);
                clearTimeout(controllerLine);
                clearTimeout(controller2);
                clearTimeout(controllerStop);
                clearTimeout(full);
                $('.smart_pickup .mo_pickup .controller').removeClass('on');
                $('.smart_pickup .mo_pickup .controller span').removeClass('on');
                $('.smart_pickup .mo_pickup .img_box').removeClass('on');
            }
        }
        intersectionChk ++;
    });
})


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


let cateName;

window.addEventListener('DOMContentLoaded', function(){

    let dupChk = 9;
    if($('.hsYearSection2').length > 0){
        let yearChk = [];
        $('.hsYearSection2 ul li').each(function(){
            let $e = $(this),
                year = $e.attr('data-year').trim(),
                year_check = year.substring(0,3),
                year_last_chk = Number(year.substring(3,4)),
                year_last = Number(year.substring(3,4));
            if(year_check == '202'){
                year_check = '201';
                year_last = '2' + String(year_last) + String(dupChk);
            }else{
                year_last = '1' + String(year_last) + String(dupChk);
            }
            if(typeof window['test_' + year_check] === 'undefined'){
                window['test_' + year_check] = [];
                yearChk.push(year_check);
            }
            if(typeof window['test_' + year_check][year_last] !== 'undefined'){
                dupChk--;
                year_last = '1' + String(year_last_chk) + String(dupChk);
            }else{
                dupChk = 9;
            }
            window['test_' + year_check][year_last] = {
                'year' : year,
                'html' : $e[0].outerHTML,
            };
        });

        yearChk.sort();
        yearChk.forEach(function(e, i){
            let numCheck = 0;
            window['test_' + e].forEach(function(e2,i2){
                if(e == '201'){
                    if(numCheck == 0){
                        $('.hsYearSection2').append('<div class="og_year_container og_year_'+ e +'" id="step'+ (i+1) +'"><span class="og_year_head">'+ e +'0-현재</span><div class="og_year_contents"><ul></ul></div></div>');
                    }
                }else{
                    if(numCheck == 0){
                        $('.hsYearSection2').append('<div class="og_year_container og_year_'+ e +'" id="step'+ (i+1)+'"><span class="og_year_head">'+ e +'0-'+ e+'9</span><div class="og_year_contents"><ul></ul></div></div>');
                    }
                }
                $('.og_year_' + e +' .og_year_contents ul').append(e2['html']);
                numCheck++;
            })
            OG$('.og_year_' + e +' .og_year_contents ul').attr('data-ogswipe-module', 'navigation').addClass('og_swiper').OG_swiperFunc({
                // Default parameters
                slidesPerView: 'auto',
                spaceBetween: 12,
                loop: false,
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 8,
                        autoHeight: true,
                    },
                    600: {
                        slidesPerView: 1.5,
                        spaceBetween: 8,
                        autoHeight: true,
                    },
                    // when window width is >= 480px
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 8,
                        autoHeight: true,
                    },
                    // when window width is >= 640px
                    1367: {
                        slidesPerView: 3,
                        spaceBetween: 8,
                        autoHeight: true,
                    }
                },
                on: {
                    init: function () {
                        setTimeout(function(){
                            $('.hsYearSection2 .og_module_container').css('top', $('.hsYearSection2 .og_year_container .og_year_contents li .img_box').outerHeight()/2 + 'px')
                        },500)
                    },
                },
            });
            //$('.hsYearSection2 .og_swiper_container').attr('data-ogswipe-module-theme','white');

        })

        $('.tab_wrap ul.tab li').on('click',function(){
            setTimeout(function(){
                $('.hsYearSection2 .og_module_container').css('top', $('.hsYearSection2 .og_year_container .og_year_contents li .img_box').outerHeight()/2 + 'px')
            },500);
        })
    }

    if($('[df-banner-code*="brand-story--2026--"]').length > 0){
        let $brandStory = $('[df-banner-code*="brand-story--2026--"]');
        $brandStory.find('li').each(function(){
            let $img = $(this).find('img'),
                index = $(this).index();
            $('.og_bs_banner' + (index+1)).append($img);
        })


        if(OG_responsiveChk !== 'pc'){
            $('[data-aos-offset="500"]').attr('data-aos-offset', '150');
            $('[data-aos-offset="600"]').attr('data-aos-offset', '250');
            $('[data-aos-offset="300"]').attr('data-aos-offset', '150');
            $('[data-aos-duration="500"]').attr('data-aos-duration','700');
            $('[data-aos-duration="400"]').attr('data-aos-duration','600');
        }


    }




})


window.addEventListener('load', function(){
    if(typeof AOS !== 'undefined'){
        AOS.init();
    }
})


window.addEventListener('resize', function(){
    $('.hsYearSection2 .og_module_container').css('top', $('.hsYearSection2 .og_year_container .og_year_contents li .img_box').outerHeight()/2 + 'px')
})


if($('[df-banner-code*="brand-story--2026--"]').length > 0){
    if(window.innerWidth < 640){
         $('[df-banner-code*="brand-story--2026--"]').attr('df-banner-code', 'brand-story--2026--mo');
     }
}


var ord=Math.random();
document.write('<script src="/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/4e3b2c5edcfba452a4f181f58d9c7857.js?v='+ord+'"><\/script>'); //history
document.write('<script src="/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/c3e29de628428aa286110d569a802a57.js?v='+ord+'"><\/script>'); //brand story