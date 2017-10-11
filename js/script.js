jQuery(document).ready(function(){
	$=jQuery;
	var tLines = false;
	var mLines = false;
	$.each($(".subcat"), function(){
		if($(this).find(".caption").height()<50)bLines = true; //find two lines item
		if($(this).find(".caption").height()>50)mLines = true; //find two lines item
	});
	$.each($(".subcat"), function(){
		if($(this).find(".caption").height()<50&&bLines&&mLines)$(this).css("padding-top","33px")
	})
	$(".nav a").on("click", function(){
	   $(".nav").find(".active").removeClass("active");
	   $(this).parent().addClass("active");
	});

	$('.white').height($('.white').width());

	$('.fish').height($('.fish').width());
	if (window.innerWidth >= 992) {
     	setFooterSize('lg');
     	setSidebarSize();
  	}else if(window.innerWidth >= 768) {
  		setFooterSize('sm');
     	setSidebarSize();
  	}else{
  		$(".content .sidebar").css("height", "auto");
  		$(".content .main").css("height", "auto");
  	}

	$(window).resize(function() {
		$('.white').height($('.white').width());
		$('.fish').height($('.fish').width());
		if (window.innerWidth >= 768) {
		    setFooterSize()
  		  	setSidebarSize();
		}else{
	  		$(".content .sidebar").css("height", "auto");
	  		$(".content .main").css("height", "auto");
	  	}
	});

	function setSidebarSize(){

		if($(".content .main").height()>$(".content .sidebar").height()){
			$(".content .sidebar").height($(".content .main").height()-50);
		}else{
			$(".content .main").height($(".content .sidebar").height()+50);
		}
	}

	function setFooterSize(size){
		switch (size) {
			case "lg":
				var hgt = 0;
				$.each($("footer .block"), function(ind){		
					if($(this).height()>hgt)hgt=$(this).height();
					if(ind==3){
						$.each($("footer .block"), function(i){
							if(i<4){
								$(this).height(hgt);
							}
						})
						hgt=0;
					}
					if(ind==7){
						$.each($("footer .block"), function(i){
							if(i>3){
								$(this).height(hgt);
							}
						})
					}
				});
				break;
			case "sm":
				var hgt = 0;
				$.each($("footer .block"), function(ind){		
					if($(this).height()>hgt)hgt=$(this).height();
					if(ind==1){
						$.each($("footer .block"), function(i){
							if(i<2){
								$(this).height(hgt);
							}
						})
						hgt=0;
					}
					if(ind==3){
						$.each($("footer .block"), function(i){
							if(i==2||i==3){
								$(this).height(hgt);
							}
						})
						hgt=0;
					}
					if(ind==5){
						$.each($("footer .block"), function(i){
							if(i==4||i==5){
								$(this).height(hgt);
							}
						})
						hgt=0;
					}
					if(ind==7){
						$.each($("footer .block"), function(i){
							if(i>5){
								$(this).height(hgt);
							}
						})
					}
				});
				break;
		}
	};
})



