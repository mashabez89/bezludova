//alert ('Привет мир!')
var btn = document.getElementById('btn');
btn.onclick = function () {
	var text = document.querySelector('.intro');
	text.classList.add('red');
var img = document.querySelector('.dekstop');
img.style.display = 'none';
document.querySelector ('.dream-dream').style.width = '170px'
}


	

$(window).scroll(function() {
	$('.dream-time').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650){
			$(this).addClass("animate__zoomInLeft")
		}
	});

	});

