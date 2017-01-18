
function mousBlock(_mous,_sbox,_css,_block){//鼠标滑过_mous，_sbox背景变白，
											//_css箭头向上 ,有新的盒子_block出现
	_mous.onmouseover=function(){
		_sbox.style.backgroundColor="#fff";
		_css.style.borderTop="none";
		_css.style.borderBottom="8px solid #969696";
		_css.style.borderLeft="5px solid #fff";
		_css.style.borderRight="5px solid #fff";
		
		_block.style.display="block";
	}
}

function mousDis(_mous,_sbox,_css,_block){//鼠标滑过_mous，_sbox背景变灰色，
											//_css箭头向下 ,有新的盒子_block消失
	_mous.onmouseleave=function(){
		_sbox.style.backgroundColor="#F7F7F7";
		_css.style.borderTop="8px solid #969696";
		_css.style.borderBottom="none";
		_css.style.borderLeft="5px solid #F7F7F7";
		_css.style.borderRight="5px solid #F7F7F7";
		
		_block.style.display="none";
	}
}


function mousBlockb(_mous,_css,_block){//鼠标滑过_mous，
											//_css箭头出现 ,有新的盒子_block出现
	_mous.onmouseover=function(){
		_css.style.borderTop="none";
		_css.style.borderBottom="8px solid #fff";
		_css.style.borderLeft="5px solid #F7F7F7";
		_css.style.borderRight="5px solid #F7F7F7";
		
		_block.style.display="block";
	}
}

function mousDisb(_mous,_css,_block){//鼠标滑过_mous，
											//_css箭头消失 ,新的盒子_block消失
	_mous.onmouseleave=function(){
		_css.style.border="none";
		
		_block.style.display="none";
	}
}

function dis(_cli,_block){//点击_cli的时候，_block消失
	_cli.onclick=function(){
		_block.style.display="none";
	}
}

function mousshopping(_mous,_block,_sbox){   //鼠标滑过_mous，盒子_block出现；
										//鼠标离开_mous，盒子_block消失；	
	_mous.onmouseover=function(){
		_sbox.style.borderBottom="2px solid #fff";
		_block.style.display="block";
	}
	_mous.onmouseout=function(){
		_sbox.style.borderBottom="1px solid #efefef";
		_block.style.display="none";
	}
}




function titleMian(){
	/*head_top_left部分*/
	var _li=document.getElementById("idd");
	var _span=_li.getElementsByTagName("span")[0];
	var _div=document.getElementById("id");
	var _b=_li.getElementsByTagName("b")[0];
	mousBlock(_li,_span,_b,_div);
	mousDis(_li,_span,_b,_div);
	
	
	var _img=_div.getElementsByTagName("img")[0];
	dis(_img,_div);
	
	/*head_top_right部分*/
	var _menu=document.getElementById("menu");
	var _mspan=_menu.getElementsByTagName("span")[0];
	var _menus=document.getElementById("menus");
	var _mb=_menu.getElementsByTagName("b")[0];
	mousBlock(_menu,_mspan,_mb,_menus);
	mousDis(_menu,_mspan,_mb,_menus);
	
	var _moves=document.getElementById("moves");
	var _move=document.getElementById("move");
	var _ob=_move.getElementsByTagName("b")[0];
	mousBlockb(_move,_ob,_moves);
	mousDisb(_move,_ob,_moves);
	
	var _menu1=document.getElementById("menu1");
	var _mspan1=_menu1.getElementsByTagName("span")[0];
	var _menus1=document.getElementById("menus1");
	var _mb1=_menu1.getElementsByTagName("b")[0];
	mousBlock(_menu1,_mspan1,_mb1,_menus1);
	mousDis(_menu1,_mspan1,_mb1,_menus1);
	
	var _menu2=document.getElementById("menu2");
	var _mspan2=_menu2.getElementsByTagName("span")[0];
	var _menus2=document.getElementById("menus2");
	var _mb2=_menu2.getElementsByTagName("b")[0];
	mousBlock(_menu2,_mspan2,_mb2,_menus2);
	mousDis(_menu2,_mspan2,_mb2,_menus2);
	
	/*head_middle部分*/	
	  /*head_middle_left部分*/	
	  
	  
	  
	   /*head_middle_right部分*/	
	mousshopping($(".head_middle_right")[0] ,$(".shopingcars")[0],$(".shopingcar span")[0] );



}

