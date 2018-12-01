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

  });