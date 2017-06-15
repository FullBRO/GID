if (!$.cookie('subscribe') === 'subscribed') {
	$('.subscribe').show();
	$('dlt-cookies').hide();
} else {
	$('.subscribe').hide();
	$('dlt-cookies').show();
}


$(".sub-btn").on('click', function subscribe () {
	$.cookie( 'subscribe', 'subscribed');
});

$(".dlt-cookies").on('click', function showSub () {
	$.cookie('subscribe', null);
	$('.subscribe').show();
});