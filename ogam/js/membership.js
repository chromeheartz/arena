$(".benefit_info dl dt").click(function (){
    $(this).next("dd").stop().slideToggle(300);
    $(this).toggleClass('on');
});