

//window['option_type'] = T window['item_listing_type'] = C -> 조합일체
//window['option_type'] = T window['item_listing_type'] = S -> 조합분리
//window['option_type'] = F window['item_listing_type'] = S -> 독립선택
//window['option_type'] = E window['item_listing_type'] = S -> 연동형


// 조합분리, 조합일체형 아닌 경우 정상동작 안함!!!! 이슈 발생 시 체크 요망
// 독립선택형일 때, 연동형일 때 버튼 노출안되게 처리함!!!
// 옵션 스타일 -> 우선 다 해놓긴 함(셀렉트, 텍스트버튼, 미리보기, 라디오버튼)
let OG_stockylayer = {
    $layer : null,
    option_type : null,
    item_listing_type : null,
    option_data : null,

    init : function(){

        OG_stockylayer.$layer = $('.og_stock_layer');
        OG_stockylayer.option_type = window['option_type'];
        OG_stockylayer.item_listing_type = window['item_listing_type'];
        OG_stockylayer.option_data = JSON.parse(option_stock_data);

        if(OG_stockylayer.option_type !== 'T'){
            $('#og_stock_layer_open_prddetail').addClass('displaynone');
        }
        if($('.sub_sold').hasClass('displaynone') === false){
            $('#og_stock_layer_open_prddetail').addClass('displaynone');
        }

        let $stock_thumbImg = $('.xans-product-detail .imgArea .prdImg .thumbnail img').first().clone(),
            stock_category_name = $('.cate_path li:last-child').text(),
            stock_produce_name = product_name,
            stock_product_code = $('[data-title="자체상품코드"] .desc').text(),
            $stock_pricewrap = $('.og_prc_infoBox .price_wrap').clone(),
            $stockLayer = $('.og_stock_layer'),
            $optionArea = $('.optionArea table.xans-product-option'),
            $newOptionArea = '';


        let optionNumber = 0;
        $optionArea.find('tbody').each(function () {
            let $option = $(this).find('[product_type="product_option"]'),
                $markUp = $('<span class="option_' + optionNumber + '"></span>'),
                $tr = $option.closest('tr');
            $option = $option.clone();
            if ($option.length > 0) {
                let tagName = String($option[0].tagName).toLowerCase(),
                    $title = $tr.find('th').clone();
                if($title.find('.sizeGuide').length > 0){
                    $title.find('.sizeGuide').remove();
                }
                let title = $title.html(),
                    addClass = '';

                if($option.find('input[type=radio]').length > 0){
                    $option.find('input[type=radio]').attr('name', 'og_product_option_id' + optionNumber);
                    $option.find('input[type=radio]').each(function(){
                        let $e = $(this),
                            index = $e.closest('li').index();
                        $e.attr('id', 'og_product_option_id' + String(optionNumber) + String(index));
                        $e.parent('label').attr('for', 'og_product_option_id' + String(optionNumber) + String(index));
                    })
                    addClass = 'type_radio';
                }else{

                }
                $newOptionArea += '<div class="option_wrap"><h4>'+ title +'</h4><' + tagName + ' class="'+ addClass +'">' + $option.html() + '</' + tagName + '></div>';
                $stockLayer.find('.now_select_info .box').append($markUp);
                optionNumber++;
            }
        })


        $stockLayer.find('.product_area .thumbnail').append($stock_thumbImg);
        $stockLayer.find('.product_area .description .category_name').text(stock_category_name);
        $stockLayer.find('.product_area .description .name').text(stock_produce_name);
        $stockLayer.find('.product_area .description .product_code').text(stock_product_code);
        $stockLayer.find('.product_area .description .price_wrap').html($stock_pricewrap);
        $stockLayer.find('.product_option_data .option_select').append($newOptionArea);
        $stockLayer.find('.product_name').text(stock_produce_name);

        $stockLayer.find('.btnClose').on('click', function () {
            $stockLayer.fadeOut();
            OG_util.scrollEnabled();
        });

        if(OG_responsiveChk == 'pc'){
            $('.og_stock_layer_inner').mCustomScrollbar();
            $('.og_stock_layer .result_box .table_tbody').mCustomScrollbar();
        }

        OG_stockylayer.selectProduct();
        OG_stockylayer.searchTrigger();
    },

    selectProduct : function(){
        let $stockLayer = $('.og_stock_layer');
        let optionDynamicAppend = function($e){
            let eTagName = String($e[0].tagName).toLowerCase(),
                $eWrap = (eTagName == 'select') ? $e : $e.parent();
            $next = $eWrap.closest('.option_wrap').next('.option_wrap'),
                nextCheck = $next.length,
                index = $eWrap.closest('.option_wrap').index();
            if(nextCheck > 0){
                let val = (eTagName == 'select') ? $e.val() : $e.text();
                let $optionWrapChild = $next.children().not('h4'),
                    optinWrapChildTagName = String($optionWrapChild[0].tagName).toLowerCase();
                if(optinWrapChildTagName == 'select'){
                    $optionWrapChild.children().not('[value*="*"]').remove();
                }else{
                    $optionWrapChild.empty();
                }
                $stockLayer.find('.now_select_info .option_' + $eWrap.closest('.option_wrap').index()).nextAll().html('');
                if (val == '*' || val == '**'){
                } else {
                    for (let value of Object.values(OG_stockylayer.option_data)) {
                        if(value.option_value_orginal[index] == String(val)){
                            let option_item = value.option_value_orginal[index+1];
                            let soldoutTxt = (value.is_auto_soldout == 'T') ? ' [품절]' : '';
                            let soldoutClass = (value.is_auto_soldout == 'T') ? 'ec-product-soldout' : '';
                            let $option_item = null;
                            if(optinWrapChildTagName == 'ul'){
                                $option_item = '<li class="'+ soldoutClass +'" option_value="'+ option_item +'"><a href="#none">'+ option_item +'</a></li>';
                            }else if(optinWrapChildTagName == 'select'){
                                $option_item = '<option value="'+ option_item +'">'+ option_item + soldoutTxt +'</option>';
                            }
                            $optionWrapChild.append($option_item);
                        }
                    }
                }
            }
        }

        OG$('.og_stock_layer').on('click', '.product_option_data .option_select li', function () {
            let $e = $(this),
                index = $e.index(),
                option_value = null;
            if(OG_stockylayer.option_type == 'T' && OG_stockylayer.item_listing_type == 'S'){
                optionDynamicAppend($e);
            }
            if ($e.hasClass('selected')) {
                $e.removeClass('selected');
                let index = $e.closest('.option_wrap').index();
                $stockLayer.find('.now_select_info .option_' + index).text('');
                option_value = '';
                // if($e.find('input[type=radio]').length > 0){
                //     $e.find('input').removeAttr('checked');
                //     $e.find('input').prop('checked',false).trigger('change');
                // }
            } else {
                $e.addClass('selected').siblings().removeClass('selected');
                let text = $e.text(),
                    index = $e.closest('.option_wrap').index();
                $stockLayer.find('.now_select_info .option_' + index).text(text);
                option_value = $e.attr('option_value');
                // if($e.find('input[type=radio]').length > 0){
                //     $e.find('input').attr('checked','checked');
                // }
            }
            $e.closest('.option_wrap').attr('data-selected', option_value);

        })

        OG$('.og_stock_layer').on('change', '.product_option_data .option_select select', function () {
            let $e = $(this),
                index = $e.index(),
                option_value = null;
            if(OG_stockylayer.option_type == 'T' && OG_stockylayer.item_listing_type == 'S'){
                optionDynamicAppend($e);
            }
            let val = $e.val();
            if (val == '*' || val == '**'){
                $e.removeClass('selected');
                let index = $e.closest('.option_wrap').index();
                $stockLayer.find('.now_select_info .option_' + index).text('');
                option_value = '';
            } else {
                $e.addClass('selected').siblings().removeClass('selected');
                let text = $e.find('option[value="'+ val +'"]').text(),
                    index = $e.closest('.option_wrap').index();
                $stockLayer.find('.now_select_info .option_' + index).text(text);
                option_value = val;
            }
            $e.closest('.option_wrap').attr('data-selected', option_value);
        })
    },

    getProductCode : function(){
        let productCode = $('[data-title="상품코드"] .desc').text().trim(),
            result = productCode,
            resultArray = [];
        if(OG_stockylayer.option_type == 'T' && OG_stockylayer.item_listing_type == 'S'){
            let optionArray = [];
            OG_stockylayer.$layer.find('.option_wrap').each(function(){
                let $optionWrap = $(this);
                let dataSelected = $optionWrap.attr('data-selected');
                if(typeof dataSelected == 'undefined'){
                    dataSelected = '';
                }
                optionArray.push(dataSelected);
            });
            for (let value of Object.values(OG_stockylayer.option_data)) {
                if(value.option_value_orginal.join(',') == optionArray.join(',')) {
                    result+= value.option_id;
                }
            }
        }else{
            OG$('.og_stock_layer').find('.option_wrap').each(function(){
                let $optionWrap = $(this);
                let dataSelected = $optionWrap.attr('data-selected');
                if(typeof dataSelected == 'undefined'){
                    dataSelected = '';
                }
                result = dataSelected;
            });
        }
        return result;
    },



    searchTrigger : function(){
        let $button = $('.og_stock_layer .find_box .find_select button'),
            $input = $('.og_stock_layer .find_box .find_select input[type=text]');

        $input.on('keyup', function(e){
            if(e.originalEvent.keyCode === 13){
                keywordCheck();
            }
        })

        $button.on('click',function(){
            keywordCheck();
        })

        function keywordCheck(){
            let result = OG_stockylayer.getProductCode();
            let chk = OG_stockylayer.checkAllOptionSelect(result);
            if(! chk){
                alert('옵션을 모두 선택해주세요.');
                OG_stockylayer.noOption();
            }else{
                if(chk == 'stock'){
                    let keyword = $input.val();
                    OG_stockylayer.getStoreList(result, keyword);
                }else{
                    alert('품절된 상품은 조회하실 수 없습니다.');
                    OG_stockylayer.noOption();
                }

            }
        }
    },

    getStoreList : function(productCode, keyword){
        $.ajax({
            url: 'https://api.arena.co.kr/arena/store?item_code='+ productCode +'&quantity=' + 1,
            method: 'GET',
            success: function(data) {
                return data;
            },
            error: function(error) {
                return '';
            }
        }).done(function(res){
            let data = res.product;
            let modifyData = {};
            console.log(data);
            if(data == false){
                OG_stockylayer.noResult();
            }else{
                data.forEach(function(e, i){
                    let area = e.store_area;
                    let storename = e.store_name;
                    let storeaddr = e.store_addr;
                    // TODO 현대김포아울렛 임시 가림 제거 필요
                    // if(area.indexOf(keyword) > -1 || storename.indexOf(keyword) > -1 || storeaddr.indexOf(keyword) > -1){
                    if ((area.indexOf(keyword) > -1 || storename.indexOf(keyword) > -1 || storeaddr.indexOf(keyword) > -1) && storename !== '현대김포아울렛') {
                        if(typeof modifyData[area] == 'undefined'){
                            modifyData[area] = [];
                        }
                        modifyData[area].push(e);
                    }
                })
                OG_stockylayer.printStoreList(modifyData, $('.og_stock_layer .result_box tbody:not(.isEmpty)'));
            }
        });

    },

    printStoreList : function(data, $el){
        let html = '';

        Object.keys(data).forEach(function(e, i){
            let stores = data[e];
            //매장명 순으로 정렬
            stores.sort(function(a,b){
                var nameA = a.store_name.toUpperCase();
                var nameB = b.store_name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            stores.forEach(function(e2, i2){
                let name = e2.store_name,
                    addr = e2.store_addr,
                    phone = e2.store_phone,
                    quantity = e2.quantity,
                    quantityClass = '',
                    tr = '';
                if(quantity > 2){
                    quantity = '재고 있음'
                    quantityClass = 'stock';
                }else{
                    quantity = '품절 임박';
                    quantityClass = 'stock soldoutbefore';
                }
                if(i2 == 0){
                    tr = `<tr><td class="area" rowspan="${stores.length}">${e}</td>
<td class="store"><div class="info"><h5>${name}</h5><span>${addr}</span><span>${phone}</span></div></td>
<td class="${quantityClass}">${quantity}</td>
</tr>`;
                }else{
                    tr = `<tr>
<td class="store"><div class="info"><h5>${name}</h5><span>${addr}</span><span>${phone}</span></div></td>
<td class="${quantityClass}">${quantity}</td>
</tr>`;
                }
                html += tr;
            })
        })
        $el.html(html);
    },

    checkAllOptionSelect : function(result){
        let chk = false;
        for (let key of Object.keys(OG_stockylayer.option_data)) {
            if(key == result){
                if(OG_stockylayer.option_data[key].is_auto_soldout =='T'){
                    chk = 'soldout';
                }else{
                    chk = 'stock';
                }
            }
        }
        return chk;
    },

    noResult : function(){
        $('.og_stock_layer .result_box tbody:not(.isEmpty)').html('');
        $('.og_stock_layer .result_box tbody.isEmpty td').text('검색된 매장정보가 없습니다.');
    },

    noOption : function(){
        $('.og_stock_layer .result_box tbody:not(.isEmpty)').html('');
        $('.og_stock_layer .result_box tbody.isEmpty td').text('상품 사이즈를 선택해주세요');
    }


}

OG$('body').on('OGMenuCall', function () {
    if($('.prdDetail_headingArea').find('img[data-pickupcheck]').length == 0){
        $('#og_stock_layer_open_prddetail_wrap').remove();
        $('#og_stock_layer_open_prddetail').remove();

        if($('.crema_sizeGuide').is(':visible') == true){
            $('.crema_sizeGuide').css('margin-bottom', '10px');
        }
    }else{
        OG_stockylayer.init();
    }
});






