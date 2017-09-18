 
        // select screen size
        
		$(".screen-height").height($(window).height());

		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		} else {
			$('#home').parallax('50%', 0.1);
		}

		
		
		$('.header').sticky({
			topSpacing: 0
		});

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})

        $(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});
        
        	$('a[href*=#]').bind("click", function(e){
           
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

            
        // havbar 
            
        $(document).scroll(function(){
            var homePageHeight = $('.screen-height').height();

            
            if ($(this).scrollTop() > homePageHeight)
            {
                $(".navbar").addClass('navbar-fixed-top');
                $('#whatIdoText').addClass('animated bounceIn');
                $('#webDesign').addClass('animated bounceInLeft');
                $('#webPrograming').addClass(' animated bounceInRight');
                $('#mySkills').addClass('animated slideInDown');
            }
            else 
                $(".navbar").removeClass('navbar-fixed-top');
            if ($(this).scrollTop() > $("#whatIdoText").offset().top)                
                $("#languages").addClass("animated fadeInLeft");
            if ($(this).scrollTop() > $("#webDesign").offset().top)                
                $("#frameworks").addClass("animated fadeInRight");
            if ($(this).scrollTop() >= $("#mySkills").offset().top)                
                $("#also").addClass("animated fadeInLeft");
            if ($(this).scrollTop() >= $("#also").offset().top){
                $("#contactMessage").addClass("animated slideInDown");
                $("#contacts").addClass('animated slideInUp');
            }
        
        });


$('#buttonForm').click(function(){
    console.log(document.getElementById('name').value);
    $.ajax({
        url : "php/sendEmail.php",
        dataType : "json",
        type : "post",
        data : {
            name : document.getElementById('name').value,
            mail : document.getElementById('email').value,
            text : document.getElementById('text').value
        },
        success : function(result){
            alert(result);
        }
    });
    
});