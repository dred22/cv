var callback = function(){
	$('.skills').children().each(function(){
		newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
	    $(this).animate({
	        width: newWidth,
	    }, 1000);
	});
	$('.progress-bar').each(function(){
		$(this).width($(this).data('percent')+'%');
	});
	/*$('.icons-red').each(function(){
		height = $(this).height();
    $(this).animate({
        height: 14,
    }, 2000);
	});*/
};
$(document).ready(callback);

var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};