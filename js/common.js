/*$(document).scroll(function() {
	if(( $(document).scrollTop() ) > 100) {
		$('.navbar-inverse').attr('style', 'background: rgba(255, 255, 255, 1) !important; color: #202020 !important;');
		$('.menu-cases').attr('style', 'color: #202020 !important');
		$('.menu-cases').addClass('menu-cases-hover');
	}
	else {
		$('.navbar-inverse').attr('style', 'background: none !important; color: #FFFFFF !important;');
		$('.menu-cases').css({
			color:          '#FFF',
		});
		$('.menu-cases').removeClass('menu-cases-hover');
	}
});*/


/*var min = false;
$(document).scroll(function(){
	if( $(window).width > 450 ) {
		if($(document).scrollTop()>50 && !min){
			$(".navbar-inverse").css('background-color','#fff')
								.css('transition','0.5s');
			$(".menu-cases").attr('style','color: #2C3E50 !important');
			$("#noose-logotype").attr("src" , "../img/Noose-inverse.svg");
			$("#noose-logotype").mouseenter(function() {
				$(this).attr("src" , "../img/Noose-inverse-hover.svg");
			});
			$("#noose-logotype").mouseleave(function() {
				$(this).attr("src" , "../img/Noose-inverse.svg");
			});
			min = true;
		}
		if($(document).scrollTop()<=50 && min){
			$(".navbar-inverse").css('background-color','transparent')
								.css('transition','0.5s');
			$(".navbar-inverse a").css('color','#fff');
			$(".navbar-inverse a").mouseenter(function(){
				$(this).css('color','#2C3E50');
			});
			$(".navbar-inverse a").mouseleave(function(){
				$(this).css('color','#fff');
			});
			$("#noose-logotype").attr("src" , "../img/Noose.svg");
			$("#noose-logotype").mouseenter(function() {
				$(this).attr("src" , "../img/Noose-hover.svg").fadeOut;
			});
			$("#noose-logotype").mouseleave(function() {
				$(this).attr("src" , "../img/Noose.svg").fadeIn;
			});
			min = false;
		}
	}
});
$(document).ready(function() {
		$("#noose-logotype").mouseenter(function() {
			$(this).attr("src" , "../img/Noose-hover.svg").fadeOut;
		});
		$("#noose-logotype").mouseleave(function() {
			$(this).attr("src" , "../img/Noose.svg").fadeIn;
		});
})*/


var min = false;
$(document).scroll(function(){
	if($(document).scrollTop()>50 && !min){
		$(".navbar").css('background-color','#1c1c1c')
							.css('transition','0.5s');
		min = true;
	}
	if($(document).scrollTop()<=50 && min){
		$(".navbar").css('background-color','transparent')
							.css('transition','0.5s');
		min = false;
	}
});