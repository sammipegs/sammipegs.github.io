$( "#circle" ).hover(
  function() {
		$( this ).delay(500).queue(function (n) {
			$(this).text( "It's Sammi's Birthday!" ); n();	
		})
  }, function() {
//    $( this ).text( "It's Sammi's Birthday!" );
  }
);



$('button').click(function () {
	$('.dog-picture').css('display', 'block');
})