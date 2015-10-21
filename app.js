$(document).ready(function() {
	var clickCounter = 0;
	$('#container').on('click', '.mainbutton', function (){
		clickCounter++;
		$('#clickcounter').empty()
		$('#clickcounter').append('<p>Number of clicks: '+clickCounter+'</p>');
		$('#container').append('<div class="newcontainer alternewcontainer"></div>');
		var $el = $('#container').children().last();
		$el.append('<button class="deleteButton">delete</button>');
		$el.append('<button class="changeButton">change</button>');
	})

	$('#container').on('click', '.deleteButton', function(){
		console.log("test");
		$(this).parent().remove();
	});

	$('#container').on('click', '.changeButton', function(){
		$(this).parent().toggleClass('alternewcontainer');
	});

});