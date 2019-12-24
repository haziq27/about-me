$(document).ready(function() {
  $(".navbar ul li a").click(function() {
    $(".navbar ul li a").removeClass("active");
    $(this).addClass("active");
  });

  $(".home").click(function() {
    $(".hide").fadeOut();
    $(".home-section").fadeIn();
  });
  $(".aboutme").click(function() {
    $(".hide").fadeOut();
    $(".aboutme-section").fadeIn();
  });
  $(".mywork").click(function() {
    $(".hide").fadeOut();
    $(".mywork-section").fadeIn();
  });
  $(".contactme").click(function() {
    $(".hide").fadeOut();
    $(".contactme-section").fadeIn();
  });
});
