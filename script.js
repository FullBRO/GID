if (!$.cookie('subscribe') === 'subscribed') {
	$('.subscribe').show();
	$('.dlt-cookies').hide();
} else {
	$('.subscribe').hide();
	$('.dlt-cookies').show();
}


$(".sub-btn").on('click', function subscribe () {
	$.cookie( 'subscribe', 'subscribed');
	$('.subscribe').hide(1000, function(){
		$('.thanks').show(2000);
		setTimeout(function(){$('thanks').hide(2000)}, 1000)
	});
});

$(".dlt-cookies").on('click', function showSub () {
	$.cookie('subscribe', null);
	$('.subscribe').show();
});