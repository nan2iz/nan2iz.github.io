$(document).ready(function() {
	var images = $('#photos img');
		var output = '<ul id="dots">';
		for (var i = 0; i < images.length; i++) { 
			if (i === 0) { 
				$('#photos img').eq(i).addClass('current 1');
				output += '<li class="selected 1">';
			} else {
				$('#photos img').eq(i).addClass(i);
				output += '<li class="'+[i+1]+'">';
			}
			output += '</li>';
		}
		output += '</ul>';
		$('#photos').after(output);
		$('#next').click(newImg);
		$('#prev').click(newImg);
		$('#dots li').click(selectImg);
		setInterval(function(){moveImg()}, 10000);
	});
function selectImg() {
	$('#dots li.selected').removeClass('selected');
var q = this.className;
q--;
		var oCurPhoto = $('#photos img.current');
		var oNxtPhoto = $('#photos img').eq(q);
$(this).addClass('selected');
		oCurPhoto.removeClass('current').addClass('previous');
		oNxtPhoto.css({opacity: 0.0}).addClass('current').animate({opacity: 1.0}, 1000,
			function(){
				oCurPhoto.removeClass('previous');
			});
	}
function newImg() {
	var oChangePhoto = this.id;
var oCurDot = $('#dots li.selected').removeClass('selected');
		var oCurPhoto = $('#photos img.current');
		if (oChangePhoto == 'next') {
			var oNxtPhoto = oCurPhoto.next();
			var oNxtDot = oCurDot.next();
if (oNxtPhoto.length == 0) {
				oNxtPhoto = $('#photos img:first');
				oNxtDot = $('#dots li:first');
			}

		} else if (oChangePhoto == 'prev') {
var oNxtPhoto = oCurPhoto.prev();
			var oNxtDot = oCurDot.prev();
			if (oNxtPhoto.length == 0) {
				oNxtPhoto = $('#photos img:last');
				oNxtDot = $('#dots li:last');
			}
		};
		oNxtDot.addClass('selected');
oCurPhoto.removeClass('current').addClass('previous');
		oNxtPhoto.css({opacity: 0.0}).addClass('current').animate({opacity: 1.0}, 1000,
			function(){
				oCurPhoto.removeClass('previous');
			});
	}
	function moveImg(){
		var oCurDot = $('#dots li.selected').removeClass('selected');
		var oCurPhoto = $('#photos img.current');
		var oNxtPhoto = oCurPhoto.next();
		var oNxtDot = oCurDot.next();
		if (oNxtPhoto.length == 0) {
			oNxtPhoto = $('#photos img:first');
			oNxtDot = $('#dots li:first');
		}
		oNxtDot.addClass('selected');
		oCurPhoto.removeClass('current').addClass('previous');
		oNxtPhoto.css({opacity: 0.0}).addClass('current').animate({opacity: 1.0}, 1000,
			function(){
				oCurPhoto.removeClass('previous');
			});
	}