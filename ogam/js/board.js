

let OGBoardNo = OG_util.getParameterByName(OG_LOCATION_HREF, 'board_no');


// 게시판
if (OG$('meta[name="keywords"]').attr("content") === "채용 공고") {
    $('.board-aside').remove();
    $('.description .name').remove();

    $.ajax({
        url: '/shopinfo/shop_info.html',
        type: 'GET',
        success: function (html) {
            const picTit = $(html).find('#tab2 .section_full picture img');
            console.log(picTit)

            $('.xans-board-title').after($(html).find(`.section_full picture img`));
        }
    })
}


window.addEventListener("DOMContentLoaded", function(event) {
    let writeDate = $('.xans-board-readpackage.board_type2 .xans-board-read .ec-base-table .description .date').text();
    $('.xans-board-readpackage.board_type2 .xans-board-read .ec-base-table .head p').text(writeDate);


    if($('.insta_wrap').length > 0){
        $('.insta_wrap [df-banner-clone]').each(function(){
            if($(this).find('a').attr('href') == '#none'){
                $(this).find('a').attr('href', 'https://www.instagram.com/arena_korea/').attr('target','_blank');
            }
        })
    }
});


// 게시글별 실행 ===============================================================================
$('.boardList').find('li[data-idx]').each(function (no) {
    var $this = $(this)
    var idx = $(this).attr('data-idx'); //게시글 번호
    var boardNo = $(this).attr('data-board'); //게시판 번호
    var aData = {
        'no': idx,
        'board_no': boardNo
    };

    OG$.get('/exec/front/board/Get/'+ boardNo, aData, function(req) {
        var rData = req.data;
        var attach = rData.content_image.split('<br>');
        // console.log(attach[0], attach[1])

        for(let i = 0; i < attach.length; i++){
            $this.find('.txt_wrap').eq(i).prepend(attach[i])
            console.log(attach[i])
        }
    }, 'json').done(function(){

    });

})

window.addEventListener("load", function(event) {
    $('.member_name').append(`<span>${OG_MEMBER_NAME}</span>`);
    $('.member_id').append(`<span>${OG_MEMBER_ID}</span>`);
    $('.member_phone').append(`<span>${OG_MEMBER_CELLPHONE}</span>`);

    if(OGBoardNo == '8'){
        $('.og_content_check').each(function(){
            let $e = $(this),
                text = $e.text();
            if(text.indexOf('/product/project.html') > -1){
                $e.closest('a').attr('href', text);
            }
        })
    }

});
$('.xans-board-listpackage-3 .ec-base-table.typeList td a').click(function () {
    $(this).toggleClass('on').siblings('.ac_panel').toggleClass('on')
})

$('.xans-board-listpackage-22 .ec-base-table.typeList td a').click(function () {
    $(this).toggleClass('on').siblings('.ac_panel').toggleClass('on')
})

// 답변처리 방식 이미지 수정
replyImg();
$('.adminAnswer').children().click( function () {
    setTimeout(() => {
        replyImg();
    }, 500)
})

function replyImg () {
    $('img[alt="답변완료"]').attr('src', '/SkinImg/img/ico_answer_end.png');
    $('img[alt="답변전"]').attr('src', '/SkinImg/img/ico_answer_before.png')
    $('#eReplyStatusChangeBtn img[alt="처리중"]').attr('src', '/SkinImg/img/btn_process_ing.png')
    $('#eReplyStatusText img[alt="처리중"]').attr('src', '/SkinImg/img/ico_answer_ing.png')
    $('img[alt="처리해제"]').attr('src', '/SkinImg/img/btn_process_clear.png')
}

$('[class*="board_type1"] .ec-base-table tr.category td').text('[' + OG_util.getParameterByName(OG_LOCATION_HREF,'cate_name') + ']');


// 관리자에서 글보기 했을떄 기본페이지로 넘어가는거 방지
/*const realLoca = window.location.pathname;
if(realLoca !== $('.href').text()){
    window.location.href = $('.href').text();
}*/


// 룩북, 라이브핏 페이지 카테고리 동적호출
// <div class="" data-cate="195" id="lookbook_cate"></div>
// <div class="" data-cate="195" id="livefit_cate"></div>


if($('.board_type2 .xans-board-title .titleArea h2').text().trim().indexOf('매장') > -1){
    $('#search_key').find('option[value="writer_name"]').remove();
    $('#search_key').find('option[value="member_id"]').remove();
    $('#search_key').find('option[value="nick_name"]').remove();
    $('#search_key').find('option[value="content"]').insertBefore($('#search_key').find('option').first());
    $('#search_key').find('option[value="subject"]').text('매장명');
    $('#search_key').find('option[value="content"]').text('전체');

    if(OG_util.getParameterByName(OG_LOCATION_HREF,'search_key') === ''){
        $('#search_key').find('option[value="content"]').prop('checked', true);
        $('#search_key').val('content').trigger('change');
    }

}



/* ------------공통 js 추가_가영 ------------- */
// 탑버튼


//탭버튼
function arena_tab(){
    setTimeout (()=>{
        OG_util.getUrl();
        tabNumber = OG_LOCATION_HREF.split('#');
        $('.tab_wrap ul.tab li[data-tab="'+ tabNumber[1] +'"]').addClass('on').siblings().removeClass('on');
        $('#' +  tabNumber[1]).addClass('on').siblings().removeClass('on');
        $('html, body').animate({scrollTop:0},10);
        if(typeof AOS !== 'undefined'){
            AOS.refresh();
        }
    })
}
$('.tabpanel').first().addClass('on');
let tabNumber = OG_LOCATION_HREF.split('#');
arena_tab ()

$('ul.tab li, .menu_2li, a[href*="#tab"]').click(function (){
    arena_tab ();
})

// DOMContentLoaded 추가
window.addEventListener("DOMContentLoaded", function(event) {
    // select -> append
    const option = $('#board_category option');
    for(let i = 0; i<option.length; i++){
        // 옵션 배열의 텍스트 가져오기
        const option_txt = option.eq(i).text();
        let $li = $("<li><p class='title'>"+option_txt+"</p></li>");
        if(option.eq(i).attr('selected')){
            $li.addClass('this');
        }
        $('.option_wrap2 ul').append($li);

    }
    
    // $('.option_wrap ul li:first-child').addClass('this');
    $('.option_wrap2 ul li').on('click', function (e) {
        /* 카테고리 여러번 클릭 시 '잘못된 접근' alert 발생으로 주석 아래 코드로 수정
        const now_option = $(this).index();
        const now_val = option.eq(now_option).val();
        option.val(now_val).trigger('change');
        */

        const index = $(this).index();
        $('#board_category').prop('selectedIndex', index).trigger('change');

        // $(this).addClass('this').siblings().removeClass('this');
    });
});


// 1:1 문의
$('.consult-txt').text(function (i, oldText) {
    return (oldText === 'X') ? '답변대기' : (oldText === 'O') ? '답변완료' : oldText;
});
$("input#subject").attr("placeholder", "제목을 입력해주세요.");














