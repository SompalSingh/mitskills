// Global Js Start here
$(document).ready(function() {
	$(document).on("mousedown", ".btn-ripple" , function(e){     
		var target = e.target;
		var rect = target.getBoundingClientRect();
		var ripple = target.querySelector('.ripple');
		$(ripple).remove();
		ripple = document.createElement('span');
		ripple.className = 'ripple';
		ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
		target.appendChild(ripple);
		var top = e.pageY - rect.top - ripple.offsetHeight / 2 -  document.body.scrollTop;
		var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
		ripple.style.top = top + 'px';
		ripple.style.left = left + 'px';
		return false;
	});
});

//You can add your JS below here.............


// $('.app-features').find('li').click(function(){
// 	var width = $(this).width();
// 	console.log(width)
// 	$('.app-features > .scroll-bottom').css('left', width + 'px');  
//   });
  
$('.app-features li a').on('click', function(){
    $('.app-features li a.current').removeClass('current');
    $(this).addClass('current');
});

// setTimeout(function() { $(".final-announcement").slideUp(500); }, 5000)
$('.btclosed').click(function(){
	$(".final-announcement").slideUp(500);
});
