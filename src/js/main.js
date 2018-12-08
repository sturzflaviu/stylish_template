$(document).ready(function() {
    $(".myvideos").on("mouseover", function(event) {
      this.play();
  
    }).on('mouseout', function(event) {
      this.pause();
      $(".myvideos").removeAttr('controls', '');
    });

    $(".myvideos").on("click", function(event) {
    $(event.currentTarget).attr('controls', '');
    });

    $('.scroll-to').click(function(e){        
        var jump = $(this).attr('href');
        var new_position = $(jump).offset();        
        $('html, body').stop().animate({ scrollTop: new_position.top }, 1000);        
        e.preventDefault();        
    });

    $(document).click(function (event) {
      var clickOver = $(event.target);
      var navbarOpen = $(".navbar-collapse").hasClass("show");
      if (navbarOpen === true && !clickOver.hasClass("navbar-toggler")) {
          $("button.navbar-toggler").click();
      }
  });

  });