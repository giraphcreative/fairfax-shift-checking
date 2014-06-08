$(function() {
	
	$("a").mouseenter(function(){
		$(this).animate({"opacity":".85"},300);
	}).mouseleave(function(){
		$(this).animate({"opacity":"1"},300);
	});

});
