// //Note: line height is set to match navigation_height and navigation_min_height respectivly
// navigation_height = 100
// navigation_min_height = 40
// $(window).scroll(function(){
// if(($('body').scrollTop()>=-40) && ($('body').scrollTop()<=(navigation_height-navigation_min_height))){
// 	//controls elements dimentions on scroll
// 	var s = $('body').scrollTop();
// 	console.log(s);
// 	$('#navigation').stop().animate({
//             height:navigation_height-s,
//     },10);
// 	$('#navigation li a').stop().animate({
// 			height:navigation_height-s,
// 			lineHeight:navigation_height-s,
//     },10);

    
// 	//Elements under navigation bar fix
// 	//Laggy? Remove this code. The over flow is has a pretty cool effect anyway.
// 	$('#nextElementFix').stop().animate({
// 		paddingTop:navigation_height-s
//     },10);
// } else if(($('body').scrollTop()>=-40) && ($('body').scrollTop()>=(navigation_height-navigation_min_height)) ){
// 	//hold animation on fast scroll 
// 	var s = $('body').scrollTop();
// 	$('#navigation').stop().animate({
//             height:navigation_min_height
//         },15);
// 	$('#navigation li a').stop().animate({
// 			height:navigation_min_height,
// 			lineHeight:navigation_min_height,
//         },15);
// 		$('#nextElementFix').stop().animate({
// 			paddingTop:navigation_min_height-s
//     	},15);
// }
// });


$(function(){
    $('#header_nav').data('size','big');
});

$(window).scroll(function(){
    var $nav = $('#header_nav');
    if ($('body').scrollTop() > 0) {
        if ($nav.data('size') == 'big') {
            $nav.data('size','small').stop().animate({
                height:'40px'
            }, 600);
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size','big').stop().animate({
                height:'100px'
            }, 600);
        }  
    }
});
