/************* 사전지식 *************/
var a = 10;
var b = a;
b = 20;
console.log(a, b);

var arr = [1, 2, 3, 4, 5];
var arr2 = arr;
arr2.push(6); // arr2 [1, 2, 3, 4, 5, 6], arr [1, 2, 3, 4, 5, 6]
console.log(arr, arr2);



// $(자바스크립트 객체) -> jQuery객체
// $(제이쿼리)[0] 			-> Javascript객체
/*
console.log(document.getElementById("bt"));
console.log($("#bt"));

console.log(	$(document.getElementById("bt"))	);
console.log(	$("#bt")	);

document.getElementById("bt").addEventListener("click", function(){
	console.log("hi~");
});
$("#bt").click(function(){
	console.log("hi~");
});

css("color")
css("color", "red")

console.log(	$(".ban-wrap").prepend($ban[now])	); -> return $(".ban-wrap")
console.log(	$($ban[now]).prependTo($(".ban-wrap"))	); -> return $($ban[now])

html = '<img src="'+$($ban[now]).children("img").attr("src")+'" class="img">';
*/

/************* 초기값 *************/
var now = 0;
var $ban = $(".ban");
var last = $ban.length - 1;
var speed = 500;
var gap = 3000;
var interval;
init();
pagerMaker();

/************* 사용자 지정 *************/
function init() {
	$(".ban-wrap").empty();
	$($ban[now]).appendTo($(".ban-wrap")).removeClass("ban");
}

function pagerMaker() {
	for(var i=0, html; i<=last; i++) {
		if(now == i) html = '<span class="pager fas fa-circle"></span>';
		else html = '<span class="pager far fa-circle"></span>';
		$(".pagers").append(html);
	}
	$(".pager").click(onPagerClick);
}

function ani() {
	$(".pager").removeClass("fas").addClass("far");
	$(".pager").eq(now).removeClass("far").addClass("fas");
	$($ban[now]).prependTo($(".ban-wrap")).css("opacity", 0).addClass("ban").animate({"opacity": 1}, speed, init);
}

/************* 이벤트 등록 *************/
$(".bt-prev").click(onPrev);
$(".bt-next").click(onNext);
$(".wrapper").hover(onHover, onLeave);
interval = setInterval(onNext, gap);

/************* 이벤트 콜백 *************/
function onPagerClick() {
	now = $(this).index();
	$(".pager").eq(now).removeClass("far").addClass("fas");
	ani();
}


function onHover() {
	clearInterval(interval);
}

function onLeave() {
	interval = setInterval(onNext, gap);
}

function onPrev() {
	now = (now == 0) ? last : now - 1;
	ani();
}

function onNext() {
	now = (now == last) ? 0 : now + 1;
	ani();
}

