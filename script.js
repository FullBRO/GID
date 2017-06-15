if (!$.cookie('subscribe') == 'subscribed') {
	$('.subscribe').show(1);
} else {
	$('.subscribe').hide(1);
}


$(".sub-btn").on('click', function subscribe () {
	$.cookie( 'subscribe', 'subscribed')
});

$(".dlt-cookies").on('click', function cookie_delete () {
	$.cookie('subscribe', 'unsubscribed')
})