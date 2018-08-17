var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
});
if($(window).width() < 420){
	document.getElementById('h-c-img').style.maxWidth="120px";
	document.getElementById('h-c-img').style.marginLeft="-15px";
}
if($(window).width() < 321){
	document.getElementById('h-c-img').style.maxWidth="110px";
	document.getElementById('h-c-img').style.marginLeft="-15px";
}
if(iOS){
	$('html').on('click', function(){
		var vid = document.getElementById("video-bg"); 
		if(!vid.playing){ // checks if element is playing right now
		    vid.play();
		}
	});
}