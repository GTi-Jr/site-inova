/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
[ COMMON SCRIPTS ]
AUTHOR :VIJAYAN PP
PROJECT :NIM
VERSION : 1.1
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

(function($) {
	"use strict";

	$(window).load(function(){
		
	App.loader();
	});

	var App={
            init:function()
            {
              App.typing();
              App.stats();
              App.menuAnimation();
              App.navigate();
              App.imagepopup();
             	
            },
        loader:function()
	{
                         
	 $("div.preloader").fadeOut("slow");                         
                         
	},
        typing:function()
        {
    $(".main-element").each(function(){
    var $this = $(this);
    $this.typed({
    strings: $this.attr('data-elements').split(','),
    typeSpeed: 100, // typing speed
    backDelay: 3000 // pause before backspacing
    });
});
        },
        
       
   
    stats:function()
   {
        $('.our-stats-box').each(function () {
        $('.our-stat-info').fappear(function (direction) {
            $('.stats').countTo();
        }, {offset: "100px"});
    });
   },
   menuAnimation:function()
   {
       $(window).scroll(function()
       {
       var top_v=$(window).scrollTop();
       var themecolor="#B21936";
      if(top_v>=30)
      {
        
          $(".nim-menu").css({height:"90px",padding:"15px",background:"#fff",boxShadow:"2px 2px 3px 3px rgba(0,0,0,0.3"});
          $(".nim-menu ul ul").css({background:"#fff"});
          $(".nim-menu.navbar-default .navbar-nav > li > a,a.navbar-brand").css("color","#000");
          $(".nim-menu li i").css("color","#000");
           $(".nim-menu.navbar-default .navbar-nav > li > a").hover(function(){$(this).css("color",themecolor)},function(){$(this).css("color","#000")})
       }
      else
      {
          $(".nim-menu").css({height:"90px",padding:"15px",background:"#000",boxShadow:"2px 2px 3px 3px rgba(0,0,0,0.3"});
          $(".nim-menu ul ul").css({background:"#000"});
          $("a.navbar-brand").css("color","#fff"); 
          $(".nim-menu li i").css("color","#fff");         
          $(".nim-menu.navbar-default .navbar-nav > li > a").css("color","#fafafa");
          $(".nim-menu.navbar-default .navbar-nav > li > a:hover").css("color",themecolor);
          $(".nim-menu.navbar-default .navbar-nav > li > a").hover(function(){$(this).css("color",themecolor)},function(){$(this).css("color","#fafafa")})
      }
       }
       )
   },
    navigate:function()
    {
        $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    },
    
    imagepopup:function()
    {
        $('.show-image').magnificPopup({type: 'image'});
    },
   
   
			
        };
        App.init();

})(jQuery);



/*+++++++++++++++++++++++++COMMON FUNCTIONS++++++++++++++++++++++++++++*/
