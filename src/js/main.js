$(document).ready(function () {
  $(".myvideos").on("mouseover", function (event) {
    this.play();

  }).on('mouseout', function (event) {
    this.pause();
    $(".myvideos").removeAttr('controls', '');
  });

  $(".myvideos").on("click", function (event) {
    $(event.currentTarget).attr('controls', '');
  });

  $('.scroll-to').click(function (e) {
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

  $(".btn-toggle").click(function () {
    $('.nav-content').toggleClass('show');
    $(".btn-icon").toggleClass('active');
  });

  $(document).click(function (e) {
    if (!$('.nav-content').is(e.target) && $('.nav-content').has(e.target).length === 0 && !$(".btn-icon").is(e.target)) {
      $('.nav-content').removeClass('show');
      $(".btn-icon").removeClass('active');
    } else if ($('.nav-link').is(e.target)) {
      $('.nav-content').removeClass('show');
      $(".btn-icon").removeClass('active');
    }
  });

  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();    
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

});