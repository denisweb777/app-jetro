$(document).ready(function () {
	//изменение цвета ссылки при наведении
	$(".greetingText").hover(
		function () {
			$(this).css({
				background: "rgba(0, 110, 74, 0.8)",
				transition: "background .5s ease .5s",
			})
		},
		function () {
			$(this).css({
				background: "rgba(232, 102, 60, .8)",
				transition: "background .5s ease .3s",
			})
		});
});