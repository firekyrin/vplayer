/////////////////////////////////////
function loader(){
	document.getElementById("vp-pause").style.display="none";
	document.getElementById("vp-mute").style.display="none";	
}

var MyVideo=document.getElementById("video1");


$(document).ready(function(){
	
	$("a.vp-play").click(function(){
		if (MyVideo.paused) 
		{	
		 
		  MyVideo.play(); 
		  $("a.vp-play").hide();
		  $("a.vp-pause").show();
		
		  	
		}
		else
		{ 
		  
		  MyVideo.pause();
		  $("a.vp-play").show();
		  $("a.vp-pause").hide();
		 } 
	});//play click;

	
	$("a.vp-pause").click(function(){
	
		if (MyVideo.paused) 
		{	
		 
		  MyVideo.play(); 
		  $("a.vp-play").hide();
		  $("a.vp-pause").show();
		
		}
		else
		{ 
		  
		  MyVideo.pause();
		  $("a.vp-play").show();
		  $("a.vp-pause").hide();
		} 
	});//pause click
	
	$("a.vp-stop").click(function(){
		
		MyVideo.load();
		$("a.vp-play").show();
		$("a.vp-pause").hide();
	});//stop click
	
	 $("a.vp-mute").click(function(){
	
		if(MyVideo.muted){
			
			$("a.vp-mute").hide();
			$("a.vp-unmute").show();
			MyVideo.muted=false;
			
			document.getElementById("vp-volume-bar-value").style.width=(MyVideo.volume*100)+"px";
				
		}
		else{
			
			$("a.vp-mute").hide();
			$("a.vp-unmute").show();
		 	MyVideo.muted=true;	
		 	}
	 });// click mute
	 
	  $("a.vp-unmute").click(function(){
	
			if(MyVideo.muted){
				
				$("a.vp-mute").show();
				$("a.vp-unmute").hide();
				MyVideo.muted=false;
			}
			else{
				
				$("a.vp-mute").show();
				$("a.vp-unmute").hide();
				MyVideo.muted=true;	
				document.getElementById("vp-volume-bar-value").style.width="0px";
	 		}
	 });// click unmute
	
	$("a.vp-volume-max").click(function(){
	
	
		MyVideo.volume=1;
		document.getElementById("vp-volume-bar-value").style.width="95px";
		MyVideo.muted=false;
		$("a.vp-mute").hide();
		$("a.vp-unmute").show();
	});//click max volume
		
	
});

function mouseMove(ev) 
{ 
	Ev= ev || window.event; 
	var mousePos = mouseCoords(ev); 
	document.getElementById("vp-volume-bar-value").style.width=mousePos.x-110+"px";
	MyVideo.volume=(mousePos.x-110)/100;
	if(MyVideo.muted)
	{
		MyVideo.muted=false;
		$("a.vp-mute").hide();
		$("a.vp-unmute").show();
			
	}


} 
 
function mouseCoords(ev) 
{
	if(ev.pageX || ev.pageY)
	{ 
		return {x:ev.pageX, y:ev.pageY}; 
	} 
	
	return
	{ 
		x:ev.clientX + document.body.scrollLeft - document.body.clientLeft, 
		y:ev.clientY + document.body.scrollTop - document.body.clientTop 
	}; 
} 

document.getElementById('vp-volume-bar').onclick = mouseMove; 
