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
//$(document).ready();

var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};
$(function(){
	var flyTitle = $('.flyTitle');
	var originOffset = flyTitle.offset().left;
	var newLeftPosition = $(document).width();
	flyTitle.offset({left:newLeftPosition}).css({opacity:0}).
		fadeTo(4500,1);
	var interval = setInterval(function(){
		newLeftPosition = newLeftPosition - 2;
		flyTitle.offset({left:newLeftPosition});
		if(newLeftPosition < originOffset){
			clearTimeout(interval);
		}
	}, .5);

	callback();
	$('.description')
		.hide()
		.each(function(i){
			$(this).show(700*(i+1));
		});
	$('header').hide();
	$('header').show(1200);
	$('.skills li').each(function(){
		$(this).css('background-color','rgb(236, 114, 99)');
	})

});