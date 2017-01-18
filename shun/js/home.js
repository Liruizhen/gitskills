
function disNone(_click,_display){//鼠标点击_click的时候_display消失
	
	_click.onclick=function(){
		
		$(_display).animate({
			height:0
		},1000,function(){
			$(_display).hide();
		});
	}
	
}

function lunbo(){
	var _timer=0;
	var _arr=[[0,0,"rgb(229, 227, 245)"],
	[-1000,1,"rgb(249, 248, 246)"],
	[-2000,2,"rgb(251, 251, 252)"],
	[-3000,3,"rgb(255, 53, 61)"],
	[-4000,4,"rgb(253, 251, 196)"],
	[-5000,5,"rgb(182, 35, 6)"],
	[-6000,6,"rgb(207, 32, 28)"],
	[-7000,7,"rgb(160, 16, 27)"]]
	var _n=0;
	var _flage=0;
	function start(){
		window.clearTimeout(_timer);
		$(".banner_center").css("left",_arr[_n][0]+"px");
		
		$(".slide_wrap li").eq(_arr[_n][1]).css("background-color","#fa9600");
		$(".slide_wrap li").not($(".slide_wrap li").eq(_arr[_n][1])).css("background-color","#646464");
		
		$(".slide_wrap li").each(function(i){
			$(this).click(i,function(){
				_flage=1; _n=i;
				$(".banner_center").css("left",_arr[i][0]+"px");
				$(".slide_wrap li").eq(_arr[i][1]).css("background-color","#fa9600");
				$(".slide_wrap li").not($(".slide_wrap li").eq(_arr[i][1])).css("background-color","#646464");
				$(".banner_big").css("background-color",_arr[i][2]);
				
			});
		})
		
		
		$(".banner_big").css("background-color",_arr[_n][2]);
		
		_n<7?_n++:_n=0;
	
		_timer=window.setTimeout(start,3000);
	}
	start();
}



window.onload=function(){
	var _top_banner=document.getElementById("top_banner");
	var _span=_top_banner.getElementsByTagName("span")[0];
	disNone(_span,_top_banner);
	
	
	(function head(){
		$("#header").load("title.html",function(data,textStatus){
				if(textStatus=="success"){
					titleMian();
				}
		});
	})();
	
	
	lunbo();
	
}
