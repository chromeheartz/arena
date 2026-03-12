$(function(){
    $('[id^="replyArea_"]').each(function(e) {
        $(this).hide();
    });

    $("a.catalog_down").clone().appendTo(".btn_append");

    $("#cate_num").clone().appendTo(".cate_append");
});