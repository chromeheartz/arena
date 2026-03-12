

var TEMPCHK = false;


$(document).ready(function(){

    // 원터치주문서 placeholder 넣기
    $("input#oname").attr("placeholder", "이름을 입력하세요");
    $('input#oemail1').attr("placeholder", "이메일을 입력해주세요");
    $('input#rname').attr("placeholder", "이름을 입력하세요");
    $('input#order_password').attr("placeholder", '비밀번호를 입력해주세요');
    $('input#order_password_confirm').attr("placeholder", '비밀번호를 입력해주세요');
    $('#allat_account_nm').attr("placeholder", '예금주명을 입력해주세요');

    $('.ec-shippingInfo-shippingMessage').prepend('<div style="color: #000000">요청사항</div>');


    $('.ec-paymethod-newArea .inner').find('.ec-base-label').each(function(){
        $(this).find('img[pay_name="신용카드"]').css('display', 'none').after('<span>카드결제</span>');
        $(this).find('img[pay_name="에스크로(가상계좌)"]').css('display', 'none').after('<span>가상계좌</span>');
        $(this).find('img[pay_name="에스크로(계좌이체)"]').css('display', 'none').after('<span>실시간 계좌이체</span>');
        $(this).find('img[pay_name="카카오페이"]').css('display', 'none').before('<img src="/SkinImg/img/kakopay.png" />').after('<span style="margin-left: 6px; vertical-align: middle">카카오페이</span>');
        $(this).find('a[href="https://www.kakaopay.com"]').css('display', 'none')
    });

    $('.ec-base-help').removeClass('ec-order-expandwrap');
    $('.ec-base-fold').removeClass('eToggle');
    /*
    $('.ec-base-fold').children('.title').click(function () {
        $(this).parent().toggleClass('selected')
    })
    */
    /*$('.discountList').removeClass('eToggle');
    $('.discountList').children('.title').click(function () {
        $(this).parent().toggleClass('selected')
    })*/
    if(!$('.mailAddress .directInput').hasClass('displaynone')){
        $('.mailAddress .directInput').addClass('displaynone');
    }
    if(!$('.checkNone ').hasClass('displaynone')){
        $('.checkNone ').addClass('displaynone');
    }

    setTimeout(function(){
        $('#mCafe24Order .agreeArea .agreement .btnAgree').each(function(){
            let $e = OG$(this),
                onClick = $e.attr('onClick');
            if(onClick.indexOf('view') == 0){
                onClick = onClick.substring(0,onClick.length - 3) + '2();';
                $e.attr('onClick',onClick);
            }
        });
    },800);
});



