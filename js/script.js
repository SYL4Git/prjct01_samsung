// head1 strt

// srch_input strt
$('.srch_input').focus(function(){
    $(".srch_window").stop().slideDown('fast')
}).blur(function(){
    $(".srch_window").stop().slideUp('fast')
})
// srch_input end

// myMenu strt
$('.myMenu>button').focus(function(){
    $('.myMenu_list').stop().slideDown('fast')
}).blur(function(){
    $('.myMenu_list').stop().slideUp('fast')
})
// myMenu end

// gnb_menu strt
$('.gnb_menu').mouseover(function(){
    $(this).find('.sub').stop().slideDown('fast')
}).mouseout(function(){
    $(this).find('.sub').stop().slideUp('fast')
})
// gnb_menu end

// head1 end

// * 메인 배너 슬라이드
$('.mbImg_wrap').slick({
    prevArrow : '.btn_prv',
    nextArrow : '.btn_nxt',
    dots : true,
    appendDots : '.mb_pager',
    customPaging : function(slider, i){
        return `<span class="current">${i + 1}</span> / ${slider.slideCount}`
    },
    autoplay : true,
    autoplaySpeed : 6000,
    speed : 1200
});

// 메인 배너 슬라이드 컨트롤러
$('.ms_stop').click(function(){
    $(this).hide();
    $('.ms_play').show();
    $('.ms_img_wrap').slick('slickPause');
});

$('.ms_play').click(function(){
    $(this).hide();
    $('.ms_stop').show();
    $('.ms_img_wrap').slick('slickPlay');
});

// recItm1 strt
$('.recItm1 .categ li').click(function(e){
    e.preventDefault()
    let i = $(this).index()
    $('.categ li').removeClass('on')
    $(this).addClass('on')
    $('.prdList_wrap').removeClass('view')
    $('.prdList_wrap').eq(i).addClass('view')
    $('.prdList_wrap').slick('setPosition')
    // display: none 처리 되었던 영역을 다시 block 처리 하게 되면 slick 이 영역을 자동으로 감지 못하고, 한번 동작 실행 후 정상으로 슬라이드가 잡힘
    // 이는 .slick('setPosittion') 을 통해서 해결 가능
})


// recItm1 end

// recItm2 strt
$('.prdList_wrap').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
})
// recItm2 end