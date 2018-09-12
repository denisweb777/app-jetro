$(function () {

	function fly(){
		$('#ballYellow').animate( { left:'6%',    top :'100px' }, 30000, 'linear')       
						        .animate( { left:'540px', top :'1000px'}, 20000, 'linear')
					        	.animate( { left:'800px', top :'1700px'}, 10000, 'linear')
										.animate( { left:'0px',   top :'2000px'}, 20000, 'linear', fly);

		$('#ballGreen') .animate( { right:'6%',    top :'100px' }, 40000, 'linear')       
						        .animate( { right:'540px', top :'1000px'}, 20000, 'linear')
					        	.animate( { right:'800px', top :'1700px'}, 10000, 'linear')
										.animate( { right:'0px',   top :'2000px'}, 20000, 'linear', fly);
	}               
	fly();
});