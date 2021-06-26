$(document).ready(function() {

var width = $(window).width();

function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}


$("#quick-order-pro-comment .fild-description").empty();
$("#quick-order-pro-comment .fild-description").css('display', 'block');

$("#quick-order-pro-comment .fild-description").append("Например, удобное время и место получения заказа, дополнительный номер телефона, а также нужна ли сдача.");

/*
function new_menu_change(num){


	$('.new_menu__item').removeClass('active');
	$('.new_menu__item.item_'+num).addClass('active');
	$('.block_for_new_menu_item').css('display', 'none');
	$('.for_new_menu_item_'+num).css('display', 'block');

	    $('.block_leaders_title').css('display', 'none');
	    $('.block_leaders_title_'+ num).css('display', 'block');

	$('.block_leaders').css('display', 'none');
	$('.block_leaders.'+ num).css('display', 'block');

//	$('.block_new_product').css('display', 'none');
//	$('.block_new_product.'+ num).css('display', 'block');

    $('.multuproduct').css('display', 'none');
	$('.multuproduct.block_new_multuproduct_'+ num).css('display', 'block');

   deleteCookie("thiscolor");
}


     if (get_cookie ("thiscolor")== 'yellow') {


     	new_menu_change('1');
 }

  if (get_cookie ("thiscolor")== 'lilac') {
     	new_menu_change('2');
 }

  if (get_cookie ("thiscolor")== 'green') {
     	new_menu_change('3');
 }



$(".new_menu__item.item_1").click(function() {
 	new_menu_change('1');


});

$(".new_menu__item.item_2").click(function() {
    	new_menu_change('2');


});

$(".new_menu__item.item_3").click(function() {
    	new_menu_change('3');


});
*/
/* ====== желтая информационная полоска ====== */



         var id_region = 0;
      //   var user = "new_user";

          if (get_cookie ("name")) {
      user = get_cookie ( "name" );
}  else {
    var user = "new_user";
}

 if (get_cookie ("id_region")== '524925') {

     id_region = get_cookie ("id_region");
  //   alert(id_region);

     if (get_cookie ("name")) {
      user = get_cookie ( "name" );
}
 }

$('.mobile-phone').css(' border-bottom', 'none');
$('#top-menu ul').css(' border-top', 'none');
$('#primary-menu').css('border-top', 'none');

$('#pages').css('border-top', 'none');
//var user = "new_user";
//alert(user);
  if (user == "old_user" ) {
      	$('.new_top_info').css('display', 'none');
    	$('.top_in_moscow').css('margin-top', '0');

    	if (width < 780) {
    	    $('#header').css('padding-top', '0');
        	$('#menu').css('padding-top', '0');
        	$('#primary-menu').css('padding-top', '0');

        		$(".bg_white").css('background', '#ffffff');
    		    $(".bg_white").css('height', '500px');
    	}

           	if (width<550) {
           	      $(".mobile-phone").css('margin-bottom', '50px');
                }


  } else {
        $('.new_top_info').css('display', 'block');
    	$('.top_in_moscow').css('margin-top', '70px');

    		if (width<999) {
    		 //  	$('#cities-mobile').css('top', '80px');
    		   // 	$("#city-mobile").css('padding-top', '80px');

    		    	$('.city_mobile_class').css('top', '80px');
    		    	$(".city_mobile_class_2").css('padding-top', '80px');

    		    	$(".bg_white").css('background', '#ffffff');
    		    	$(".bg_white").css('height', '500px');

    		    		$('.mobile-phone a img').css('padding-top', '30px');
    		}

    	if (width<780) {
    	    $('.top_in_moscow + #header').css('padding-top', '70px');
        	$('.top_in_moscow + #header #menu').css('padding-top', '70px');
        	$('.top_in_moscow + #header #primary-menu').css('padding-top', '100px');

        //	$("#city-mobile").css('padding-top', '80px');
        	$(".city_mobile_class_2").css('padding-top', '80px');

        	   $(".mobile-phone").css('margin-bottom', '100px');

    	}

    		if (width<550) {
           	      $(".mobile-phone").css('margin-bottom', '150px');
                }

}





$('.new_top_info__close').click(function() {
	$('.new_top_info').css('display', 'none');
	$('.top_in_moscow').css('margin-top', '0');

	if (width<780) {
    	    $('#header').css('padding-top', '0');
        	$('#menu').css('padding-top', '0');
        	$('#primary-menu').css('padding-top', '0');
        	   $(".mobile-phone").css('margin-bottom', '120px');
        	      $(".bg_white").css('height', '500px');

        	      	$('#city-mobile').css('top', '0');
    	}

    		if (width<550) {
           	      $(".mobile-phone").css('margin-bottom', '80px');
                }

	document.cookie = "name=old_user";
//document.cookie = "name=''";

});



/* ====== конец ======= */

/* ====== стрелка вверх ======= */


$(window).on("scroll", function() {
				 if ($(window).scrollTop() > 300) 	$(".module_scroll_top ").css('display', 'block');
        		 else 	$(".module_scroll_top ").css('display', 'none');
		 });

		$(".module_scroll_top ").on('click', function() {
   			$('html, body').animate({ scrollTop: 0 }, 'slow');
   	});

/* ====== конец ======= */


});


