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
	
	// Removed to complete challenge 4
	/*$(".bottom_button").mouseenter(function() {
		$('body').css("background-color", "#000");
	});
	
	$(".bottom_button").mouseleave(function() {
		$('body').css("background-color", "#eee");
	});*/
	
	// Challenge 1
	/*$(".bottom_button:first").click(function() {
		$(this).hide(1000);
	});*/
	
	// Challenge 2
	/*$(".bottom_button").click(function() {
		var p = $(this).closest("div").find("p") // Find the closest div, then find the paragraph within it
		p.toggle(1000);
	});*/
	
	//Challenge 3 
	$(".bottom_button").click(function() {
		var p = $(this).closest("div").find("p") // Find the closest div, then find the paragraph within it
		p.slideToggle(500);
	});
	
	// Challenge 4
	$(".bottom_button").mouseenter(function() {
		$(this).fadeTo(250, 0.50)
	});
	
	$(".bottom_button").mouseleave(function() {
		$(this).fadeTo(250, 1.0)
	});

}); 
