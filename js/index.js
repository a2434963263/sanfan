$(function(){
	$(".tab1 ul>li").hover(function(){
		$(".tab1").addClass("sty1");
		 $(this).find("ol").show()
	},function(){
		$(this).find("ol").hide()
		$(".tab1").removeClass("sty1");
	})
	$(".show_tab1").click(function(){
		$(".tab1").css({"right":0})
	})
	$(".tab1 .cha").click(function(){
		$(".tab1").css({"right":-270})
	})
	$(window).resize(function(){
		var wid = document.documentElement.clientWidth;
		if (wid>768) {
			$('.nav2 .tab1').show()
		};
	})
	var onoff=true;
	$(".lunbo_box .prev").click(function(){
		onoff=true;
	})
	$(".lunbo_box .next").click(function(){
		onoff=false;
	})
	var oall=document.getElementById('all')
	var oimg=document.getElementsByTagName('img')
	var timer=null;
	clearInterval(timer)
	timer = setInterval(function(){
		
		if (onoff) {
			oall.scrollLeft++
			if (oall.scrollLeft>=oall.offsetWidth) {
		     	oall.scrollLeft=0;
		     	console.log(6)
		     }
		}else{
			oall.scrollLeft--;
		    if (oall.scrollLeft<=0) {
	     	   oall.scrollLeft=1200;
	     	   console.log(7)	
	        };
		}
		     
		    
	},10)
})