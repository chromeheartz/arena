<script>
// weightField, weightMultiplier 추가

String.prototype.replaceWhole = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

var DalueSearch = {
	url: undefined // DCSE
	, apiKey: undefined 
	, cursor: undefined
	, searchUrl: undefined
	, dxUrl: undefined
	, mallId: undefined
	, shopNo: undefined
	, mallType: undefined
	, elements: {
		searchForm: undefined
		, searchItem: undefined
		, searchList: undefined
		, searchInput: undefined
		, searchButton: undefined
		, searchButtonErase: undefined
		, autoCompleteLayer: undefined
		, autoCompleteList: undefined
		, autoCompleteItem: undefined
		, autoCompleteView: undefined
		, autoCompleteViewList: undefined
		, autoCompleteViewItem: undefined
		, recentQueryLayer: undefined
		, recentQueryList: undefined
		, recentQueryItem: undefined
		, recentQueryView: undefined // static 한 위젯
		, recentQueryViewList: undefined // static 한 위젯
		, recentQueryViewItem: undefined // static 한 위젯
		, hotKeywordList: undefined
		, hotKeywordItem: undefined
		, hotKeywordView: undefined // static 한 위젯
		, hotKeywordViewList: undefined // static 한 위젯
		, hotKeywordViewItem: undefined // static 한 위젯
		, relativeTermView: undefined // static 한 위젯
		, relativeTermViewList: undefined // static 한 위젯
		, relativeTermViewItem: undefined // static 한 위젯
		
		// 검색 결과
		, searchQueryQouted: undefined // 검색어 -> '검색어'
		, searchQuery: undefined // 검색어 -> 검색어
		, searchCount: undefined
		, searchNoResult: undefined
		
		
		// 필터
		, filterCategoryView: undefined
		, filterCategoryContent: undefined
		, filterBrandView: undefined
		, filterBrandContent: undefined
		, filterPriceView: undefined
		, filterPriceContent: undefined
		
		// pagination
		, paginationView: undefined
		, paginationFirst: undefined
		, paginationPrev: undefined
		, paginationNext: undefined
		, paginationLast: undefined
		, paginationItem: undefined
		
		// infinite scroll
		, infiniteScroll: undefined
		
		// loader
		, loaderScreen: undefined
		
		// filter
		, filterCategoryItem: undefined
		, fileterBrandItem: undefined
		, filterPriceItem: undefined
	}
	// , searchItemId: undefined
	
	, productUrl: undefined
	
	, collName: "products"
	, categoryIdFields: 'categoryRoot1No,categoryRoot2No'
	, categoryNameFields: 'categoryRoot1,categoryRoot2'
	, brandIdField: 'brandCode'
	, brandNameField: 'brandName'
	, categoryAuthFieldName: 'categoryNos'
	, categoryAuthDevice: undefined
	, categoryAuthMemberType: undefined
	, categoryAuth: {
		device_pc: '1'
		, device_mobile: '2'
		, member_all: '0'
		, member_logged: '1'
	}
	, categoryAuthNoField: 'categoryAuthNo'
	, aclFlagField: 'exposureLimitType'
	, aclFlagValue: 'M'
	, aclField: 'exposureGroupList'
	, aclFieldValue: '0'
	, aclShow: 0
	, aclRemoveFields: 'price,mobilePrice,pcPrice'
	, equalFields: 'display'
	, equalValues: '1'
	, vFields: 'productNo,productName,price,retailPrice,pointsAmount,image,soldOut,pcDiscountPrice,mobileDiscountPrice,exposureLimitType,exposureGroupList,categoryNos,brandName,display,selling,productCode,categoryRoot1No,simpleDescription,modelName,icon,iconShowPeriod'
	, lastQuery: undefined
	// user
	, userGroupNo: 0
	, userGroupName: ''
	// memberBenefit
	, memberBenefit: {}
	, options: {
		size: 50
		, userHistorySize: 10
		, recentQueryHide: false
		, width: []
		, useKeywordPromotion: true
		, keywordPromotionTop: [ ]
		, keywordPromotionLeft: [ ]
		, autoCompleteHighlight: [ '<b style="color: red">', '</b>' ]
		, autoCompleteAddWidth: 0
		, autoCompleteAddLeft: 0
		, functionAutoCompleteOnSuccess: null
		, relativeTermDisplay: [ ] // 
		, bindOrOn: 'bind'
		, viewLayer: true // 검색어 입력박스 선택 시 팝업 layer
		, infiniteScroll: false // DalueSearch.elements.infiniteScroll 이 보이면 다음 검색 결과를 가져온다.
		, imagePrefix: '' // image path에 시작
		, priceField: 'price'
		, searchFormAction: 'javascript:void(0)'
		, categoryAuthNoCategory: '0'
		, functionImageLoad: undefined
		, page: 10
		, defaultEqualFields: "display"
		, defaultEqualFieldValues: "1"
		, functionSearchOnSuccess: null
		, functionHotKeywordOnSuccess: null
		, functionSearchOnFail: undefined
		, filterIncludeHtml: false
		, filterDisplayName: false
		, filterRefreshClicked: true
		, filterCategoryMax: 10 // filter표시 제한
		, filterBrandMax: 10 // filter표시 제한
		, tagStat: 0 // tagStat 사용 여부
		, tagStatOnly: 0 // 검색결과X, tagStat O
		, tagFields: '' // tagFields
		, tagSeperator: '|'
		, tagOperators: {}
		, tagsViewOnOR: false
		, freqUpdateFieldSort: '' // sort할 freqUpdateField명
		, freqUpdateFieldInclude: 0 // 출력할 freqUpdateField명
		, exceptBrands: []
		, exceptCategories: []
		, pointsAmount: {}
		, pointTypeNull: "mileage" // point type이 null일때
		, aclMessage: '회원만 구매 가능합니다.' // 
		, iconMap: null
		, layerTop: 0 // layer 위치
		, listIcons: [null, null, null] // list_icon
		, keywordPromotionAddWidth: 0
		, hotKeywordType: 1
		, searchQueryType: 0 // 0 = '(' + q + '):productName <OR> ' + '(' + q + '):productTag <OR> ' + '(' + q + ')', 1 = add <OR> in productName(replace space to <OR>)
		, searchQueryField: ''
		, noQueryFieldInputNo: -1
		, toScrollNamePos: 0 // 해당 상품으로 scroll할때 추가되는 위치(y)
		, defaultSort: ''
		, exceptCategory: undefined
		, exceptCategoryNos: undefined
		, exceptCategoryMatchAll: 1
		, onlyIncludeCategoryNos: undefined
		, customAuthId: ''
		, weightField: ''
		, weightMultiplier: 0
		, weightInclude: 0 // including top-N by weight for FAV sort
		, hotKeywordsVariance: 1 // rank
	}
	, searchOptions: {
		query: ''
		, begin: 1
		, size: 10
		, sortType: ''
		, categoryId: ''
		, brandeCode: ''
		, price: ''
		, cursor: ''
		, freqUpdateFieldSort: ''
		, tagStat: ''
		, tagFields: ''
		, tagValues: {}
		, replaceHistory: false
		, toScrollName: ''
		, queryField: ''
	}
	, relativeTermDisplay: {
		always: 1
		, isExist: 2
	}
	, Consts: {
		COOKIE_QUERY_HISTORY: 'DLU_HIST_E' // encoded
	}
	, variables: {
		autoCompleteIndex: -1
		, recentQueryIndex: -1
		, lastAutoCompleteQuery: ''
		, lastIndex: 0
		, lastResultCount: 0
		, lastInfiniteScrollDate: 0
		, filterCategoryHtml: ''
		, filterBrandHtml: ''
		, filterPriceHtml: ''
	}
	, unbind: function unbindFn(elm) {
		if(elm == undefined || elm.length == 0) {
			return;
		}
		
		if(!Array.isArray(elm)) {
			elm.unbind();
			return;
		}
		
		for(var i = 0; i < elm.length; i++) {
			if(elm[i] != undefined)
				elm[i].unbind();
		}
	}
	, bind: function bindFn(elm, event, fn) {
		if(elm == undefined || elm.length == 0) {
			// alert('elm is undefined');
			return;
		}
		
		if(!Array.isArray(elm)) {
			elm.bind(event, fn);
			return;
		}
		
		for(var i = 0; i < elm.length; i++) {
			if(elm[i] != undefined) {
				// console.log(elm[i].attr('name') + ' bind');
				if(DalueSearch.options.bindOrOn == 'bind') {
					elm[i].bind(event, fn);	
				} else {
					elm[i].on(event, fn);
				}
					
			}
				
		}
	}
	, setCss: function setCssFn(elm, name, val, index) {
		if(elm == undefined || elm.length == 0) {
			return;
		}
		
		if(!Array.isArray(elm)) {
			elm.css(name, val);
			return;
		}
		
		if(index != undefined) {
			if(elm.length <= index) {
				return;
			}
			elm[index].css(name, val);
			
			return;
		}
		
		for(var i = 0; i < elm.length; i++) {
			if(elm[i] != undefined)
				elm[i].css(name, val);
		}
	}
	, getCss: function getCssFn(elm, name, index) {
		if(elm == undefined || elm.length == 0) {
			return;
		}
		
		if(index == undefined) {
			if(!Array.isArray(elm)) {
				return elm.css(name);
			}
			return undefined;
		}
		
		if(elm.length <= index) {
			return null;
		}
		
		return elm[index].css(name);
	}
	, setAttr: function setAttrFn(elm, name, value, index) {
		if(elm == undefined || elm.length == 0) {
			return;
		}
		
		if(index == undefined) {
			if(!Array.isArray(elm)) {
				return elm.attr(name, value);
			}
			
			for(var i = 0; i < elm.length; i++) {
				if(elm[i] != undefined)
					elm[i].attr(name, value);
			}
		} else {
			if(elm.length <= index) {
				return;
			}
			
			elm[index].attr(name, value);
		}
	}
	, setHtml: function seHtml(elm, html, index) {
		if(elm == undefined || elm.length == 0) {
			return;
		}
		
		if(index == undefined) {
			if(!Array.isArray(elm)) {
				return elm.html(html);
			}
			
			for(var i = 0; i < elm.length; i++) {
				if(elm[i] != undefined)
					elm[i].html(html);
			}
		} else {
			if(elm.length <= index) {
				return;
			}
			
			elm[index].html(html);
		}
	}
	, getHtml: function geHtmlFn(elm, index) {
		if(elm == undefined || elm.length == 0) {
			return;
		}
		
		if(index == undefined) {
			if(!Array.isArray(elm)) {
				return elm.html();
			}
			
			return undefined;
		} else {
			if(elm.length <= index) {
				return undefined;
			}
			
			return elm[index].html();
		}
	}
	, getVal: function getValFn(elm, index) {
		if(index == undefined) {
			if(!Array.isArray(elm)) {
				return elm.val();
			}
			
			for(var i = 0; i < elm.length; i++) {
				if(elm[i].val() != '') {
					return elm[i].val();
				}
			}
			
			return undefined;
		} else {
			if(elm.length <= index) {
				return undefined;
			}
			
			return elm[index] == undefined ? undefined : elm[index].val();
		}
	}
	, setVal: function setValFn(elm, val, index) {
		if(index == undefined) {
			if(!Array.isArray(elm)) {
				return elm.val(val);
			}
			
			for(var i = 0; i < elm.length; i++) {
				if(elm[i] != undefined)
					elm[i].val(val);
			}
			return val;
		} else {
			if(elm.length <= index) {
				return undefined;
			}
			
			return elm[index].val(val);
		}
	}
	, getChildren: function getChildrenFn(elm, index) {
		if(index == undefined) {
			if(!Array.isArray(elm)) {
				return elm.childrend();
			}
			
			return undefined;
		} else {
			if(index >= elm.length) {
				return undefined;
			}
			
			return elm[index].children();
		}
	}
	, init: function initFn() {
		if(typeof jQuery == undefined) {
			alert('JQuery이 없습니다.');
			return;
		}
		
		
		// priceField
		if(DalueSearch.mallType == 'cafe24') {
			DalueSearch.options.priceField = DalueSearch.categoryAuthDevice == DalueSearch.categoryAuth.device_pc ? "pcDiscountPrice" : "mobileDiscountPrice";	
		}
		
		
		var vers = $().jquery.split('.');
		
		DalueSearch.resize();
		if(DalueSearch.elements.searchInput.length) {
			
		} else {
			alert('no input element');
		}
		
		DalueSearch.unbind(DalueSearch.elements.searchForm);
		DalueSearch.setAttr(DalueSearch.elements.searchForm, 'action', DalueSearch.options.searchFormAction);
		DalueSearch.bind(DalueSearch.elements.searchForm, 'submit', function(e) { });
		DalueSearch.unbind(DalueSearch.elements.searchInput);
		DalueSearch.unbind(DalueSearch.elements.searchButton);
		DalueSearch.unbind(DalueSearch.elements.searchButtonErase);
		
		if(Array.isArray(DalueSearch.elements.searchButton)) {
			for(var i = 0; i < DalueSearch.elements.searchButton.length; i++) {
				if(DalueSearch.elements.searchButton[i] != undefined && DalueSearch.elements.searchButton[i].length > 0) {
					DalueSearch.elements.searchButton[i].attr('index', i);	
				}
			}
		} else {
			DalueSearch.elements.searchButton.attr('index', 0);
		}
		
		var sipadding = DalueSearch.getCss(DalueSearch.elements.searchInput[0], 'padding-left');
		
		DalueSearch.setAttr(DalueSearch.elements.searchInput, 'autocomplete', 'off');
		try {
			// console.log(DalueSearch.options.viewLayer + 'DalueSearch.options.viewLayer');
		if(DalueSearch.options.viewLayer) { // layer를 출력
		//alert('layer');
			DalueSearch.bind(DalueSearch.elements.searchInput, 'focus', function(e) { DalueSearch.variables.lastIndex = parseInt($(this).attr('index')); DalueSearch.autoCompleteLayer($(this), true); });
			DalueSearch.bind(DalueSearch.elements.searchInput, 'blur', function(e) { DalueSearch.autoCompleteLayer($(this), false); });
			DalueSearch.bind(DalueSearch.elements.searchInput, 'input', function(e) { DalueSearch.variables.lastIndex = parseInt($(this).attr('index')); DalueSearch.autoComplete(e, $(this)); });
			DalueSearch.bind(DalueSearch.elements.searchInput, 'keyup', function(e) { DalueSearch.variables.lastIndex = parseInt($(this).attr('index')); DalueSearch.autoCompleteWrap(e, $(this), function() { $('.dalue_css_keywordPromotion').css('display', 'none') }); });
			
			//DalueSearch.bind(DalueSearch.elements.searchInput, 'keydown', function(e) { DalueSearch.variables.lastIndex = parseInt($(this).attr('index')); DalueSearch.autoCompleteWrap(e, $(this), function() { $('.dalue_css_keywordPromotion').css('display', 'none') }); });
			// DalueSearch.bind(DalueSearch.elements.searchInput, 'keypress', function(e) { DalueSearch.variables.lastIndex = parseInt($(this).attr('index')); DalueSearch.autoCompleteWrap(e, function() { $(this), $('.dalue_css_keywordPromotion').css('display', 'none') }); });
			
			// DalueSearch.bind(DalueSearch.elements.searchButton, 'click', function(e) { console.log('buton clicked.'); if($('.dalue_search_keywordPromotion').css('display') == 'none' || DalueSearch.getVal(DalueSearch.elements.searchInput) != '') { DalueSearch.goSearch(); } else { window.location.href = DalueSearch.keywordPromotionList[DalueSearch.keywordPromotionElementNo].url; } });
			DalueSearch.bind(DalueSearch.elements.searchButton, 'click', function(e) {
				console.log('!!!!! - ' + DalueSearch.elements.searchInput[parseInt($(this).attr('index'))].val() + ', '+ $('#dalue_search_keywordPromotion_' + $(this).attr('index')).css('display'));
				DalueSearch.variables.lastIndex = parseInt($(this).attr('index'));
				if($('#dalue_search_keywordPromotion_' + $(this).attr('index')).css('display') == 'none' || $('#dalue_search_keywordPromotion_' + $(this).attr('index')).css('display') == undefined) { DalueSearch.goSearch(); } else { if(DalueSearch.keywordPromotionList[DalueSearch.keywordPromotionElementNo] != undefined) { e.preventDefault(); window.location.href = DalueSearch.keywordPromotionList[DalueSearch.keywordPromotionElementNo].url; } else { DalueSearch.goSearch(); } } });
			DalueSearch.setCss(DalueSearch.elements.searchButton, 'padding-left', sipadding + 'px'); 
		} else {
			// alert('no layer');
			DalueSearch.bind(DalueSearch.elements.searchInput, 'focus', function(e) { DalueSearch.variables.lastIndex = parseInt($(this).attr('index')); $('#dalue_search_keywordPromotion_' + $(this).attr('index')).attr('act', 'off')});
			DalueSearch.bind(DalueSearch.elements.searchInput, 'input', function(e) { DalueSearch.variables.lastIndex = parseInt($(this).attr('index')); DalueSearch.autoComplete(e, $(this)); });
			DalueSearch.bind(DalueSearch.elements.searchInput, 'keyup', function(e) { DalueSearch.variables.lastIndex = parseInt($(this).attr('index')); DalueSearch.autoCompleteWrap(e, $(this), function() { $('.dalue_css_keywordPromotion').css('display', 'none') }); });
			//DalueSearch.bind(DalueSearch.elements.searchInput, 'keydown', function(e) { DalueSearch.variables.lastIndex = parseInt($(this).attr('index')); DalueSearch.autoCompleteWrap(e, $(this), function() { $('.dalue_css_keywordPromotion').css('display', 'none') }); });
			//DalueSearch.bind(DalueSearch.elements.searchInput, 'keypress', function(e) { DalueSearch.variables.lastIndex = parseInt($(this).attr('index')); DalueSearch.autoCompleteWrap(e, $(this), function() { $('.dalue_css_keywordPromotion').css('display', 'none') }); });
			//DalueSearch.bind(DalueSearch.elements.searchButton, 'click', function(e) { if($('#dalue_search_keywordPromotion_' + $(this).attr('index')).css('display') == 'none') { DalueSearch.goSearch(); } else { if(DalueSearch.keywordPromotionList[DalueSearch.keywordPromotionElementNo] != undefined) { e.preventDefault(); window.location.href = DalueSearch.keywordPromotionList[DalueSearch.keywordPromotionElementNo].url; } else { DalueSearch.goSearch(); } } });
			DalueSearch.bind(DalueSearch.elements.searchButton, 'click', function(e) {
				// alert('');
				// console.log('#dalue_search_keywordPromotion_' + $(this).attr('index') + ' --- ' + $('#dalue_search_keywordPromotion_' + $(this).attr('index')).css('display'));
				console.log($('#dalue_search_keywordPromotion_' + $(this).attr('index')).css('display'));
				
				if($('#dalue_search_keywordPromotion_' + $(this).attr('index')).css('display') == undefined || $('#dalue_search_keywordPromotion_' + $(this).attr('index')).attr('act') == 'off' || $('#dalue_search_keywordPromotion_' + $(this).attr('index')).css('display') == 'none') { DalueSearch.goSearch(); } else { e.preventDefault(); window.location.href = DalueSearch.keywordPromotionList[DalueSearch.keywordPromotionElementNo].url; } 
			});
			// DalueSearch.bind(DalueSearch.elements.searchButton, 'click', function(e) { alert($('#dalue_search_keywordPromotion_' + $(this)).length); if($('#dalue_search_keywordPromotion_' + $(this).attr('index')).css('display') == 'none' || DalueSearch.getVal(DalueSearch.elements.searchInput) != '') { DalueSearch.goSearch(); } else { window.location.href = DalueSearch.keywordPromotionList[DalueSearch.keywordPromotionElementNo].url; } });
			DalueSearch.setCss(DalueSearch.elements.searchButton, 'padding-left', sipadding + 'px');
		}
		} catch(e) { console.log(e); }
		
		for(var i = 0; i < DalueSearch.elements.searchInput.length; i++) {
			DalueSearch.elements.searchInput[i].attr('index', i);
		}
		window.addEventListener('resize', function() { DalueSearch.resize(); });
		setInterval(function() {DalueSearch.resize();}, 100);
		
		if(DalueSearch.options.infiniteScroll == true) {
			$(window).scroll(function() {
				
				
				
				var top_of_element = DalueSearch.elements.infiniteScoll.offset().top;
			    var bottom_of_element = DalueSearch.elements.infiniteScoll.offset().top + DalueSearch.elements.infiniteScoll.outerHeight();
			    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
			    var top_of_screen = $(window).scrollTop();
				
				if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
			        // the element is visible, do something
					if(DalueSearch.variables.lastInfiniteScrollDate > (Date.now() - 3000)) {
						return;
					}
					console.log('scroll[BS:' + bottom_of_screen + '] > [TE:' + top_of_element + '][TS:' + top_of_screen + '] < [BE:' + bottom_of_element + ']');
					DalueSearch.variables.lastInfiniteScrollDate = Date.now();
					if(DalueSearch.variables.lastResultCount > 0) {
						DalueSearch.searchParameterBegin();	
					}
			    } else {
			        // the element is not visible, do something else
			    }

				
				
			});
		}
		
		if(DalueSearch.variables.filterCategoryHtml == '' || DalueSearch.variables.filterCategoryHtml == null) {
			DalueSearch.variables.filterCategoryHtml = DalueSearch.getHtml(DalueSearch.elements.filterCategoryView, undefined);	
		}
		
		if(DalueSearch.variables.filterBrandHtml == '' || DalueSearch.variables.filterBrandHtml == null) {
			DalueSearch.variables.filterBrandHtml = DalueSearch.getHtml(DalueSearch.elements.filterBrandView, undefined);
		}
		
		if(DalueSearch.variables.filterPriceHtml == '' || DalueSearch.variables.filterPriceHtml == null) {
			DalueSearch.variables.filterPriceHtml = DalueSearch.getHtml(DalueSearch.elements.filterPriceView, undefined);
		}
		
	}
	
	// TODO: 각 searchInput에 맞게 수정해야 한다.
	, resize: function resizeFn() {
		/* console.log(JSON.stringify(DalueSearch.elements.searchInput.position())
			+ ', display:' + $('.dalue_css_autocomplete_wrap').css('display')
		);*/
		
		var elm;
		
		// console.log(DalueSearch.variables.lastIndex + ", " + DalueSearch.elements.searchInput[DalueSearch.variables.lastIndex].offset().left);
		elm = $('.dalue_css_autocomplete_wrap');
		elm.css('position', 'absolute');
		elm.css('width', (DalueSearch.elements.searchInput[DalueSearch.variables.lastIndex].outerWidth() - 1 + DalueSearch.options.autoCompleteAddWidth) + 'px');
		elm.css('left', (DalueSearch.elements.searchInput[DalueSearch.variables.lastIndex].offset().left + DalueSearch.options.autoCompleteAddLeft) + 'px');	
		elm.css('top', (DalueSearch.elements.searchInput[DalueSearch.variables.lastIndex].offset().top) + (DalueSearch.elements.searchInput[DalueSearch.variables.lastIndex].outerHeight() + 1 + DalueSearch.options.layerTop) + 'px');
		// console.log('top:' + DalueSearch.elements.searchInput[DalueSearch.variables.lastIndex].offset().top + ', ' + (DalueSearch.elements.searchInput[DalueSearch.variables.lastIndex].outerHeight() + 1) + ', left:' + DalueSearch.elements.searchInput[DalueSearch.variables.lastIndex].offset().left);
		for(var i = 0; i < DalueSearch.elements.searchInput.length; i++) {
			
			if((DalueSearch.elements.searchInput[i].outerWidth() - 1) < 250) {
				// if(i == 0) console.log('outer : ' + DalueSearch.elements.searchInput[i].outerWidth() );
				
				$('.dalue_css_autocomplete_list_right_date').css('display', 'none');
				$('.dalue_search_recentQuery_delAll').css('display', 'none');
			} else {
				$('.dalue_css_autocomplete_list_right_date').css('display', '');
				$('.dalue_search_recentQuery_delAll').css('display', '');
			}
		}
		
		
		/*
		if(true) {
			return;
		}
		
		for(var i = 0; i < DalueSearch.elements.searchInput.length; i++) {
			if(DalueSearch.options.width == undefined || DalueSearch.options.width.length == 0) {
				// console.log($('#' + DalueSearch.elements.autoCompleteLayer[i].attr('id')).find('.dalue_css_autocomplete_wrap').length + ' == warp');
				// $('#' + DalueSearch.elements.autoCompleteLayer[i].attr('id')).find('.dalue_css_autocomplete_wrap').width(100);
				elm = DalueSearch.elements.autoCompleteLayer[i].find('.dalue_css_autocomplete_wrap');
				elm.css('width', (DalueSearch.elements.searchInput[i].outerWidth() - 1) + 'px');
				elm.css('left', (DalueSearch.elements.searchInput[i].position().left) + 'px');	
				//console.log($('#' + DalueSearch.elements.autoCompleteLayer[i].attr('id')).width() + ', ' + $('#' + DalueSearch.elements.autoCompleteLayer[i].attr('id')).find('.dalue_css_autocomplete_wrap').css('width'));
				
				console.log(elm.length);
				
				if((DalueSearch.elements.searchInput[i].outerWidth() - 1) < 250) {
					$('#' + DalueSearch.elements.autoCompleteLayer[i].attr('id')).find('.dalue_css_autocomplete_list_right_date').css('display', 'none');
					$('#' + DalueSearch.elements.autoCompleteLayer[i].attr('id')).find('.dalue_search_recentQuery_delAll').css('display', 'none');
				}
				
			} else {
				$('.dalue_css_autocomplete_wrap').css('width', DalueSearch.options.width[i] + 'px');
			}
		}
		*/
		
	}
	, removeJsonCookie: function removeJsonCookieFn(key) {
		if(key == null) {
			var data = {
				queries: null
			}
			
			DalueSearch.setJsonCookie(DalueSearch.Consts.COOKIE_QUERY_HISTORY, data, 100 * 365);
			return;
		}
		
		var hist = DalueSearch.getJsonCookie(DalueSearch.Consts.COOKIE_QUERY_HISTORY);
		if(hist == null) {
			return null;
		}
		
		for(var i = 0; i < hist.queries.length; i++) {
			if(hist.queries[i].query.toLowerCase() == key.toLowerCase()) {
				hist.queries.splice(i, 1);
				break;
			}
		}
		
		if(hist.queries.length == 0) {
			hist = {
				queries: null
			}
		}
		
		DalueSearch.setJsonCookie(DalueSearch.Consts.COOKIE_QUERY_HISTORY, hist, 100 * 365);
		
		return hist;
	}
	, setJsonCookie: function setJsonCookieFn(name, data, expire) {
		var date = new Date();
		date.setTime(date.getTime() + expire * 24 * 60 * 60 * 1000);
		// console.log(date.toUTCString());
		//console.error('set cookie [' +JSON.stringify(data) + ']');
		document.cookie = name + '=' + encodeURI(JSON.stringify(data)) + '; path=/; expires=' + date.toUTCString() + ';';
		// console.log(document.cookie);
	}
	
	, getJsonCookie: function getJsonCookieFn(name) {
		// console.log(name + ':' + document.cookie);
		
		if(DalueSearch.options.recentQueryHide) {
			return null;
		}
		
		var x, y;
		var val = document.cookie.split(';');
		var parsed;
		
		// alert(val.length);
		console.log('[COOKIE] ' + val.length);
		for (var i = 0; i < val.length; i++) {
			x = val[i].substr(0, val[i].indexOf('='));
			y = val[i].substr(val[i].indexOf('=') + 1);
			x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
			
			// console.log('[COOKIE] x[' + x + '], name[' + name + ']');
			//console.error(i + '[' + val[i]+ ']');
			if (x == name) {
				
				//console.log('cookie name: ' + x + ', ' + y);
				try {
					if(y != undefined) {
						//console.error(y);
						parsed = JSON.parse(decodeURI(y));
						if(parsed.queries != null) {
							//console.error(JSON.stringify(parsed));
							return parsed;
						}
					}
					
				} catch(e) {
					//DalueSearch.setJsonCookie(DalueSearch.Consts.COOKIE_QUERY_HISTORY, hist, 100 * 365);
					//console.error(e);
					//console.log(y);
					var hist = {
						queries: null
					}
					
				}
			}
  		}
		
		return null;
	}
	, ajaxGet: function ajaxGetFn(url, data, onSuccess, onError) {
		$.ajax({
			type: "GET",
			url: url,
			data: '',
			// data: JSON.stringify(jsonObject),
			success: function(res) {
				if(onSuccess)
					onSuccess(res, data);
			},
			error: function(err) {
				if(onError)
					onError(err, data);
			},
			
			dataType: "json"
			// contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
			// contentType: "text/plain"
		});
	}
	, dex: function dexFn(url, jsonObject, onSuccess, onError) {
		// var formData = JSON.stringify(jsonObject);
		var err = new Error();
		// console.log(JSON.stringify(jsonObject));
		
		// console.log(url + ':' + err.stack);
		$.ajax({
			type: "post",
			url: url,
			data: jsonObject,
			// data: JSON.stringify(jsonObject),
			success: function(json) {
				if (json == null) {
					// alert("ERROR was returned : " + postUrl);
					return;
				}

				// alert(JSON.stringify(json));
				if (!json.hasOwnProperty('CODE')) {
					onSuccess(json);
				} else if(json.header != undefined && parseInt(json.header.code) >= 0) {
					onSuccess(json);
				} else if (parseInt(json.CODE) >= 0) {
					onSuccess(json);
				} else {
					if(json.header != undefined && json.header.message != undefeind) {
						onError(json.header.message);	
					} else {
						alert('알 수 없는 오류가 발생하였습니다.');
						console.log(JSON.stringify(json));
						console.log(url + ':' + err.stack);
					}
					
				}
			},
			error: function(err) { console.log("[FATAL] " + JSON.stringify(err)); },
			dataType: "json",
			contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
			// contentType: "text/plain"
		});
	}
	, escapeHtml: function escapeHtmlFn(str) {
		var entityMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;', '`': '&#x60;', '=': '&#x3D;' };
		return String(str).replace(/[&<>"'`=\/]/g, function (s) { return entityMap[s]; });
	}
	
	// P == point(%), W == 원
	/**
	
// member benefit
// 상품에는 단위에 대한 올림,반올림,내림이 없다.
	X F
1 O
10 T
100 M
1000 H

내림 L
반올림 U
올림 C
	 */
	, parseCafe24PointInfo: function parseCafe24Point(productNo, priceIn, pointsAmount) {
		var pointTypes = pointsAmount.split(';');
		var kv;
		var m = null;
		
		try {
			if(DalueSearch.memberBenefit != undefined) {
				m = DalueSearch.memberBenefit['' + productNo + '|' + DalueSearch.userGroupNo];	
			}
				
		} catch(e) {
			console.log(e);
		}
		var unit;
		var memberPrice;
		var points = [];
		
		// console.error(pointsAmount);
		
		if(pointsAmount == null || pointsAmount == '') {
			var pak = Object.keys(DalueSearch.options.pointsAmount);
			
			for(var i = 0; i < pak.length; i++) {
				var d = DalueSearch.options.pointsAmount[pak[i]];
				points.push({
					type: pak[i]
					, point: d.point
					, unit: d.unit
					, price: priceIn
				});
			}
			
		} else {
			for(var i = 0; i < pointTypes.length; i++) {
				if(pointTypes[i].indexOf(',') > -1) {
					kv = pointTypes[i].split(',');
					
					point = parseFloat(kv[1].indexOf('%') > -1 ? kv[1].substring(0, kv[1].indexOf('%')) : kv[1]);
					unit = kv[1].indexOf('%') > -1 ? 'P' : 'W';
					
					
					points.push({
						type: kv[0] == 'null' ? DalueSearch.options.pointTypeNull : kv[0]
						, point: parseFloat(kv[1].indexOf('%') > -1 ? kv[1].substring(0, kv[1].indexOf('%')) : kv[1])
						, unit: unit
						, price: priceIn
					});
					
				} 
			}
		}
		
		
		if(m != null) { // membership
			var cut = 0;
				
			// 절삭
			switch(m.t) {
			case 'F': // 절삭 없음
				cut = 0;
				break;
			case 'O': // 1
				cut = 1;
				break;
			case 'T': // 10
				cut = 10;
				break;
			case 'M': // 100
				cut = 100;
				break;
			case 'H': // 1000
				cut = 1000;
				break;
			}
			
			// W은 절삭하지 않는다.
			if(cut != 0) {
				switch(m.m) {
				case 'L': // 내림
					memberPrice = m.u == 'P' ? parseInt(priceIn) - parseInt(parseInt(Math.floor(priceIn * (m.v / 100) / (cut * 10)) * (cut * 10)))
						: parseInt(parseInt(priceIn) - m.v);
					break;
				case 'U': // 반올림
					memberPrice = m.u == 'P' ? parseInt(priceIn) - parseInt(parseInt(Math.round(priceIn * (m.v / 100) / (cut * 10)) * (cut * 10)))
						: parseInt(parseInt(priceIn) - m.v);
					break;
				case 'C': // 올림
					memberPrice = m.u == 'P' ? parseInt(priceIn) - parseInt(parseInt(Math.ceil(priceIn * (m.v / 100) / (cut * 10)) * (cut * 10)))
						: parseInt(parseInt(priceIn) - m.v);
					break;
				}
			} else {
				memberPrice = m.u == 'P' ? parseInt(priceIn) - parseInt(parseInt(priceIn * (m.v / 100))) : parseInt(parseInt(priceIn) - m.v);
			}
			
		} else {
			memberPrice = -1;
		}
		
		if(priceIn <= memberPrice) { // 멤버 할인을 해도 기존 가격과 같다.
			memberPrice = -1;
		}
		
		var pointInfo = {
			points: points
			, memberPrice: memberPrice
		}
		
		return pointInfo;
	}
	/**
	zeroPad(1,10);   //=> 01
	zeroPad(1,100);  //=> 001
	zeroPad(1,1000); //=> 0001
	 */
	, zeroPad: function zeroPadFn(nr,base){
		var  len = (String(base).length - String(nr).length)+1;
		return len > 0? new Array(len).join('0')+nr : nr;
	}
	, parseParameter: function parseParameter() {
		var query = window.location.search.substring(1);
		
		var vars = query.split("&");
		var query_string = {};
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split("=");
			var key = decodeURIComponent(pair[0]);
			var value = decodeURIComponent(pair[1]);
			// If first entry with this name
			if (typeof query_string[key] === "undefined") {
				try {
					query_string[key] = decodeURIComponent(value);
				} catch(e) {
					query_string[key] = (value);
				}
			// If second entry with this name
			} else if (typeof query_string[key] === "string") {
				try {
					var arr = [query_string[key], decodeURIComponent(value)];
					query_string[key] = arr;
				} catch(e) {
					var arr = [query_string[key], (value)];
					query_string[key] = arr;
				}
				
				// If third or later entry with this name
			} else {
				query_string[key].push(decodeURIComponent(value));
			}
		}
  		return query_string;
	}
	, searchParameterSort: function searchSortFn(sort) {
		var param = DalueSearch.getUriParam();
		DalueSearch.searchOptions.sortType = sort;
		// console.log('DalueSearch.options.freqUpdateFieldSort ==== ' + DalueSearch.options.freqUpdateFieldSort);
		
		DalueSearch.searchWithOptions();
		
		// DalueSearch.search(param.query, 1, param.size, sort, param.categoryId, param.brandeCode, param.price, undefined, true);
	}
	, searchParameterSize: function searchParameterSizeFn(size) {
		var param = DalueSearch.getUriParam();
		DalueSearch.options.size = size;
		DalueSearch.search(param.query, 1, size, param.sortType, param.categoryId, param.brandeCode, param.price, undefined, true);
	}
	, searchParameterBegin: function searchParameterBeginFn() {
		var param = DalueSearch.getUriParam();
		DalueSearch.search(param.query, parseInt(param.begin) + parseInt(param.size), param.size, param.sortType, param.categoryId, param.brandeCode, param.price, undefined, true);
	}
	, search: function searchFn(query, begin, size, sort, category, brand, price, toScrollName, replaceHistory) {
		var param = DalueSearch.getUriParam();
		
		DalueSearch.searchOptions.query = query;
		DalueSearch.searchOptions.begin = begin;
		DalueSearch.searchOptions.size = size;
		DalueSearch.searchOptions.sortType = sort;
		DalueSearch.searchOptions.categoryId = category;
		DalueSearch.searchOptions.brandeCode = brand;
		DalueSearch.searchOptions.price = price;
		DalueSearch.searchOptions.freqUpdateFieldSort = DalueSearch.options.freqUpdateFieldSort;
		DalueSearch.searchOptions.tagStat = DalueSearch.options.tagStat;
		DalueSearch.searchOptions.tagFields = DalueSearch.options.tagFields;
		DalueSearch.searchOptions.replaceHistory = replaceHistory;
		DalueSearch.searchOptions.toScrollName = toScrollName;
		
		return DalueSearch.searchWithOptions();
	}
	, setCursor: function setCursorFn(prdNo) {
		var params = DalueSearch.getUriParam();
		var uriParam = ''; // new URLSearchParams(params).toString();
		var paramKeys = Object.keys(params);
		var fnd = false;
		
		for(var i = 0; i < paramKeys.length; i++) {
			if(i != 0) {
				uriParam += '&';
			}
			if(paramKeys[i] != '' && params[paramKeys[i]] != undefined) {
				if(paramKeys[i] == 'cursor') {
					uriParam += (paramKeys[i]) + '=' + prdNo;
					fnd = true;
				} else {
					uriParam += (paramKeys[i]) + '=' + encodeURIComponent(decodeURIComponent(params[paramKeys[i]]));	
				}
					
			}
		}
		
		if(fnd == false) {
			uriParam += 'cursor' + '=' + prdNo;
		}
		
		history.replaceState(pushData, '', 'search.html?' + uriParam);
	}
	, gotoCursor: function gotoCursorFn() {
		var params = DalueSearch.getUriParam();
		if(params['cursor'] != '' && params['cursor'] != '0') {
			$('html, body').animate({
	        	scrollTop: $("#anchorBoxId_" + params['cursor']).offset().top - 150
	    	}, 1);
		}
	}
	, removeTagUrl: function removeTagUrlFn() {
		var params = DalueSearch.getUriParam();
		var keys = Object.keys(params);
		for(var i = 0; i < keys.length; i++) {
			if(keys[i].startsWith('tagValue_')) {
				console.log('delete ' + keys[i]);
				delete params[keys[i]];
			}
		}
		
		var uriParam = ''; // new URLSearchParams(params).toString();
		var paramKeys = Object.keys(params);
		for(var i = 0; i < paramKeys.length; i++) {
			if(i != 0) {
				uriParam += '&';
			}
			if(paramKeys[i] != '' && params[paramKeys[i]] != undefined) {
				uriParam += (paramKeys[i]) + '=' + encodeURIComponent(decodeURIComponent(params[paramKeys[i]]));	
			}
		}
		
		history.replaceState(params, '', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + uriParam + '');
	}
	, removeQuery: function removeQueryFn() {
		var elm = DalueSearch.elements.searchInput;
		for(var i = 0; i < elm.length; i++) {
			elm[i].val('');
		}
		DalueSearch.searchOptions.query = '';
	}
	, searchWithOptions: function searchWithOptionsFn() {
	
		DalueSearch.searchOptions.freqUpdateFieldSort = DalueSearch.options.freqUpdateFieldSort;
		
		if(DalueSearch.elements.loaderScreen != undefined) {
			DalueSearch.elements.loaderScreen.show();
		}
		
		var params = DalueSearch.getUriParam();
		
		// - 삭제 - 20230214
		var q = DalueSearch.searchOptions.query.replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, ' ').trim();
		var q2 = DalueSearch.searchOptions.query.replace(/[():'"\{\}\[\]\\\/]/gi, ' ').trim();
		var q3 = DalueSearch.searchOptions.query.replace(/-/gi, ' ').trim();
		// console.log(q3);
		
		q = q.replace(/-/gi, ' ').trim();
		
		if(q.endsWith('님')) {
			// q = q.substring(0, q.length - 1);
		}
		
		if(q == '' || q == '*') {
			q = '*';
		} else if(DalueSearch.searchOptions.queryField != '') {
			q = '(' + q + '):' + DalueSearch.searchOptions.queryField;
		} else {
			switch(DalueSearch.options.searchQueryType) {
			case 1: {
				/*
				if(q.indexOf('-') == -1) {
					var q2 = q.replace(/ /g, '<OR>');
					q = '(' + q + ')' + ' <OR> (' + q2 + '):productName <OR> ' + ' (' + q + '):productName <OR> ' + '(' + q + '):productTag' + ' <OR> (' + q + '):summaryDescription';
					console.log(q);
				} else {
					var q2 = q.replace(/ /g, '<OR>');
					q = '(' + q + ')' + ' <OR> (' + q2 + '):productName <OR> ' + ' (' + q + '):productName <OR> ' + '(' + q + '):productTag' + ' <OR> (' + q + '):summaryDescription' + ' <OR> (' + q + '):customProductCode';
					console.log(q);
				}
				*/
				var q2 = q.replace(/ /g, '<OR>');
				q3 = q3.replace(/ /g, '<OR>');
				q = '(' + q + ')' + ' <OR> (' + q2 + '):productName <OR> ' + ' <OR> (' + q + '):productName <OR> ' + '(' + q + '):productTag' + ' <OR> (' + q + '):summaryDescription' + ' <OR> (' + q + '):supplyProductName';
				//q = '(' + q + ')' + ' <OR> (' + q2 + '):productName <OR> ' + ' <OR> (' + q + '):productName <OR> ' + '(' + q + '):productTag' + ' <OR> (' + q + '):summaryDescription' + ' <OR> (' + q + '):supplyProductName' + ' <OR> (' + q2 + '):customProductCode <OR> (' + q2 + '):productCode <OR> (' + q3 + '):modelName' ;
				// q = '(' + q + ')' + ' <OR> (' + q + '):productName <OR> ' + ' (' + q + '):productName <OR> ' + '(' + q + '):productTag' + ' <OR> (' + q + '):summaryDescription' + ' <OR> (' + q + '):supplyProductName' + ' <OR> (' + q + '):customProductCode';
				break;
			}
			case 2: {
				if(DalueSearch.options.searchQueryField != '') {
					q = '(' + q + '):' + DalueSearch.options.searchQueryField;
				} else {
					q = '(' + q + '):productName <OR> ' + '(' + q + '):productTag <OR> ' + '(' + q + '):summaryDescription <OR> ' + '(' + q + '):customProductCode <OR> ' + '(' + q + ')';
				}
				
				break;
			}
			case 3: { // duvetica
				q = '(' + q + '):productName <OR> ' + '(' + q + '):productTag <OR> ' + '(' + q + '):summaryDescription <OR> ' + '(' + q + '):customProductCode <OR> ' + '(' + q + ')' + ' <OR> (' + q2 + '):productCode <OR> (' + q3 + '):modelName';
				break;
			}
			case 4: { // description 제외
				q = '(' + q + '):productName <OR> ' + '(' + q + '):brandCode <OR> ' + '(' + q + '):brandName <OR> ' + '(' + q + '):options <OR> '
					+ '(' + q + '):productTag <OR> ' + '(' + q + '):summaryDescription <OR> ' + '(' + q + '):customProductCode <OR> '
					+ '(' + q + '):supplyProductName' + '(' + q + '):simpleDescription <OR> ' + ' <OR> (' + q + '):productCode <OR> (' + q + '):modelName'; 
                break;
			}
			default:
				/*
				if(q.indexOf('-') == -1) {
					q = '(' + q + '):productName <OR> ' + '(' + q + '):productTag <OR> ' + '(' + q + '):summaryDescription <OR> ' + '(' + q + ')';
				} else {
					q = '(' + q + '):productName <OR> ' + '(' + q + '):productTag <OR> ' + '(' + q + '):summaryDescription <OR> ' + '(' + q + '):customProductCode <OR> ' + '(' + q + ')';
				}
				*/
				q = '(' + q + '):productName <OR> ' + '(' + q + '):productName <OR> ' + '(' + q + '):productTag <OR> ' + '(' + q + '):summaryDescription <OR> ' + '(' + q + '):customProductCode <OR> ' + '(' + q + ')';
				//console.log(q);
				break;
			}
			
		}
		
		console.log(q);
		
		var sortField = '';
		var sortType = '';
		var freqUpdateFieldSort = DalueSearch.options.freqUpdateFieldSort;
		
		switch(DalueSearch.searchOptions.sortType) {
		case 'PRICE_ASC': {
			sortField = DalueSearch.options.priceField;
			sortType = 'ASC';
			break;
		}
		case 'PRICE_DESC': {
			sortField = DalueSearch.options.priceField;
			sortType = 'DESC';
			break;
		}
		case 'UPDATED_ASC': {
			sortField = 'updatedDate';
			sortType = 'ASC';
			break;
		}
		case 'UPDATED_DESC': {
			sortField = 'updatedDate';
			sortType = 'DESC';
			break;
		}
		case 'CREATED_ASC': {
			sortField = 'createdDate';
			sortType = 'ASC';
			break;
		}
		case 'CREATED_DESC': {
			sortField = 'createdDate';
			sortType = 'DESC';
			break;
		}
		case 'PRODUCT_NAME_ASC': {
			sortField = 'productName';
			sortType = 'ASC';
			break;
		}
		default: {
			/*
			if(sort.indexOf('fuf_') > -1) {
				var fufs = sort.split('_');
				if(fufs.length > 1) {
					freqUpdateFieldSort = fufs[1];
					console.log(freqUpdateFieldSort);
				}
			}
			*/	
		}
		
		}
		var data = {};
		if(DalueSearch.mallType == 'cafe24') {
			data = {
				apiKey: DalueSearch.apiKey
				, query: q
				, collName: DalueSearch.collName
				, begin: DalueSearch.searchOptions.begin
				, size: DalueSearch.searchOptions.size
				, sortField: sortField
				, sortType: sortType
				, categoryIdFields: DalueSearch.categoryIdFields
				, categoryNameFields: DalueSearch.categoryNameFields
				, brandIdField: DalueSearch.brandIdField
				, brandNameField: DalueSearch.brandNameField
				, brandCode: DalueSearch.searchOptions.brandeCode == null ? '' : DalueSearch.searchOptions.brandeCode
				, categoryId: DalueSearch.searchOptions.categoryId == null ? '' : DalueSearch.searchOptions.categoryId
				, rangeFields: DalueSearch.categoryAuthDevice == DalueSearch.categoryAuth.device_pc ? 'pcDiscountPrice' : 'mobileDiscountPrice'
				, rangeValues: DalueSearch.searchOptions.price.indexOf(',') > -1 ? DalueSearch.searchOptions.price : '0,9999999999'
				, categoryAuthFieldName: DalueSearch.categoryAuthFieldName
				, categoryAuthDevice: DalueSearch.categoryAuthDevice
				, categoryAuthMemberType: DalueSearch.categoryAuthMemberType
				, vFields: DalueSearch.vFields
				, equalFields: DalueSearch.equalFields
				, equalValues: DalueSearch.equalValues
				, aclFlagField: DalueSearch.aclFlagField
				, aclFlagValue: DalueSearch.aclFlagValue
				, aclField: DalueSearch.aclField
				, aclFieldValue: DalueSearch.aclFieldValue
				, aclShow: DalueSearch.aclShow
				, aclRemoveFields: DalueSearch.aclRemoveFields
				, equalFields: DalueSearch.options.defaultEqualFields
				, equalValues: DalueSearch.options.defaultEqualFieldValues
				, priceField: DalueSearch.options.priceField
				, priceClusterNo: 3
				, categoryAuthNoCategory: DalueSearch.options.categoryAuthNoCategory
				, freqUpdateFieldSort: DalueSearch.searchOptions.freqUpdateFieldSort
				, freqUpdateFieldInclude: DalueSearch.options.freqUpdateFieldInclude
				, tagStat: DalueSearch.options.tagStat
				, tagFields: DalueSearch.options.tagFields
				, tagSeperator: DalueSearch.options.tagSeperator
				, tagOperator: DalueSearch.options.tagOperators
				, exceptCategory: DalueSearch.options.exceptCategory
				, exceptCategoryNos: DalueSearch.options.exceptCategoryNos
				, exceptCategoryMatchAll: DalueSearch.options.exceptCategoryMatchAll
				, onlyIncludeCategoryNos: DalueSearch.options.onlyIncludeCategoryNos
				, customAuthId: DalueSearch.options.customAuthId
				, weightField: DalueSearch.options.weightField
				, weightMultiplier: DalueSearch.options.weightMultiplier
				, weightInclude: DalueSearch.options.weightInclude
			};
		} else if(DalueSearch.mallType == 'godomall') {
			data = {
				apiKey: DalueSearch.apiKey
				, query: q
				, collName: DalueSearch.collName
				, begin: DalueSearch.searchOptions.begin
				, size: DalueSearch.searchOptions.size
				, sortField: sortField
				, sortType: sortType
				, categoryIdFields: DalueSearch.categoryIdFields
				, categoryNameFields: DalueSearch.categoryNameFields
				, brandIdField: DalueSearch.brandIdField
				, brandNameField: DalueSearch.brandNameField
				, brandCode: DalueSearch.searchOptions.brandCode == null ? '' : DalueSearch.searchOptions.brandCode
				, categoryId: DalueSearch.searchOptions.categoryId == null ? '' : DalueSearch.searchOptions.categoryId
				, rangeFields: 'price'
				, rangeValues: DalueSearch.searchOptions.price.indexOf(',') > -1 ? price : '0,9999999999'
				, categoryAuthFieldName: DalueSearch.categoryAuthFieldName
				, categoryAuthDevice: DalueSearch.categoryAuthDevice
				, categoryAuthMemberType: DalueSearch.categoryAuthMemberType
				, vFields: DalueSearch.vFields
				, equalFields: DalueSearch.equalFields
				, equalValues: DalueSearch.equalValues
				, aclFlagField: DalueSearch.aclFlagField
				, aclFlagValue: DalueSearch.aclFlagValue
				, aclField: DalueSearch.aclField
				, aclFieldValue: DalueSearch.aclFieldValue
				, aclShow: DalueSearch.aclShow
				, aclRemoveFields: DalueSearch.aclRemoveFields
				, equalFields: DalueSearch.categoryAuthDevice == DalueSearch.categoryAuth.device_pc ? 'displayPc,sellingPc' : 'displayMobile,sellingMobile'
				, equalValues: '1,1'
				, priceField: DalueSearch.options.priceField
				, priceClusterNo: 3
				, categoryAuthNoCategory: DalueSearch.options.categoryAuthNoCategory
				, freqUpdateFieldSort: DalueSearch.searchOptions.freqUpdateFieldSort
				, freqUpdateFieldInclude: DalueSearch.options.freqUpdateFieldInclude
				, tagStat: DalueSearch.options.tagStat
				, tagFields: DalueSearch.options.tagFields
				, tagSeperator: DalueSearch.options.tagSeperator
				, tagOperator: DalueSearch.options.tagOperators
				, exceptCategory: DalueSearch.options.exceptCategory
				, exceptCategoryNos: DalueSearch.options.exceptCategoryNos
				, exceptCategoryMatchAll: DalueSearch.options.exceptCategoryMatchAll
				, onlyIncludeCategoryNos: DalueSearch.options.onlyIncludeCategoryNos
				, customAuthId: DalueSearch.options.customAuthId
				, weightField: DalueSearch.options.weightField
				, weightMultiplier: DalueSearch.options.weightMultiplier
				, weightInclude: DalueSearch.options.weightInclude
			};
		}
		
		// console.log('PARAMS !!! - ' + JSON.stringify(params));
		
		// need resetTagFieldValues()
		if(data.tagFields != null && data.tagFields.trim() != '') {
			var tagFields = data.tagFields.split(DalueSearch.options.tagSeperator); // tagFields는 ,
			for(var i = 0; i < tagFields.length; i++) {
				if(DalueSearch.searchOptions.tagValues[tagFields[i]] != undefined) {
					data['tagValue_' + tagFields[i]] = DalueSearch.searchOptions.tagValues[tagFields[i]];
					DalueSearch.searchOptions['tagValue_' + tagFields[i]] = DalueSearch.searchOptions.tagValues[tagFields[i]];
				}
				// data['tagValue_' + tagFields[i]] = DalueSearch.searchOptions.tagValues[tagFields[i]] == undefined ? '' : DalueSearch.searchOptions.tagValues[tagFields[i]];
				// console.log('tagValue_' + tagFields[i] + ':' + data['tagValue_' + tagFields[i]]);
			}
		}
		
		if(data.tagFields != null && data.tagFields.trim() != '') {
			var tagFields = data.tagFields.split(DalueSearch.options.tagSeperator); // tagFields는 ,
			for(var i = 0; i < tagFields.length; i++) {
				data['tagOperator_' + tagFields[i]] = DalueSearch.options.tagOperators[tagFields[i]] == undefined ? '' : DalueSearch.options.tagOperators[tagFields[i]];
				// console.log('tagValue_' + tagFields[i] + ':' + data['tagValue_' + tagFields[i]]);
			}
		}
		
		if(DalueSearch.options.tagStatOnly == 1) {
			data['tagStatOnly'] = 1;
		}
		
		DalueSearch.setHtml(DalueSearch.elements.searchQuery, DalueSearch.escapeHtml(DalueSearch.searchOptions.query));
		DalueSearch.setHtml(DalueSearch.elements.searchQueryQouted, '\'' + DalueSearch.escapeHtml(DalueSearch.searchOptions.query) + '\'');
		
		DalueSearch.lastQuery = data;
		
		var ks = Object.keys(data);
		var dumpData = '';
		for(var i = 0; i < ks.length; i++) {
			if(i != 0) {
				dumpData += '&';
			}
			dumpData += ks[i] + '=' + data[ks[i]];
		}
		
		// console.error("DUMP!!!!!! - " + dumpData);
		
		
		if(location.href.indexOf(DalueSearch.options.searchFormAction) > -1) {
			
		}
		var optKeys = Object.keys(DalueSearch.searchOptions);
		for(var i = 0; i < optKeys.length; i++) {
			//console.log(DalueSearch.searchOptions[optKeys[i]])
			if(optKeys[i] == 'tagValues'
				|| optKeys[i] == 'tagFields') {
				continue;
			}
			params[optKeys[i]] = (DalueSearch.searchOptions[optKeys[i]]);
			//console.log(DalueSearch.options.tagStatOnly + ' - - - - - - ' + optKeys[i] + ' = ' + DalueSearch.searchOptions[optKeys[i]]);
		}
		
		if(DalueSearch.searchOptions.query != undefined) {
			params.query = DalueSearch.searchOptions.query.replaceWhole('+', '');
		} else {
			params.query = '';
		}
		
		var uriParam = ''; // new URLSearchParams(params).toString();
		var paramKeys = Object.keys(params);
		for(var i = 0; i < paramKeys.length; i++) {
			if(i != 0) {
				uriParam += '&';
			}
			if(paramKeys[i] != '' && params[paramKeys[i]] != undefined) {
				uriParam += (paramKeys[i]) + '=' + encodeURIComponent(decodeURIComponent(params[paramKeys[i]]));	
			}
		}
		
		// console.log(uriParam);
		
		var toScrollName = DalueSearch.searchOptions.toScrollName;
		
		if(DalueSearch.options.tagStatOnly != 1) {
			//console.log('replace history - ' + uriParam);
			
			if(DalueSearch.searchOptions.replaceHistory == undefined || DalueSearch.searchOptions.replaceHistory == false) {
				history.pushState(params, '', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + uriParam + '' + (toScrollName != undefined ? '#' + toScrollName : ''));
				//console.log('pushState: ' + DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + uriParam + '' + (toScrollName != undefined ? '#' + toScrollName : ''));
			} else {
				history.replaceState(null, '', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + uriParam + '' + (toScrollName != undefined ? '#' + toScrollName : ''));
				//console.log('replaceState: ' + DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + uriParam + '' + (toScrollName != undefined ? '#' + toScrollName : ''));
			}
			
			try {
				var tagFields2 = data.tagFields.split(DalueSearch.options.tagSeperator);
			
				for(var i = 0; i < tagFields2.length; i++) {
					if(params['tagValue_' + tagFields2[i]] != undefined && params['tagValue_' + tagFields2[i]] != '') {
						//console.log('tagValue_' + tagFields2[i] + ' = ' + params['tagValue_' + tagFields2[i]]);
						data['tagValue_' + tagFields2[i]] = ((params['tagValue_' + tagFields2[i]]));
						DalueSearch.searchOptions['tagValue_' + tagFields2[i]] = params['tagValue_' + tagFields2[i]];
					}
				}
			} catch(e) {
				console.error(e);
			}
		}
		
		
		// alert(DalueSearch.searchOptions.queryField);
		
		DalueSearch.dex(DalueSearch.url + '/dcse/query', data, DalueSearch.searchOnSuccess, DalueSearch.options.functionSearchOnFail == undefined ? alert : DalueSearch.options.functionSearchOnFail);
	}
	, clickProduct: function clickProductFn(productNo) {
		DalueSearch.replaceScroll('cursor_' + productNo);
		
		return true;
	}
	, replaceScroll: function replaceScrollFn(toScrollName) {
		var params = DalueSearch.getUriParam();
		
		var uriParam = ''; // new URLSearchParams(params).toString();
		var paramKeys = Object.keys(params);
		var isTsn = false;
		for(var i = 0; i < paramKeys.length; i++) {
			if(i != 0) {
				uriParam += '&';
			}
			
			if(paramKeys[i] == 'toScrollName') {
				uriParam += (paramKeys[i]) + '=' + toScrollName;
				isTsn = true;
			} else if(paramKeys[i] != '' && params[paramKeys[i]] != undefined) {
				uriParam += (paramKeys[i]) + '=' + encodeURIComponent(decodeURIComponent(params[paramKeys[i]]));	
			}
		}
		
		if(isTsn == false) {
			uriParam += '&toScrollName' + '=' + toScrollName;
		}
		history.replaceState(params, '', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + uriParam + '' + (toScrollName != undefined ? '#' + toScrollName : ''));
		// alert(uriParam);
	}
	, searchWithTagAddOnly: function searchWithTagAddOnly(field, tag) {
		if(DalueSearch.searchOptions.tagValues[field] == undefined || DalueSearch.searchOptions.tagValues[field] == '') {
			DalueSearch.searchOptions.tagValues[field] = tag;
		} else {
			var tagValues = DalueSearch.searchOptions.tagValues[field];
			var tagArray = tagValues.split(DalueSearch.options.tagSeperator);
			var fnd = false;
			for(var i = 0; i < tagArray.length; i++) {
				if(tagArray[i] == tag) {
					fnd = true;
					break;
				}
			}
			if(!fnd) {
				DalueSearch.searchOptions.tagValues[field] += DalueSearch.options.tagSeperator + tag;
			} else {
				var n = 0;
				DalueSearch.searchOptions.tagValues[field] = '';
				for(var i = 0; i < tagArray.length; i++) {
					if(tagArray[i] == tag) {
						continue;
					}
					
					fnd = false;
					for(j = 0; j < i - 1; j++) {
						if(tagArray[j] == tag) {
							fnd = true;
							break;
						}
					}
					
					if(fnd) {
						continue;
					}
					
					if(n > 0) {
						DalueSearch.searchOptions.tagValues[field] += DalueSearch.options.tagSeperator;
					}
					
					DalueSearch.searchOptions.tagValues[field] += tagArray[i];
					//console.log(DalueSearch.searchOptions.tagValues[field]);
					
					n++;
				}
			}
			
		}
	}
	, searchWithTagAddTag: function searchWithTagAddTagFn(field, tag) {
		if(DalueSearch.searchOptions.tagValues[field] == undefined || DalueSearch.searchOptions.tagValues[field] == '') {
			DalueSearch.searchOptions.tagValues[field] = tag;
		} else {
			var tagValues = DalueSearch.searchOptions.tagValues[field];
			var tagArray = tagValues.split(DalueSearch.options.tagSeperator);
			var fnd = false;
			for(var i = 0; i < tagArray.length; i++) {
				// console.log(tagArray[i] + ' ===== ' + tag);
				if(tagArray[i] == tag) {
					fnd = true;
					// console.log(tagArray[i] + ' ===== ' + tag + ' !!!!!');
					break;
				}
			}
			
			if(!fnd) {
				DalueSearch.searchOptions.tagValues[field] += DalueSearch.options.tagSeperator + tag;
			} else {
				var n = 0;
				
				DalueSearch.searchOptions.tagValues[field] = '';
				for(var i = 0; i < tagArray.length; i++) {
					if(tagArray[i] == tag) {
						continue;
					}
					
					// console.log(tagArray[i] + ' ===== ' + tag + ' ??????');
					
					if(n > 0) {
						DalueSearch.searchOptions.tagValues[field] += DalueSearch.options.tagSeperator;
					}
					
					DalueSearch.searchOptions.tagValues[field] += tagArray[i];
					
					n++;
				}
			}
		}
	}
	, searchWithTag: function searchWithTagFn(query) {
		var tagUrl = '';
		var tagFields = '';
		var ntagFields = 0;
		
		var fields = Object.keys(DalueSearch.searchOptions.tagValues);
		var tags;
		
		for(var i = 0; i < fields.length; i++) { // field
			// console.log(fields[i] + ' == ' + DalueSearch.searchOptions.tagValues[fields[i]]);
			
			if(DalueSearch.searchOptions.tagValues[fields[i]] == '' || DalueSearch.searchOptions.tagValues[fields[i]] == undefined) {
				continue;
			}
			
			if(ntagFields != 0) {
				tagFields += DalueSearch.options.tagSeperator;
			}
			
			tagFields += fields[i];
			
			tags = DalueSearch.searchOptions.tagValues[fields[i]].split(DalueSearch.options.tagSeperator);
			tagUrl += '&tagValue_' + encodeURIComponent(fields[i]) + '=';
			
			for(var j = 0; j < tags.length; j++) {
				if(j != 0) {
					tagUrl += DalueSearch.options.tagSeperator;
				}
				
				tagUrl += encodeURIComponent(tags[j]);
			}
			
			ntagFields++;
		}
		
		console.log('------------ ' + tagUrl);
		window.location.href = DalueSearch.searchUrl + '?query=' + encodeURIComponent(query) + '&tagFields=' + encodeURIComponent(tagFields) + '&' + tagUrl;
	}
	, addTag: function addTag(field, tag) {
		var tagValues = DalueSearch.searchOptions.tagValues[field];
		if(tagValues == undefined || tagValues == '') {
			DalueSearch.searchOptions.tagValues[field] = tag;
			return;
		}
		
		var tagArray = tagValues.split(DalueSearch.options.tagSeperator);
		var out = '';
		var fnd = false;
		
		for(var i = 0; i < tagArray.length; i++) {
			if(tagArray[i] == tag) {
				fnd = true;
				break;
			}
		}
		
		if(fnd) {
			return;
		}
		
		DalueSearch.searchOptions.tagValues[field] += DalueSearch.options.tagSeperator + tag
	}
	
	, deleteTag: function deleteTag(field, tag) {
		var tagValues = DalueSearch.searchOptions.tagValues[field];
		if(tagValues == undefined || tagValues == '') {
			return;
		}
		
		var tagArray = tagValues.split(DalueSearch.options.tagSeperator);
		var out = '';
		var n = 0;
		
		
		for(var i = 0; i < tagArray.length; i++) {
			if(tagArray[i] == tag) {
				continue;
			}
			
			if(n != 0) {
				out += DalueSearch.options.tagSeperator;
			}
			
			out += tagArray[i];
			n++;
		}
		
		DalueSearch.searchOptions.tagValues[field] = out;
	}
	, searchAddOrDeleteTag: function searchAddTagFn(field, tag) {
		if(field == null) {
			DalueSearch.searchWithOptions();
			return;
		}
		
		console.log('search start ' + field + ', ' + tag);
		if(DalueSearch.searchOptions.tagValues[field] == undefined || DalueSearch.searchOptions.tagValues[field] == '') {
			console.log('no tagValues[' + field + '] = ' + DalueSearch.searchOptions.tagValues[field]);
			DalueSearch.searchOptions.tagValues[field] = tag;
			console.log('no tagValues[' + field + '] = ' + DalueSearch.searchOptions.tagValues[field]);
		} else {
			var tagValues = DalueSearch.searchOptions.tagValues[field];
			var tagArray = tagValues.split(DalueSearch.options.tagSeperator);
			var fnd = false;
			for(var i = 0; i < tagArray.length; i++) {
				console.log(tagArray[i] + ' ===== ' + tag);
				if(tagArray[i] == tag) {
					fnd = true;
					console.log(tagArray[i] + ' ===== ' + tag + ' !!!!!');
					break;
				}
			}
			
			if(!fnd) {
				DalueSearch.searchOptions.tagValues[field] += DalueSearch.options.tagSeperator + tag;
			} else {
				var n = 0;
				
				DalueSearch.searchOptions.tagValues[field] = '';
				for(var i = 0; i < tagArray.length; i++) {
					if(tagArray[i] == tag) {
						continue;
					}
					
					console.log(tagArray[i] + ' ===== ' + tag + ' ??????');
					
					if(n > 0) {
						DalueSearch.searchOptions.tagValues[field] += DalueSearch.options.tagSeperator;
					}
					
					DalueSearch.searchOptions.tagValues[field] += tagArray[i];
					
					n++;
				}
			}
		}
		
		if(DalueSearch.options.tagStatOnly == 1) { // 검색 이외의 페이지
			// console.log('search tagStat' + field + ', ' + tag);
			window.location.href = DalueSearch.searchUrl + '?tag_field=' + field + '&tagValue_' + field + '=' + tag;
		} else {
			// console.log('search' + field + ', ' + tag + ' --- ' + DalueSearch.searchOptions.tagValues[field]);
			DalueSearch.searchWithOptions();	
		}
		
	}
	, getCafe24PointTypes: function getCafe24PointTypesFn() {
		return ['cafe24pay', 'toss', 'cvs', 'naverpay', 'smilepay', 'kakaopay', 'payco', 'paynow', 'icash', 'deposit', 'tcash', 'cell', 'card', 'mileage', 'cash'];
	}
	, getCafe24PayName: function getCafe24PayName(payId) {
		var ret = '';
		switch(payId) {
		case 'cafe24pay':
			ret = '카페24페이';
			break;
		case 'toss':
			ret = '토스';
			break;
		case 'cvs':
			ret = '편의점';
			break;
		case 'naverpay':
			ret = '네이버페이';
			break;
		case 'smilepay':
			ret = '스마일페이';
			break;
		case 'kakaopay':
			ret = '카카오페이';
			break;
		case 'payco':
			ret = '페이코';
			break;
		case 'paynow':
			ret = '페이나우';
			break;
		case 'icash':
			ret = '가상계좌';
			break;
		case 'deposit':
			ret = '예치금';
			break;
		case 'tcash':
			ret = '계좌이체';
			break;
		case 'cell':
			ret = '휴대폰';
			break;
		case 'card':
			ret = '신용카드';
			break;
		case 'mileage':
			ret = '적립금';
			break;
		case 'cash':
			ret = '무통장입금';
			break;
		}
		
		return ret;
	}
	, getDiscountRatio: function getDiscountRatioFn(price, retailPrice) {
		// var r = (1.0 - price / retailPrice) * 100;
		if(retailPrice == 0) {
			return 0;
		}
		
		var r = (retailPrice - price) / retailPrice * 100;
		//console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! - ' + r);
		// alert(r);
		return parseInt(Math.round(r));
	}
	
	, replaceHtml: function replaceHtmlFn(src, value) {
		var arr = DalueSearch.vFields.split(',');
		arr.push(DalueSearch.categoryAuthNoField);
		// productNo,productName,price,retailPrice,pointsAmount,image,soldOut,pcDiscountPrice,mobileDiscountPrice,exposureLimitType,exposureGroupList,categoryNos,brandName
		var ret = src;
		if(ret == null) {
			return;
		}
		
		for(var i = 0; i < arr.length; i++) {
			//console.log('!!!!!!!!!!!!! - ' + arr[i]);
			if(value[arr[i]] == undefined || value[arr[i]] == null || value[arr[i]] == 'null') {
				ret = ret.replaceWhole('{$' + arr[i] + '}', '');	
			} else {
				// console.log(arr[i]); 
				if(arr[i] == 'price' || arr[i] == 'retailPrice' || arr[i] == 'pcDiscountPrice' || arr[i] == 'mobileDiscountPrice') {
					if(arr[i] == 'retailPrice') {
						if(parseInt(value[arr[i]]) == 0 || parseInt(value[arr[i]]) <= parseInt(value[DalueSearch.options.priceField])) {
							ret = ret.replaceWhole('{$IF_retailPrice}', ';display: none !important;');
							//console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!! displaynone;');
						} else {
							ret = ret.replaceWhole('{$IF_retailPrice}', ' ');
							ret = ret.replaceWhole('{$discountPriceRatio}', DalueSearch.getDiscountRatio(parseInt(value[DalueSearch.options.priceField]), parseInt(value[arr[i]]))); //parseInt((1 - parseInt(value[arr[i]]) / parseInt(value[DalueSearch.options.priceField])) * 100) * -1 );
						}
						// console.log('retailPrice[' + value[arr[i]] + '], [' + parseInt(value['price']) +'], [' + (parseInt(value[arr[i]]) <= parseInt(value['price']) ? true : false) + ']');
					} else if(DalueSearch.categoryAuthDevice == DalueSearch.categoryAuth.device_pc && arr[i] == 'pcDiscountPrice') {
						// console.log(DalueSearch.options.priceField + ':' + parseInt(value[arr[i]]) + ', ' +  parseInt(value['price']));
						if(parseInt(value[arr[i]]) < parseInt(value['price'])) {
							ret = ret.replaceWhole('{$IF_discountPrice}', '');
							ret = ret.replaceWhole('{$IF_discountPrice_line}', 'text-decoration: line-through;');
							ret = ret.replaceWhole('{$IF_discountPrice_rate}', DalueSearch.getDiscountRatio(parseInt(value[DalueSearch.options.priceField]), parseInt(value[arr[i]]))); // parseInt(1 - parseInt(value[arr[i]]) / parseInt(value[DalueSearch.options.priceField])) * 100);
						} else {
							ret = ret.replaceWhole('{$IF_discountPrice}', ';display: none;');
							ret = ret.replaceWhole('{$IF_discountPrice_line}', '');
							ret = ret.replaceWhole('{$IF_discountPrice_rate}', '');
						}
					} else if(DalueSearch.categoryAuthDevice == DalueSearch.categoryAuth.device_mobile && arr[i] == 'mobileDiscountPrice') {
						
						if(parseInt(value[arr[i]]) < parseInt(value['price'])) {
							ret = ret.replaceWhole('{$IF_discountPrice}', '');
							ret = ret.replaceWhole('{$IF_discountPrice_line}', 'text-decoration: line-through;');
							ret = ret.replaceWhole('{$IF_discountPrice_rate}', DalueSearch.getDiscountRatio(parseInt(value[DalueSearch.options.priceField]), parseInt(value[arr[i]]))); //parseInt(1 - parseInt(value[arr[i]]) / parseInt(value[DalueSearch.options.priceField])) * 100);
							
						} else {
							ret = ret.replaceWhole('{$IF_discountPrice}', ';display: none;');
							ret = ret.replaceWhole('{$IF_discountPrice_line}', '');
							ret = ret.replaceWhole('{$IF_discountPrice_rate}', ''); 
						}
					}
					
					if(value[arr[i]] != '') {
						ret = ret.replaceWhole('{$' + arr[i] + '}', parseInt(value[arr[i]]).toLocaleString());
						ret = ret.replaceWhole('{$' + arr[i] + '_raw}', value[arr[i]]);	
					} else {
						ret = ret.replaceWhole('{$' + arr[i] + '}', 0);
						ret = ret.replaceWhole('{$' + arr[i] + '_raw}', '0');	
					}
					
				} else if(arr[i] == 'image' || arr[i] == 'listImage') {
					var imgPath = ''; 
					if(DalueSearch.options.imagePrefix != null && DalueSearch.options.imagePrefix != '') {
						imgPath = DalueSearch.options.imagePrefix + value[arr[i]];
					} else {
						imgPath = value[arr[i]];
					}
					ret = ret.replaceWhole('{$' + arr[i] + '}', DalueSearch.escapeHtml(imgPath));	
				} else if(arr[i] == 'productName') {
					//console.log('{$' + arr[i] + '_escape}' + '[' + value[arr[i]].replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replaceAll(' ', '-') + ']'); 
					ret = ret.replaceWhole('{$' + arr[i] + '_escape}', value[arr[i]].replace(/[\[\]&\/\\#,+()$~%.'":*?<>{}]/g, '').replaceAll(' ', '-'));	
					ret = ret.replaceWhole('{$' + arr[i] + '}', DalueSearch.escapeHtml(value[arr[i]]));
				} else if(arr[i] == 'icon') {
					if(DalueSearch.options.iconMap != null) {
						var dates = value['iconShowPeriod'].split(',');
						var enabled = false;
						
						if(value['iconShowPeriod'] == '') {
							enabled = true;
						} else if(dates.length == 2) {
							var d1 = new Date(dates[0]);
							var d2 = new Date(dates[1]);
							var dc = new Date();
							
							if(d1.getTime() <= dc.getTime() && d2.getTime() >= dc.getTime()) {
								enabled = true;
							}
						}
						
						if(enabled) {
							var t = value[arr[i]]; // 'custom_7^custom_16^custom_20'; // 
							var icons = t.split('^');
							// alert(icons.length + ' ----- ' + icons[icons.length - 1]);
							
							var iconHtml = '';
							for(var ni = 0; ni < icons.length; ni++) {
								if(DalueSearch.options.iconMap[icons[ni]] != undefined) {
									iconHtml += '<img src="' + DalueSearch.options.iconMap[icons[ni]] + '">';	
								}
							}
							
							ret = ret.replaceWhole('{$' + arr[i] + '}', iconHtml); 		
						}
						
					}
					
				} else if(arr[i] == 'listIcon') {
					var icons = value[arr[i]].split(',');
					
					// console.log(' !!!!!!!!!!!!!!!!!!!! ' + '' + icons.length + '[' + value[arr[i]] + ']');
					var iconHtml = '';
					for(var ni = 0; ni < 3; ni++) {
						if(icons.length <= ni) {
							break;
						}
						
						if(icons[ni] == '0') {
							continue;
						}
						
						// icons[i] == '1'
						if(DalueSearch.options.listIcons[ni] != null) {
							iconHtml += '<img src="' + DalueSearch.options.listIcons[ni]+ '"> ';
							// console.log(' - -------------------- ' + ni + ':' + iconHtml);
						}
					}
					
					ret = ret.replaceWhole('{$' + arr[i] + '}', iconHtml);
				} else { 
					if(arr[i] == 'soldOut') {
						// console.log('SOLDOUT: !!!! --- ' + value[arr[i]]);
						
						if(parseInt(value[arr[i]]) == 1) {
							ret = ret.replaceWhole('{$IF_soldout}', ';display: block;');
						} else {
							ret = ret.replaceWhole('{$IF_soldout}', ';display: none;');
						}
					}
					ret = ret.replaceWhole('{$' + arr[i] + '}', DalueSearch.escapeHtml(value[arr[i]]));	
				}
			}
		}
		
		if(value.retailPrice == 0 || parseInt(value.retailPrice) <= parseInt(value[DalueSearch.options.priceField])) {
			ret = ret.replaceWhole('{$IF_discount}', ';display: none;');
			ret = ret.replaceWhole('{$discount}', '&nbsp;');
			ret = ret.replaceWhole('{$discountUnit}', '&nbsp;');
		} else {
			ret = ret.replaceWhole('{$IF_discount}', '');
			ret = ret.replaceWhole('{$discount}', value.retailPrice != 0 ? parseInt(Math.round((1 - value[DalueSearch.options.priceField] / value.retailPrice) * 100)).toLocaleString() : 0);
			ret = ret.replaceWhole('{$discountUnit}', '%');
		}
		
		ret = ret.replaceWhole('{$description}', '');
		
		var pointInfo = DalueSearch.parseCafe24PointInfo(value.productNo, value[DalueSearch.options.priceField], value.pointsAmount);
		
		// console.log(value.pointsAmount + ';' + pointInfo.points.length);
		if(pointInfo.points.length > 0) {
			var disp = {};
			
			for(var i = 0; i < pointInfo.points.length; i++) {
				disp[pointInfo.points[i].type] = true;
				ret = ret.replaceWhole('{$IF_point_' + pointInfo.points[i].type + '}', ''); //?
				ret = ret.replaceWhole('{$point_' + pointInfo.points[i].type + '_type}', pointInfo.points[i].type);
				ret = ret.replaceWhole('{$point_' + pointInfo.points[i].type + '_name}', DalueSearch.getCafe24PayName(pointInfo.points[i].type));
				ret = ret.replaceWhole('{$point_' + pointInfo.points[i].type + '_value}', parseInt(pointInfo.points[i].point).toLocaleString() + (pointInfo.points[i].unit == 'P' ? '%' : '원'));
				if(pointInfo.points[i].unit == 'P') {
					var pointPrice = parseInt(Math.floor(pointInfo.points[i].price * (pointInfo.points[i].point / 1000)) * 10).toLocaleString();
					ret = ret.replaceWhole('{$point_' + pointInfo.points[i].type + '_price}', pointPrice);
				}
			}
			
			ptypes = DalueSearch.getCafe24PointTypes();
			for(var i = 0; i < ptypes.length; i++) {
				if(disp[ptypes[i]] != true) {
					ret = ret.replaceWhole('{$IF_point_' + ptypes[i] + '}', ';display: none;'); //?
				}
			}
		} else {
			ptypes = DalueSearch.getCafe24PointTypes();
			for(var i = 0; i < ptypes.length; i++) {
				ret = ret.replaceWhole('{$IF_point_' + ptypes[i] + '}', ';display: none;');
				ret = ret.replaceWhole('{$point_' + ptypes[i] + '_type}', '');
				ret = ret.replaceWhole('{$point_' + ptypes[i] + '_name}', '');
				ret = ret.replaceWhole('{$point_' + ptypes[i] + '_value}', '');
				ret = ret.replaceWhole('{$point_' + ptypes[i] + '_price}', '');
			}
		}
		
		
		if(pointInfo.memberPrice < 0) {
			ret = ret.replaceWhole('{$IF_memberGroupPrice}', ';display: none;');
			ret = ret.replaceWhole('{$memberGroupName}', '');
			ret = ret.replaceWhole('{$memberGroupPrice}', '');
		} else {
			ret = ret.replaceWhole('{$IF_memberGroupPrice}', '');
			ret = ret.replaceWhole('{$memberGroupName}', DalueSearch.userGroupName);
			ret = ret.replaceWhole('{$memberGroupPrice}', parseInt(pointInfo.memberPrice).toLocaleString());
		}
		
		var url = DalueSearch.productUrl;
		//url = DalueSearch.replaceHtml(url, value);
		
		
		let rootCateNo = value['categoryNos'];
		if(value['categoryRoot1No'] == -1 && rootCateNo != undefined) {
			let cs = rootCateNo.split(';');
			if(cs.length > 0) {
				let ccs = cs[0].split('^');
				if(ccs.length == 0) {
					rootCateNo = 1;
				} else {
					rootCateNo = ccs[ccs.length - 1];	
				}
				
			} else {
				rootCateNo = 1;
			}
		} else {
			if(value['categoryRoot1No'] == -1) {
				rootCateNo = 1;	
			} else {
				rootCateNo = value['categoryRoot1No'];
			}
			
		}
		
		// console.log('rootCateNo [' + rootCateNo + '][' + value['categoryNos'] + ']');
		for(var i = 0; i < arr.length; i++) {
			// console.log(arr[i]); 
			if(value[arr[i]] == undefined || value[arr[i]] == null) {
				url = url.replaceWhole('{$' + arr[i] + '}', '');
			} else {
				if(arr[i] == 'productName') {
					url = url.replaceWhole('{$' + arr[i] + '_escape}', value[arr[i]].replace(/[\[\]&\/\\#,+()$~%.'":*?<>{}]/g, '').replaceAll(' ', '-'));	
					url = url.replaceWhole('{$' + arr[i] + '}', DalueSearch.escapeHtml(value[arr[i]]));	
				} else if(arr[i] == 'categoryRoot1No') {
					url = url.replaceWhole('{$' + arr[i] + '}', encodeURI(rootCateNo));	
				} else {
					url = url.replaceWhole('{$' + arr[i] + '}', encodeURI(value[arr[i]]));	
				}
				
			}
		}
		 
		
		
		ret = ret.replaceWhole('{$membershipName}', DalueSearch.userGroupName);
		
		ret = ret.replaceWhole('{$url}', url);
		ret = ret.replaceWhole('{$crema_stars}', '{start}');
		ret = ret.replaceWhole('{$crema_score}', '{score}');
		ret = ret.replaceWhole('{$crema_reviews_count}', '{reviews_count}');
		
		ret = ret.replaceWhole('{$icon}', '');
		return ret;
	}
	, searchOnSuccessBefore: undefined
	, searchOnSuccess: function searchOnSuccessFn(jsonIn) {
		var json = jsonIn;
		
		if(DalueSearch.searchOnSuccessBefore != undefined) {
			try {
				json = DalueSearch.searchOnSuccessBefore(jsonIn);
			} catch(e) {
				console.log(e);
			}
		}
		
		if(DalueSearch.elements.loaderScreen != undefined) {
			DalueSearch.elements.loaderScreen.fadeOut(750);
		}
		
		// for error
		if(json.result == undefined) {
			json['header']['totalCount'] = 0;
		}
		
		if(json.header.totalCount == 0) {
			DalueSearch.elements.filterView.css('display', 'none');
			
			var html = DalueSearch.elements.searchNoResult.css('display', 'flex');
			
			DalueSearch.setHtml(DalueSearch.elements.filterCategoryView, '');
			DalueSearch.setHtml(DalueSearch.elements.filterBrandView, '');
			
			DalueSearch.setHtml(DalueSearch.elements.searchCount, parseInt(json.header.totalCount).toLocaleString());
			// DalueSearch.setHtml(DalueSearch.elements.searchList, html);
			DalueSearch.variables.lastResultCount = json.header.count;
			
			if(DalueSearch.options.functionSearchOnSuccess != null) {
				DalueSearch.options.functionSearchOnSuccess(json);
			}
			return;
		}
		
		var params = DalueSearch.getUriParam();
		// console.log('json.header.totalCount < params.size:' + json.header.totalCount + ', ' + params.size)
		
		// console.log(JSON.stringify(json));
		
		DalueSearch.elements.filterView.css('display', '');
		DalueSearch.elements.searchNoResult.css('display', 'none');
		
		var res = json.result;
		var html = '';
		var template = DalueSearch.getHtml(DalueSearch.elements.searchItem, DalueSearch.variables.lastIndex);
		
		//console.log('TEMPLATE: ' + template);
		if(res == null) {
			console.log(JSON.stringify(json));
			res['lenght'] = 0;
		}
		
		for(var i = 0; i < res.length; i++) {
			html += DalueSearch.replaceHtml(template, res[i]);
		}
		
		//console.log('HTML: ' + html);
		
		DalueSearch.setHtml(DalueSearch.elements.searchCount, parseInt(json.header.totalCount).toLocaleString());
		
		if(DalueSearch.options.infiniteScroll == true) {
			if(json.header.begin != 1) {
				var htmlOrig = DalueSearch.elements.searchList.html();
				html = htmlOrig + html;
				DalueSearch.setHtml(DalueSearch.elements.searchList, html);
			} else {
				DalueSearch.setHtml(DalueSearch.elements.searchList, html);
			}
			
			DalueSearch.variables.lastResultCount = json.header.count;
			
			if(json.header.count < params.size) {
				DalueSearch.variables.lastResultCount = 0;
			}
		
			if(DalueSearch.variables.lastResultCount == 0) {
				DalueSearch.setHtml(DalueSearch.elements.infiniteScroll, '<small style="color: #333">마지막 페이지입니다.</small>');
			} else {
				DalueSearch.setHtml(DalueSearch.elements.infiniteScroll, '');
			}
		} else {
			DalueSearch.setHtml(DalueSearch.elements.searchList, html);	
		}
		
		
		//console.log('SEARCH HTML:' + DalueSearch.elements.searchList.html());
		
		// filter
		// <a href="{$category_url}" class="{$category_selected}">{$categoryName}</a>&nbsp;&nbsp;&nbsp;
		// sel="dalue_css_btn dalue_css_btn-outline-info" nosel="dalue_css_btn dalue_css_btn-outline-none"
		// DalueSearch.lastQuery.categoryId
		
		// category
		
		var params = DalueSearch.getUriParam();
		// var uriParam = new URLSearchParams(allParam).toString();
		var listHtml = DalueSearch.getHtml(DalueSearch.elements.filterCategoryItem);
		html = '';
		var ret = String(listHtml);
		var sel = DalueSearch.elements.filterCategoryItem.attr('sel');
		var nosel = DalueSearch.elements.filterCategoryItem.attr('nosel');
		
		// searchFn(query, begin, size, sort, category, brand, price) {
		ret = ret.replaceWhole('{$category_action}', 'DalueSearch.search(\'' + params.query + '\', 1, ' + params.size + ', \'' + params.sortType + '\', \'\', \'' + params.brandeCode + '\', \'' + params.price + '\');');
		ret = ret.replaceWhole('{$categoryName}', DalueSearch.options.filterDisplayName ? '분류 전체' : '전체');
		// ret = ret.replaceWhole('{$categoryNo}', params.brandeCode);
		if(params.categoryId == '') {
			ret = ret.replaceWhole('{$category_selected}', sel);	
		} else {
			ret = ret.replaceWhole('{$category_selected}', nosel);
		}
		html += ret;
		
		var exceptFind = false;
		for(var i = 0; i < (json.categoryIds.length > DalueSearch.options.filterCategoryMax ? DalueSearch.options.filterCategoryMax : json.categoryIds.length); i++) {
			exceptFind = false;
			for(var j = 0; j <= DalueSearch.options.exceptCategories.length; j++) {
				if(json.categoryNames[i] == DalueSearch.options.exceptCategories[j]) {
					exceptFind = true;
					break;
				}
			}
			
			if(exceptFind) {
				continue;
			}
			
			let doc = new DOMParser().parseFromString(json.categoryNames[i], 'text/html');
			let cname = doc.body.textContent || "";
			
			ret = String(listHtml);
			ret = ret.replaceWhole('{$category_action}', 'DalueSearch.search(\'' + params.query + '\', 1, ' + params.size + ', \'' + params.sortType + '\', \'' + json.categoryIds[i] + '\', \'' + params.brandeCode + '\', \'' + params.price + '\');');
			ret = ret.replaceWhole('{$categoryName}', DalueSearch.escapeHtml(cname));
			if(params.categoryId == json.categoryIds[i]) {
				ret = ret.replaceWhole('{$category_selected}', sel);	
			} else {
				ret = ret.replaceWhole('{$category_selected}', nosel);
			}
			
			html += ret;
		}
		
		DalueSearch.setHtml(DalueSearch.elements.filterCategoryView, html + DalueSearch.variables.filterCategoryHtml);
		
		
		// brand
		
		listHtml = DalueSearch.getHtml(DalueSearch.elements.filterBrandItem);
		html = '';
		ret = String(listHtml);
		sel = DalueSearch.elements.filterBrandItem.attr('sel');
		nosel = DalueSearch.elements.filterBrandItem.attr('nosel');
		
		// searchFn(query, begin, size, sort, category, brand, price) {
		ret = ret.replaceWhole('{$brand_action}', 'DalueSearch.search(\'' + params.query + '\', 1, ' + params.size + ', \'' + params.sortType + '\', \'' + params.categoryId + '\', \'' + '' + '\', \'' + params.price + '\');');
		ret = ret.replaceWhole('{$brandName}', DalueSearch.options.filterDisplayName ? '브랜드 전체' : '전체');
		if(params.brandeCode == '') {
			ret = ret.replaceWhole('{$brand_selected}', sel);	
		} else {
			ret = ret.replaceWhole('{$brand_selected}', nosel);
		}
		html += ret;
		
		for(var i = 0; i < (json.brandNames.length > DalueSearch.options.filterBrandMax ? DalueSearch.options.filterBrandMax : json.brandNames.length); i++) {
			exceptFind = false;
			for(var j = 0; j <= DalueSearch.options.exceptBrands.length; j++) {
				if(json.brandNames[i] == DalueSearch.options.exceptBrands[j]) {
					exceptFind = true;
					break;
				}
			}
			
			if(exceptFind) {
				continue;
			}
			
			ret = String(listHtml);
			ret = ret.replaceWhole('{$brand_action}', 'DalueSearch.search(\'' + params.query + '\', 1, ' + params.size + ', \'' + params.sortType + '\', \'' + params.categoryId + '\', \'' + json.brandIds[i] + '\', \'' + params.price + '\');');
			ret = ret.replaceWhole('{$brandName}', DalueSearch.escapeHtml(json.brandNames[i]));
			if(params.brandeCode == json.brandIds[i]) {
				ret = ret.replaceWhole('{$brand_selected}', sel);	
			} else {
				ret = ret.replaceWhole('{$brand_selected}', nosel);
			}
			
			html += ret;
		}
		
		DalueSearch.setHtml(DalueSearch.elements.filterBrandView, html + DalueSearch.variables.filterBrandHtml);
		
		// price
		listHtml = DalueSearch.getHtml(DalueSearch.elements.filterPriceItem);
		html = '';
		ret = String(listHtml);
		sel = DalueSearch.elements.filterPriceItem.attr('sel');
		nosel = DalueSearch.elements.filterPriceItem.attr('nosel');
		
		// searchFn(query, begin, size, sort, category, brand, price) {
		ret = ret.replaceWhole('{$price_action}', 'DalueSearch.search(\'' + params.query + '\', 1, ' + params.size + ', \'' + params.sortType + '\', \'' + params.categoryId + '\', \'' + params.brandeCode + '\', \'' + '' + '\');');
		ret = ret.replaceWhole('{$priceName}', DalueSearch.options.filterDisplayName ? '가격 전체' : '전체');
		if(params.price == '') {
			ret = ret.replaceWhole('{$price_selected}', sel);	
		} else {
			ret = ret.replaceWhole('{$price_selected}', nosel);
		}
		html += ret;
		
		for(var i = 0; i < json.priceFrom.length; i++) {
			ret = String(listHtml);
			ret = ret.replaceWhole('{$price_action}', 'DalueSearch.search(\'' + params.query + '\', 1, ' + params.size + ', \'' + params.sortType + '\', \'' + params.categoryId + '\', \''
				+ params.brandeCode + '\', \'' + json.priceFrom[i] + ',' + json.priceTo[i] + '\');');
			ret = ret.replaceWhole('{$priceName}', DalueSearch.escapeHtml('~' + json.priceTo[i].toLocaleString() + '원'));
			if(params.price == json.priceFrom[i] + ',' + json.priceTo[i]) {
				ret = ret.replaceWhole('{$price_selected}', sel);	
			} else {
				ret = ret.replaceWhole('{$price_selected}', nosel);
			}
			
			html += ret;
		}
		
		var pf = '0';
		var pt = json.priceTo.length > 0 ? json.priceTo[json.priceTo.length - 1]  + '' : '9999999999';
		if(params.price != null && params.price.indexOf(',') > -1) {
			pf = params.price.split(',')[0];
			pt = params.price.split(',')[1];
		}
		
		var priceAction = '<a href="javascript:;" onclick="{$priceAction}"><img class="dalue_css_price_btn" src="https://dalue.io/dalue-ecms/contrib/imgs/search_14.png" style="width: 16px; height: auto;"></a>';
		priceAction = priceAction.replaceWhole('{$priceAction}', 'DalueSearch.search(\'' + params.query + '\', 1, ' + params.size + ', \'' + params.sortType + '\', \'' + params.categoryId + '\', \''
			+ params.brandeCode + '\', $(\'#priceFrom\').val() + \',\' + $(\'#priceTo\').val()' + ');');
		
		html += '&nbsp;&nbsp;&nbsp;<input type="number" id="priceFrom" class="dalue_css_input_price" value="' + pf + '"  >&nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" id="priceTo" class="dalue_css_input_price" value="' + pt + '" >'
		 + '&nbsp;&nbsp;' + priceAction;
		DalueSearch.setHtml(DalueSearch.elements.filterPriceView, html + DalueSearch.variables.filterPriceHtml);
		
		
		DalueSearch.pagination(json);
	
		// console.log(DalueSearch.options.infiniteScroll + ', ' + json.header.begin);
		if(DalueSearch.options.infiniteScroll == true && json.header.begin != 1) {
		} else {
			// 페이지가 변하면 scrollTop, 뒤로가기면 기존 위치로
			// $('html,body').scrollTop(0);	
			if(DalueSearch.searchOptions.toScrollName != undefined) {
				setTimeout(function() { 
					$('html, body').animate({
		        		scrollTop: $("#" + DalueSearch.searchOptions.toScrollName).offset().top + DalueSearch.options.toScrollNamePos
		    		}, 1);
					
				}, 1000);
				//$('html, body').animate({
		        //	scrollTop: $("#cursor_" + DalueSearch.searchOptions.toScrollName).offset().top - 150
		    	//}, 1);
			} else {
				$('html,body').scrollTop(0);
			}
		}
		
		if(DalueSearch.options.functionImageLoad != undefined) {
			DalueSearch.options.functionImageLoad();
		}
		
		if(DalueSearch.options.functionSearchOnSuccess != null) {
			DalueSearch.options.functionSearchOnSuccess(json);
		}
	}
	, getFilterPrice: function getFilterPriceFn() {
		
	}
	, getUriParam: function getUriParam() {
		var params = DalueSearch.parseParameter();
		var keys = Object.keys(params);
		
		params['query'] = params['query'] == undefined ? '*' : params['query'].replaceWhole('%2B', ' ').replaceWhole('+', ' ');
		params['begin'] = params['begin'] == undefined ? '0' : params['begin'];
		params['size'] = params['size'] == undefined ? DalueSearch.options.size : params['size'];
		params['brandeCode'] = params['brandeCode'] == undefined ? '' : params['brandeCode'];
		params['categoryId'] = params['categoryId'] == undefined ? '' : params['categoryId'];
		params['price'] = params['price'] == undefined ? '' : params['price'];
		params['sortType'] = params['sortType'] == undefined ? '' : params['sortType'];
		params['cursor'] = params['cursor'] == undefined ? '' : params['cursor'];
		
		// params.delete('tag_field');
		delete params['tag_field'];
		
		return params;
	}
	, searchOnLoad: function searchOnLoadFn(replceHistory) {
		var params = DalueSearch.parseParameter();
		var query = params['query'];
		var size = params['size'];
		var begin = params['begin'];
		var brandeCode = params['brandCode'];
		var categoryId = params['categoryId'];
		var price = params['price'];
		var sortType = params['sortType'] == undefined && DalueSearch.options.defaultSort != undefined && DalueSearch.options.defaultSort != '' ? DalueSearch.options.defaultSort : params['sortType'];
		var toScrollName = params['toScrollName'];
		
		DalueSearch.cursor = params['cursor'];
		
		if(query == undefined || query.trim() == '') {
			query = '*';
		} else if(query != undefined) {
			query = query.replaceWhole('+', ' ');
		}
    
		// 최근 검색어를 다시 로드한다.
		DalueSearch.recentQueryView();
		
		// setCookie
		if(query != '*') {
			var hist = DalueSearch.getJsonCookie(DalueSearch.Consts.COOKIE_QUERY_HISTORY);
			
			if(hist == undefined || hist.queries == undefined) {
				var date = new Date();
				hist = { queries: undefined };
				hist.queries = [];
				console.log('CURDATE ' + date.getDate()  + ', ' + DalueSearch.zeroPad(date.getDate(), 10));
				hist.queries.push({ query: query, date: DalueSearch.zeroPad(date.getMonth() + 1, 10) + '/' + DalueSearch.zeroPad(date.getDate(), 10)});
				DalueSearch.setJsonCookie(DalueSearch.Consts.COOKIE_QUERY_HISTORY, hist, 100 * 365);
			} else {
				for(var i = 0; i < hist.queries.length; i++) {
					if(hist.queries[i].query.toLowerCase() == query.toLowerCase()) {
						hist.queries.splice(i, 1);
						break;
					}
				}
				
				if(hist.queries.length >= DalueSearch.options.userHistorySize) {
					hist.queries.pop();
				}
				
				var date = new Date();
				// console.log('CURDATE ' + date.getDate()  + ', ' + DalueSearch.zeroPad(date.getDay(), 10));
				hist.queries.unshift({ query: query, date: DalueSearch.zeroPad(date.getMonth() + 1, 10) + '/' + DalueSearch.zeroPad(date.getDate(), 10) });
				DalueSearch.setJsonCookie(DalueSearch.Consts.COOKIE_QUERY_HISTORY, hist, 100 * 365);
			}
			
		}
		
		
		if(size == undefined) {
			size = DalueSearch.options.size;
		}
    
		if(begin == undefined) {
			begin = 1;
		}
    
		if(brandeCode == undefined) {
			brandeCode = '';
		}
    
		if(categoryId == undefined) {
			categoryId = '';
		}
    
		if(DalueSearch.cursor == undefined) {
			DalueSearch.cursor = 0;
		}
    
		if(price == undefined) {
			price = '';
		}
    
		if(sortType == undefined) {
			sortType = '';
		}
		
		DalueSearch.search(query, begin, size, sortType, categoryId, brandeCode, price, toScrollName, replceHistory);
	}
	, goSearch: function goSearch() {
		// console.log('DalueSearch.variables.lastIndex: '+ DalueSearch.variables.lastIndex);
		var q = DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + 'query=' + DalueSearch.getVal(DalueSearch.elements.searchInput, DalueSearch.variables.lastIndex);
		if(DalueSearch.options.noQueryFieldInputNo != DalueSearch.variables.lastIndex && DalueSearch.searchOptions.queryField != '') {
			q = q + '&queryField=' + DalueSearch.searchOptions.queryField;
		} else {
			DalueSearch.searchOptions.queryField = '';
		}
		window.location.href = q;
	}
	, autoCompleteLayer: function autoCompleteLayerFn(elm, show) {
		if(show) {
			DalueSearch.autoCompleteLayerReal(elm, show);
			$('.dalue_search_keywordPromotion').css('display', 'none');
			clearInterval(DalueSearch.keywordPromotionInterval);
		} else {
			setTimeout(function() { DalueSearch.autoCompleteLayerReal(elm, show); }, 200);
			DalueSearch.variables.autoCompleteIndex = -1;
			DalueSearch.variables.recentQueryIndex = -1;
			// $('.dalue_search_keywordPromotion').css('display', '');
		}
	}
	, autoCompleteLayerReal: function autoCompleteLayerRealFn(elm, show) {
		var index = parseInt(elm.attr('index'));
		
		var autoCompleteLayer = DalueSearch.options.viewLayer ? DalueSearch.elements.autoCompleteLayer : DalueSearch.elements.autoCompleteView;
		var recentQueryLayer = DalueSearch.options.viewLayer ? DalueSearch.elements.recentQueryLayer : DalueSearch.elements.recentQueryView;
		//console.log('index: ' + index + ', ' + show);
		if(show) {
			if(DalueSearch.getVal(DalueSearch.elements.searchInput, index).trim() == '') {
				DalueSearch.hotKeyword();
				DalueSearch.recentQuery();
				DalueSearch.setCss(recentQueryLayer, 'display', '', index);
				// console.log(DalueSearch.elements.recentQueryLayer[index].position().top + ', ' + DalueSearch.elements.recentQueryLayer[index].width() + ', ' + DalueSearch.elements.recentQueryLayer[index].height())
				// DalueSearch.elements.recentQueryLayer.css('display', '');
			} else {
				DalueSearch.setCss(autoCompleteLayer, 'display', '', index);
			}
			
		} else { // blur - out of focus
			DalueSearch.variables.autoCompleteIndex = -1;
			DalueSearch.variables.recentQueryIndex = -1;
			
			if(typeof __dalue_autoCompleteHide !== 'undefined') {
				if(__dalue_autoCompleteHide != false) {
					DalueSearch.setCss(autoCompleteLayer, 'display', 'none', index)
					DalueSearch.setCss(recentQueryLayer, 'display', 'none', index) // test	
				}
			} else {
				DalueSearch.setCss(autoCompleteLayer, 'display', 'none', index)
				DalueSearch.setCss(recentQueryLayer, 'display', 'none', index) // test
			}
			
		}
	}
	, autoCompleteWrap: function autoCompleteWrapFn(e, elm, onSuccess) {
		var result = ""; 

		/*
		if(typeof(e) != "undefined") result = e.which; 
		else result = event.keyCode;
		// console.log(result + ', ' + JSON.stringify(e));
		*/
		switch(window.event.keyCode) {
			case 13: // enter
			case 38: // up
			case 40: // down
				DalueSearch.autoComplete(e, elm, onSuccess);
				break;
		}
	}
	, autoComplete: function autoCompleteFn(e, elm, onSuccess) {
		var len = 0;
		var index = parseInt(elm.attr('index'));
		var autoCompleteLayer = DalueSearch.options.viewLayer ? DalueSearch.elements.autoCompleteLayer : DalueSearch.elements.autoCompleteView;
		var autoCompleteList = DalueSearch.options.viewLayer ? DalueSearch.elements.autoCompleteList : DalueSearch.elements.autoCompleteViewList;
		var autoCompleteItem = DalueSearch.options.viewLayer ? DalueSearch.elements.autoCompleteItem : DalueSearch.elements.autoCompleteViewItem;
		var recentQueryLayer = DalueSearch.options.viewLayer ? DalueSearch.elements.recentQueryLayer : DalueSearch.elements.recentQueryView;
		var recentQueryList = DalueSearch.options.viewLayer ? DalueSearch.elements.recentQueryList : DalueSearch.elements.recentQueryViewList;
		var recentQueryItem = DalueSearch.options.viewLayer ? DalueSearch.elements.recentQueryItem : DalueSearch.elements.recentQueryViewItem;
		var hotKeywordList = DalueSearch.options.viewLayer ? DalueSearch.elements.hotKeywordList : DalueSearch.elements.hotKeywordViewList;
		var hotKeywordItem = DalueSearch.options.viewLayer ? DalueSearch.elements.hotKeywordItem : DalueSearch.elements.hotKeywordViewItem;
		
		
		switch(window.event.keyCode) {
		case 13: // enter
			DalueSearch.goSearch();
			// window.location.href = DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + 'query=' + encodeURI(DalueSearch.getVal(DalueSearch.elements.searchInput, index));
			return;
		case 38: // up
			if(DalueSearch.getCss(autoCompleteLayer, 'display', index) == 'none') { // recentQuery
				var rLen = DalueSearch.options.recentQueryHide ? 0 : DalueSearch.getChildren(recentQueryList, index).length;
				var hLen = DalueSearch.getChildren(hotKeywordList, index).length;
				var elm;
				var id;
				var rORh = 'R'; // Recent or Hot
				
				
				if(rLen + hLen == 0) {
					return;
				}
				
				var noResults = false;
				
				DalueSearch.getChildren(recentQueryList, index).each(function (idx, item) {
					if($(item).attr('no') == 'true') {
						noResult = true;
					}
				});
				
				if(noResults = true) {
					rLen = 0;
				}
				
				len = rLen + hLen;
				
				--DalueSearch.variables.recentQueryIndex;
				if(DalueSearch.variables.recentQueryIndex < 0) {
					DalueSearch.variables.recentQueryIndex = len - 1;
				}
				
				DalueSearch.getChildren(recentQueryList, index).removeClass('dalue_css_autocomplete_item_hover');
				DalueSearch.getChildren(hotKeywordList, index).removeClass('dalue_css_autocomplete_item_hover');
				
				if(DalueSearch.variables.recentQueryIndex < rLen) {
					elm = recentQueryList[index];
					id = recentQueryItem[index].attr('id'); // + '_'; // + index;
					rORh = 'R';
				} else {
					elm = hotKeywordList[index];
					id = hotKeywordItem[index].attr('id'); // + '_'; // + index;
					rORh = 'H';
				}
				
				
				var idx = rORh == 'R' ? DalueSearch.variables.recentQueryIndex : DalueSearch.variables.recentQueryIndex - rLen;
				elm.children().each(function () {
					if(id + '_' + idx == $(this).attr('id')) {
						$(this).addClass('dalue_css_autocomplete_item_hover');
						console.log($(this).attr('query') + ', ' + index);
						DalueSearch.setVal(DalueSearch.elements.searchInput, $(this).attr('query'), index);
					}
				});
			} else {
				var id;
				
				len = DalueSearch.getChildren(autoCompleteList, index).length;
				if(len == 0) {
					return;
				}
				
				--DalueSearch.variables.autoCompleteIndex;
				if(DalueSearch.variables.autoCompleteIndex < 0) {
					DalueSearch.variables.autoCompleteIndex = len - 1;
				}
				
				DalueSearch.getChildren(autoCompleteList, index).removeClass('dalue_css_autocomplete_item_hover');
				
				id = autoCompleteItem[index].attr('id');
				
				DalueSearch.getChildren(autoCompleteList, index).each(function () {
					if(id + '_' + DalueSearch.variables.autoCompleteIndex == $(this).attr('id')) {
						$(this).addClass('dalue_css_autocomplete_item_hover');
						DalueSearch.setVal(DalueSearch.elements.searchInput, $(this).attr('query'), index);
					}
					
				});
			}
			
			
			return;
		case 40: // down
			//console.log(DalueSearch.getCss(autoCompleteLayer, 'display', index));
			
			if(DalueSearch.getCss(autoCompleteLayer, 'display', index) == 'none') { // recentQuery
				var rLen = DalueSearch.options.recentQueryHide ? 0 : DalueSearch.getChildren(recentQueryList, index).length;
				var hLen = DalueSearch.getChildren(hotKeywordList, index).length;
				var elm;
				var id;
				var rORh = 'R'; // Recent or Hot
				len = rLen + hLen;
				
				console.log('rlen: ' + rLen + ', hLen: ' + hLen + ', ' + len);
				// console.log('DalueSearch.getChildren(recentQueryList, index) = ' + DalueSearch.getChildren(recentQueryList, index).html());
				if(rLen + hLen == 0) {
					return;
				}
				
				var noResults = false;
				
				DalueSearch.getChildren(recentQueryList, index).each(function (idx, item) {
					if($(item).attr('no') == 'true') {
						noResult = true;
					}
				});
				
				
				if(noResults == true) {
					rLen = 0;
				}
				
				++DalueSearch.variables.recentQueryIndex;
				if(DalueSearch.variables.recentQueryIndex >= len) {
					DalueSearch.variables.recentQueryIndex = 0;
				}
				
				
				DalueSearch.getChildren(recentQueryList, index).removeClass('dalue_css_autocomplete_item_hover');
				DalueSearch.getChildren(hotKeywordList, index).removeClass('dalue_css_autocomplete_item_hover');
				
				console.log(DalueSearch.variables.recentQueryIndex + ', rlen = ' + rLen);
				
				if(DalueSearch.variables.recentQueryIndex < rLen) {
					elm = recentQueryList[index];
					id = recentQueryItem[index].attr('id'); // + '_'; // + index;
					rORh = 'R';
					// id = 'dalue_search_recentQuery_item_' + index + '_';
				} else {
					elm = hotKeywordList[index];
					id = hotKeywordItem[index].attr('id'); // + '_'; // + index;
					rORh = 'H';
					// id = 'dalue_search_hotKeyword_item_'+ index + '_';
				}
				
				console.log(id);
				var idx = rORh == 'R' ? DalueSearch.variables.recentQueryIndex : DalueSearch.variables.recentQueryIndex - rLen;
				elm.children().each(function () {
					console.log(id + '_' + idx + ' == ' + $(this).attr('id'));
					if(id + '_' + idx == $(this).attr('id')) {
						$(this).addClass('dalue_css_autocomplete_item_hover');
						DalueSearch.setVal(DalueSearch.elements.searchInput, $(this).attr('query'), index);
					}
				});
			} else {
				var id;
				
				len = DalueSearch.getChildren(autoCompleteList, index).length;
				
				if(len == 0) {
					return;
				}
				
				++DalueSearch.variables.autoCompleteIndex;
				
				if(DalueSearch.variables.autoCompleteIndex >= len) {
					DalueSearch.variables.autoCompleteIndex = 0;
				}
				
				
				id = autoCompleteItem[index].attr('id');
				
				DalueSearch.getChildren(autoCompleteList, index).removeClass('dalue_css_autocomplete_item_hover');
				DalueSearch.getChildren(autoCompleteList, index).each(function () {
					//console.log(id + '_' + DalueSearch.variables.autoCompleteIndex + ' == ' + $(this).attr('id'));
					if(id + '_' + DalueSearch.variables.autoCompleteIndex == $(this).attr('id')) {
						$(this).addClass('dalue_css_autocomplete_item_hover');
						//console.log('QUERY: ' + $(this).attr('query'));
						DalueSearch.setVal(DalueSearch.elements.searchInput, $(this).attr('query'), index);
					}
					
				});
			}
			
			
			return;
		}
		
		if(DalueSearch.getVal(DalueSearch.elements.searchInput, index).trim() == '') {
			DalueSearch.hotKeyword();
			DalueSearch.recentQuery();
			DalueSearch.setCss(autoCompleteLayer, 'display', 'none', index);
		} else {
			if(DalueSearch.variables.lastAutoCompleteQuery == DalueSearch.getVal(DalueSearch.elements.searchInput, index).toLowerCase()) {
				DalueSearch.setCss(autoCompleteLayer, 'display', '', index);
				if(DalueSearch.options.viewLayer == false) {
					DalueSearch.setCss(recentQueryLayer, 'display', 'none', index);	
				}
				
				
				DalueSearch.variables.autoCompleteIndex = -1;
				DalueSearch.variables.recentQueryIndex = -1;
				return;
			}
			
			DalueSearch.variables.lastAutoCompleteQuery = DalueSearch.getVal(DalueSearch.elements.searchInput, index).toLowerCase();
			
			var data = {
				apiKey: DalueSearch.apiKey
				, collName: DalueSearch.collName
				, query: DalueSearch.getVal(DalueSearch.elements.searchInput, index).toLowerCase()
			}
			
			DalueSearch.setCss(recentQueryLayer, 'display', 'none', index);
			
			DalueSearch.dex(DalueSearch.url + '/dcse/autoComplete', data, onSuccess == null ? DalueSearch.autoCompleteOnSuccess : onSuccess, alert);
		}
		
	}
	
	, autoCompleteOnSuccess: function autoCompleteOnSuccessFn(json) {
		
		var autoCompleteLayer = DalueSearch.options.viewLayer ? DalueSearch.elements.autoCompleteLayer : DalueSearch.elements.autoCompleteView;
		var autoCompleteList = DalueSearch.options.viewLayer ? DalueSearch.elements.autoCompleteList : DalueSearch.elements.autoCompleteViewList;
		var autoCompleteItem = DalueSearch.options.viewLayer ? DalueSearch.elements.autoCompleteItem : DalueSearch.elements.autoCompleteViewItem;
		var recentQueryLayer = DalueSearch.options.viewLayer ? DalueSearch.elements.recentQueryLayer : DalueSearch.elements.recentQueryView;
		var recentQueryList = DalueSearch.options.viewLayer ? DalueSearch.elements.recentQueryList : DalueSearch.elements.recentQueryViewList;
		var recentQueryItem = DalueSearch.options.viewLayer ? DalueSearch.elements.recentQueryItem : DalueSearch.elements.recentQueryViewItem;
		var hotKeywordList = DalueSearch.options.viewLayer ? DalueSearch.elements.hotKeywordList : DalueSearch.elements.hotKeywordViewList;
		var hotKeywordItem = DalueSearch.options.viewLayer ? DalueSearch.elements.hotKeywordItem : DalueSearch.elements.hotKeywordViewItem;
		
		DalueSearch.setCss(recentQueryLayer, 'display', 'none', DalueSearch.variables.lastIndex);
		
		var query = DalueSearch.getVal(DalueSearch.elements.searchInput, DalueSearch.variables.lastIndex);
		// console.log(query + ', ' + DalueSearch.variables.lastIndex);
		
		DalueSearch.setCss(autoCompleteLayer, 'display', '', DalueSearch.variables.lastIndex);
		
		DalueSearch.variables.autoCompleteIndex = -1;
		DalueSearch.variables.recentQueryIndex = -1;
		
		DalueSearch.setHtml(autoCompleteList, '', DalueSearch.variables.lastIndex);
		
		var ret = '';
		var item = DalueSearch.getHtml(autoCompleteItem, DalueSearch.variables.lastIndex);
		var html = '';
		
		//console.log('ITEMMMMMMMMMMMMMM -- ' + DalueSearch.variables.lastIndex + ':' + item);
		
		if(json.result.length == 0) {
			// DalueSearch.typoCorrection(DalueSearch.typoCorrectionOnSuccessFromAutoComplete);
			DalueSearch.relativeTerm(DalueSearch.relativeTermOnSuccessFromAutoComplete);
			return;
		} else {
			for(var i = 0; i < json.result.length; i++) {
				if(json.result[i] == '*') {
					continue;
				}
				ret = item.replaceWhole('{$autoComplete_query}', DalueSearch.escapeHtml(json.result[i].toLowerCase()));
				ret = ret.replaceWhole('{$dxUrl}', DalueSearch.dxUrl);
				ret = ret.replaceWhole('{$autoComplete_query_view}', json.result[i].toLowerCase().replaceWhole(query.toLowerCase(), DalueSearch.options.autoCompleteHighlight[0] + DalueSearch.escapeHtml(query) + DalueSearch.options.autoCompleteHighlight[1]));
				ret = ret.replaceWhole('{$autoComplete_url}', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') +'query=' + encodeURI(json.result[i]));
				ret = ret.replaceWhole('{$autoComplete_index}', i);
				html += ret;
			}
		}
		
		// console.log(DalueSearch.variables.lastIndex + ':' + autoCompleteList[0].html());
		DalueSearch.setHtml(autoCompleteList, html, DalueSearch.variables.lastIndex);
		if(DalueSearch.options.functionAutoCompleteOnSuccess) {
			try {
				DalueSearch.options.functionAutoCompleteOnSuccess(json);	
			} catch(e) {
				console.error(e);
			}
			
		}
		
	}
	, typoCorrection: function typoCorrection(query, onSuccess) {
		var data = {
			apiKey: DalueSearch.apiKey
			, collName: DalueSearch.collName
			, query: query
		}
		DalueSearch.dex(DalueSearch.url + '/dcse/typoCorrection', data, onSuccess == null ? DalueSearch.typoCorrectionOnSuccess : onSuccess, alert);
	}
	, typoCorrectionOnSuccessFromAutoComplete: function typoCorrectionOnSuccessFromAutoCompleteFn(json) {
		var autoCompleteLayer = DalueSearch.options.viewLayer ? DalueSearch.elements.autoCompleteLayer : DalueSearch.elements.autoCompleteView;
		var autoCompleteList = DalueSearch.options.viewLayer ? DalueSearch.elements.autoCompleteList : DalueSearch.elements.autoCompleteViewList;
		var autoCompleteItem = DalueSearch.options.viewLayer ? DalueSearch.elements.autoCompleteItem : DalueSearch.elements.autoCompleteViewItem;
		var recentQueryList = DalueSearch.options.viewLayer ? DalueSearch.elements.recentQueryList : DalueSearch.elements.recentQueryViewList;
		var recentQueryLayer = DalueSearch.options.viewLayer ? DalueSearch.elements.recentQueryLayer : DalueSearch.elements.recentQueryView;
		var recentQueryItem = DalueSearch.options.viewLayer ? DalueSearch.elements.recentQueryItem : DalueSearch.elements.recentQueryViewItem;
		var hotKeywordList = DalueSearch.options.viewLayer ? DalueSearch.elements.hotKeywordList : DalueSearch.elements.hotKeywordViewList;
		var hotKeywordItem = DalueSearch.options.viewLayer ? DalueSearch.elements.hotKeywordItem : DalueSearch.elements.hotKeywordViewItem;
		
		DalueSearch.setCss(autoCompleteLayer, 'display', '', DalueSearch.variables.lastIndex);
		DalueSearch.variables.autoCompleteIndex = -1;
		DalueSearch.variables.recentQueryIndex = -1;
		
		DalueSearch.setHtml(autoCompleteList, '', DalueSearch.variables.lastIndex);
		
		var ret = '';
		var item = DalueSearch.getHtml(autoCompleteItem, DalueSearch.variables.lastIndex);
		var html = '';
		
		for(var i = 0; i < json.result.length; i++) {
			if(json.result[i] == '*') {
				continue;
			}
			
			ret = item.replaceWhole('{$autoComplete_query}', DalueSearch.escapeHtml(json.result[i].word));
			ret = ret.replaceWhole('{$dxUrl}', DalueSearch.dxUrl);
			ret = ret.replaceWhole('{$autoComplete_url}', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + 'query=' + encodeURI(json.result[i].word));
			ret = ret.replaceWhole('{$autoComplete_index}', i);
			html += ret;
		}
		
		DalueSearch.setHtml(autoCompleteList, html, DalueSearch.variables.lastIndex);
	}
	, relativeTerm: function relativeTerm(onSuccess) {
		var data = {
			apiKey: DalueSearch.apiKey
			, collName: DalueSearch.collName
			, typo: 1
			, query: DalueSearch.getVal(DalueSearch.elements.searchInput, DalueSearch.variables.lastIndex).toLowerCase()
		}
		DalueSearch.dex(DalueSearch.url + '/dcse/relativeTerm', data, onSuccess == null ? DalueSearch.relativeTermOnSuccess : onSuccess, alert);
	}
	, relativeTermView: function relativeTermViewFn(query, typo) {
		if(DalueSearch.elements.relativeTermView == undefined || DalueSearch.elements.relativeTermView.length == 0) {
			console.log('no relativeTerm layer');
			return;
		}
		
		var data = {
			apiKey: DalueSearch.apiKey
			, collName: DalueSearch.collName
			, typo: typo
			, query: query
		}
		DalueSearch.dex(DalueSearch.url + '/dcse/relativeTerm', data, DalueSearch.relativeTermViewOnSuccess, alert);
	}
	, relativeTermViewOnSuccess: function relativeTermViewOnSuccessFn(json) {
		if(DalueSearch.elements.relativeTermView == undefined || DalueSearch.elements.relativeTermView.length == 0) {
			console.log('no relativeTerm layer');
			return;
		}
		
		if(json.results != undefined) {
			console.log('there is no query');
			console.log(JSON.stringify(json));
			return;
		}
		// console.log(JSON.stringify(json));
		
		if(DalueSearch.options.relativeTermDisplay == DalueSearch.relativeTermDisplay.isExist
			&& json.relativeTerms.length == 0) {
			DalueSearch.setCss(DalueSearch.elements.relativeTermView, 'display', 'none');
			return;
		}
		
		var listHtml = '';
		var ret = '';
		
		if(json.relativeTerms.length == 0) {
			DalueSearch.setHtml(DalueSearch.elements.relativeTermViewList, '<center style="font-size: 12px; color: #b3b7c5;" no="true">연관검색어가 없습니다.</center>');
			return;
		}
		// console.log(JSON.stringify(json.relativeTerms));
		
		DalueSearch.setCss(DalueSearch.elements.relativeTermView, 'display', '');
		var html = '';
		
		var nrt = 0;
		if(Array.isArray(DalueSearch.elements.relativeTermView)) {
			for(var i = 0; i < DalueSearch.elements.relativeTermView.length; i++) {
				listHtml = DalueSearch.getHtml(DalueSearch.elements.relativeTermViewItem, i);
				// console.log(listHtml);
				
				for(var j = 0; j < json.relativeTerms.length; j++) {
					ret = String(listHtml);
					// console.log(DalueSearch.escapeHtml(json.relativeTerms[j]) + ', ' + DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + 'query=' + encodeURI(json.relativeTerms[j]));
					ret = ret.replaceWhole('{$relativeTerm_term}', DalueSearch.escapeHtml(json.relativeTerms[j]));
					//console.log(ret);
					ret = ret.replaceWhole('{$relativeTerm_url}', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + 'query=' + encodeURI(json.relativeTerms[j]));
					// console.log(ret);
					html += ret;
					nrt++;
					if(nrt > 20) {
						break;
					}
				}
				
				DalueSearch.setHtml(DalueSearch.elements.relativeTermViewList, html, i);
			}
		}
	}
	, relativeTermOnSuccess: function relativeTermOnSuccessFn(json) {
		
	}
	, relativeTermOnSuccessFromAutoComplete: function relativeTermOnSuccessFromAutoComplete(json) {
		// console.log("relativeTermOnSuccessFromAutoComplete " + JSON.stringify(json));
		
		var autoCompleteLayer = DalueSearch.options.viewLayer ? DalueSearch.elements.autoCompleteLayer : DalueSearch.elements.autoCompleteView;
		var autoCompleteList = DalueSearch.options.viewLayer ? DalueSearch.elements.autoCompleteList : DalueSearch.elements.autoCompleteViewList;
		
		// console.log('autoCompleteLayer[' + autoCompleteLayer.length + ']')
		DalueSearch.setCss(autoCompleteLayer, 'display', '', DalueSearch.variables.lastIndex);
		DalueSearch.variables.autoCompleteIndex = -1;
		DalueSearch.variables.recentQueryIndex = -1;
		
		DalueSearch.setHtml(DalueSearch.elements.autoCompleteList, '');
		
		var ret = '';
		var item = DalueSearch.getHtml(DalueSearch.elements.autoCompleteItem, DalueSearch.variables.lastIndex);
		var html = '';
		
		for(var i = 0; i < json.relativeTerms.length; i++) {
			if(json.relativeTerms[i] == '*') {
				continue;
			}
			ret = item.replaceWhole('{$autoComplete_query}', DalueSearch.escapeHtml(json.relativeTerms[i]));
			ret = ret.replaceWhole('{$dxUrl}', DalueSearch.dxUrl);
			ret = ret.replaceWhole('{$autoComplete_query_view}', DalueSearch.escapeHtml(json.relativeTerms[i]));
			ret = ret.replaceWhole('{$autoComplete_url}', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + 'query=' + encodeURI(json.relativeTerms[i]));
			ret = ret.replaceWhole('{$autoComplete_index}', i);
			html += ret;
		}
		
		DalueSearch.setHtml(autoCompleteList, html, DalueSearch.variables.lastIndex);
	}
	, recentQuery: function recentQueryFn() {
		var hist = DalueSearch.getJsonCookie(DalueSearch.Consts.COOKIE_QUERY_HISTORY);
		
		//console.log(JSON.stringify(hist));
		
		var recentQueryLayer = DalueSearch.options.viewLayer ? DalueSearch.elements.recentQueryLayer : DalueSearch.elements.recentQueryView;
		var recentQueryItem = DalueSearch.options.viewLayer ? DalueSearch.elements.recentQueryItem : DalueSearch.elements.recentQueryViewItem;
		var recentQueryList = DalueSearch.options.viewLayer ? DalueSearch.elements.recentQueryList : DalueSearch.elements.recentQueryViewList;
		
		var item = DalueSearch.getHtml(recentQueryItem, DalueSearch.variables.lastIndex);
		var html = '';
		var ret = '';
		
		// console.log(item + ', ' + recentQueryItem + ', ' + DalueSearch.variables.lastIndex)
		if(hist != null && hist.queries != null) {
			for(var i = 0; i < hist.queries.length; i++) {
				ret = item.replaceWhole('{$recentQuery_query}', DalueSearch.escapeHtml(hist.queries[i].query));
				ret = ret.replaceWhole('{$dxUrl}', DalueSearch.dxUrl);
				ret = ret.replaceWhole('{$recentQuery_url}', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + 'query=' + encodeURI(hist.queries[i].query));
				ret = ret.replaceWhole('{$recentQuery_date}', DalueSearch.escapeHtml(hist.queries[i].date) + '');
				ret = ret.replaceWhole('{$recentQuery_index}', i);
				
				html += ret;
			}
		} else {
			html = '<center style="font-size: 12px; color: #b3b7c5;" no="true">최근 검색어가 없습니다.</center>';
		}
		
		//console.log(html);
		DalueSearch.setHtml(recentQueryList, html, undefined); //DalueSearch.variables.lastIndex);
		
		DalueSearch.setCss(recentQueryLayer, 'display', '', DalueSearch.variables.lastIndex);
	}
	, recentQueryView: function recentQueryViewFn() {
		var hist = DalueSearch.getJsonCookie(DalueSearch.Consts.COOKIE_QUERY_HISTORY);
		
		// console.log(JSON.stringify(hist));
		if(hist == null || hist.queries == null || hist.queries.length == 0) {
			if(Array.isArray(DalueSearch.elements.recentQueryView)) {
				for(var i = 0; i < DalueSearch.elements.recentQueryView.length; i++) {
					DalueSearch.setHtml(DalueSearch.elements.recentQueryViewList, '<div style="width: 100vw;"><center style="font-size: 12px; color: #b3b7c5;" no="true">최근 검색어가 없습니다.</center></div>', i); 
				}
			} else {
				DalueSearch.setHtml(DalueSearch.elements.recentQueryViewList, '<div style="width: 100vw;"><center style="font-size: 12px; color: #b3b7c5;" no="true">최근 검색어가 없습니다.</center></div>');
			}
			
			return;
		}
		
		var params = DalueSearch.getUriParam();
		var query = null;
		/*
		if(params.query != undefined && params.query.trim() != '' && params.query.trim() != '*') {
			query = params.query;
		}
		*/
		
		// console.log('recentQueryView called!!');
		
		if(Array.isArray(DalueSearch.elements.recentQueryView)) {
			for(var i = 0; i < DalueSearch.elements.recentQueryView.length; i++) {
				if(DalueSearch.elements.recentQueryViewItem[i].length == 0) {
					continue;
				}
				var item = DalueSearch.getHtml(DalueSearch.elements.recentQueryViewItem, i);
				var html = '';
				var ret = '';
				var idx = 0;
				
				if(query != null) {
					var date = new Date();
					ret = item.replaceWhole('{$recentQuery_query}', DalueSearch.escapeHtml(query));
					ret = ret.replaceWhole('{$dxUrl}', DalueSearch.dxUrl);
					ret = ret.replaceWhole('{$recentQuery_url}', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + 'query=' + encodeURI(query));
					ret = ret.replaceWhole('{$recentQuery_date}', DalueSearch.escapeHtml(DalueSearch.zeroPad(date.getMonth() + 1, 10) + '/' + DalueSearch.zeroPad(date.getDate(), 10)) + '');
					ret = ret.replaceWhole('{$recentQuery_index}', idx);
					idx++;
					
					html += ret;
				}
				
				for(var j = 0; j < hist.queries.length; j++) {
					if(query != null && hist.queries[j].query.toLowerCase() == query.toLowerCase()) {
						continue;
					}
					ret = item.replaceWhole('{$recentQuery_query}', DalueSearch.escapeHtml(hist.queries[j].query));
					ret = ret.replaceWhole('{$dxUrl}', DalueSearch.dxUrl);
					ret = ret.replaceWhole('{$recentQuery_url}', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + 'query=' + encodeURI(hist.queries[j].query));
					ret = ret.replaceWhole('{$recentQuery_date}', DalueSearch.escapeHtml(hist.queries[j].date) + '');
					ret = ret.replaceWhole('{$recentQuery_index}', idx);
					idx++;
					
					html += ret;
				}
				
				DalueSearch.setHtml(DalueSearch.elements.recentQueryViewList, html, i); 
			}
		} else {
			var item = DalueSearch.getHtml(DalueSearch.elements.recentQueryViewItem);
			var html = '';
			var ret = '';
			var idx = 0;
			
			if(query != null) {
				var date = new Date();
				ret = item.replaceWhole('{$recentQuery_query}', DalueSearch.escapeHtml(query));
				ret = ret.replaceWhole('{$dxUrl}', DalueSearch.dxUrl);
				ret = ret.replaceWhole('{$recentQuery_url}', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + 'query=' + encodeURI(query));
				ret = ret.replaceWhole('{$recentQuery_date}', DalueSearch.escapeHtml(DalueSearch.zeroPad(date.getMonth() + 1, 10) + '/' + DalueSearch.zeroPad(date.getDate(), 10)) + '');
				ret = ret.replaceWhole('{$recentQuery_index}', idx);
				idx++;
				
				html += ret;
			}
				
			if(item.length != 0) {
				for(var j = 0; j < hist.queries.length; j++) {
					if(query != null && hist.queries[j].query.toLowerCase() == query.toLowerCase()) {
						continue;
					}
					ret = item.replaceWhole('{$recentQuery_query}', DalueSearch.escapeHtml(hist.queries[j].query));
					ret = ret.replaceWhole('{$dxUrl}', DalueSearch.dxUrl);
					ret = ret.replaceWhole('{$recentQuery_url}', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + 'query=' + encodeURI(hist.queries[j].query));
					ret = ret.replaceWhole('{$recentQuery_date}', DalueSearch.escapeHtml(hist.queries[j].date) + '');
					ret = ret.replaceWhole('{$recentQuery_index}', idx);
					idx++;
					
					html += ret;
				}
			}
			
			
			DalueSearch.setHtml(DalueSearch.elements.recentQueryViewList, html); 
		}
	}
	, hotKeyword: function hotKeyword(onSuccess) {
		//alert('1111');
		var data = {
			apiKey: DalueSearch.apiKey
			, collName: DalueSearch.collName
			, type: DalueSearch.options.hotKeywordType
			, variance: DalueSearch.options.hotKeywordsVariance
		}
		DalueSearch.dex(DalueSearch.url + '/dcse/hotKeywords', data, onSuccess == null ? DalueSearch.hotKeywordOnSuccess : onSuccess, alert);
	}
	, hotKeywordView: function hotKeywordViewFn() {
		//alert('2222');
		if(DalueSearch.elements.hotKeywordView == undefined || DalueSearch.elements.hotKeywordView.length == 0) {
			console.log('hotKeywordView is not found.');
			return;
		}
		console.log('hotKeywordView is found.');
		DalueSearch.hotKeyword(DalueSearch.hotKeywordViewOnSuccess);
	}
	, hotKeywordViewOnSuccess: function hotKeywordViewOnSuccess(json) {
		if(json.result.length == 0) {
			if(Array.isArray(DalueSearch.elements.hotKeywordView)) {
				for(var i = 0; i < DalueSearch.elements.hotKeywordView.length; i++) {
					DalueSearch.setHtml(DalueSearch.elements.hotKeywordViewList, '<center style="font-size: 12px; color: #b3b7c5;" no="true">인기 검색어가 없습니다.</center>', i);
				}
			} else {
				DalueSearch.setHtml(DalueSearch.elements.hotKeywordViewList, '<center style="font-size: 12px; color: #b3b7c5;" no="true">인기 검색어가 없습니다.</center>');
			}
			
			return;
		}
		
		var item = '';
		var html = '';
		var ret = '';
		var txt = '';
		var rank = 1;
		var nhk = 0;
		
		if(Array.isArray(DalueSearch.elements.hotKeywordView)) {
			var q1 = '';
			var q2 = '';
			
			for(var i = 0; i < DalueSearch.elements.hotKeywordView.length; i++) {
				rank = 1;
				nhk = 0;
				for(var j = 0; j < json.result.length; j++) {
					
					item = DalueSearch.getHtml(DalueSearch.elements.hotKeywordViewItem, i);
					if(item == null) {
						continue;
					}
					
					var fnd = 0;
					
					if(json.result[j] == '*' || json.result[j] == '') {
						continue;
					}
					
					q1 = json.result[j];
					if(q1.indexOf('(') > -1) {
						q1 = q1.substring(q1.indexOf('(') + 1, q1.indexOf(')'));
					}
					
					for(var k = 0; k < j; k++) {
						if(j == k) {
							continue;
						}
						
						q2 = json.result[k];
						if(q2.indexOf('(') > -1) {
							q2 = q2.substring(q2.indexOf('(') + 1, q2.indexOf(')'));
						}
						
						if(q1.toLowerCase() == q2.toLowerCase()) {
							fnd = 1; 
							break;
						}
					}
					
					if(fnd == 1) {
						// console.log(q1);
						continue;
					}
					
					nhk++;
					if(nhk > 10) {
						break;
					}
					
					// console.log('nhk: ' + nhk);
					txt = json.result[j];
					if(txt.indexOf('(') > -1) {
						txt = txt.substring(txt.indexOf('(') + 1, txt.indexOf(')'));
					}
					
					//console.log("hotkeywordView:" + txt);
					//console.log(item);
					ret = item.replaceWhole('{$hotKeyword_query}', DalueSearch.escapeHtml(txt));
					ret = ret.replaceWhole('{$dxUrl}', DalueSearch.dxUrl);
					ret = ret.replaceWhole('{$hotKeyword_url}', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + 'query=' + encodeURI(txt));
					ret = ret.replaceWhole('{$hotKeyword_rank}', rank + '');
					ret = ret.replaceWhole('{$hotKeyword_index}', (rank - 1) + '');
					rank++;
					html += ret;
				}
				
				//console.log("----------------------- " + i + " --- " + html);
				//DalueSearch.elements.hotKeywordViewList[0].html(html);
				//alert(DalueSearch.elements.hotKeywordViewList[0].html());
				
				//setTimeout(function() { alert(DalueSearch.elements.hotKeywordViewList[0].html()); }, 1500);
				// alert(i + ', ' + DalueSearch.elements.hotKeywordViewList.parent().html());
				//alert(html);
				DalueSearch.setHtml(DalueSearch.elements.hotKeywordViewList, html, i);
			}
		} else {
			var q1 = '';
			var q2 = '';
			for(var i = 0; i < json.result.length; i++) {
				
				item = DalueSearch.getHtml(DalueSearch.elements.hotKeywordViewItem);
				if(json.result[i] == '*') {
					continue;
				}
				
				var fnd = 0;
				q1 = json.result[i];
				if(q1.indexOf('(') > -1) {
					q1 = q1.substring(q1.indexOf('(') + 1, q1.indexOf(')'));
				}
				
				if(json.result[i] == '*' || json.result[i] == '') {
					continue;
				}
				
				for(var j = 0; j < i; j++) {
					if(i == j) {
						continue;
					}
					
					q2 = json.result[j];
					if(q2.indexOf('(') > -1) {
						q2 = q2.substring(q2.indexOf('(') + 1, q2.indexOf(')'));
					}
					
					if(q1.toLowerCase() == q2.toLowerCase()) {
						fnd = 1; 
						break;
					}
				}
				
				if(fnd == 1) {
					continue;
				}
				
				nhk++;
				if(nhk > 10) {
					break;
				}
				// console.log('nhk: ' + nhk);
				
				txt = json.result[i];
				if(txt.indexOf('(') > -1) {
					txt = txt.substring(txt.indexOf('(') + 1, txt.indexOf(')'));
				}
				
				//console.log("hotkeywordView2:" + txt);
				ret = item.replaceWhole('{$hotKeyword_query}', DalueSearch.escapeHtml(txt));
				ret = ret.replaceWhole('{$dxUrl}', DalueSearch.dxUrl);
				ret = ret.replaceWhole('{$hotKeyword_url}', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + 'query=' + encodeURI(txt));
				ret = ret.replaceWhole('{$hotKeyword_rank}', rank + '');
				ret = ret.replaceWhole('{$hotKeyword_index}', (rank - 1) + '');
				rank++;
				html += ret;
			}
			DalueSearch.setHtml(DalueSearch.elements.hotKeywordViewList, html);
			
		}
		
		try {
			if(DalueSearch.options.functionHotKeywordOnSuccess != null) {
				DalueSearch.options.functionHotKeywordOnSuccess(json);
			}
		} catch(e) {
			console.error(e);
		}
	}
	, hotKeywordOnSuccess: function hotKeywordOnSuccessFn(json) {
		var item = DalueSearch.getHtml(DalueSearch.elements.hotKeywordItem, DalueSearch.variables.lastIndex);
		var html = '';
		var ret = '';
		var rank = 1;
		var nhk = 0;
		
		if(json.result.length == 0) {
			html = '<center style="font-size: 12px; color: #b3b7c5;">검색어 통계를 생성하고 있습니다.</center>';
		} else {
			var q1 = '';
			var q2 = '';
			// console.log('hot!!!');
			for(var i = 0; i < json.result.length; i++) {
				var fnd = 0;
				q1 = json.result[i];
				if(q1.indexOf('(') > -1) {
					q1 = q1.substring(q1.indexOf('(') + 1, q1.indexOf(')'));
				}
				
				if(json.result[i] == '*' || json.result[i] == '') {
					continue;
				}
				
				for(var j = 0; j < i; j++) {
					if(i == j) {
						continue;
					}
					
					q2 = json.result[j];
					if(q2.indexOf('(') > -1) {
						q2 = q2.substring(q2.indexOf('(') + 1, q2.indexOf(')'));
					}
					
					
					if(q1.toLowerCase() == q2.toLowerCase()) {
						fnd = 1; 
						break;
					}
				}
				
				if(fnd == 1) {
					continue;
				}
				
				nhk++;
				if(nhk > 10) {
					break;
				}
				
				txt = json.result[i];
				if(txt.indexOf('(') > -1) {
					txt = txt.substring(txt.indexOf('(') + 1, txt.indexOf(')'));
				}
				
				//console.log("hotKeywordOnSuccess:" + txt);
				ret = item.replaceWhole('{$hotKeyword_query}', DalueSearch.escapeHtml(txt));
				ret = ret.replaceWhole('{$dxUrl}', DalueSearch.dxUrl);
				ret = ret.replaceWhole('{$hotKeyword_url}', DalueSearch.searchUrl + (DalueSearch.searchUrl.indexOf('?') > -1 ? '&' : '?') + 'query=' + encodeURI(txt));
				ret = ret.replaceWhole('{$hotKeyword_rank}', rank + '');
				ret = ret.replaceWhole('{$hotKeyword_index}', (rank - 1) + '');
				rank++;
				html += ret;
			}
		}
		
		//console.log(html);
		DalueSearch.setHtml(DalueSearch.elements.hotKeywordList, html, DalueSearch.variables.lastIndex);
		
		try {
			if(DalueSearch.options.functionHotKeywordOnSuccess != null) {
				DalueSearch.options.functionHotKeywordOnSuccess(json);
			}
		} catch(e) {
			console.error(e);
		}
	}
	, keywordPromotion: function keywordPromotionFn() {
		if(!DalueSearch.options.useKeywordPromotion) {
			return;
		}
		
		var data = {
			
		}
		//console.log(DalueSearch.dxUrl + '/dalue-ecms/dx?act=keywordPromotionList&mallId=' + DalueSearch.mallId + '&shopNo=' + DalueSearch.shopNo + '&mallType=' + DalueSearch.mallType);
		//DalueSearch.dex(DalueSearch.dxUrl + '/dalue-ecms/dx?act=keywordPromotionList&mallId=' + DalueSearch.mallId + '&shopNo=' + DalueSearch.shopNo + '&mallType=' + DalueSearch.mallType, data, DalueSearch.keywordPromotionOnSuccess, alert);
		if(__dalue_keywordPromotionList != undefined)
			DalueSearch.keywordPromotionOnSuccess(__dalue_keywordPromotionList);
	}
	, keywordPromotionList: undefined
	, keywordPromotionElement: []
	, keywordPromotionElementNo: undefined
	, keywordPromotionInterval: undefined
	, keywordPromotionOnSuccess: function keywordPromotionOnSuccess(json) {
		DalueSearch.keywordPromotionList = json.RESULT;
		DalueSearch.keywordPromotionView();
		DalueSearch.keywordPromotionInterval = setInterval(DalueSearch.keywordPromotionView, 15000); // 15s
	}
	, keywordPromotionView: function keywordPromotionViewFn() {
		var elm = DalueSearch.keywordPromotionElement;
		
		if(Array.isArray(DalueSearch.elements.searchInput)) {
			var typing = false;
			
			for(var i = 0; i < DalueSearch.elements.searchInput.length; i++) {
				if(DalueSearch.elements.searchInput[i].val() != '') {
					typing = true;
					break;
				}
			}
		} else {
			if(DalueSearch.elements.searchInput[i].val() != '') {
				typing = true;
			}
		}
		
		if(typing) {
			$('.dalue_css_keywordPromotion').css('display', 'none');
			return;
		}
		
		if(elm != undefined) {
			for(var i = 0; i < elm.length; i++)
				elm[i].remove();
			
			elm = [];
			DalueSearch.keywordPromotionElement = [];
		} 
		
		if(DalueSearch.keywordPromotionList == undefined || DalueSearch.keywordPromotionList.length == 0) {
			return;
		}
		
		var min = 0, max = DalueSearch.keywordPromotionList.length;
		
		DalueSearch.keywordPromotionElementNo = parseInt(Math.random() * (max - min) + min);
		
		if($('.dalue_css_keywordPromotion').length == 0) {
			var kpOff = false;
			for(var i = 0; i < DalueSearch.elements.searchInput.length; i++) {
				var input = DalueSearch.elements.searchInput[i];
				if(input.val() != '' || input.is(":focus")) {
					kpOff = true;
				}
			}
			if(!kpOff) {
				for(var i = 0; i < DalueSearch.elements.searchInput.length; i++) {
					var input = DalueSearch.elements.searchInput[i];
					
					elm = document.createElement("div");
					$(elm).attr('id', 'dalue_search_keywordPromotion_' + i);
					$(elm).html('<span class="dalue_css_keywordPromotion">' + DalueSearch.escapeHtml(DalueSearch.keywordPromotionList[DalueSearch.keywordPromotionElementNo].keyword) + '</span>');
					$(elm).css('position', 'absolute');
					$(elm).css('z-index', '1');
					//console.log(i);
					//console.log('DalueSearch.options.keywordPromotionLeft[i]' + DalueSearch.options.keywordPromotionLeft[i]);
					$(elm).css('left', (DalueSearch.elements.searchInput[i].position().left + (DalueSearch.options.keywordPromotionLeft.length > i ? DalueSearch.options.keywordPromotionLeft[i] : 0) + 'px'));
					$(elm).css('width', (DalueSearch.elements.searchInput[i].width() - 10 + DalueSearch.options.keywordPromotionAddWidth) + 'px');
					//$(elm).css('padding', input.css('padding-top') + ' ' + input.css('padding-right') + ' ' + input.css('padding-bottom') + ' ' + input.css('padding-left'));
					$(elm).attr('index', i);
					$(elm).addClass('dalue_search_keywordPromotion');
					DalueSearch.elements.searchInput[i].after($(elm));
					
					var top = DalueSearch.elements.searchInput[i].position().top + (DalueSearch.elements.searchInput[i].outerHeight() / 2) - ($(elm).outerHeight() / 2)
						+ (DalueSearch.options.keywordPromotionTop.length > i ? DalueSearch.options.keywordPromotionTop[i] : 0);
					// $('.dalue_search_keywordPromotion').css('top', top + 'px');
					$(elm).css('top', top + 'px');
					var siElm = DalueSearch.elements.searchInput[i];
					
					DalueSearch.bind($('#dalue_search_keywordPromotion_' + i), 'click', function(e) { console.log('focus : ' + DalueSearch.elements.searchInput[parseInt($(this).attr('index'))].length); DalueSearch.elements.searchInput[parseInt($(this).attr('index'))].focus(); console.log('click' + $(this).attr('index')); $('.dalue_css_keywordPromotion').css('display', 'none'); $('.dalue_search_keywordPromotion').remove(); });
					//$(elm).bind('click', function(e) { console.log('click'); $('.dalue_css_keywordPromotion').css('display', 'none'); DalueSearch.elements.searchInput[$(this).attr('index')].focus(); });
					DalueSearch.keywordPromotionElement.push($(elm));
				}
			
			}
			
			
			
			
			//console.log(DalueSearch.elements.searchInput[DalueSearch.variables.lastIndex].position().top + ', ' + DalueSearch.elements.searchInput[DalueSearch.variables.lastIndex].outerHeight() + ', ' + $(elm).outerHeight());
			
			
			//console.log(top);
			
			//$('.dalue_search_keywordPromotion').css('top', top + 'px');
			// $('.dalue_search_keywordPromotion').bind('click', function(e) { $('.dalue_css_keywordPromotion').css('display', 'none'); DalueSearch.elements.searchInput[DalueSearch.variables.lastIndex].focus(); });
			
		} else {
			console.log('keyword');
			for(var i = 0; i < DalueSearch.elements.searchInput.length; i++) {
				$('#dalue_search_keywordPromotion_' + i).html('<span class="dalue_css_keywordPromotion">' + DalueSearch.escapeHtml(DalueSearch.keywordPromotionList[DalueSearch.keywordPromotionElementNo].keyword) + '</span>');
			}
			//$('.dalue_css_keywordPromotion').html();
		}
		
		setInterval(DalueSearch.keywordPromotionViewPosition, 20);
		
	}
	
	, keywordPromotionViewPosition: function keywordPromotionViewPositionFn() {
		var elm;
		var top = 0;
		
		for(var i = 0; i < DalueSearch.elements.searchInput.length; i++) {
			elm = $('#dalue_search_keywordPromotion_' + i);
			elm.css('left', (DalueSearch.elements.searchInput[i].position().left + (DalueSearch.options.keywordPromotionLeft.length > i ? DalueSearch.options.keywordPromotionLeft[i] : 0) ) + 'px');
			elm.css('width', (DalueSearch.elements.searchInput[i].width() - 10 + DalueSearch.options.keywordPromotionAddWidth) + 'px');
			top = DalueSearch.elements.searchInput[i].position().top + (DalueSearch.elements.searchInput[i].outerHeight() / 2) - (elm.outerHeight() / 2)
					+ (DalueSearch.options.keywordPromotionTop.length > i ? DalueSearch.options.keywordPromotionTop[i] : 0);
				// $('.dalue_search_keywordPromotion').css('top', top + 'px');
			elm.css('top', top + 'px');
		}
	}
	
	// pagination
	, paginationCalc: function paginationCalcFn(total, bottomSize, listSize, cursor) {
		//total = 총 갯수
	    //bottomSize = 하단크기
	    //listSize = 화면에서 보여줄 크기
	    //cursor = 현재 나의 페이지

		let totalPageSize = Math.ceil(total / listSize)  //한 화면에 보여줄 갯수에서 구한 하단 총 갯수
		
		let firstBottomNumber = (cursor - 1) - (cursor - 1) % bottomSize + 1;  //하단 최초 숫자
	    let lastBottomNumber = (cursor - 1) - (cursor - 1) % bottomSize + bottomSize;  //하단 마지막 숫자
		let prevNumber = firstBottomNumber - 1 < 1 ? 1 : firstBottomNumber - 1;
	    let nextNumber = lastBottomNumber + 1 > totalPageSize ? totalPageSize : lastBottomNumber + 1;
	    
	    if(lastBottomNumber > totalPageSize) lastBottomNumber = totalPageSize  //총 갯수보다 큰 경우 방지
	
	    return {
	        prevNumber,
	        firstBottomNumber,
	        lastBottomNumber,
	        nextNumber,
	        totalPageSize,
	        total,
	        bottomSize,
	        listSize,
	        cursor
	    }
	}
	, pagination: function paginationFn(json) { // query result
		var currentPage = parseInt(json.header.begin / json.header.size) + 1;
		var totalPage = parseInt(((json.header.totalCount - 1) / json.header.size) + 1);
		var nav = DalueSearch.paginationCalc(json.header.totalCount, DalueSearch.options.page, json.header.size, currentPage);
		
		var first = String(DalueSearch.elements.paginationFirst.html());
		var prev = String(DalueSearch.elements.paginationPrev.html());
		var next = String(DalueSearch.elements.paginationNext.html());
		var last = String(DalueSearch.elements.paginationLast.html());
		var item = String(DalueSearch.elements.paginationItem.html());
		
		var params = DalueSearch.getUriParam();
		var html = String('');
		var ret = String('');
		
		/**
		var params = DalueSearch.getUriParam();
		// var uriParam = new URLSearchParams(allParam).toString();
		var listHtml = DalueSearch.getHtml(DalueSearch.elements.filterCategoryItem);
		html = '';
		var ret = listHtml;
		var sel = DalueSearch.elements.filterCategoryItem.attr('sel');
		var nosel = DalueSearch.elements.filterCategoryItem.attr('nosel');
		
		console.log(sel + ' === ' + nosel);
		
		// searchFn(query, begin, size, sort, category, brand, price) {
		ret = ret.replaceWhole('{$category_action}', 'DalueSearch.search(\'' + params.query + '\', ' + params.begin + ', ' + params.size + ', \'' + params.sortType + '\', \'\', \'' + params.brandeCode + '\', \'' + params.price + '\');');
		ret = ret.replaceWhole('{$categoryName}', '전체'); */
		html += first.replaceWhole('{$paginationAction}', 'DalueSearch.search(\'' + params.query + '\', ' + 1 + ', ' + params.size + ', \'' + params.sortType + '\', \'' + params.categoryId + '\', \'' + params.brandeCode + '\', \'' + params.price + '\');');
		html += prev.replaceWhole('{$paginationAction}', 'DalueSearch.search(\'' + params.query + '\', ' + (((nav.cursor - 1 < 1 ? 1 : nav.cursor - 1) - 1) * params.size + 1) + ', ' + params.size + ', \'' + params.sortType + '\', \'' + params.categoryId + '\', \'' + params.brandeCode + '\', \'' + params.price + '\');');
		for(var page = nav.firstBottomNumber; page <= nav.lastBottomNumber; page++) {
			ret = item.replaceWhole('{$paginationAction}', 'DalueSearch.search(\'' + params.query + '\', ' + ((page - 1) * params.size + 1) + ', ' + params.size + ', \'' + params.sortType + '\', \'' + params.categoryId + '\', \'' + params.brandeCode + '\', \'' + params.price + '\');');
			if(page == nav.cursor) {
				ret = ret.replaceWhole('{$paginationActive}', 'active');	
			} else {
				ret = ret.replaceWhole('{$paginationActive}', ''); 
			}
			ret = ret.replaceWhole('{$paginationNo}', page);
			html += ret;
		}
		
		
		html += next.replaceWhole('{$paginationAction}', 'DalueSearch.search(\'' + params.query + '\', ' + (((nav.cursor + 1 > totalPage ? totalPage : nav.cursor + 1) - 1) * params.size + 1) + ', ' + params.size + ', \'' + params.sortType + '\', \'' + params.categoryId + '\', \'' + params.brandeCode + '\', \'' + params.price + '\');');
		html += last.replaceWhole('{$paginationAction}', 'DalueSearch.search(\'' + params.query + '\', ' + ((nav.totalPageSize - 1) * params.size + 1) + ', ' + params.size + ', \'' + params.sortType + '\', \'' + params.categoryId + '\', \'' + params.brandeCode + '\', \'' + params.price + '\');');
		
		
		DalueSearch.elements.paginationView.html(html);
	}
	
}
</script>