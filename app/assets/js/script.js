$(document).ready(function() {
	$('.order_names').on('click', function(event) {
		event.preventDefault();
		$('.orderForm_wrap').css({'visibility':'visible'});
		$('.orderForm').css({'visibility':'visible'});
	});
	$('.close_icon').on('click', function(event) {
		event.preventDefault();
		$('.orderForm_wrap').css({'visibility':'hidden'});
		$('.orderForm').css({'visibility':'hidden'});
		$('.successForm').css({'visibility':'hidden'});
	});
	$('.btn_submit input').on('click', function(event) {
		event.preventDefault();
		$('.orderForm').css({'visibility':'hidden'});
		$('.successForm').css({'visibility':'visible'});
	});

	/*--развертывание строки поиска--*/
	$('.search_iconMain').on('click', function(event) {
		event.preventDefault();
		$('.search_iconMain').css({'visibility':'hidden'});
		$('.search_form').css({'visibility':'visible'});
	});
	$('.news_wrap').on('click', function(event) {
		event.preventDefault();
		$('.search_form').css({'visibility':'hidden'});
	});

	

	$('.comment_bClick').focus(function(){
		$('.btn_addComment').css({'visibility':'visible', 'height':'100%'});
	});

});