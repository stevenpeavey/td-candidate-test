(function () {

	$('.message').hover(function(){
		$('.inbox-message-reply').removeClass('disabled').addClass('btn-primary');
	},function(){
		$('.inbox-message-reply').addClass('disabled').removeClass('btn-primary');
	});


	$('.inbox-message-reply').click(function(){
		$('.inbox-message-reply').hide();
		$('.message-send').removeClass('hidden');
	});

	$('.inbox-message-send-reply').click(triggerModalAnimation);

	function triggerModalAnimation() {
    //console.log('yo');
    $('#myModal').addClass('in');
		$(".send-message-progress").animate({
	    width:'100%'
	  }, 2000, function() {
	    // Animation complete.
	    setTimeout(function(){
		    $(".progress, .modal-header").hide();
		    $('.message-send-success').removeClass('hide');
	  	}, 1000);
	  });

	  $('.close-message').click(function(){
	  	location.reload(); 
	  });
	};

})();
