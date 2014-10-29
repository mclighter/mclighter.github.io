$( document ).ready(function() {
  
	$(".side-nav li a").on("click", function() {
  		var type = event.currentTarget.hash.substr(1);
  		if (type==1) var destination = 0;
  		else var destination = $("#title-"+type).offset().top;
  		//if ($.browser.safari) {
  		if (false) {
            $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость
        } else {
            $('body').animate({ scrollTop: destination }, 300);
        }

	});

});