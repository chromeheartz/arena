


$(document).ready(function(){


    switch(OG_PAGE_CHK){
        case 'MEMBER_LOGIN' :
            $('#member_id').attr('placeholder', '아이디');
            break;
        case 'MEMBER_JOIN' :
        case 'MEMBER_MODIFY' :
            let $input = $('input[name="member_type"], input[name="company_type"]');

            $input.each(function(){
                $(this).wrap('<span class="ec-base-label"></span>');
                let $label = $(this).parent().next();
                $label.insertAfter($(this));
            });

            $('.ec-address-zipcode').find('.btnBasic').removeClass('btnBasic').addClass('btnSubmit sizeS');


            let $inputArea = $('#contents #og_member_join_form .formGroup.code');

            $inputArea.each(function(){
                let $e = $(this);
                console.log($e.children().length);
                    if($e.children().length >= 3){
                        $e.addClass('code3');
                    }else if($e.children().length == 2){
                        $e.addClass('code2');
                    }
            });
    }


    //회원가입페이지 이름입력칸 플레이스홀더 수정
    if(window.location.href == 'https://supra-korea.com/member/join.html'){
        $('#nameContents').next().val("본인인증 후 자동입력됩니다");
    }

});