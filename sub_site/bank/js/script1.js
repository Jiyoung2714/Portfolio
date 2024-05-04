//menu
$(document).ready(function(){
 $('.submenu').hide();
 $(".lnb").mouseover(function(){
     $(this).find('.submenu').stop().slideDown(350);
     $("#lnb_wrap").stop().animate({'height':'350px'},400);
     $('.top').find('.menu_bg').stop().slideDown(400);
 }).mouseleave(function(){
     $(this).find('.submenu').stop().slideUp(400);
     $("#lnb_wrap").stop().animate({'height':'100px'},400);
     $('.top').find('.menu_bg').stop().slideUp(400);
 });
});//document end

/* 메인슬라이드 */
$(document).ready(function() {
$('.flexslider').flexslider({
  animation: "slide"
});
});