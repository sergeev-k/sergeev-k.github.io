$(document).ready(function(){$(".menu").click(function(){$(".bar").css("left","0")}),$(".bar").click(function(){$(".bar").css("left","100%")}),$(".slowly").on("click",function(o){o.preventDefault();var t=$(this).attr("href"),a=$(t).offset().top;$("body, html").animate({scrollTop:a},600)}),$("#sliders").slick($(window).width()>928?{dots:!0,arrows:!0,autoplay:!0}:{dots:!0,arrows:!1,autoplay:!0}),$("#slaids").slick({dots:!0,arrows:!1,autoplay:!0}),$("a.bla-1").YouTubePopUp()});

$('[type="submit"]').click(function() {
  $.post( 
  
  "form.php", //url
  
  { 
    email: $('[name="email"]').val(),
    name: $('[name="name"]').val(),
    subject: $('[name="subject"]').val(),
    message: $('[name="text"]').val()
  }, 
  
  function( data ) { 
    $( ".result" ).html(data);
  }
  
  );
});