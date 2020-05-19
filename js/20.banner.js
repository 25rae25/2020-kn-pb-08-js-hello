/* 초기화 */
var now = 0;
$(".bt-prev").hide();

/* 이벤트 */
$(".bt-prev").click(onPrev);
$(".bt-next").click(onNext);

/* 이벤트 콜백 */
function onPrev() {
	if(now > 0) {
		now--;
		ani();
	}
}
function onNext () {
	if(now < 3) {
		now++;
		ani();
	}
}

function ani() {
	$(".ban-wrap").stop().animate({"left": (-now * 100) + "%"}, 400, function(){
		$(".bt-prev").show();
		$(".bt-next").show();
		if(now == 0) $(".bt-prev").hide(); 
		if(now == 3) $(".bt-next").hide(); 
	});
}


/* function onPrev() {
	if(now > 0) {
		now--;  // now = now -1;
		$(".ban-wrap").stop().animate({"left": (-now * 100) + "%"}, 300, function(){
			$(".ban-wrap").show();
			now == 0 ? $(".bt-prev").hide() : $(".bt-prev").show(); 
		});
	}
}

function onNext() {
	if(now < 3) {
		now++;
		$(".ban-wrap").stop().animate({"left": (-now * 100) + "%"}, 300, function(){
			$(".bt-prev").show();
			now == 3 ? $(".bt-next").hide() : $(".bt-next").show()
		});
	}
} */

// 삼항조건문
// 조건? 참일떄 : 거짓일떄
/*
else $(".bt-prev").show();
if(now == 0) $(".bt-prev").hide();
*/