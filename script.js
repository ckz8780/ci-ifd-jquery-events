$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	
	
	// Challenge code below this line
	
	$("p").click(function() {
		$("p").css("color", "red");
	});
	
	$("h2").mouseenter(function() {
		$("h2").css("background-color", "lightblue");
		$(this).addClass("bigh2");
	});
	
	$("h2").mouseleave(function() {
		$("h2").css("background-color", "white");
		$(this).removeClass("bigh2");
	});
	
	$(".bottom_button").mouseenter(function() {
		$('body').css("background-color", "#000");
	});
	
	$(".bottom_button").mouseleave(function() {
		$('body').css("background-color", "#eee");
	});
	
	$(".bottom_button:first").click(function() {
		$(this).hide(1000);
	});

}); 
