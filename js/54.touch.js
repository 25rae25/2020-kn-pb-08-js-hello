var el = $(".wrapper")[0];

el.addEventListener("touchstart", handleStart, false);
el.addEventListener("touchend", handleEnd, false);
el.addEventListener("touchcancel", handleCancel, false);
el.addEventListener("touchmove", handleMove, false);

function handleStart() {
	console.log(evnet.touches[0].pageX);	
}

function handleEnd() {
	console.log(evnet.touches[0].pageX);	
}

function handleCancel() {
	console.log(evnet.touches[0].pageX);	
}

function handleMove() {
	console.log(evnet);	
}