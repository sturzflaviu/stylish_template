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

  });