//정기배송 이용약관 동의
function viewRegularDelivery2() {
    window.open('/order/ec_orderform/agreement/regular_delivery.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val());
}

// 배송비 3000원 추가
// (3만원 이하 구매시 배송비 3천원, 3만원 이상 구매시 배송비 0원)
// (장바구니에 담겨 있는 모든 상품의 총 상품 긍액을 기준)
setTimeout(function() {
    const total_price = $('.totalSummary:not(.displaynone) > .totalSummary__item > .heading > .data > strong > .total_product_price_display_front').text().replace(/,/g,'');
    const total_price_num = parseInt(total_price);
    const ship_price = $('.totalSummary > .totalSummary__item > .heading > .data > strong > .total_delv_price_front');

    if (total_price_num < 30000){
        console.log(total_price_num, '==> 30000원 이하 구매시 배송비 3000원 추가');
        ship_price.text((3000).toLocaleString('ko-KR')); // number.toLocaleString을 사용하여 '3,000'으로 표시
    } else {
        ship_price.text('0'); // 가격이 30000 이상일 경우 배송비 초기화
        console.log( '30000원 이상 구매시 배송비 0원');
    }
}, 500); // DOM 업데이트 지연시간 고려하여 timeout


//쇼핑몰 이용약관 동의
function viewMallAgree2() {
    if (EC_MOBILE_DEVICE == true) {
        window['viewMallAgree_child'] = window.open('/order/ec_orderform/agreement/mallagree.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val());
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
        setTimeout(function(){
            viewMallAgree_child.document.getElementsByTagName('head')[0].appendChild(meta);
        },800);
    } else {
        window.open('/order/ec_orderform/agreement/mallagree.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val(), 'window_viewMallAgree', 'width=450,height=350');
    }
}
//비회원 구매시 개인정보수집이용동의
function viewPersonAgree2() {
    if (EC_MOBILE_DEVICE == true) {
        window['viewPersonAgree_child'] = window.open('/order/ec_orderform/agreement/personagree.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val());
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
        setTimeout(function(){
            viewPersonAgree_child.document.getElementsByTagName('head')[0].appendChild(meta);
        },800);
    } else {
        window.open('/order/ec_orderform/agreement/personagree.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val(), '', 'width=450,height=350');
    }
}
//청약철회방침 보기
function viewSubscription2() {
    if (EC_MOBILE_DEVICE == true) {
        window['viewSubscription_child'] = window.open('/order/ec_orderform/agreement/subscription.html?basket_type=' + EC$('#basket_type').val());
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
        setTimeout(function(){
            viewSubscription_child.document.getElementsByTagName('head')[0].appendChild(meta);
        },800);
    } else {
        window.open('/order/ec_orderform/agreement/subscription.html?basket_type=' + EC$('#basket_type').val(), '', 'width=450,height=350');
    }
}
//전자보증보험 보기
function viewInsurance2() {
    if (EC_MOBILE_DEVICE == true) {
        window['viewInsurance_child'] = window.open('/order/ec_orderform/agreement/insurance.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val());
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
        setTimeout(function(){
            viewInsurance_child.document.getElementsByTagName('head')[0].appendChild(meta);
        },800);
    } else {
        window.open('/order/ec_orderform/agreement/insurance.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val(), '', 'width=450,height=350');
    }
}
//Daum 비회원 구매 동의 보기
function viewDaum2() {
    if (EC_MOBILE_DEVICE == true) {
        window['viewDaum_child'] = window.open('/order/ec_orderform/agreement/daum.html?basket_type=' + EC$('#basket_type').val());
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
        setTimeout(function(){
            viewDaum_child.document.getElementsByTagName('head')[0].appendChild(meta);
        },800);
    } else {
        window.open('/order/ec_orderform/agreement/daum.html?basket_type=' + EC$('#basket_type').val(), '', 'width=450,height=350');
    }
}
//배송정보 제공방침 동의
function viewDelivery2() {
    if (EC_MOBILE_DEVICE == true) {
        window['viewDelivery_child'] = window.open('/order/ec_orderform/agreement/delivery.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val());
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
        setTimeout(function(){
            viewDelivery_child.document.getElementsByTagName('head')[0].appendChild(meta);
        },800);
    } else {
        window.open('/order/ec_orderform/agreement/delivery.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val(), '', 'width=450,height=350');
    }
}
//고유식별정보수집 동의
function viewIdentification2() {
    if (EC_MOBILE_DEVICE == true) {
        window['viewIdentification_child'] = window.open('/order/ec_orderform/agreement/identification.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val());
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
        setTimeout(function(){
            viewIdentification_child.document.getElementsByTagName('head')[0].appendChild(meta);
        },800);
    } else {
        window.open('/order/ec_orderform/agreement/identification.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val(), '', 'width=450,height=350');
    }
}
//개인정보수집 이용동의
function viewMemberJoinAgree2() {
    if (EC_MOBILE_DEVICE == true) {
        window['viewMemberJoinAgree_child'] = window.open('/order/ec_orderform/agreement/privacy_agreement.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val());
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
        setTimeout(function(){
            viewMemberJoinAgree_child.document.getElementsByTagName('head')[0].appendChild(meta);
        },800);
    } else {
        window.open('/order/ec_orderform/agreement/privacy_agreement.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val(), '', 'width=450,height=350');
    }
}
//개인정보 제3자 제공 동의
function viewInformationAgree2() {
    if (EC_MOBILE_DEVICE == true) {
        window['viewInformationAgree_child'] = window.open('/order/ec_orderform/agreement/information_agreement.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val());
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
        setTimeout(function(){
            viewInformationAgree_child.document.getElementsByTagName('head')[0].appendChild(meta);
        },800);
    } else {
        window.open('/order/ec_orderform/agreement/information_agreement.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val(), '', 'width=450,height=350');
    }
}
//개인정보취급 위탁 동의
function viewConsignmentAgree2() {
    if (EC_MOBILE_DEVICE == true) {
        window['viewConsignmentAgree_child'] = window.open('/order/ec_orderform/agreement/consignment_agreement.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val());
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
        setTimeout(function(){
            viewConsignmentAgree_child.document.getElementsByTagName('head')[0].appendChild(meta);
        },800);
    } else {
        window.open('/order/ec_orderform/agreement/consignment_agreement.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val(), '', 'width=450,height=350');
    }
}
//예약결제 이용 동의
function viewCrowdfunding2() {
    if (EC_MOBILE_DEVICE == true) {
        window['viewCrowdfunding_child'] = window.open('/order/ec_orderform/agreement/crowdfunding.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val());
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
        setTimeout(function(){
            viewCrowdfunding_child.document.getElementsByTagName('head')[0].appendChild(meta);
        },800);
    } else {
        window.open('/order/ec_orderform/agreement/crowdfunding.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val(), '', 'width=450,height=350');
    }
}
function viewSafePhone2() {
    if (EC_MOBILE_DEVICE == true) {
        window['viewSafePhone_child'] = window.open('/order/ec_orderform/popup/safePhone.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val());
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
        setTimeout(function(){
            viewSafePhone_child.document.getElementsByTagName('head')[0].appendChild(meta);
        },800);
    } else {
        window.open('/order/ec_orderform/popup/safePhone.html?basket_type=' + EC$('#basket_type').val() + '&delvtype=' + EC$('#delvType').val(), '', 'width=500,height=467');
    }
}

// 결제대행서비스 약관 동의
function viewPaymentAgree2() {
    if (EC_MOBILE_DEVICE == true) {
        window['viewPaymentAgree_child'] = window.open('/protected/order/payment_agree_financial.html');
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
        setTimeout(function(){
            viewPaymentAgree_child.document.getElementsByTagName('head')[0].appendChild(meta);
        },800);
    } else {
        window.open('/protected/order/payment_agree_financial.html', '', 'width=450,height=350');
    }
}



let OG_TODAY_CHK = new Date();


/**
 * 배송업체 커스텀
 */
let OGDelvScCustom = {

    /* 확인 완료 */
    __SC_ORI_ELEMENT_TYPE: null,
    //배송업체 오리지널 엘리먼트 타입
    __SC_ORI_ELEMENT: null,
    //배송업체 오리지널 엘리먼트
    __SC_CLONE_ELEMENT: null,
    //배송업체 복제 엘리먼트
    __SC_CLONE_ELEMENT_VIEW_TYPE: null,
    //배송업체 복제 노출 타입(RADIO, SELECT)
    __INIT_COMPLETE: null,
    //요소 배치 완료

    __DELV_TODAY_SC_NAME: null,
    //당일배송 출력 이름
    __DELV_TODAY_SC_NUMBER: null,
    //당일배송의 배송 고유 넘버
    __DELV_TODAY_SC_AVAIL_ORDER_TIME_START: null,
    //당일배송 가능시간 시작
    __DELV_TODAY_SC_AVAIL_ORDER_TIME_END: null,
    //당일배송 가능시간 끝
    __DELV_TODAY_SC_AVAIL_AREAS: null,
    //당일배송 가능지역
    __DELV_TODAY_SC_FAIL_ALERT_AREA_TXT: null,
    //당일배송 지역 실패 alert문구 포맷
    __DELV_TODAY_SC_FAIL_ALERT_TIME_TXT: null,
    //당일배송 시간 실패 alert문구 포맷
    __DELV_TODAY_SC_FAIL_ALERT_ZIPCODE_TXT: null,
    //당일배송 우편번호 실패 alert문구 포맷
    __DELV_TODAY_INFO_TXT: null,
    //당일배송 설명 텍스트

    /* 확인 중 */

    __SC_SELECTED_NUMBER: null,
    //선택된 배송업체 고유 넘버 (당일배송 선택 불가로 초기화 시 초기화 기준이 됨)
    __DELV_TODAY_SC_GET_READY_STATE_CHECK: null,
    //당일배송 선택이 가능한지 여부 flag

    __IS_COUPON_SELECTED: null,
    //쿠폰이 선택되었는지
    __isPopupPage: null,
    //팝업 페이지 여부
    __topDocument: null,
    //최상위 도큐먼트
    __DELV_TODAY_SC_PRC: null,
    //당일배송 기본 배송값(배송업체명 옆에 노출)

    init: function() {
        /**
         * 주문서 페이지 초기화 진행
         * isPopupPage -> OG_util.js (팝업페이지 여부 - 팝업페이지인 경우 sPage 변수 호출 시 에러 발생으로 분기 처리)
         * sPage -> cafe24 : 현재 접속 페이지 고유값
         * [name="delOGcompany"] : 배송업체 선택 select/checkbox
         */
        if (isPopupPage == 0) {
            if (sPage == 'ORDER_ORDERFORM') {
                if (OG$('[name="delivcompany"]').length == 0) {
                    return false;
                } else {
                    OGDelvScCustom.makeElement();
                    //복제 엘리먼트 생성\
                    OGDelvScCustom.getCondition();
                    //당일배송 관련 설정값 호출
                    OGDelvScCustom.scSelect();
                    //배송업체 선택 기능 동작 시작
                    initCompeletCheck();


                    $('label[for="ogdelv_custom_delivcompany_store"]').text('스마트픽업');
                    OG$('#lShippingCompanyLists').addClass('done');
                }
            }
        }/**
         * 배송주소록 페이지 팝업일때 수정
         */
        else {
            if (typeof name !== 'undefined') {
                if (name == 'addrRecvLog') {
                    if (OG$(topDocument).find('#og_delivcompany_area_custom').length > 0) {
                        OGDelvScCustom = OG$(topDocument).find('#og_delivcompany_area_custom')[0].OGDelvScCustom;
                        let $button = OG$('a[onClick*="myshopAddr.setAddrToOrder"]');
                        $button.each(function() {
                            let $e = OG$(this);
                            let saveOnclick = $e.attr('onClick');
                            $e.removeAttr('onClick');
                            let $clone = OG$($e[0].outerHTML).insertAfter($e);
                            $e.addClass('displaynone');
                            let findIdx = $e.closest('tr').find('input[name*="ma_idx"]').val();
                            $clone.on('click', function() {
                                if (EC$(topDocument).find(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input[value="' + OGDelvScCustom.__DELV_TODAY_SC_NUMBER + '"]').is(':checked') || EC$(topDocument).find(OGDelvScCustom.__SC_CLONE_ELEMENT).val() == OGDelvScCustom.__DELV_TODAY_SC_NUMBER) {
                                    let callback = function(res) {
                                        myshopAddr.setAddrToOrder(findIdx);
                                    };
                                    OGDelvScCustom.validAllCheck(callback, OG_util.onlyNumbFunc($button.closest('tr').find('.zipcode').first().text()));
                                } else {
                                    myshopAddr.setAddrToOrder(findIdx);
                                }
                            });
                        });
                    }
                }
            }
        }
        ;
        /**
         * 최종 초기화 동작
         */
        function initCompeletCheck() {
            /**
             * 우편번호 팝업연결
             */
            OG_util.execDaumPostcode['selectBefore'] = {};
            OG_util.execDaumPostcode['selectBefore']['execute'] = function(addwrap, data, addr, extraAddr) {
                if (OG$(addwrap).find('[id*="ogdelv_custombtn_"]').attr('id').indexOf('rzipcode') > -1) {
                    if (EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input[value="' + OGDelvScCustom.__DELV_TODAY_SC_NUMBER + '"]').is(':checked') || EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).val() == OGDelvScCustom.__DELV_TODAY_SC_NUMBER) {
                        let callback = function(res) {
                            AddressExec();
                        };
                        OGDelvScCustom.validAllCheck(callback, data.zonecode);
                    } else {
                        AddressExec();
                    }
                    OG$('#ogdelv_custom_sameaddr0').prop('checked', false);
                    OG$('#ogdelv_custom_sameaddr1').prop('checked', true);
                } else {
                    AddressExec();
                }
                function AddressExec() {
                    // 우편번호와 주소 정보를 해당 필드에 넣는다.
                    EC$('#sameaddr1').prop('checked', true).trigger('change');
                    OG$('#og_custom_sameaddr1').prop('checked', true).trigger('change');
                    setTimeout(function() {
                        addwrap.find('[data-addr-type="zipcode"]').val(data.zonecode);
                        addwrap.find('[data-addr-type="addr1"]').val(addr + ' ' + extraAddr);
                        // 커서를 상세주소 필드로 이동한다.
                        addwrap.find('[data-addr-type="addr2"]').val('').focus();
                        EC_SHOP_FRONT_ORDERFORM_SHIPPING.exec();

                    }, 300);
                }
            }
        }
        ;
    },

    makeElement: function() {
        /**
         * 배송선택과 관련 있는 요소 복제하여 복제 영역으로 선택 -> 이후 실제 영역 동작할 수 있도록 함
         */
        (delvCompanyElementFunc = function() {
                /**
                 * 배송업체 영역의 경우, input[type=radio] / select 2가지로 노출됨
                 * input/select 모두 name="delivcompany" 값을 가짐
                 */
                let $oriDelv;
                //오리지널 요소 기록
                let $cloneDelv;
                //오리지널 요소 복제 요소 기록
                let $oriDelvItems = OG$('[name="delivcompany"]');
                //배송업체 선택 요소

                if ($oriDelvItems.length > 0) {
                    if (OG$('#og_delivcompany_area_ori').length == 0) {
                        let $forFindoriDelv = $oriDelvItems.first();
                        let oriDelvAppendFlag = 0;
                        if ($forFindoriDelv[0].tagName == 'INPUT') {
                            let layoutChange = ($forFindoriDelv.siblings('input').length > 0) ? true : false;
                            OGDelvScCustom.__SC_ORI_ELEMENT_TYPE = 'RADIO';
                            //배송업체태그타입 기록
                            $oriDelv = OG$('<div id="og_delivcompany_area_ori" class="layout_hidden"></div>');
                            $oriDelvItems.each(function(i, e) {
                                var $e = OG$(e);
                                //input+label 구조들이 스킨마다 다양하여 최대한 원본 그대로 복제하되 제어에 편한 형태로 수정, 복제
                                if (layoutChange == false) {
                                    if (oriDelvAppendFlag == 0) {
                                        $oriDelv.insertBefore($forFindoriDelv.parent());
                                        oriDelvAppendFlag++;
                                    }
                                    $oriDelv.append($e.parent().parent().children());
                                } else {
                                    if (oriDelvAppendFlag == 0) {
                                        $oriDelv.insertBefore($forFindoriDelv);
                                        oriDelvAppendFlag++;
                                    }
                                    $e.wrap('<div class="ec-base-label"></div>');
                                    $e.next('label').insertAfter($e);
                                    $oriDelv.append($e.parent());
                                }
                            });
                            OGDelvScCustom.__SC_ORI_ELEMENT = $oriDelv;
                            //복제요소 고유값 부여
                            $cloneDelv = OG$(OG$(OGDelvScCustom.__SC_ORI_ELEMENT)[0].outerHTML).attr('id', 'og_delivcompany_area_custom').removeClass('layout_hidden');
                            $cloneDelv.insertAfter($oriDelv);
                            OGDelvScCustom.__SC_CLONE_ELEMENT = $cloneDelv;
                            OG$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input, label').each(function(i, e) {
                                var $e = OG$(e);
                                var attrId = $e.attr('id');
                                var attrFor = $e.attr('for');
                                if (typeof attrId !== 'undefined') {
                                    $e.attr({
                                        'id': 'ogdelv_custom_' + attrId,
                                        'data-ogdelv-ori': attrId,
                                        'name': 'og_delivcompany_area'
                                    });
                                }
                                if (typeof attrFor !== 'undefined') {
                                    $e.attr({
                                        'for': 'ogdelv_custom_' + attrFor,
                                        'data-ogdelv-ori': attrFor
                                    });
                                }
                            });

                            OG$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('select').each(function(i, e) {
                                var $e = OG$(e);
                                var attrId = $e.attr('id');
                                if(attrId == 'delivstore'){
                                    $e.attr({
                                        'id' : 'og_delivstore',
                                        'data-ogdelv-ori': attrId,
                                        'name': 'og_delivstore'
                                    })
                                }
                            });

                        } else {
                            OGDelvScCustom.__SC_ORI_ELEMENT_TYPE = 'SELECT';
                            //배송업체태그타입 기록
                            $oriDelv = $oriDelvItems;
                            OGDelvScCustom.__SC_ORI_ELEMENT = $oriDelv;
                            //복제요소 고유값 부여
                            $cloneDelv = OG$('<div id="og_delivcompany_area_custom"></div>');
                            $cloneDelv.html($oriDelv[0].outerHTML);
                            $cloneDelv.find('select').attr({
                                'id': 'og_delivcompany_area_custom_select',
                                'data-ogdelv-ori': 'delivcompany',
                                'name': 'og_delivcompany_area_custom'
                            });
                            $oriDelv.addClass('layout_hidden');
                            $cloneDelv.insertAfter($oriDelv);
                            OGDelvScCustom.__SC_CLONE_ELEMENT = $cloneDelv.find('select');
                        }
                    }
                } else {
                    console.log('배송 업체 선택 영역 없음');
                    return false;
                }

                OGDelvScCustom.__SC_CLONE_ELEMENT_VIEW_TYPE = 'RADIO';
                if (OGDelvScCustom.__SC_ORI_ELEMENT_TYPE == 'RADIO') {
                    //radio버튼 형태로 출력
                } else {
                    var test = '';
                    OGDelvScCustom.__SC_CLONE_ELEMENT.find('option').each(function() {
                        let $option = OG$(this);
                        let value = $option.val();
                        let text = $option.text();
                        let isSelected = ($option.is(':selected')) ? 'checked' : '';
                        let $inputWrap = '<div class="ec-base-label"><span class="inputRadio"><input type="radio" id="og_delivcompany_area_custom_radio_' + value + '" name="og_delivcompany_area_custom" ' + isSelected + ' value="' + value + '">';
                        $inputWrap += '<label for="og_delivcompany_area_custom_radio_' + value + '"></label></span><label for="og_delivcompany_area_custom_radio_' + value + '">' + text + '</label></div>';
                        test += $inputWrap;
                    });

                    OGDelvScCustom.__SC_CLONE_ELEMENT.addClass('layout_hidden');
                    OGDelvScCustom.__SC_CLONE_ELEMENT.closest('#og_delivcompany_area_custom').append(OG$(test));
                    OG$('#og_delivcompany_area_custom').find('input').on('change', function() {
                        
                        if (OG$(this).is(':checked')) {
                            var value = OG$(this).val();
                            OG$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('option[value="' + value + '"]').prop('checked', true);
                            OG$(OGDelvScCustom.__SC_CLONE_ELEMENT).val(value).trigger('change');
                        }
                    });
                }

                $('#og_delivcompany_area_custom .ec-base-label:eq(0), #og_delivcompany_area_custom .ec-base-label:eq(1)').wrapAll('<div class="wrap1"></div>');
                //$('#og_delivcompany_area_custom .ec-base-label:eq(3), #og_delivcompany_area_custom .ec-base-label:eq(4)').wrapAll('<div class="wrap2"></div>');
                $('#og_delivstore').closest('.ec-base-label').wrapAll('<div class="wrap2"></div>')



            }
        )();

        (sameAddrElementFunc = function() {
                /**
                 * 회원정보/새로운 배송지
                 */
                let $sameAddr = (OG$('input[id="sameaddr0"]').siblings('input[name="sameaddr"]').length == 0) ? OG$('input[id="sameaddr0"]').parent().parent() : OG$('input[id="sameaddr0"]').parent();
                let $sameAddrClone = $sameAddr.clone();

                $sameAddrClone.find('#btn_shipp_addr').remove();
                $sameAddrClone.append($sameAddr.find('#btn_shipp_addr'));
                //주소록 보기 버튼 / 복제요소로 동작 시 정상 동작하지 않아 삭제하고 원본 요소를 끌어옴
                let layoutChange = ($sameAddrClone.find('input').first().siblings('input').length > 0) ? true : false;
                //레이아웃 변경 여부

                $sameAddrClone.find('input, label').each(function(i, e) {
                    var $e = OG$(e);
                    var tag = e.tagName;
                    var attrId = $e.attr('id');
                    var attrFor = $e.attr('for');
                    if (typeof attrId !== 'undefined') {
                        if (attrId.indexOf('recent') == -1) {
                            $e.attr({
                                'id': 'ogdelv_custom_' + attrId,
                                'data-ogdelv-ori': attrId,
                                'name': 'ogdelv_custom_sameaddr'
                            });
                            if (layoutChange && tag == 'INPUT') {
                                $e.wrap('<div class="ec-base-label"></div>');
                                $sameAddrClone.find('label[for="ogdelv_custom_' + attrFor + '"]').insertAfter($e);
                            }
                        }
                    }
                    if (typeof attrFor !== 'undefined') {
                        if (attrFor.indexOf('recent') == -1) {
                            $e.attr({
                                'for': 'ogdelv_custom_' + attrFor,
                                'data-ogdelv-ori': attrFor,
                                'name': 'ogdelv_custom_sameaddr'
                            });
                            if (layoutChange && tag == 'INPUT') {
                                $e.wrap('<div class="ec-base-label"></div>');
                                $sameAddrClone.find('label[for="ogdelv_custom_' + attrFor + '"]').insertAfter($e);
                            }
                        }
                    }
                });
                $sameAddr.addClass('layout_hidden');
                $sameAddrClone.insertAfter($sameAddr);

                /**
                 * 최근배송지 목록들
                 * 최근배송지 열려있으면 그거 우선 주소 입력해줌.
                 */
                    //탭이 아닌 input 나열 형태일때
                let $RecentDelivery = OG$('.ec-shop-RecentDelivery');

                if ($RecentDelivery.hasClass('layout_hidden') == false && OG$('.ogdelv_custom_recent_delivery').length == 0) {
                    let $RecentDeliveryClone = OG$('<div class="ogdelv_custom_recent_delivery recent"></div>');
                    $RecentDeliveryClone.html($RecentDelivery.html());
                    $RecentDelivery.addClass('layout_hidden');
                    $RecentDeliveryClone.insertAfter($RecentDelivery);
                    if ($RecentDelivery.length !== 1) {
                        $sameAddr.find('.ogdelv_custom_recent_delivery').remove();
                        $sameAddrClone.find('.ec-shop-RecentDelivery').remove();
                    }
                    let layoutChange = ($RecentDeliveryClone.find('input').first().siblings('input').length > 0) ? true : false;
                    //레이아웃 변경 여부
                    $RecentDeliveryClone.find('input, label').each(function(i, e) {
                        var $e = OG$(e);
                        var tag = e.tagName;
                        var attrId = $e.attr('id');
                        var attrFor = $e.attr('for');
                        if (typeof attrId !== 'undefined') {
                            $e.attr({
                                'id': 'ogdelv_custom_' + attrId,
                                'data-ogdelv-ori': attrId,
                                'name': 'ogdelv_custom_recent_delivery_info'
                            });
                        }
                        if (typeof attrFor !== 'undefined') {
                            $e.attr({
                                'for': 'ogdelv_custom_' + attrFor,
                                'data-ogdelv-ori': attrFor
                            });
                        }
                        if (layoutChange && tag == 'INPUT') {
                            $e.wrap('<div class="ec-base-label"></div>');
                            $RecentDeliveryClone.find('label[for="ogdelv_custom_' + attrFor + '"]').insertAfter($e);
                        }
                    });
                }

                if ($RecentDelivery.find('input:checked').length > 0) {
                    OG$('#ogdelv_custom_' + $RecentDelivery.find('input:checked').attr('id')).prop('checked', true).trigger('change');
                }
                if ($sameAddr.find('input[id*="sameaddr"]:checked').length > 0) {
                    OG$('#ogdelv_custom_' + $sameAddr.find('input[id*="sameaddr"]:checked').attr('id')).prop('checked', true).trigger('change');
                }

                let $RecentDeliveryClone = OG$('.ogdelv_custom_recent_delivery');

                setTimeout(function() {
                    if (OG$('#ec-shippingInfo-recentAddress').length > 0) {
                        if (EC$('input[name=rzipcode1]').val() == '' && OG$('#ec-shippingInfo-recentAddress').is(':visible')) {
                            EC$('.shippingList > li:first-child').find('.choice input[id^="ec-shippingInfo-recentAddressList-choice-select-"]').trigger('click');
                        }
                    }
                }, 500);

                //배송지 목록
                OG$('.shippingList > li').each(function() {
                    let $button = OG$(this).find('button');
                    let input = OG$(this).find('input');
                    let $bClone = $button.clone();
                    $bClone.attr('id', 'ogdelv_custom_' + $button.attr('id')).attr('data-ogdelv-ori', $button.attr('id'));
                    let $inputClone = input.clone();
                    $inputClone.attr('id', 'ogdelv_custom_' + input.attr('id')).attr('data-ogdelv-ori', input.attr('id'));
                    $bClone.insertAfter($button);
                    $inputClone.insertAfter(input);
                    $button.addClass('layout_hidden');
                    input.addClass('layout_hidden');
                    EC$($bClone).on('click', function() {
                        if (EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input[value="' + OGDelvScCustom.__DELV_TODAY_SC_NUMBER + '"]').is(':checked') || EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).val() == OGDelvScCustom.__DELV_TODAY_SC_NUMBER) {
                            let callback = function(res) {
                                EC$('#' + $bClone.attr('data-ogdelv-ori')).trigger('click');
                                setTimeout(function() {
                                    OG$('#ogdelv_custom_sameaddr0').prop('checked', false);
                                    OG$('#ogdelv_custom_sameaddr1').prop('checked', true);
                                    OG$('#ogdelv_custom_ec-jigsaw-tab-shippingInfo-recentAddress').removeClass('selected');
                                    OG$('#ogdelv_custom_ec-jigsaw-tab-shippingInfo-newAddress').addClass('selected');
                                }, 400);
                            };
                            OGDelvScCustom.validAllCheck(callback, $bClone.closest('.xans-order-deliverylist').find('[class^="ec-shippingInfo-recentAddressList-zipcode-"]').text());
                        } else {
                            EC$('#' + $bClone.attr('data-ogdelv-ori')).trigger('click');
                            setTimeout(function() {
                                OG$('#ogdelv_custom_sameaddr0').prop('checked', false);
                                OG$('#ogdelv_custom_sameaddr1').prop('checked', true);
                                OG$('#ogdelv_custom_ec-jigsaw-tab-shippingInfo-recentAddress').removeClass('selected');
                                OG$('#ogdelv_custom_ec-jigsaw-tab-shippingInfo-newAddress').addClass('selected');
                            }, 400);
                        }
                    });
                    EC$($inputClone).on('change', function() {
                        if ($inputClone.is(':checked')) {
                            if (EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input[value="' + OGDelvScCustom.__DELV_TODAY_SC_NUMBER + '"]').is(':checked') || EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).val() == OGDelvScCustom.__DELV_TODAY_SC_NUMBER) {
                                let callback = function(res) {
                                    EC$('#' + $inputClone.attr('data-ogdelv-ori')).trigger('click');
                                };
                                OGDelvScCustom.validAllCheck(callback, $inputClone.closest('.xans-order-deliverylist').find('[class^="ec-shippingInfo-recentAddressList-zipcode-"]').text());
                            } else {
                                EC$('#' + $inputClone.attr('data-ogdelv-ori')).trigger('click');
                            }
                        }
                    });
                });

                //회원 정보와 동일 / 새로운 배송지 등 클릭 시 동작 이벤트
                OG$('input[name="ogdelv_custom_sameaddr"]').on('change', function() {
                    var $input = OG$(this);
                    var id = $input.attr('id');
                    if ($input.is(':checked')) {
                        OG$('input[name="ogdelv_custom_recent_delivery_info"]').prop('checked', false).trigger('change');
                        if (EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input[value="' + OGDelvScCustom.__DELV_TODAY_SC_NUMBER + '"]').is(':checked') || EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).val() == OGDelvScCustom.__DELV_TODAY_SC_NUMBER) {
                            let callback = function(res) {
                                if (res) {
                                    EC$('#' + $input.attr('data-ogdelv-ori')).trigger('click');
                                }
                            };
                            if (id.indexOf('sameaddr0') > -1) {
                                if ($input.next().text().indexOf('회원') > -1) {
                                    if (typeof OGDelvScCustom['memberInfo'] === 'undefined') {
                                        var sUrl = '/exec/front/order/Formmemberinfo/';
                                        EC$.ajax({
                                            type: 'post',
                                            url: sUrl,
                                            success: function(response) {
                                                AuthSSLManager.weave({
                                                    'auth_mode': 'decryptClient',
                                                    //mode
                                                    'auth_string': response,
                                                    //auth_string
                                                    'auth_callbackName': 'OGDelvScCustom.getMemberAddr()'//callback function
                                                });
                                            },
                                            complete: function() {
                                                setTimeout(function() {
                                                    OGDelvScCustom.validAllCheck(callback, OGDelvScCustom['memberInfo'].ozipcode1);
                                                }, 500);
                                            }
                                        });
                                    } else {
                                        OGDelvScCustom.validAllCheck(callback, OGDelvScCustom['memberInfo'].ozipcode1);
                                    }
                                } else if ($input.next().text().indexOf('주문자') > -1) {
                                    OGDelvScCustom.validAllCheck(callback, OG$('#ozipcode1').val());
                                }
                            } else {
                                OGDelvScCustom.validAllCheck(callback, '');
                            }
                        } else {
                            EC$('#' + $input.attr('data-ogdelv-ori')).trigger('click');
                        }
                    }
                });

                $RecentDeliveryClone.find('input').on('change', function() {
                    var $e = OG$(this);
                    var $origin = EC$('#' + OG$(this).attr('data-ogdelv-ori'));
                    var value = OG$(this).val();
                    if ($e.is(':checked')) {
                        OG$('input[name="ogdelv_custom_sameaddr"]').prop('checked', false).trigger('change');
                        if (EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input[value="' + OGDelvScCustom.__DELV_TODAY_SC_NUMBER + '"]').is(':checked') || EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).val() == OGDelvScCustom.__DELV_TODAY_SC_NUMBER) {
                            let callback = function() {
                                $origin.trigger('click');
                            };
                            OGDelvScCustom.getDeliveryList(value).then(function(res) {
                                OGDelvScCustom.validAllCheck(callback, res);
                            });
                        } else {
                            $origin.trigger('click');
                        }
                    }
                });

            }
        )();

        /**
         * 결제버튼
         */
        (paymentElementFunc = function() {
                let findPayMentButton = EC$('#btn_payment');
                EC$('#btn_payment').off('click');
                function delvPrevPayment() {
                    return new Promise(function(resolve, reject) {
                            if (EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input[value="' + OGDelvScCustom.__DELV_TODAY_SC_NUMBER + '"]').is(':checked') || EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).val() == OGDelvScCustom.__DELV_TODAY_SC_NUMBER) {
                                let callback = function(res) {
                                    if (res === 'area-pass') {
                                        if (EC$(OGDelvScCustom.__SC_ORI_ELEMENT).find('input[value="' + OGDelvScCustom.__DELV_TODAY_SC_NUMBER + '"]').is(':checked') === false || EC$(OGDelvScCustom.__SC_ORI_ELEMENT).val() != OGDelvScCustom.__DELV_TODAY_SC_NUMBER) {
                                            OGDelvScCustom.todyDelvRealSelect();
                                        }
                                    }
                                    resolve();
                                };
                                OGDelvScCustom.validAllCheck(callback);
                            } else {
                                resolve();
                            }
                        }
                    );
                }
                OG_orderBaseFunc.__OG_DEFAULT_VALUE_ORDERFORM_PAYMENT_BEFORE_FUNCTION = delvPrevPayment;
            }
        )();

        /**
         * 탭 제어
         */
        (addrTabElementFunc = function() {
                let $oriTab = OG$('#ec-jigsaw-tab-shippingInfo');
                $oriTab.hide();
                $oriTab.find('li').each(function() {
                    let $li = OG$(this).clone();
                    let id = $li.attr('id');
                    $li.attr('id', 'ogdelv_custom_' + id).attr('data-ogdelv-ori', id);
                    OG$($li).insertAfter(OG$(this));
                    OG$(this).html('');
                    OG$(this).addClass('layout_hidden');
                    $li.on('click', function() {
                        if (EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input[value="' + OGDelvScCustom.__DELV_TODAY_SC_NUMBER + '"]').is(':checked') || EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).val() == OGDelvScCustom.__DELV_TODAY_SC_NUMBER) {
                            let callback = function(res) {
                                if (res) {
                                    $li.addClass('selected');
                                    $li.siblings().removeClass('selected');
                                    EC$('#' + $li.attr('data-ogdelv-ori')).trigger('click');
                                }
                            };
                            if (id == 'ec-jigsaw-tab-shippingInfo-newAddress') {
                                if (typeof OGDelvScCustom['memberInfo'] === 'undefined') {
                                    var sUrl = '/exec/front/order/Formmemberinfo/';
                                    EC$.ajax({
                                        type: 'post',
                                        url: sUrl,
                                        success: function(response) {
                                            AuthSSLManager.weave({
                                                'auth_mode': 'decryptClient',
                                                //mode
                                                'auth_string': response,
                                                //auth_string
                                                'auth_callbackName': 'OGDelvScCustom.getMemberAddr()'//callback function
                                            });
                                            setTimeout(function() {
                                                OGDelvScCustom.validAllCheck(callback, OGDelvScCustom['memberInfo'].ozipcode1);
                                            }, 500);
                                        }
                                    });
                                } else {
                                    OGDelvScCustom.validAllCheck(callback, OGDelvScCustom['memberInfo'].ozipcode1);
                                }
                                OG$('#ogdelv_custom_sameaddr0').prop('checked', true);
                                OG$('#ogdelv_custom_sameaddr1').prop('checked', false);
                            } else {
                                OGDelvScCustom.validAllCheck(callback, EC$('.shippingList input[id^="ec-shippingInfo-recentAddressList-choice-select-"]:checked').closest('.description').find('[class^="ec-shippingInfo-recentAddressList-zipcode-"]').text());
                            }
                        } else {
                            $li.addClass('selected');
                            $li.siblings().removeClass('selected');
                            EC$('#' + $li.attr('data-ogdelv-ori')).trigger('click');
                        }
                    });
                });
            }
        )();




        EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('ul.ec-base-help').addClass('displaynone');
        EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('#og_delivstore').on('change',function(){
            let $e = EC$(this);
            let value = $e.val();
            let index = $e.find('option[value="'+value+'"]').index();
            EC$(topDocument).find(OGDelvScCustom.__SC_ORI_ELEMENT).find('#delivstore').prop('checekd',true).val(value).trigger('change');
            setTimeout(function(){
                if($('#ogdelv_custom_delivcompany_store').is(':checked')){
                    OGDelvScCustom.excute('store');
                }else{
                    OGDelvScCustom.excute();
                }
                OG$('.og_store_pickup_desc').find('dl').eq(index).addClass('selected').siblings().removeClass('selected');
            },300);
        });
        OG$('#ogdelv_custom_sameaddr1').prop('checked', true);

    },

    getCondition: function() {
        /**
         * 관리자 설정값에 넣은 당일배송 옵션의 조건들을 가져온다
         * 1차 완료
         */
        let delvOptionChk = false;
        OG$('#deliv_company_shipping_info').html('');
        EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).append('<div class="og_delv_desc"></div>');
        Object.keys(aShippingCompanyInfo).forEach(function(i) {
            let sc_index = i;
            let sc_detail = aShippingCompanyInfo[i];
            let sc_name = sc_detail.sc_name;
            let basicCode = sc_detail.basic_code;
            let delvSc = '';
            let delvBaicPrc = '';
            let delvDay = '';

            sc_detail.area_name_to_text = 'T';
            //설명 텍스트 형태로 출력 cf.버튼
            if (sc_name.indexOf('오늘도착') > -1) {
                delvOptionChk = true;
                //당일배송 이름(시스템 출력), 당일배송 옵션 고유 넘버
                OGDelvScCustom.__DELV_TODAY_SC_NUMBER = i;
                OGDelvScCustom.__DELV_TODAY_SC_NAME = sc_name;
                //당일배송 신청 가능 시간
                // let avail_order_time = sc_detail.avail_order_time;
                // if (avail_order_time == '') {
                //     OGDelvScCustom.__DELV_TODAY_SC_AVAIL_ORDER_TIME_START = '00:00';
                //     OGDelvScCustom.__DELV_TODAY_SC_AVAIL_ORDER_TIME_END = '24:00';
                // } else {
                //     OGDelvScCustom.__DELV_TODAY_SC_AVAIL_ORDER_TIME_START = avail_order_time.split('~')[0].trim();
                //     OGDelvScCustom.__DELV_TODAY_SC_AVAIL_ORDER_TIME_END = avail_order_time.split('~')[1].trim();
                // }
                //당일배송 신청 가능 지역
                let availArea = [];
                let arearesult = sc_detail.area_name.split(')').reduce(function(acc, e, i, arr) {
                    if (e.trim() != '') {
                        if (e.substr(0, 1) == ',') {
                            e = e.split(',')[1].split('(')[0];
                        } else {
                            e = e.split('(')[0];
                        }
                        e = OG_util.removeNumbFunc(e);
                        acc.push(e);
                        return acc;
                    } else {
                        return acc;
                    }
                }, []);
                OGDelvScCustom.__DELV_TODAY_SC_AVAIL_AREAS = arearesult;
                //당일배송 관련 설명
                let detailInfo = sc_detail.company_shipping_info.split('<br/>');
                let result = detailInfo.reduce(function(acc, e, i, arr) {
                    e = e.replace(/(\r\n|\n|\r)/gm, "");
                    if (e.trim().substr(0, 1) !== '!') {
                        if (e != '') {
                            e = e + '<br />';
                            acc.push(e);
                            return acc;
                        } else {
                            return acc;
                        }
                    } else {
                        let chkType = e.trim().split(':');
                        let chkTypeName = chkType[0].slice(1).trim();
                        let chkTypeDetail = chkType[1].trim();
                        switch (chkTypeName) {
                            case '배송업체명':
                                OGDelvScCustom.__DELV_TODAY_SC_NAME = chkTypeDetail;
                                delvSc = chkTypeDetail;
                                aShippingCompanyInfo[sc_index].sc_name = chkTypeDetail;
                                break;
                            case '지역선택불가시문구':
                                OGDelvScCustom.__DELV_TODAY_SC_FAIL_ALERT_AREA_TXT = chkTypeDetail;
                                break;
                            case '시간선택불가시문구':
                                OGDelvScCustom.__DELV_TODAY_SC_FAIL_ALERT_TIME_TXT = chkTypeDetail;
                                break;
                            case '구우편번호선택시문구':
                                OGDelvScCustom.__DELV_TODAY_SC_FAIL_ALERT_ZIPCODE_TXT = chkTypeDetail;
                                break;
                            case '기본배송값':
                                OGDelvScCustom.__DELV_TODAY_SC_PRC = chkTypeDetail;
                                delvBaicPrc = chkTypeDetail;
                                break;
                            case '예상수령일':
                                delvDay = chkTypeDetail;
                                break;
                        }
                        return acc;
                    }
                }, []);
                OGDelvScCustom.__DELV_TODAY_INFO_TXT = result.join('');
                aShippingCompanyInfo[OGDelvScCustom.__DELV_TODAY_SC_NUMBER].company_shipping_info = OGDelvScCustom.__DELV_TODAY_INFO_TXT;
                aShippingCompanyInfo[OGDelvScCustom.__DELV_TODAY_SC_NUMBER].sc_name = OGDelvScCustom.__DELV_TODAY_SC_NAME;
                aShippingCompanyInfo[sc_index].company_shipping_info = result;
                //배송옵션 선택 시 하단 노출 텍스트에서 정보용 텍스트 제거위함
            } else {
                if (typeof sc_detail.company_shipping_info !== 'undefined') {
                    let detailInfo = sc_detail.company_shipping_info.split('<br/>');
                    let result = detailInfo.reduce(function(acc, e, i, arr) {
                        e = e.replace(/(\r\n|\n|\r)/gm, "");
                        if (e.trim().substr(0, 1) !== '!') {
                            if (e != '') {
                                e = e + '<br />';
                                acc.push(e);
                                return acc;
                            } else {
                                return acc;
                            }
                        } else {
                            let chkType = e.trim().split(':');
                            let chkTypeName = chkType[0].slice(1).trim();
                            let chkTypeDetail = chkType[1].trim();
                            switch (chkTypeName) {
                                case '배송업체명':
                                    delvSc = chkTypeDetail;
                                    aShippingCompanyInfo[sc_index].sc_name = chkTypeDetail;
                                    break;
                                case '기본배송값':
                                    delvBaicPrc = chkTypeDetail;
                                    break;
                                case '예상수령일':
                                    delvDay = chkTypeDetail;
                                    break;
                            }
                            return acc;
                        }
                    }, []);
                    aShippingCompanyInfo[sc_index].company_shipping_info = result;
                    //배송옵션 선택 시 하단 노출 텍스트에서 정보용 텍스트 제거위함
                }else{
                    let storePickupData = aShippingCompanyInfo[sc_index];
                }
            }

            let fixedHtml = '<span class="fixed_txt">';
            if (delvBaicPrc != '') {
                if (delvBaicPrc.indexOf('**') > -1) {
                    let chkNum = 1;
                    (testreplace = function() {
                            if (chkNum % 2 == 0) {
                                delvBaicPrc = delvBaicPrc.replace('**', '</b>');
                            } else {
                                delvBaicPrc = delvBaicPrc.replace('**', '<b>');
                            }
                            chkNum++;
                            if (delvBaicPrc.indexOf('**') !== -1) {
                                testreplace();
                            }
                        }
                    )();
                }
                var txt = '';
                if (sc_name.indexOf('오늘도착') == -1) {
                    var prc = String(OG_DELV_FREE_STANDARD_VALUE).replace(/0/g, '');
                    if (prc.length == 1 && String(OG_DELV_FREE_STANDARD_VALUE).length == 5) {
                        prc = prc + '만원';
                    } else {
                        prc = OG_util.comma(OG_DELV_FREE_STANDARD_VALUE);
                    }
                }
                fixedHtml += '<span class="list basic_delv_prc"><span class="title">배송비</span><span class="desc"><span class="basic">' + OG_util.comma(delvBaicPrc) + '</span>' + txt + '</span></span>';
            }
            if (delvDay != '') {
                let chkNum = 1;
                delvDay = delvDay.replace(/\/\//g, '<br>');
                (testreplace = function() {
                        if (chkNum % 2 == 0) {
                            delvDay = delvDay.replace('**', '</b>');
                        } else {
                            delvDay = delvDay.replace('**', '<b>');
                        }
                        chkNum++;
                        if (delvDay.indexOf('**') !== -1) {
                            testreplace();
                        }
                    }
                )();
                fixedHtml += '<span class="list basic_delv_day"><span class="title">예상수령일</span><span class="desc">' + delvDay + '</span></span>';
            }
            if(OGDelvScCustom.__DELV_TODAY_SC_AVAIL_ORDER_TIME_START != null){
                fixedHtml += '<span class="list basic_delv_time"><span class="title">주문가능시간</span><span class="desc">' + OGDelvScCustom.__DELV_TODAY_SC_AVAIL_ORDER_TIME_START + ' ~ ' + OGDelvScCustom.__DELV_TODAY_SC_AVAIL_ORDER_TIME_END + '</span></span>';
            }

            if(OGDelvScCustom.__DELV_TODAY_SC_AVAIL_AREAS !== null){
                let text = OGDelvScCustom.__DELV_TODAY_SC_AVAIL_AREAS.join(',');
                fixedHtml += '<span class="list basic_delv_info"><span class="title">배송가능지역</span><span class="desc">' + text + '</span></span>';
            }


            if(typeof aShippingCompanyInfo[sc_index].company_shipping_info !== 'undefined'){
                let chkNum = 1;
                let text = aShippingCompanyInfo[sc_index].company_shipping_info;
                if(text.length > 0){
                    text = text.join('');
                    (testreplace = function() {
                            if (chkNum % 2 == 0) {
                                text = text.replace('**', '</b>');
                            } else {
                                text = text.replace('**', '<b>');
                            }
                            chkNum++;
                            if (text.indexOf('**') !== -1) {
                                testreplace();
                            }
                        }
                    )();
                    fixedHtml += '<span class="list basic_delv_info"><span class="title">배송안내</span><span class="desc">' + text + '</span></span>';
                }
            }
            fixedHtml += '</span>';
            let $fixedHtml = OG$(fixedHtml);

            if (OGDelvScCustom.__SC_ORI_ELEMENT_TYPE == 'RADIO') {
                if (typeof OG$(OGDelvScCustom.__SC_ORI_ELEMENT).find('input:checked').val() !== 'undefined') {
                    if (delvSc != '') {
                        var findId = EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input[value="' + sc_index + '"]').attr('id');
                        EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('label[for="' + findId + '"]').text(delvSc);
                        //$fixedHtml.insertAfter(EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('label[for="' + findId + '"]'));
                        $fixedHtml.attr('data-ogdelv-id', sc_index);
                        EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('.og_delv_desc').append($fixedHtml);
                    }
                } else {
                    return false;
                }
            } else {
                if (typeof OG$(OGDelvScCustom.__SC_ORI_ELEMENT).val() !== 'undefined') {
                    if (delvSc != '') {
                        EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('option[value="' + sc_index + '"]').text(delvSc);
                        EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).parent().append($fixedHtml);
                        EC$('#og_delivcompany_area_custom').find('label[for=og_delivcompany_area_custom_radio_' + sc_index + ']').text(delvSc);
                        EC$('#og_delivcompany_area_custom').find('label[for=og_delivcompany_area_custom_radio_' + sc_index + ']').parent().append($fixedHtml);
                    }
                } else {
                    return false;
                }
            }
        });

        if (delvOptionChk == false) {//당일배송옵션없음
        } else {
        }
        OG$('#og_delivcompany_area_custom')[0]['OGDelvScCustom'] = OGDelvScCustom;
        if (OGDelvScCustom.__SC_ORI_ELEMENT_TYPE == 'RADIO') {
            if (typeof OG$(OGDelvScCustom.__SC_ORI_ELEMENT).find('input:checked').val() !== 'undefined') {
                OGDelvScCustom.__SC_SELECTED_NUMBER = OG$(OGDelvScCustom.__SC_ORI_ELEMENT).find('input:checked').val();
                EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input[value="' + OGDelvScCustom.__SC_SELECTED_NUMBER + '"]').prop('checked', true);
            } else {
                return false;
            }
        } else {
            if (typeof OG$(OGDelvScCustom.__SC_ORI_ELEMENT).val() !== 'undefined') {
                OGDelvScCustom.__SC_SELECTED_NUMBER = OG$(OGDelvScCustom.__SC_ORI_ELEMENT).val();
                EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('option[value="' + OGDelvScCustom.__SC_SELECTED_NUMBER + '"]').prop('checked', true);
                EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).val(OGDelvScCustom.__SC_SELECTED_NUMBER).trigger('change');
            } else {
                return false;
            }
        }

        /*if (OGDelvScCustom.__DELV_TODAY_SC_NUMBER !== null) {

            if (OG$('#og_delivcompany_area_custom').children('label[for="ogdelv_custom_delivcompany1"]').length > 0) {
                var el = OG$('#og_delivcompany_area_custom').children('label[for="ogdelv_custom_delivcompany1"]')[0];
                var el2 = OG$('#og_delivcompany_area_custom').children('label[for="ogdelv_custom_delivcompany1"]').prev();
                var el3 = OG$('#og_delivcompany_area_custom').children('label[for="ogdelv_custom_delivcompany1"]').next();
                var displayChk = (el !== null) ? ((el.style.display === 'none') ? false : true) : false;
                var hiddenEndTime = (typeof window['OG_DELV_TODAY_OPEN_DAY'] !== 'undefined') ? window['OG_DELV_TODAY_OPEN_DAY'] : OG_TODAY_CHK;
                var hiddenStartTime = (typeof window['OG_DELV_TODAY_CLOSE_DAY'] !== 'undefined') ? window['OG_DELV_TODAY_CLOSE_DAY'] : OG_TODAY_CHK;
                if (OG_commonCustom.timerDisplay(el, displayChk, hiddenEndTime, hiddenStartTime) == false) {
                    el2.hide();
                    el3.hide();
                    OG$('#lShippingCompanyLists').removeClass('displaynone').addClass('layout_hidden');
                } else {
                    OG$('#lShippingCompanyLists').addClass('on');
                }
            } else {
                var el = OG$('#lShippingCompanyLists')[0];
                var displayChk = (el !== null) ? ((el.style.display === 'none') ? false : true) : false;
                var hiddenEndTime = (typeof window['OG_DELV_TODAY_OPEN_DAY'] !== 'undefined') ? window['OG_DELV_TODAY_OPEN_DAY'] : OG_TODAY_CHK;
                var hiddenStartTime = (typeof window['OG_DELV_TODAY_CLOSE_DAY'] !== 'undefined') ? window['OG_DELV_TODAY_CLOSE_DAY'] : OG_TODAY_CHK;
                if (OG_commonCustom.timerDisplay(el, displayChk, hiddenEndTime, hiddenStartTime) == false) {
                    OG$('#lShippingCompanyLists').removeClass('displaynone').addClass('layout_hidden');
                } else {
                    OG$('#lShippingCompanyLists').addClass('on');
                }
            }
        } else {
            OG$('#lShippingCompanyLists').addClass('layout_hidden');
        }*/

        //스토어 픽업
        $.ajax({
            url : '/order/store_pickup_info.html',
            success : function (html) {
                let $content = '<div class="og_store_pickup_desc">' + $($(html)).find('.content').html() + '</div>';
                $('#og_delivcompany_area_custom').append($content);

                OG$('.og_store_pickup_desc').find('dl').eq(0).addClass('selected').siblings().removeClass('selected');
                OG$('.og_store_pickup_desc').append(`<div class="info_txt">
                    <strong>스마트픽업 안내</strong>
                    <ul>
                        <li>- 전산상 시간 차이에 따라 실제 매장의 재고 현황과 차이가 있을 수 있습니다.</li>
                        <li>- 스마트픽업 주문 후 유선으로 확인하신 후 매장 방문 부탁드립니다.</li>
                        <li>- 스마트픽업 주문 후 교환 및 반품을 원할시 고객센터를 통해서 접수해주시기 바랍니다.</li>
                    </ul>
                </div>`)
                EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('.og_store_pickup_desc').hide();
            }
        });


        //상품 복수개일 때 스마트픽업 감춤
        if(typeof aBasketProductOrderData !== 'undefined'){
            if(aBasketProductOrderData.length > 1){
                $('#og_delivstore').prepend('<option val="9999">선택불가</option>');

                if(! TEMPCHK){
                    $('#ogdelv_custom_delivcompany_store').parent().addClass('delvstore_disabled').next('.wrap2').addClass('delvstore_disabled');
                }

                let productNoArray = [];
                let qtyArray = [];
                aBasketProductOrderData.forEach(function(e, i){
                    productNoArray.push(e.item_code);
                    qtyArray.push(e.quantity);
                });

                $.ajax({
                    url: 'https://api.arena.co.kr/arena/store?item_code='+ productNoArray.join(',') +'&quantity=' + qtyArray.join(','),
                    method: 'GET',
                    success: function(data) {
                        let delvTodayChk = data.todayDelivery;
                        if(delvTodayChk == null) {
                            if(! TEMPCHK){
                                $('#ogdelv_custom_delivcompany1').closest('.ec-base-label').addClass('delvstore_disabled');
                                if ($('#ogdelv_custom_delivcompany1').length > 0) {
                                    $('<p class="ec-base-help">당일 배송 상품 재고가 없을 경우 일반 배송사만 선택 가능합니다.</p>').insertAfter($('#og_delivcompany_area_custom > .ec-base-help').first());
                                }
                            }
                        }
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });



                setTimeout(function(){
                    $('#og_delivcompany_area_custom > .ec-base-help').first().html(
                        '스마트픽업 서비스는 다중 상품 구매시 일반 배송사만 선택 가능합니다.' + '<br>'+ '스마트픽업 서비스 이용 희망 시 단일 상품으로 구매 해주세요.'
                    );
                    $('#og_delivcompany_area_custom > .ec-base-help').first().removeClass('displaynone');
                },300)





            }else{
                let productNoArray = [];
                let qtyArray = [];
                aBasketProductOrderData.forEach(function(e, i){
                    productNoArray.push(e.item_code);
                    qtyArray.push(e.quantity);
                });
                let urlCheck = 'https://api.arena.co.kr/arena/store?item_code='+ productNoArray.join(',') +'&quantity=' + qtyArray.join(',');
                console.log("api url:", urlCheck);

                $.ajax({
                    url: 'https://api.arena.co.kr/arena/store?item_code='+ productNoArray.join(',') +'&quantity=' + qtyArray.join(','),
                    method: 'GET',
                    success: function(data) {
                        let modifyData = data.product;
                        let storeArray = [];
                        let delvTodayChk = data.todayDelivery;
                        if(delvTodayChk == null){
                            if(! TEMPCHK){
                                $('#ogdelv_custom_delivcompany1').closest('.ec-base-label').addClass('delvstore_disabled');
                                if ($('#ogdelv_custom_delivcompany1').length > 0) {
                                    $('<p class="ec-base-help">당일 배송 상품 재고가 없을 경우 일반 배송사만 선택 가능합니다.</p>').insertAfter($('#og_delivcompany_area_custom > .ec-base-help').first());
                                }
                            }
                        }

                        if(modifyData !== false){
                            modifyData.forEach(function(e){
                                let name = e.store_name;
                                storeArray.push(name);
                                $('#og_delivstore option:contains("'+ name +'")').attr('data-text', $('#og_delivstore option:contains("'+ name +'")').text() + ' [재고 : '+ e.quantity+']');
                            })
                            $('#og_delivstore option').each(function(){
                                if(OG_util.checkAvailability(storeArray, $(this).text()) == false){
                                    if(! TEMPCHK){
                                        $(this).addClass('displaynone');
                                    }
                                }else{
                                    if(! TEMPCHK){
                                        $(this).text($(this).attr('data-text'));
                                    }
                                }
                            })
                            $('#og_delivstore').val($('#og_delivstore option:not(.displaynone)').first().val()).prop('checked',true).trigger('change');

                            if(! TEMPCHK) {
                                if ($('#og_delivstore option:not(.displaynone)').length == 0) {
                                    $('#og_delivstore').prepend('<option val="9999">선택불가</option>');
                                    $('#ogdelv_custom_delivcompany_store').parent().addClass('delvstore_disabled').next('.wrap2').addClass('delvstore_disabled');
                                }
                            }
                        }else{
                            if(! TEMPCHK) {
                                $('#og_delivstore').prepend('<option val="9999">선택불가</option>');
                                $('#ogdelv_custom_delivcompany_store').parent().addClass('delvstore_disabled').next('.wrap2').addClass('delvstore_disabled');
                            }
                        }
						
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });
            }
        }

        if($('#og_delivstore').attr('disabled') == 'disabled'){
            $('#og_delivstore').prepend('<option val="9999">선택불가</option>');
            $('#ogdelv_custom_delivcompany_store').parent().addClass('delvstore_disabled').next('.wrap2').addClass('delvstore_disabled');
        }

        OG$('#ec-jigsaw-tab-shippingInfo').css('display','');
        EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('.og_delv_desc .fixed_txt').eq(0).addClass('selected');
        OG$('#deliv_company_shipping_info').html(aShippingCompanyInfo[OGDelvScCustom.__SC_SELECTED_NUMBER].company_shipping_info);
        $('#og_delivcompany_area_custom > .ec-base-help:first-child').text($('#og_delivcompany_area_custom > .ec-base-help:first-child').text().replace('스토어픽업','스마트픽업'));
        OGDelvScCustom.__INIT_COMPLETE = true;
        
        // 롯데 동탄 임시 제거 코드 ↓
        $("#og_delivstore option[value='77']").hide();
        //엘리먼트 작성 완료

    },

    scSelect: function() {
        /**
         * 배송 옵션을 선택한다.
         */

        if (OGDelvScCustom.__SC_ORI_ELEMENT_TYPE == 'RADIO') {
            OG$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input').off().on('change', function() {
                let $input = OG$(this);
                let isChecked = $input.is(':checked');
                if (isChecked) {
                    if (OG$('#eCouponModify').is(':visible') == false) {
                        OGDelvScCustom.__IS_COUPON_SELECTED = false;
                    } else {
                        //쿠폰 선택되어 있을 경우 초기화 시켜준다.
                        CAFE24.SHOP_FRONT_ORDERFORM_COUPON.proc.initCoupon();
                        EC_SHOP_FRONT_ORDERFORM_DISPLAY.coupon.initCoupon();
                    }
                    let $oriInput = EC$('#' + $input.attr('data-ogdelv-ori'));
                    let value = $input.val();
                    if (value == OGDelvScCustom.__DELV_TODAY_SC_NUMBER) {
                        //당일배송 검증
                        //여기가 당일배송 라디오 눌렀을 때 동작하는 부분
                        OGDelvScCustom.validAllCheck();
                        console.log('당일배송 클릭됨');
                    } else {
                        OGDelvScCustom.__DELV_TODAY_SC_GET_READY_STATE_CHECK = null;
                        if($input.attr('data-ogdelv-ori').indexOf('store')>-1){
                            OGDelvScCustom.otherScSelect(value, $oriInput);
                        }else{
                            OGDelvScCustom.otherScSelect(value);
                        }
                    }
                }


                OG$('#mCafe24Order .ec-base-tab li.selected').next().trigger('click');


            });
        } else {
            OG$(OGDelvScCustom.__SC_CLONE_ELEMENT).on('change', function(e) {
                let $e = OG$(this);
                if (OG$('#eCouponModify').is(':visible') == false) {
                    OGDelvScCustom.__IS_COUPON_SELECTED = false;
                } else {
                    //쿠폰 선택되어 있을 경우 초기화 시켜준다.
                    CAFE24.SHOP_FRONT_ORDERFORM_COUPON.proc.initCoupon();
                    EC_SHOP_FRONT_ORDERFORM_DISPLAY.coupon.initCoupon();
                }
                let value = $e.val();
                if (value == OGDelvScCustom.__DELV_TODAY_SC_NUMBER) {
                    //당일배송 검증
                    OGDelvScCustom.validAllCheck();
                } else {
                    OGDelvScCustom.__DELV_TODAY_SC_GET_READY_STATE_CHECK = null;
                    OGDelvScCustom.otherScSelect(value);
                }
            });
        }



    },

    goPrevCondition: function(type) {
        /**
         * 배송옵션을 이전으로 돌린다.
         */
        if (OGDelvScCustom.__SC_ORI_ELEMENT_TYPE == 'RADIO') {
            if (type === 1) {
                EC$(topDocument).find(OGDelvScCustom.__SC_ORI_ELEMENT).find('input[value="' + OGDelvScCustom.__SC_SELECTED_NUMBER + '"]').prop('checked', true).trigger('change');
            } else {
                EC$(topDocument).find(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input[value="' + OGDelvScCustom.__SC_SELECTED_NUMBER + '"]').prop('checked', true).trigger('change');
                EC$(topDocument).find(OGDelvScCustom.__SC_ORI_ELEMENT).find('input[value="' + OGDelvScCustom.__SC_SELECTED_NUMBER + '"]').prop('checked', true).trigger('change');
            }
        } else {
            if (type === 1) {
                EC$(topDocument).find(OGDelvScCustom.__SC_ORI_ELEMENT).find('option[value="' + OGDelvScCustom.__SC_SELECTED_NUMBER + '"]').prop('checked', true).trigger('change');
                EC$(topDocument).find(OGDelvScCustom.__SC_ORI_ELEMENT).val(OGDelvScCustom.__SC_SELECTED_NUMBER).trigger('change');
            } else {
                EC$(topDocument).find(OGDelvScCustom.__SC_CLONE_ELEMENT).find('option[value="' + OGDelvScCustom.__SC_SELECTED_NUMBER + '"]').prop('checked', true).trigger('change');
                EC$(topDocument).find(OGDelvScCustom.__SC_CLONE_ELEMENT).val(OGDelvScCustom.__SC_SELECTED_NUMBER).trigger('change');
                EC$(topDocument).find(OGDelvScCustom.__SC_ORI_ELEMENT).find('option[value="' + OGDelvScCustom.__SC_SELECTED_NUMBER + '"]').prop('checked', true).trigger('change');
                EC$(topDocument).find(OGDelvScCustom.__SC_ORI_ELEMENT).val(OGDelvScCustom.__SC_SELECTED_NUMBER).trigger('change');
            }
            if (EC$(topDocument).find(OGDelvScCustom.__SC_CLONE_ELEMENT).parent().find('.ec-base-label').length > 0) {
                EC$(topDocument).find(OGDelvScCustom.__SC_CLONE_ELEMENT).parent().find('input[id="og_delivcompany_area_custom_radio_' + OGDelvScCustom.__SC_SELECTED_NUMBER + '"]').prop('checked', true).trigger('change');
            }
        }
        OGDelvScCustom.excute();
    },

    otherScSelect: function(value, el) {
        /**
         * 당일배송이 아닌 옵션을 선택한다.
         * 1차 완료
         */

        if(typeof el === 'undefined'){
            if (OGDelvScCustom.__SC_ORI_ELEMENT_TYPE == 'RADIO') {
                //if(OGDelvScCustom.__SC_SELECTED_NUMBER != EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input:checked').val()){
                OGDelvScCustom.__SC_SELECTED_NUMBER = value;
                EC$(topDocument).find(OGDelvScCustom.__SC_ORI_ELEMENT).find('input[value="' + value + '"]').prop('checked', true).trigger('change');
                //}
            } else {
                //if(OGDelvScCustom.__SC_SELECTED_NUMBER != EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).val()){
                OGDelvScCustom.__SC_SELECTED_NUMBER = value;
                EC$(topDocument).find(OGDelvScCustom.__SC_ORI_ELEMENT).find('option[value="' + value + '"]').prop('checked', true).trigger('change');
                EC$(topDocument).find(OGDelvScCustom.__SC_ORI_ELEMENT).val(value).trigger('change');
                //}
            }
            OGDelvScCustom.excute();
        }else {
            EC$(topDocument).find(OGDelvScCustom.__SC_ORI_ELEMENT).find(el).prop('checked', true).trigger('change');
            OGDelvScCustom.excute('store');
        }


    },

    excute: function(str) {
        /**
         * 옵션 선택 시 실행해야 하는 항목들이 있으면 실행한다.
         */
        if(typeof str === 'undefined'){
            setTimeout(function(){
                let checkedValue = OG$('[name="og_delivcompany_area"]:checked').val();
                EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('.og_delv_desc').find('[data-ogdelv-id="'+ checkedValue +'"]').addClass('selected').siblings().removeClass('selected');
                EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('.og_delv_desc').show();
                EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('.og_store_pickup_desc').hide();

            },300);
        }else if(str === 'store'){
            setTimeout(function(){
                EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('.og_delv_desc').hide();
                EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('.og_store_pickup_desc').show();
            },300);
        }
    },

    failAlert: function(type) {
        /**
         * alert 문구를 제어한다.
         * 1차 완료
         */
        var endTxtChk = OG_util.checkBatchimEnding(OGDelvScCustom.__DELV_TODAY_SC_NAME);
        if (type === 'area') {
            var txt = OGDelvScCustom.__DELV_TODAY_SC_FAIL_ALERT_AREA_TXT;
            var chk1 = txt.charAt(txt.indexOf('{$배송업체명}') + 8);
            var chk2 = txt.charAt(txt.indexOf('{$배송업체명}') + 9);
            var chk3 = ((chk1 === '은' || chk1 === '는') && (chk2 === '')) ? true : false;
            if (endTxtChk && chk3) {
                txt = OG_util.replaceAt(txt, txt.indexOf('{$배송업체명}') + 8, '은');
            } else if (!endTxtChk && chk3) {
                txt = OG_util.replaceAt(txt, txt.indexOf('{$배송업체명}') + 8, '는');
            }
            txt = txt.replace('{$배송업체명}', OGDelvScCustom.__DELV_TODAY_SC_NAME);
            txt = txt.replace('{$배송가능지역명}', OGDelvScCustom.__DELV_TODAY_SC_AVAIL_AREAS.join(','));
            txt = txt.replaceAll('[n]', '\n');
            return txt;
        } else if (type == 'time') {
            var txt = OGDelvScCustom.__DELV_TODAY_SC_FAIL_ALERT_TIME_TXT;
            var chk1 = txt.charAt(txt.indexOf('{$배송업체명}') + 8);
            var chk2 = txt.charAt(txt.indexOf('{$배송업체명}') + 9);
            var chk3 = ((chk1 === '은' || chk1 === '는') && (chk2 === '')) ? true : false;
            if (endTxtChk && chk3) {
                txt = OG_util.replaceAt(txt, txt.indexOf('{$배송업체명}') + 8, '은');
            } else if (!endTxtChk && chk3) {
                txt = OG_util.replaceAt(txt, txt.indexOf('{$배송업체명}') + 8, '는');
            }
            txt = txt.replace('{$배송업체명}', OGDelvScCustom.__DELV_TODAY_SC_NAME);
            txt = txt.replace('{$주문가능시작시간}', OGDelvScCustom.__DELV_TODAY_SC_AVAIL_ORDER_TIME_START);
            txt = txt.replace('{$주문가능마감시간}', OGDelvScCustom.__DELV_TODAY_SC_AVAIL_ORDER_TIME_END);
            return txt;
        } else if (type == 'zipcode') {
            var txt = OGDelvScCustom.__DELV_TODAY_SC_FAIL_ALERT_ZIPCODE_TXT;
            var chk1 = txt.charAt(txt.indexOf('{$배송업체명}') + 8);
            var chk2 = txt.charAt(txt.indexOf('{$배송업체명}') + 9);
            var chk3 = ((chk1 === '은' || chk1 === '는') && (chk2 === '')) ? true : false;
            if (endTxtChk && chk3) {
                txt = OG_util.replaceAt(txt, txt.indexOf('{$배송업체명}') + 8, '은');
            } else if (!endTxtChk && chk3) {
                txt = OG_util.replaceAt(txt, txt.indexOf('{$배송업체명}') + 8, '는');
            }
            txt = txt.replace('{$배송업체명}', OGDelvScCustom.__DELV_TODAY_SC_NAME);
            return txt;
        }
    },

    validAllCheck: function(callback, zipcode) {
        /**
         * callback 기반으로 실행
         */
        if (OGDelvScCustom.__SC_ORI_ELEMENT_TYPE == 'RADIO') {
            if (EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input[value="' + OGDelvScCustom.__DELV_TODAY_SC_NUMBER + '"]').is(':checked')) {
                validChk();
            }
        } else {
            if (EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).val() == OGDelvScCustom.__DELV_TODAY_SC_NUMBER) {
                validChk();
            }
        }
        function validChk() {
            OGDelvScCustom.validTimeCheck().then(function(res) {
                if (res.indexOf('pass') > -1) {
                    OGDelvScCustom.validAreaCheck(zipcode).then(function(res2) {
                        if (res2.indexOf('pass') > -1) {
                            OGDelvScCustom.__DELV_TODAY_SC_GET_READY_STATE_CHECK = true;
                            if (OGDelvScCustom.__SC_ORI_ELEMENT_TYPE == 'RADIO') {
                                if (EC$(topDocument).find(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input[value="' + OGDelvScCustom.__DELV_TODAY_SC_NUMBER + '"]').is(':checked')) {
                                    OGDelvScCustom.todyDelvRealSelect();
                                }
                            } else {
                                if (EC$(topDocument).find(OGDelvScCustom.__SC_CLONE_ELEMENT).val() == OGDelvScCustom.__DELV_TODAY_SC_NUMBER) {
                                    OGDelvScCustom.todyDelvRealSelect();
                                }
                            }
                            OGDelvScCustom.excute();
                            if (typeof callback !== 'undefined') {
                                callback(res2);
                            }
                            console.log('OGDelvScCustom.__DELV_TODAY_SC_GET_READY_STATE_CHECK : '+ OGDelvScCustom.__DELV_TODAY_SC_GET_READY_STATE_CHECK);
                            console.log('res2 : ' + res2);
                            console.log('callback : ' + callback);
                            console.log('모든 조건 충족');
                        } else {
                            if (res2.indexOf('fail2') > -1) {
                                alert(OGDelvScCustom.failAlert('zipcode'));
                            } else {
                                 alert(OGDelvScCustom.failAlert('area'));
                                 //alert('당일배송은 배송지를 기준으로 가능여부를 판단합니다.');
                            }
                            OGDelvScCustom.__DELV_TODAY_SC_GET_READY_STATE_CHECK = null;
                            OGDelvScCustom.goPrevCondition();
                            if (typeof callback !== 'undefined') {
                                callback(res2);
                            }
                            console.log('OGDelvScCustom.__DELV_TODAY_SC_GET_READY_STATE_CHECK : '+ OGDelvScCustom.__DELV_TODAY_SC_GET_READY_STATE_CHECK);
                            console.log('res2 : ' + res2);
                            console.log('callback : ' + callback);
                            console.log('지역 조건 에러');
                        }
                    });
                } else {
                    alert(OGDelvScCustom.failAlert('time'));
                    OGDelvScCustom.__DELV_TODAY_SC_GET_READY_STATE_CHECK = null;
                    OGDelvScCustom.goPrevCondition();
                    if (typeof callback !== 'undefined') {
                        callback(res);
                    }
                    console.log('시간 조건 에러');
                }
            });
        }
    },
    validTimeCheck: function() {
        /**
         * 가능시간인지 검증
         * 1차 완료
         */
        return new Promise(function(resolve, reject) {
                OG_util.getServerTime().then(function(servertime) {
                    let getDay = servertime[0].getDay();
                    if (getDay == 0 || getDay == 6) {
                        resolve('time-fail');
                    } else {
                        // let delvTodayStart = servertime[1] + servertime[2] + servertime[3] + OGDelvScCustom.__DELV_TODAY_SC_AVAIL_ORDER_TIME_START.split(':')[0].trim() + OGDelvScCustom.__DELV_TODAY_SC_AVAIL_ORDER_TIME_START.split(':')[1].trim();
                        // let delvTodayEnd = servertime[1] + servertime[2] + servertime[3] + OGDelvScCustom.__DELV_TODAY_SC_AVAIL_ORDER_TIME_END.split(':')[0].trim() + OGDelvScCustom.__DELV_TODAY_SC_AVAIL_ORDER_TIME_END.split(':')[1].trim();
                        // let startTimeChk = OG_util.betweenDateGapCalc(servertime[0], delvTodayStart)[0];
                        // let endTimeChk = OG_util.betweenDateGapCalc(servertime[0], delvTodayEnd)[0];
                        // if (startTimeChk < 0 && endTimeChk >= 0) {
                            resolve('time-pass');
                        // } else {
                        //     resolve('time-fail');
                        // }
                    }
                });
            }
        );
    },

    validAreaCheck: function(zipcode) {
        /**
         * 가능한 지역인지 검증
         * 1차 완료
         */
        var aParam = {};
        var sDeliveryAreaAjaxUrl = '/exec/front/order/Formcustomdeliveryarea/';
        aParam['shipping_company_id'] = OGDelvScCustom.__DELV_TODAY_SC_NUMBER;
        aParam['basic_code'] = aShippingCompanyInfo[OGDelvScCustom.__DELV_TODAY_SC_NUMBER].basic_code;
        if (typeof zipcode !== 'undefined') {
            if(zipcode == ''){
                if($('#ogdelv_custom_ec-jigsaw-tab-shippingInfo-recentAddress').hasClass('selected')){
                    aParam['zipcode'] = $('#ec-shop-deliveryInfoZipcode').text();
                    console.log('t1');
                }else{
                    aParam['zipcode'] = EC$('input[name=rzipcode1]').val();
                    console.log('t2');
                }
            }else{
                aParam['zipcode'] = zipcode;
            }
        } else {
            if($('#ogdelv_custom_ec-jigsaw-tab-shippingInfo-recentAddress').hasClass('selected')){
                aParam['zipcode'] = $('#ec-shop-deliveryInfoZipcode').text();
                console.log('t3');
            }else{
                aParam['zipcode'] = EC$('input[name=rzipcode1]').val();
                console.log('t4');
            }
        }

        var zipcode = $('#rzipcode1').val();
        var addr1 = $('#raddr1').val();
        var addr2 = $('#raddr2').val();
        setTimeout(function(){
            $('#rzipcode1').val(zipcode);
            $('#raddr1').val(addr1);
            $('#raddr2').val(addr2);
        },500);

        return new Promise(function(resolve, reject) {
                EC$.ajax({
                    type: 'POST',
                    url: sDeliveryAreaAjaxUrl,
                    data: aParam,
                    dataType: 'json',
                    success: function(data) {
                        if (aParam['zipcode'].length == 6) {
                            resolve('area-fail2');
                        } else {
                            if (data.code == 0) {
                                if (data.sAreaName == null) {
                                    resolve('area-fail');
                                } else {
                                    resolve('area-pass');
                                }
                            }
                        }
                    }
                });
            }
        );

    },

    todyDelvRealSelect: function() {
        /**
         * 오늘 배송 최종 선택
         * 1차 완료
         */
        var zipcode = $('#rzipcode1').val();
        var addr1 = $('#raddr1').val();
        var addr2 = $('#raddr2').val();
        /*setTimeout(function(){
            $('#rzipcode1').val(zipcode);
            $('#raddr1').val(addr1);
            $('#raddr2').val(addr2);
        },500);*/
        if (OGDelvScCustom.__SC_ORI_ELEMENT_TYPE == 'RADIO') {
            if (EC$(OGDelvScCustom.__SC_ORI_ELEMENT).find('input[value="' + OGDelvScCustom.__DELV_TODAY_SC_NUMBER + '"]').is(':checked') == false) {
                EC$(OGDelvScCustom.__SC_ORI_ELEMENT).find('input[value="' + OGDelvScCustom.__DELV_TODAY_SC_NUMBER + '"]').prop('checked', true).trigger('change');
            }
        } else {
            if (EC$(OGDelvScCustom.__SC_ORI_ELEMENT).val() !== OGDelvScCustom.__DELV_TODAY_SC_NUMBER) {
                EC$(OGDelvScCustom.__SC_ORI_ELEMENT).find('option[value="' + OGDelvScCustom.__DELV_TODAY_SC_NUMBER + '"]').prop('checked', true).trigger('change');
                EC$(OGDelvScCustom.__SC_ORI_ELEMENT).val(OGDelvScCustom.__DELV_TODAY_SC_NUMBER).trigger('change');
            }
        }
    },

    getMemberAddr: function(sResponse) {
        var sOutput = decodeURIComponent(sResponse);
        var aResult = JSON.parse(sOutput);
        if (typeof OGDelvScCustom['memberInfo'] === 'undefined') {
            OGDelvScCustom['memberInfo'] = {};
        }
        var oData = OGDelvScCustom['memberInfo'];
        if (aResult.result === true) {
            var data = aResult.data;
            var aPhone = data.phone1 ? data.phone1.split('-') : ['', '', ''];
            var aCell = data.phone2 ? data.phone2.split('-') : ['', '', ''];
            OGDelvScCustom['memberInfo'] = {
                //국내
                'oname': data.name,
                'ophone1_1': aPhone[0],
                'ophone1_2': aPhone[1],
                'ophone1_3': aPhone[2],
                'ophone2_1': aCell[0],
                'ophone2_2': aCell[1],
                'ophone2_3': aCell[2],
                'ozipcode1': data.zipcode,
                'ozipcode2': '',
                'oaddr1': data.addr1,
                'oaddr2': data.addr2
            };
        }
    },

    getDeliveryList: function(seq) {
        return new Promise(function(resolve, reject) {
                if (typeof OGDelvScCustom['deliveryListInfo'] === 'undefined') {
                    OGDelvScCustom['deliveryListInfo'] = {};
                }
                var oData = OGDelvScCustom['deliveryListInfo'];

                if (typeof oData[seq] === 'undefined') {
                    EC$.ajax({
                        type: 'post',
                        url: '/exec/front/Myshop/ApiAddr',
                        data: {
                            'no': seq
                        },
                        success: function(data) {
                            for (var i = 0; i < data.rtn_data.length; i++) {
                                if (data.rtn_data[i] == null || data.rtn_data[i] == 'undefined' || CAFE24.SHOP_FRONT_ORDERFORM_DATA.form.sIntraCheckout == 'T')
                                    continue;
                                var node = data.rtn_data[i];
                                if (node['ma_rcv_phone'] == null)
                                    node['ma_rcv_phone'] = '';
                                if (node['ma_rcv_mobile_no'] == null)
                                    node['ma_rcv_mobile_no'] = '';
                                var aPhone = node['ma_rcv_phone'].split('-');
                                var aMobile = node['ma_rcv_mobile_no'].split('-');
                                var sLastName = '';
                                if (node['c_receiver_last_name'] != null) {
                                    sLastName = node['c_receiver_last_name'];
                                }
                                if (CAFE24.GLOBAL_INFO.isGlobal() == false && SHOP.getLanguage() == "ko_KR") {
                                    OGDelvScCustom['deliveryListInfo'][seq] = {
                                        //국내
                                        'oname': node['ma_rcv_name'] + sLastName,
                                        'ophone1_1': aPhone[0],
                                        'ophone1_2': aPhone[1],
                                        'ophone1_3': aPhone[2],
                                        'ophone2_1': aMobile[0],
                                        'ophone2_2': aMobile[1],
                                        'ophone2_3': aMobile[2],
                                        'ozipcode1': node['ma_rcv_zipcode'].replace('-', ''),
                                        'ozipcode2': '',
                                        'oaddr1': node['ma_rcv_addr1'],
                                        'oaddr2': node['ma_rcv_addr2'],
                                        'bMainFlag': node['ma_main_flag']// T: 기본, F: 기본 아님
                                    };
                                    resolve(OGDelvScCustom['deliveryListInfo'][seq].ozipcode1);
                                } else {
                                    //f_country 변경으로 인해 배송비등 재처리됨.
                                    var sCountry = SHOP.getLanguage().split('_')[1];
                                    var sFname = node['ma_rcv_name'];
                                    var sState = node['receiver_state_en'];
                                    var sCity = node['receiver_city_en'];
                                    var aAddr1 = '';
                                    var aAddr2 = '';
                                    var sAddr1 = '';
                                    var sAddr2 = '';
                                    var aSiCiGu = '';
                                    var si_name_addr = '';
                                    var ci_name_addr = '';
                                    var gu_name_addr = '';

                                    // 기존 배송주소록에 들어가던 양식의 분기 처리가 필요 함. 주소 특이 데이터 보정 처리
                                    if (node['ma_rcv_addr1'].match(/\|/) && node['ma_rcv_addr2'].match(/\|/)) {
                                        // 기존 주소 분기 를 위한 조건
                                        if (node['country_code'] == 'JPN' || node['country_code'] == 'JP' || node['country_code'] == 'jp_JP') {
                                            //일본일때
                                            //주소2가 | 면 주소 1에서 addr1과 addr2를 분기 처리 해야 한다.
                                            if (node['ma_rcv_addr2'] == '|') {
                                                aAddr1 = node['ma_rcv_addr1'].split('|');
                                                sAddr1 = aAddr1[0];
                                                sAddr2 = aAddr1[1];
                                            } else if (node['ma_rcv_addr1'].match(/\|/) && node['ma_rcv_addr2'].match(/\|/)) {
                                                aAddr1 = node['ma_rcv_addr1'].split('|');
                                                //주소에 | 가 포함 되어 있으면
                                                aAddr2 = node['ma_rcv_addr2'].split('|');
                                                //주소에 | 가 포함 되어 있으면
                                                sAddr1 = aAddr2[1] + ' ' + aAddr2[0] + ' ' + aAddr1[0];
                                                //addr1 생성
                                                sAddr2 = aAddr1[1];
                                                //addr2 생성
                                            }
                                        } else if (EC$.inArray(node['country_code'], ['CHN', 'CN']) > -1) {
                                            //중국일때
                                            if (node['ma_rcv_addr1'].match(/\|/) && node['ma_rcv_addr2'].match(/\|/)) {
                                                aAddr1 = node['ma_rcv_addr1'].split('|');
                                                //주소에 | 가 포함 되어 있으면
                                                aAddr2 = node['ma_rcv_addr2'].split('|');
                                                //주소에 | 가 포함 되어 있으면
                                                /**
                                                 aSiCiGu = sAddr1.split(' ');//주소1의 공백으로 구분

                                                 si_name_addr = aSiCiGu[0];
                                                 ci_name_addr = aSiCiGu[1];
                                                 gu_name_addr = aSiCiGu[2];

                                                 if (sCity == '') sCity = aAddr2[0];
                                                 if (sState == '') sState = aAddr2[1];
                                                 */
                                                // 중국일 경우에 addr1 = gu_name_addr|faddress2, addr2=ci_name_addr|si_name_addr
                                                si_name_addr = $common.isNullAndUndefinedCheck(aAddr2[1]) == false ? aAddr2[1] : '';
                                                ci_name_addr = $common.isNullAndUndefinedCheck(aAddr2[0]) == false ? aAddr2[0] : '';
                                                gu_name_addr = $common.isNullAndUndefinedCheck(aAddr1[0]) == false ? aAddr1[0] : '';
                                                sAddr1 = si_name_addr + ' ' + ci_name_addr + ' ' + gu_name_addr;
                                                //addr1 생성
                                                sAddr2 = aAddr1[1];
                                                //addr2
                                            }
                                        } else if (EC$.inArray(node['country_code'], ['TWN', 'TW']) > -1) {
                                            //타이완일때
                                            if (node['ma_rcv_addr1'].match(/\s/) && node['ma_rcv_addr2'] == '|') {
                                                aAddr1 = node['ma_rcv_addr1'].split('|');
                                                //주소에 | 가 포함 되어 있으면
                                                aSiCiGu = aAddr1[0].split(' ');
                                                //|로 나눈 주소[0]의 공백으로 구분
                                                si_name_addr = $common.isNullAndUndefinedCheck(aSiCiGu[0]) == false ? aSiCiGu[0] : '';
                                                gu_name_addr = $common.isNullAndUndefinedCheck(aSiCiGu[1]) == false ? aSiCiGu[1] : '';
                                                sAddr1 = si_name_addr + ' ' + gu_name_addr;
                                                sAddr2 = aAddr1[1];
                                            } else if (node['ma_rcv_addr1'].match(/\|/) && node['ma_rcv_addr2'].match(/\|/)) {
                                                aAddr1 = node['ma_rcv_addr1'].split('|');
                                                //주소에 | 가 포함 되어 있으면
                                                aAddr2 = node['ma_rcv_addr2'].split('|');
                                                //주소에 | 가 포함 되어 있으면

                                                //타이완일 경우에 addr1 = ci_name_addr gu_name_addr|faddress2, addr2=|
                                                aSiCiGu = sAddr1.split(' ');
                                                //주소1의 공백으로 구분
                                                si_name_addr = $common.isNullAndUndefinedCheck(aSiCiGu[0]) == false ? aSiCiGu[0] : '';
                                                gu_name_addr = $common.isNullAndUndefinedCheck(aSiCiGu[1]) == false ? aSiCiGu[1] : '';
                                                sAddr1 = si_name_addr + ' ' + gu_name_addr;
                                                sAddr2 = aAddr1[1];
                                            }
                                        } else if (EC$.inArray(node['country_code'], ['VNM', 'VN', 'PH', 'PHL']) > -1) {
                                            //베트남, 필리핀 일때
                                            if (node['ma_rcv_addr1'].match(/\|/) && node['ma_rcv_addr2'].match(/\|/)) {
                                                aAddr1 = node['ma_rcv_addr1'].split('|');
                                                //주소에 | 가 포함 되어 있으면
                                                aAddr2 = node['ma_rcv_addr2'].split('|');
                                                //주소에 | 가 포함 되어 있으면
                                                // 베트남일 경우에 addr1 = gu_name_addr|faddress2, addr2=ci_name_addr|si_name_addr
                                                si_name_addr = $common.isNullAndUndefinedCheck(aAddr2[1]) == false ? aAddr2[1] : '';
                                                ci_name_addr = $common.isNullAndUndefinedCheck(aAddr2[0]) == false ? aAddr2[0] : '';
                                                gu_name_addr = $common.isNullAndUndefinedCheck(aAddr1[0]) == false ? aAddr1[0] : '';
                                                // 베트남 주소 표기 변경 : https://jira.simplexi.com/browse/ECHOSTING-339314
                                                // 베트남 기본주소 : [구] [시/군] [주]
                                                sAddr1 = gu_name_addr + ' ' + ci_name_addr + ' ' + si_name_addr;
                                                //addr2
                                                sAddr2 = aAddr2[1];
                                                //addr1 생성
                                            }
                                        } else {
                                            //기타 나라일때
                                            if (node['ma_rcv_addr1'].match(/\|/) && node['ma_rcv_addr2'].match(/\|/)) {
                                                aAddr1 = node['ma_rcv_addr1'].split('|');
                                                //주소에 | 가 포함 되어 있으면
                                                aAddr2 = node['ma_rcv_addr2'].split('|');
                                                //주소에 | 가 포함 되어 있으면
                                                sAddr1 = aAddr1[0];
                                                sAddr2 = aAddr1[1];
                                                if (sCity == '')
                                                    sCity = aAddr2[0];
                                                if (sState == '')
                                                    sState = aAddr2[1];
                                            } else {
                                                sAddr1 = node['ma_rcv_addr1'];
                                                sAddr2 = node['ma_rcv_addr2'];
                                            }
                                        }
                                    } else {
                                        //신규 주소
                                        if (EC$.inArray(SHOP.getLanguage(), ['zh_CN', 'zh_TW', 'ja_JP', 'vi_VN', 'en_PH']) > -1 || common_aAddrInfo['sIsRuleBasedAddrForm'] === 'T') {
                                            if (node['country_domain'] == 'TW' || node['country_domain'] == 'TWN') {
                                                if (common_aAddrInfo['sIsRuleBasedAddrForm'] === 'T') {
                                                    if (node['receiver_state_en'] !== '' && node['receiver_city_en'] !== '') {
                                                        sAddr1 = node['receiver_state_en'] + ' ' + node['receiver_city_en'];
                                                        sState = node['receiver_state_en'];
                                                        si_name_addr = node['receiver_state_en'];
                                                        gu_name_addr = node['receiver_city_en'];
                                                    } else {
                                                        sAddr1 = node['ma_rcv_addr1'];
                                                        aAddr1 = node['ma_rcv_addr1'].split(' ');
                                                        sState = aAddr1[0];
                                                        si_name_addr = aAddr1[0];
                                                        gu_name_addr = aAddr1[1];
                                                    }
                                                } else if (node['ma_rcv_addr1'] == '' || node['ma_rcv_addr1'] == null) {
                                                    if ($common.isNullAndUndefinedCheck(node['receiver_state_en']) == false)
                                                        si_name_addr = node['receiver_state_en'];
                                                    else
                                                        si_name_addr = '';
                                                    if ($common.isNullAndUndefinedCheck(node['receiver_city_en']) == false)
                                                        gu_name_addr = node['receiver_city_en'];
                                                    else
                                                        gu_name_addr = '';
                                                    sAddr1 = si_name_addr + ' ' + gu_name_addr;
                                                    // 배송주소록 직접등록시와 주문후 자동등록시 결과가 상이하여 예외처리 (ECQAINT-20539)
                                                    sCity = '';
                                                } else if (node['ma_rcv_addr1'].match(/\|/)) {
                                                    aAddr1 = node['ma_rcv_addr1'].split('|');
                                                    //주소에 | 가 포함 되어 있으면
                                                    if ($common.isNullAndUndefinedCheck(node['receiver_state_en']) == false)
                                                        si_name_addr = node['receiver_state_en'];
                                                    else
                                                        si_name_addr = '';
                                                    gu_name_addr = aAddr1[0];
                                                    sAddr1 = si_name_addr + ' ' + gu_name_addr;
                                                } else if (node['ma_rcv_addr1'].match(/\s/g)) {
                                                    aAddr1 = node['ma_rcv_addr1'].split(' ');
                                                    //주소에 공백이 포함 되어 있으면
                                                    if ($common.isNullAndUndefinedCheck(node['receiver_state_en']) == false)
                                                        si_name_addr = node['receiver_state_en'];
                                                    else
                                                        si_name_addr = '';
                                                    gu_name_addr = aAddr1[0];
                                                    sAddr1 = si_name_addr + ' ' + gu_name_addr;
                                                } else if (node['receiver_state_en'] != null && node['receiver_city_en'] != null && node['ma_rcv_addr1'] != '' && node['ma_rcv_addr2'] != '') {
                                                    if ($common.isNullAndUndefinedCheck(node['receiver_state_en']) == false)
                                                        si_name_addr = node['receiver_state_en'];
                                                    else
                                                        si_name_addr = '';
                                                    if ($common.isNullAndUndefinedCheck(node['receiver_city_en']) == false)
                                                        gu_name_addr = node['receiver_city_en'];
                                                    else
                                                        gu_name_addr = '';
                                                    sAddr1 = si_name_addr + ' ' + gu_name_addr + ' ' + node['ma_rcv_addr1'];
                                                } else {
                                                    if ($common.isNullAndUndefinedCheck(node['receiver_state_en']) == false)
                                                        si_name_addr = node['receiver_state_en'];
                                                    else
                                                        si_name_addr = '';
                                                    gu_name_addr = $common.isNullAndUndefinedCheck(node['ma_rcv_addr1']) == false ? node['ma_rcv_addr1'] : '';
                                                    sAddr1 = si_name_addr + ' ' + gu_name_addr;
                                                    sAddr1 = sAddr1.trim();
                                                }
                                            } else if (node['country_domain'] == 'CN' || node['country_domain'] == 'CHN' || node['country_domain'] == 'JP' || node['country_domain'] == 'JPN' || node['country_domain'] == 'VN' || node['country_domain'] == 'VNM' || node['country_domain'] == 'PH' || node['country_domain'] == 'PHL') {
                                                if (node['receiver_state_en'] != null && node['receiver_city_en'] != null) {
                                                    si_name_addr = $common.isNullAndUndefinedCheck(node['receiver_state_en']) == false ? node['receiver_state_en'] : '';
                                                    ci_name_addr = $common.isNullAndUndefinedCheck(node['receiver_city_en']) == false ? node['receiver_city_en'] : '';
                                                    gu_name_addr = $common.isNullAndUndefinedCheck(node['ma_rcv_addr1']) == false ? node['ma_rcv_addr1'] : '';
                                                    // 베트남 주소 표기 변경 : https://jira.simplexi.com/browse/ECHOSTING-339314
                                                    if (node['country_domain'] == 'VN' || node['country_domain'] == 'VNM' || node['country_domain'] == 'PH' || node['country_domain'] == 'PHL') {
                                                        sAddr1 = gu_name_addr + ' ' + ci_name_addr + ' ' + si_name_addr;
                                                    } else {
                                                        sAddr1 = si_name_addr + ' ' + ci_name_addr + ' ' + gu_name_addr;
                                                    }
                                                    sState = '';
                                                    sCity = '';
                                                } else {
                                                    si_name_addr = '';
                                                    ci_name_addr = '';
                                                    gu_name_addr = '';
                                                    sAddr1 = node['ma_rcv_addr1'];
                                                }
                                            } else {
                                                sAddr1 = node['ma_rcv_addr1'];
                                            }
                                        } else {
                                            if ($common.isNullAndUndefinedCheck(node['receiver_state_en']) == false)
                                                si_name_addr = node['receiver_state_en'];
                                            else
                                                si_name_addr = '';
                                            if ($common.isNullAndUndefinedCheck(node['receiver_city_en']) == false)
                                                ci_name_addr = node['receiver_city_en'];
                                            else
                                                ci_name_addr = '';
                                            sAddr1 = sAddr1 = node['ma_rcv_addr1'];
                                        }
                                        sAddr1 = CAFE24.UTIL.trim(sAddr1);
                                        sAddr2 = node['ma_rcv_addr2'];
                                    }
                                    var sEnglishOname1 = '';
                                    var sEnglishOname2 = '';
                                    if (node['c_receiver_name_en'] == null)
                                        node['c_receiver_name_en'] = '';
                                    if (node['c_receiver_name_en'] != '' && node['c_receiver_name_en'].match(/\|/)) {
                                        var aEnglishOname = node['c_receiver_name_en'].split('|');
                                        if (aEnglishOname[0] == 'undefined' || aEnglishOname[0] == '' || aEnglishOname[0] == undefined) {
                                            sEnglishOname1 = '';
                                        } else {
                                            sEnglishOname1 = aEnglishOname[0];
                                        }
                                        if (aEnglishOname[1] == 'undefined' || aEnglishOname[1] == '' || aEnglishOname[1] == undefined) {
                                            sEnglishOname2 = '';
                                        } else {
                                            sEnglishOname2 = aEnglishOname[1];
                                        }
                                    } else {
                                        sEnglishOname1 = node['c_receiver_name_en'];
                                    }
                                    var sPronname1 = '';
                                    var sPronname2 = '';
                                    if (node['c_receiver_name_phonetic'] == null)
                                        node['c_receiver_name_phonetic'] = '';

                                    if (node['c_receiver_name_phonetic'] != '' && node['c_receiver_name_phonetic'].match(/\|/)) {
                                        var aPronname = node['c_receiver_name_phonetic'].split('|');
                                        if (aPronname[0] == 'undefined' || aPronname[0] == '' || aPronname[0] == undefined) {
                                            sPronname1 = '';
                                        } else {
                                            sPronname1 = aPronname[0];
                                        }
                                        if (aPronname[1] == 'undefined' || aPronname[1] == '' || aPronname[1] == undefined) {
                                            sPronname2 = '';
                                        } else {
                                            sPronname2 = aPronname[1];
                                        }
                                    } else {
                                        sPronname1 = node['c_receiver_name_phonetic'];
                                    }
                                    OGDelvScCustom['deliveryListInfo'][seq] = {
                                        'f_country': node['country_domain'],
                                        'oname': sFname,
                                        'oname2': sLastName,
                                        'english_oname': sEnglishOname1,
                                        'english_oname2': sEnglishOname2,
                                        'pron_name': sPronname1,
                                        'pron_name2': sPronname2,
                                        'oaddr1': sAddr1,
                                        'oaddr2': sAddr2,
                                        'ozipcode': node['ma_rcv_zipcode'],
                                        'ocity': sCity,
                                        'ostate': sState,
                                        '__oaddr1': sAddr1,
                                        '__ocity': sCity,
                                        '__ostate': sState,
                                        'ophone1_ex1': aPhone[0],
                                        'ophone1_ex2': aPhone[1],
                                        'ophone2_ex1': aMobile[0],
                                        'ophone2_ex2': aMobile[1],
                                        'si_name_addr': si_name_addr,
                                        'ci_name_addr': ci_name_addr,
                                        'gu_name_addr': gu_name_addr,
                                        'si_name': node['si_name'],
                                        'ci_name': node['ci_name'],
                                        'gu_name': node['gu_name'],
                                        'uncheck_zipcode': node['uncheck_zipcode']
                                    };
                                }
                                resolve(OGDelvScCustom['deliveryListInfo'][seq].ozipcode);
                            }
                        }
                    });
                } else {
                    if (CAFE24.GLOBAL_INFO.isGlobal() == false && SHOP.getLanguage() == "ko_KR") {
                        resolve(oData[seq].ozipcode1);
                    } else {
                        resolve(oData[seq].ozipcode);
                    }
                }
            }
        );
    }

};



/**
 * 주문쪽 페이지 실행
 */
var OG_orderBaseFunc = {
    __OG_DEFAULT_VALUE_FUNCTION_USE: true,
    //이 함수 사용할 것인지
    __OG_DEFAULT_VALUE_DELVDISCOUNT_HIDE_FROM_DISCOUNTPRC: false,
    //총 할인금액에서 배송비 할인 내역을 제거할 것인가
    __OG_DEFAULT_VALUE_OPTION_LAYER_FUNC_DEFAULT: true,
    //옵션레이어창 여닫힘 기본 함수 사용여부
    __OG_DEFAULT_VALUE_GIFT_SOLDOUT_ALERT_TXT: '품절된 사은품입니다. 다른 사은품을 선택해주세요.',
    //사은품 품절 시 alert 문구
    __OG_DEFAULT_VALUE_ORDERFORM_MILEAGE_INFO_TXT_USE: false,
    //적립금 사용 컨디션 하단 문구로 노출(alertX)
    __OG_DEFAULT_VALUE_ORDERFORM_MILEAGE_USE_STANDARD_SETTING: 0,
    //마일리지 사용단위 설정
    __OG_DEFAULT_VALUE_ORDERFORM_DEPOSIT_INFO_TXT_USE: false,
    //예치금 사용 컨디션 하단 문구로 노출(alertX)
    __OG_DEFAULT_VALUE_ORDERFORM_DEPOSIT_USE_STANDARD_SETTING: 0,
    //예치금 사용단위 설정
    __OG_DEFAULT_VALUE_ORDERFORM_ADDRESS_FIND_LAYER_CHANGE: true,
    //주소검색레이어 변경 여부
    __OG_DEFAULT_VALUE_ORDERFORM_PAYMENT_BEFORE_FUNCTION: null,

    /**
     * 페이지 init 전 실행
     */
    initBefore: function() {
    },

    init: function() {
        if (OG_orderBaseFunc.__OG_DEFAULT_VALUE_FUNCTION_USE) {

            //기타 초기 동작
            switch (OG_PAGE_CHK) {
                case 'ORDER_BASKET':





                    $('.ec-base-prdInfo .description .info').each(function(){
                        let $e = $(this);
                        let test = $e.html();
                        if(test.indexOf('스토어픽업') > -1){
                            test = test.replace('스토어픽업', '스마트픽업');
                            $e.html(test);
                        }
                    })



                    break;
                case 'ORDER_ORDERFORM':







                    //주문서 작성 데이터 연결
                    OG_orderBaseFunc['_isLoad'] = false;
                    OG_orderBaseFunc._data =CAFE24.SHOP_FRONT_ORDERFORM_DATA;
                    OG_orderBaseFunc._common = CAFE24.SHOP_FRONT_ORDERFORM_COMMON;
                    OG_orderBaseFunc._calc = CAFE24.SHOP_FRONT_ORDERFORM_CALC;
                    OG_orderBaseFunc._display = EC_SHOP_FRONT_ORDERFORM_DISPLAY;
                    OG_orderBaseFunc._loadChkFunc = '';


                    /**
                     * 주문서 작성 변경 일어날 경우 실행
                     */
                    let playTime = 100;
                    let loadChkFunc;

                    $("body").bind("EC_ORDER_ORDERFORM_CHANGE", function(){
                        OG_orderBaseFunc.orderFormChange(playTime);
                    });


                    break;

                case 'ORDER_RESULT':


                    break;

                case 'Coupon_SelectNew':
                    break;

                default:
                    break;
            }
        }
    },

    initLast: function() {
        switch (OG_SUBCONTAINER_DATA_PAGE) {
            case 'orderBasket':
                break;

            case 'orderForm':
                break;

        }


    },

    productData: function(page) {
    },
    tablePrcExec: function(prdData) {
    },
    chkBox: function(page) {
        /**
         * 체크박스 선택 시 동작
         */
        if (page == 'orderBasket') {
        } else if (page == 'orderForm') {
        } else if (page == 'orderResult') {
        }
    },
    totalAreaView: function(page) {
        if (page == 'orderBasket') {} else if (page == 'orderForm') {} else if (page == 'orderResult') {} else {
            return false;
        }
    },
    delvPromotionHide: function(page) {
        /**
         * 할인내역에서 배송비할인 금액 감춤 설정 시 할인 내역에서 숨김
         */
        let obj = {};
        return obj;
    },
    summaryReset: function(page) {
    },

    orderFormChange: function(playTime) {
        let isLoad = OG_orderBaseFunc._isLoad;
        let loadChkFunc = OG_orderBaseFunc._loadChkFunc;
        if (isLoad == false) {
            clearTimeout(OG_orderBaseFunc._loadChkFunc);
            OG_orderBaseFunc._loadChkFunc = setTimeout(function() {
                isLoad = true;
                OG_orderBaseFunc._isLoad = true;
                OG_orderBaseFunc.totalAreaView(OG_SUBCONTAINER_DATA_PAGE);
                if (OG_orderBaseFunc.__OG_DEFAULT_VALUE_ORDERFORM_ADDRESS_FIND_LAYER_CHANGE) {
                    OG_orderBaseFunc.zipcodeConnect();
                }
                setTimeout(OGDelvScCustom.init, 500);
                
                
                // 당일배송 영역 생성되고 추가 스크립트 동작
                //$('#lShippingCompanyLists .title h2').text('상품 수령 (아래의 배송지를 먼저 입력하세요)');
                
                
                
                if (EC$('#ec-jigsaw-tab-shippingInfo-recentAddress').length > 0) {
                    OG$('#ec-jigsaw-tab-shippingInfo-recentAddress').OG_observerFunc(function() {
                        
                        if (EC$('#ec-jigsaw-tab-shippingInfo-recentAddress').hasClass('selected') == true) {
                            OG$('#recentAddress').prop('checked', true).trigger('change');
                            $('#ogdelv_custom_ec-jigsaw-tab-shippingInfo-recentAddress').addClass('selected');
                            $('#ogdelv_custom_ec-jigsaw-tab-shippingInfo-newAddress').removeClass('selected');
                        } else {
                            OG$('#newAddress').prop('checked', true).trigger('change');
                            $('#ogdelv_custom_ec-jigsaw-tab-shippingInfo-newAddress').addClass('selected');
                            $('#ogdelv_custom_ec-jigsaw-tab-shippingInfo-recentAddress').removeClass('selected');
                        }
                    }, {
                        attributes: true,
                        childList: false,
                        subtree: false
                    });
                }

                OG$('#btn_payment').on('click', function() {
                    OG_orderBaseFunc.doPayment();
                });
                OG$('select.xans-order-deliverylist').each(function() {
                    let $select = OG$(this);
                    let $selectClone = $select.clone().removeClass('xans-order-deliverylist').addClass('og_custom_deliverylist');
                    $selectClone.insertAfter($select);
                    $select.addClass('layout_hidden');
                    $selectClone.on('change', function() {
                        let value = OG$(this).val();
                        let zipcode = OG$(this).find('option[value="' + value + '"]').attr('data-zipcode');
                        let callback = function(res) {
                            EC$($select).find('option[value="' + value + '"]').prop('selected', true).trigger('change');
                            EC$($select).val(value).trigger('change');
                        };
                        if (EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).find('input[value="' + OGDelvScCustom.__DELV_TODAY_SC_NUMBER + '"]').is(':checked') || EC$(OGDelvScCustom.__SC_CLONE_ELEMENT).val() == OGDelvScCustom.__DELV_TODAY_SC_NUMBER) {
                            if (value == 'same') {
                                if (typeof OGDelvScCustom['memberInfo'] === 'undefined') {
                                    var sUrl = '/exec/front/order/Formmemberinfo/';
                                    EC$.ajax({
                                        type: 'post',
                                        url: sUrl,
                                        success: function(response) {
                                            AuthSSLManager.weave({
                                                'auth_mode': 'decryptClient',
                                                //mode
                                                'auth_string': response,
                                                //auth_string
                                                'auth_callbackName': 'OGDelvScCustom.getMemberAddr()'//callback function
                                            });
                                            setTimeout(function() {
                                                OGDelvScCustom.validAllCheck(callback, OGDelvScCustom['memberInfo'].ozipcode1);
                                            }, 500);
                                        }
                                    });
                                } else {
                                    OGDelvScCustom.validAllCheck(callback, OGDelvScCustom['memberInfo'].ozipcode1);
                                }
                            } else {
                                OGDelvScCustom.validAllCheck(callback, zipcode);
                            }
                        } else {
                            EC$($select).find('option[value="' + value + '"]').prop('selected', true).trigger('change');
                            EC$($select).val(value).trigger('change');
                        }
                    });
                });


                /*let testdata = [
                    {
                    "shopname" : "논현점_임의등록",
                    "shop_qty" : "0"
                    },
                    {
                        "shopname" : "강남점_임의등록",
                        "shop_qty" : "3"
                    },
                ];

                OG$('#delivstore option').each(function(){
                    let $e = $(this);
                    let name = $e.text();
                    testdata.forEach(function(e,i){
                        if(name == e.shopname){
                            if(e.shop_qty == '0'){
                                $e.attr('disabled','disabled');
                            }else{

                            }
                            $e.text(name + ' ('+ e.shop_qty+'개)');
                        }
                    });
                });

                OG$('body').addClass('visible');*/




                /*
                OG$('#delivstore option').each(function(){
                    let $e = $(this);
                    let name = $e.text();
                    testdata.forEach(function(e,i){
                        if(name == e.shopname){
                            if(e.shop_qty == '0'){
                                $e.attr('disabled','disabled');
                            }else{

                            }
                            $e.text(name + ' ('+ e.shop_qty+'개)');
                        }
                    });
                });*/



                if($('#ec-jigsaw-area-agreement').outerHeight() < 10){
                    $('#ec-jigsaw-area-agreement').addClass('layout_hidden');
                }


                if(OG_MEMBER_CHECK){
                    if($('#ec-jigsaw-tab-shippingInfo').css('display') == 'none'){
                        $('#ec-jigsaw-title-shippingInfo').addClass('border_black');
                    }
                }else{
                    $('#ec-jigsaw-title-shippingInfo').addClass('border_black');

                }


                //임시...!!!
                // let $naverHtml = `<span class="ec-base-label temp_payment">
                //     <input id="addr_paymethod999" name="addr_paymethod" fw-filter="isFill" fw-label="결제방식" fw-msg="" value="naverpay" type="radio" autocomplete="off">
                //     <label for="addr_paymethod999">네이버<!--a href="javascript:void(0);" target="_blank">
                //         <img src="//img.echosting.cafe24.com/skin/base_ko_KR/order/ico_info2.gif" alt="info"></a-->
                //     </label>
                // </span>`;
                //
                // let $kakaoHtml = `<span class="ec-base-label temp_payment">
                //     <input id="addr_paymethod9999" name="addr_paymethod" fw-filter="isFill" fw-label="결제방식" fw-msg="" value="kakaopay" type="radio" autocomplete="off">
                //     <label for="addr_paymethod9999">카카오<!--a href="javascript:void(0);" target="_blank">
                //         <img src="//img.echosting.cafe24.com/skin/base_ko_KR/order/ico_info2.gif" alt="info"></a-->
                //     </label>
                // </span>`;
                //
                //
                // $($kakaoHtml).insertAfter($('.ec-paymethod-newArea .inner .ec-base-label').first());
                // $($naverHtml).insertAfter($('.ec-paymethod-newArea .inner .ec-base-label').first());





            }, 0);
        } else {
            clearTimeout(OG_orderBaseFunc._loadChkFunc);
            OG_orderBaseFunc._loadChkFunc = setTimeout(function() {
            }, playTime);
        }

    },
    giftForm: function() {},
    mileUse: function() {},
    depositUse: function() {},
    dierctBuy: function() {},
    delvModify: function() {},
    zipcodeConnect: function() {
        /**
         * 우편번호 팝업연결
         */
        OG$('[id^="btn"][id*="zipcode"]').each(function(i, e) {
            let $e = OG$(e);
            let id = $e.attr('id');
            if ($e.closest('.ec-address').length > 0) {
                $e.closest('.ec-address').attr('data-addr', true);
                $e.closest('.ec-address').find('input[id*="zipcode"]').attr('data-addr-type', 'zipcode');
                $e.closest('.ec-address').find('input[id*="addr1"]').attr('data-addr-type', 'addr1');
                $e.closest('.ec-address').find('input[id*="addr2"]').attr('data-addr-type', 'addr2');
                if ($e.closest('.ec-address').find('input[id*="addr1"]').length == 0) {
                    $e.closest('.ec-address').find('input[id*="address1"]').attr('data-addr-type', 'addr1');
                }
                if ($e.closest('.ec-address').find('input[id*="addr2"]').length == 0) {
                    $e.closest('.ec-address').find('input[id*="address2"]').attr('data-addr-type', 'addr2');
                }
            } else {
                $e.closest('tr').attr('data-addr', true);
                $e.closest('tr').find('input[id*="zipcode"]').attr('data-addr-type', 'zipcode');
                $e.closest('tr').find('input[id*="addr1"]').attr('data-addr-type', 'addr1');
                $e.closest('tr').find('input[id*="addr2"]').attr('data-addr-type', 'addr2');
                if ($e.closest('tr').find('input[id*="addr1"]').length == 0) {
                    $e.closest('tr').find('input[id*="address1"]').attr('data-addr-type', 'addr1');
                }
                if ($e.closest('tr').find('input[id*="addr2"]').length == 0) {
                    $e.closest('tr').find('input[id*="address2"]').attr('data-addr-type', 'addr2');
                }
            }
            let $clone = OG$(e.outerHTML).attr('id', 'ogdelv_custom' + id).attr('data-ogdelv-zipbtn-ori', id).attr('onClick', 'OG_util.execDaumPostcode(this, "orderform")').attr('data-layer', '#ogdelv_custom_popup');

            $clone.insertAfter($e);
            $e.addClass('layout_hidden');
        });
        if (OG$('#ogdelv_custom_popup').length == 0) {
            let $popup = OG$('<div id="ogdelv_custom_popup" class="og_zipcode_layer" style=""><div class="content"></div></div>');
            OG$('body').append($popup);
            OG$('.og_zipcode_layer').on('click',function(e){
                if(OG$(e.target).hasClass('og_zipcode_layer')){
                    OG$('.og_zipcode_layer').removeClass('on');
                    OG_util.scrollEnabled();
                }
            });
        }
    },
    doPaymentBefore: function() {
        let callback = OG_orderBaseFunc.__OG_DEFAULT_VALUE_ORDERFORM_PAYMENT_BEFORE_FUNCTION;
        return new Promise(function(resolve, reject) {
                if (callback !== null) {
                    callback().then(function(res) {
                        basicBefore();
                        resolve();
                    });
                } else {
                    basicBefore();
                    resolve();
                }
            }
        );
        function basicBefore() {}
    },
    doPayment: function() {
        OG_orderBaseFunc.doPaymentBefore().then(function(res) {
            CAFE24.SHOP_FRONT_ORDERFORM_FORM.proc.doPayment();
            //console.log('ttt');
            //setTimeout(function(){
            //    let orderConditionChk = CAFE24.SHOP_FRONT_ORDERFORM_FORM.proc.bIsOnOrder;
            //    if(orderConditionChk){
            //    }else{
            //        //결제 진행 중지 상태
            //        //결제 진행 완료 -> 확인창 노출 설정시 확인창 노출
            //        if(OG$('#ec-shop_orderConfirmLayer').is(':visible')){
            //        }
            //    }
            //},500);
        });
    },

};

OG_orderBaseFunc.initBefore();

OG_orderBaseFunc.init();
if (typeof OG_SUBCONTAINER_DATA_PAGE !== 'undefined') {
    if (OG_SUBCONTAINER_DATA_PAGE == 'myshop_AddrList') {
        OGDelvScCustom.init();
    }
}




// ---------> 배송비로 코드 수정중................................
window.addEventListener("DOMContentLoaded", function(event) {
    OG_orderBaseFunc.initLast();
});
window.addEventListener("load", function(event) {

    //배송비 관련 함수
    setTimeout( calculateShippingFee , 500);
    $('#product_select_all').trigger('click');
});


//------->배송비 계산 및 적용 함수
// (3만원 이하 구매시 배송비 3천원, 3만원 이상 구매시 배송비 0원)
function calculateShippingFee() {
    var allItems = $('input[name="basket_product_normal_type_normal"]'); // 장바구니 모든 상품
    var checkedItems = $('input[name="basket_product_normal_type_normal"]:checked'); // 선택한 상품들
    var total_price_num = 0;
    var ship_price = $('#total_delv_price_front');

    // 장바구니에 담긴 상품이 없는 경우
    if (allItems.length === 0) {
        ship_price.text('0'); // 배송비 0원
        return;
    }

    // 장바구니에 담긴 상품이 있는 경우
    // 체크된 항목들의 가격을 합산 (체크 안된 항목 제외)
    $.each(checkedItems, function (index, item) {
        var priceElement = $(item).closest('.prdBox').find('.sumPrice > strong');
        if (priceElement.length > 0) {
            total_price_num += parseInt(priceElement.text().replace(/,/g, ''));
        }
    });

    // 만약 아무런 상품도 선택하지 않았으면
    if(checkedItems.length === 0){
        $.each(allItems,function(index,item){
            var priceElement = $(item).closest('.prdBox').find('.sumPrice > strong');
            if(priceElement.length > 0){
                total_price_num+=parseInt(priceElement.text().replace(/,/g,''));
            }
        });
    }


    // 배송비
    if (total_price_num < 30000) { // 총 30000 이하일 경우 배송비 3000원 추가
        console.log(total_price_num, '==> 30000원 이하 구매시 배송비 3000원 추가');
        ship_price.text((3000).toLocaleString('ko-KR'));
    } else {
        ship_price.text('0'); // 총 30000 이상일 경우 배송비 초기화
        console.log('30000원 이상 구매시 배송비 0원');
    }

    $(".total_product_price_display_front").text(total_price_num.toLocaleString('ko-KR'));
    $("#total_order_price_front").text((total_price_num + parseInt(ship_price.text().replace(/,/g, ''))).toLocaleString('ko-KR'));

}

// 사용자가 checkbox 클릭 시 다시 실행하여 값 업데이트
$('.ec-base-prdInfo .check').on('click', function () {
    setTimeout(calculateShippingFee,500);
});

// 전체 선택 버튼 클릭 시 이벤트 핸들러 추가
$('#product_select_all').on('click', function() {
    setTimeout(calculateShippingFee,500);
});















//----------------------------------------------------------------> 기존 코드
//
// window.addEventListener("DOMContentLoaded", function(event) {
//     OG_orderBaseFunc.initLast();
// });
// window.addEventListener("load", function(event) {
//
//     //배송비 관련 함수
//     setTimeout( calculateShippingFee , 500);
//     $('#product_select_all').trigger('click');
// });
//
//
//
// //------->배송비 계산 및 적용 함수
// // (7만원 이하 구매시 배송비 3천원, 7만원 이상 구매시 배송비 0원)
// function calculateShippingFee() {
//     var allItems = $('input[name="basket_product_normal_type_normal"]'); // 장바구니 모든 상품
//     var checkedItems = $('input[name="basket_product_normal_type_normal"]:checked'); // 선택한 상품들
//     var total_price_num = 0;
//     var ship_price = $('#total_delv_price_front');
//
//     // 장바구니에 담긴 상품이 없는 경우
//     if (allItems.length === 0) {
//         ship_price.text('0'); // 배송비 0원
//         return;
//     }
//
//     // 장바구니에 담긴 상품이 있는 경우
//     // 체크된 항목들의 가격을 합산 (체크 안된 항목 제외)
//     $.each(checkedItems, function (index, item) {
//         var priceElement = $(item).closest('.prdBox').find('.sumPrice > strong');
//         if (priceElement.length > 0) {
//             total_price_num += parseInt(priceElement.text().replace(/,/g, ''));
//         }
//     });
//
//     // 만약 아무런 상품도 선택하지 않았으면
//     if(checkedItems.length === 0){
//         $.each(allItems,function(index,item){
//             var priceElement = $(item).closest('.prdBox').find('.sumPrice > strong');
//             if(priceElement.length > 0){
//                 total_price_num+=parseInt(priceElement.text().replace(/,/g,''));
//             }
//         });
//     }
//
//
//     // 배송비
//     if (total_price_num <= 70000) { // 총 70000 이하일 경우 배송비 3000원 추가
//         console.log(total_price_num, '==> 70000원 이하 구매시 배송비 3000원 추가');
//         ship_price.text((3000).toLocaleString('ko-KR'));
//     } else {
//         ship_price.text('0'); // 총 70000 이상일 경우 배송비 초기화
//         console.log('70000원 이상 구매시 배송비 0원');
//     }
//
//     $(".total_product_price_display_front").text(total_price_num.toLocaleString('ko-KR'));
//     $("#total_order_price_front").text((total_price_num + parseInt(ship_price.text().replace(/,/g, ''))).toLocaleString('ko-KR'));
//
// }
//
// // 사용자가 checkbox 클릭 시 다시 실행하여 값 업데이트
// $('.ec-base-prdInfo .check').on('click', function () {
//     setTimeout(calculateShippingFee,500);
// });
//
// // 전체 선택 버튼 클릭 시 이벤트 핸들러 추가
// $('#product_select_all').on('click', function() {
//     setTimeout(calculateShippingFee,500);
// });

//----------------------------------------------------------------> 기존 코드