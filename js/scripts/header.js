 $(document).ready(function() {
		//изменение цвета ссылки при наведении
		$(".navMain__link").hover(
			function(){
				$(this).css({
					color:"#e8603c",
					transition:"color .5s ease .2s, border .5s ease .5s, padding .3s ease .3s",
					border:"1px solid #e8603c",
					padding:"3px",
				})
			},
			function(){
				$(this).css({
					color:"#1f7139",
					transition:"color .1s ease .1s, border .1s ease .1s, ",
					border:"none",
					padding:"0",
				})
			});  
  });

	

	

