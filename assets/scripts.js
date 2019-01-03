$(document).ready(function() {
  let welcomeLeft = document.getElementById("welcome-left");
  let aboutLeft = document.getElementById("about-left");
  let skillsLeft = document.getElementById("skills-left");
  let projectsLeft = document.getElementById("projects-left");
  let contactLeft = document.getElementById("contact-left");
  leftChoose();

  window.addEventListener("scroll", leftChoose);

  // left section text change
  function leftChoose() {
    var scrollTop = $(window).scrollTop() + window.innerHeight / 3;
    var height = window.innerHeight;

    if (scrollTop <= height * 1 && !$("#welcome-left").hasClass("left-show")) {
      $(".left-show").fadeOut(150);
      $(".left-show").removeClass("left-show");
      $("#welcome-left").addClass("left-show");
      $("#welcome-left").fadeIn(150);
    } else if (
      scrollTop > height * 1 &&
      scrollTop <= height * 2 &&
      !$("#about-left").hasClass("left-show")
    ) {
      $(".left-show").fadeOut(150);
      $(".left-show").removeClass("left-show");
      $("#about-left").addClass("left-show");
      $("#about-left").fadeIn(150);
    } else if (
      scrollTop > height * 2 &&
      scrollTop <= height * 3 &&
      !$("#skills-left").hasClass("left-show")
    ) {
      $(".left-show").fadeOut(150);
      $(".left-show").removeClass("left-show");
      $("#skills-left").addClass("left-show");
      $("#skills-left").fadeIn(150);
      $("#skills-left").css("display", "flex");
    } else if (
      scrollTop > height * 3 &&
      scrollTop <= height * 4 &&
      !$("#projects-left").hasClass("left-show")
    ) {
      $(".left-show").fadeOut(150);
      $(".left-show").removeClass("left-show");
      $("#projects-left").addClass("left-show");
      $("#projects-left").fadeIn(150);
    } else if (
      scrollTop > height * 4 &&
      !$("#contact-left").hasClass("left-show")
    ) {
      $(".left-show").fadeOut(150);
      $(".left-show").removeClass("left-show");
      $("#contact-left").addClass("left-show");
      $("#contact-left").fadeIn(150);
    }
  }

  // skills section buttons hover
  $(".skills-button").mouseover(function() {
    $(".button-on").removeClass("button-on");
    $(this).addClass("button-on");

    if (
      $(this).is($("#button-prog")) &&
      !$("#section-prog").hasClass("skill-display")
    ) {
      $(".skill-display").fadeOut(250);
      $(".skill-display").removeClass("skill-display");
      $("#section-prog").addClass("skill-display");
      $("#section-prog").fadeIn(250);
    } else if (
      $(this).is($("#button-web")) &&
      !$("#section-web").hasClass("skill-display")
    ) {
      $(".skill-display").fadeOut(250);
      $(".skill-display").removeClass("skill-display");
      $("#section-web").addClass("skill-display");
      $("#section-web").fadeIn(250);
    } else if (
      $(this).is($("#button-design")) &&
      !$("#section-design").hasClass("skill-display")
    ) {
      $(".skill-display").fadeOut(250);
      $(".skill-display").removeClass("skill-display");
      $("#section-design").addClass("skill-display");
      $("#section-design").fadeIn(250);
    } else if (
      $(this).is($("#button-other")) &&
      !$("#section-other").hasClass("skill-display")
    ) {
      $(".skill-display").fadeOut(250);
      $(".skill-display").removeClass("skill-display");
      $("#section-other").addClass("skill-display");
      $("#section-other").fadeIn(250);
    }
  });

  // smooth scroll effct

  $('a[href^="#"]').on("click", function(event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top
          },
          501
        );
    }
  });
});
