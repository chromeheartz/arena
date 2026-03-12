$(function(){
    $('#name_view #name').attr('placeholder', '이름');
    $('#email_view #email').attr('placeholder', '이메일');
    $('#mobile_view #mobile1').attr('placeholder', '휴대폰');
    $('#member_id').attr('placeholder', '아이디');

    // 아이디 비밀번호 찾기 완료
    $('.complete .description label').each(function () {
        const result_join = $(this).find('.gaip').text();
        const split = result_join.split(' ');
        console.log(split);
        for (let i = 0; i < split.length; i++){
            return $(this).find('.gaip').text(split[2].replaceAll('-', '.'));
        }
    })

    // 회원가입
    $('.join_form #member_id').attr('placeholder', '아이디를 입력하세요');
    $('.join_form #passwd').attr('placeholder', '비밀번호를 입력하세요');
    $('.join_form #user_passwd_confirm').attr('placeholder', '비밀번호를 한번 더 입력하세요');
    $('.join_form #name').attr('placeholder', '이름을 입력하세요');
    $('.join_form #email1').attr('placeholder', '이메일을 입력하세요');
    $('.join_form #birth_year').attr('placeholder', '년도');
    $('.join_form #birth_month').attr('placeholder', '월');
    $('.join_form #birth_day').attr('placeholder', '일');


});