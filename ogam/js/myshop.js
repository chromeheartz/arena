$(document).ready(function () {

    // btn_apply_wrap 클래스를 가진 요소를 모두 선택합니다.
    var btnApplyWrap = $('.btn_apply_wrap');

    // 각각의 btnApplyWrap 요소에 대해 처리합니다.
    btnApplyWrap.each(function() {
        var childLinks = $(this).find('a'); // 현재 요소의 자식 요소들 중에서 a 태그를 선택합니다.
        var noDisplayLinks = childLinks.not('.displaynone'); // displaynone 클래스가 없는 a 태그들을 선택합니다.

        // displaynone 클래스가 없는 a 태그가 없다면 함수를 종료합니다.
        if (noDisplayLinks.length === 0) {
            return true;
        }

        // displaynone 클래스가 없는 a 태그들 중 첫 번째에만 margin-left: 0을 설정하고 나머지에는 margin-left: 10px을 설정합니다.
        noDisplayLinks.first().css('margin-left', '0');
        noDisplayLinks.slice(1).css('margin-left', '10px');
    });


    $('.xans-myshop-orderhistorylistitem .order').each(function(){
        let $e = OG$(this),
            orderFirstLineChk = ($e.attr('data-order-chk') === 'og_order_number_') ? true : false,
            orderId = $e.attr('data-order-id');

        $('.xans-myshop-orderhistorylistitem .order').filter('[data-order-id="'+ orderId +'"]').last().addClass('last');
    })


    //selected_product

    //옵션이 추가/삭제될때 실행
    if(OG$('#sPrdList').length > 0){
        OG$('#sPrdList').OG_observerFunc(function(){
            observePrdImage();
        }, {
            attributes: false,
            childList: true,
            subtree: true
        });
    }

    if($('.xans-myshop-ordersearchproductform').length > 0){
        OG_util.IntersectionObserver('.ec-base-prdInfo .prdBox .thumbnail img',{
            root: null,
            rootMargin:  '0px 0px 0px 0px',
            threshold: [0]
        }, function(a, b, c){
            if(a.isIntersecting){
                let $e = $(a.target);
                let productNo = OG_util.onlyNumbFunc($e.closest('.ec-base-prdInfo').find('.buttonGroup .btnNormal').attr('onClick'));
                if($e.attr('src').indexOf('tiny') == -1){
                    $e.addClass('done');
                }else{
                    if($e.hasClass('done') == false){
                        $.ajax({
                            type: "GET",
                            url:"/ogam/html/ajax/prddetail.html?product_no=" + productNo,
                            dataType:"html",
                            success : function(html){
                                $e.attr('src', $(html).find('#prdDetailImg img').attr('src'));
                                if(productNo == '2732'){
                                    $e.closest('.ec-base-prdInfo').find('a').attr('href', '/shoplus/membership/src/membership_detail.html?product_no=2732');
                                }
                            },
                            complete : function(){
                                $e.addClass('done');
                            }
                        });
                    }
                }

            }
        });
    }

    if($('.xans-coupon-aprd').length > 0){
        OG_util.IntersectionObserver('.ec-base-prdInfo .prdBox .thumbnail img',{
            root: null,
            rootMargin:  '0px 0px 0px 0px',
            threshold: [0]
        }, function(a, b, c){
            if(a.isIntersecting){
                let $e = $(a.target);
                let productNo = OG_util.onlyNumbFunc($e.closest('.ec-base-prdInfo').attr('data-productno'));
                if($e.attr('src').indexOf('tiny') == -1){
                    $e.addClass('done');
                }else{
                    if($e.hasClass('done') == false){
                        $.ajax({
                            type: "GET",
                            url:"/ogam/html/ajax/prddetail.html?product_no=" + productNo,
                            dataType:"html",
                            success : function(html){
                                $e.attr('src', $(html).find('#prdDetailImg img').attr('src'));
                                if(productNo == '2732'){
                                    $e.closest('.ec-base-prdInfo').find('a').attr('href', '/shoplus/membership/src/membership_detail.html?product_no=2732');
                                }
                            },
                            complete : function(){
                                $e.addClass('done');
                            }
                        });
                    }
                }

            }
        });
    }


    if($('.myshopArea[data-type]').length > 0){
        let type = $('.myshopArea[data-type]').attr('data-type').trim();
        let text;
        switch (type){
            case 'cancel' :
                text = '취소';
                break;
            case 'exchange' :
                text = '교환';
                break;
            case 'return' :
                text = '반품';
                break;
        }
        $('.og_apply_type').text(text);
    }

    if($('#pickupDetail table #sameaddr').length > 0){
        $('#pickupDetail table #sameaddr ul > li').each(function(){
            if($(this).index() > 0) {
                let check = $(this).find('span').text();
                if (OG_util.onlyNumbFunc(check) == '') {
                    $(this).addClass('displaynone');
                }
            }
        })
    }

})

