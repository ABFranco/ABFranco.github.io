$(document).ready(function() {
  let welcomeLeft = document.getElementById("welcome-left");
  let aboutLeft = document.getElementById("about-left");
  let skillsLeft = document.getElementById("skills-left");
  let projectsLeft = document.getElementById("projects-left");
  let contactLeft = document.getElementById("contact-left");
  leftChoose();

  window.addEventListener("scroll", leftChoose, {passive: false});

  // left section text change
  function leftChoose() {
    
    var height = window.innerHeight;

    if ($(window).scrollTop() <= height * 1) {
      $(".left").css("position", "relative");
      $(".left-section").css("position", "static");
      $(".right").css("left", "0");
    } else {
      $(".left").css("position", "fixed");
      $(".left").css("top", "0");
      $(".left").css("left", "0");
      $(".left-section").css("position", "fixed");
      $(".right").css("left", "33vw");
    }
    var scrollTop = $(window).scrollTop() + window.innerHeight / 3;
    
    if (
      scrollTop > height * 0 &&
      scrollTop <= height * 2 &&
      !$("#about-left").hasClass("left-show")
    ) {
      $(".left-show")
        .stop()
        .fadeOut(150);
      $(".left-show").removeClass("left-show");
      $("#about-left").addClass("left-show");
      $("#about-left")
        .stop()
        .fadeIn(150);
    } else if (
      scrollTop > height * 2 &&
      scrollTop <= height * 3 &&
      !$("#skills-left").hasClass("left-show")
    ) {
      $(".left-show")
        .stop()
        .fadeOut(150);
      $(".left-show").removeClass("left-show");
      $("#skills-left").addClass("left-show");
      $("#skills-left")
        .stop()
        .fadeIn(150);
      $("#skills-left").css("display", "flex");
    } else if (
      scrollTop > height * 3 &&
      scrollTop <= height * 4 &&
      !$("#projects-left").hasClass("left-show")
    ) {
      $(".left-show")
        .stop()
        .fadeOut(150);
      $(".left-show").removeClass("left-show");
      $("#projects-left").addClass("left-show");
      $("#projects-left")
        .stop()
        .fadeIn(150);
      $("#projects-left").css("display", "flex");
    } else if (
      scrollTop > height * 4 &&
      !$("#contact-left").hasClass("left-show")
    ) {
      $(".left-show")
        .stop()
        .fadeOut(150);
      $(".left-show").removeClass("left-show");
      $("#contact-left").addClass("left-show");
      $("#contact-left")
        .stop()
        .fadeIn(150);
    }
  }

  // skills section buttons hover
  $(".skills-button").mouseover(function() {
    $(".button-on").removeClass("button-on");
    $(this).addClass("button-on");

    $(".skill-display")
      .stop()
      .fadeOut(250);
    $(".skill-display").removeClass("skill-display");
    if (
      $(this).is($("#button-prog")) &&
      !$("#section-prog").hasClass("skill-display")
    ) {
      $("#section-prog").addClass("skill-display");
      $("#section-prog")
        .stop()
        .fadeIn(250);
    } else if (
      $(this).is($("#button-web")) &&
      !$("#section-web").hasClass("skill-display")
    ) {
      $("#section-web").addClass("skill-display");
      $("#section-web")
        .stop()
        .fadeIn(250);
    } else if (
      $(this).is($("#button-design")) &&
      !$("#section-design").hasClass("skill-display")
    ) {
      $("#section-design").addClass("skill-display");
      $("#section-design")
        .stop()
        .fadeIn(250);
    } else if (
      $(this).is($("#button-other")) &&
      !$("#section-other").hasClass("skill-display")
    ) {
      $("#section-other").addClass("skill-display");
      $("#section-other")
        .stop()
        .fadeIn(250);
    }
  });

  // projects section buttons hover
  $(".projects-button").mouseover(function() {
    $(".button-on-projects").removeClass("button-on-projects");
    $(this).addClass("button-on-projects");

    $(".project-display")
      .stop()
      .fadeOut(250);
    $(".project-display").removeClass("project-display");

    if (
      $(this).is($("#button-proj5")) &&
      !$("#project-fifth").hasClass("project-display")
    ) {
      $("#project-fifth").addClass("project-display");
      $("#project-fifth")
        .stop()
        .fadeIn(250);
    } else if (
      $(this).is($("#button-proj1")) &&
      !$("#project-first").hasClass("project-display")
    ) {
      $("#project-first").addClass("project-display");
      $("#project-first")
        .stop()
        .fadeIn(250);
    } else if (
      $(this).is($("#button-proj2")) &&
      !$("#project-second").hasClass("project-display")
    ) {
      $("#project-second").addClass("project-display");
      $("#project-second")
        .stop()
        .fadeIn(250);
    } else if (
      $(this).is($("#button-proj3")) &&
      !$("#project-third").hasClass("project-display")
    ) {
      $("#project-third").addClass("project-display");
      $("#project-third")
        .stop()
        .fadeIn(250);
    } else if (
      $(this).is($("#button-proj4")) &&
      !$("#project-fourth").hasClass("project-display")
    ) {
      $("#project-fourth").addClass("project-display");
      $("#project-fourth")
        .stop()
        .fadeIn(250);
    }
  });

  // disable all sources of scrolling (credits to gblazex on Stack Overflow)
  var keys = {37: 1, 38: 1, 39: 1, 40: 1};
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
  }

  function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
          preventDefault(e);
          return false;
      }
  }

  function overwriteScroll() {
    // window.onwheel = sectionScroll; // modern standard
    document.ontouchmove  = sectionScroll; // mobile
    document.addEventListener ("wheel", sectionScroll, {passive: false});
    document.onkeydown  = sectionScroll;
  }

  function disableScroll() {
    document.ontouchmove  = preventDefault; // mobile
    document.removeEventListener ("wheel", sectionScroll, {passive: false});
    document.onkeydown  = preventDefaultForScrollKeys;
  }

 
  
  // smooth scroll effect
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

  document.addEventListener ("wheel", preventDefault, {passive: false});
  overwriteScroll();

  // scroll effect credits to Vaibs_Cool on stack overflow
  
  var divs = $(".right-section");
  var dir = "up"; // wheel scroll direction
  var div = 0; // current div

  function sectionScroll(e) {
    preventDefault(e);

    // disable all scroll methods (until animation ends)
    disableScroll();
  
    if (e.detail > 0 || e.wheelDelta < 0 || e.key =="ArrowDown" || e.key =="ArrowRight" || e.key == " ") {
      dir = "down";
    } else if (e.wheelDelta > 0 || e.key =="ArrowUp" || e.key =="ArrowLeft") {
      dir = "up";
    }

    // find currently visible div :
    div = -2;
    divs.each(function(i) {
      if (div < 0 && $(this).offset().top >= $(window).scrollTop()) {
        div = i;
      }
    });
    if (dir == "up" && div > 0) {
      div--;
    }
    if (dir == "down" && div < divs.length) {
      div++;
    }
    if (div == divs.length) {
      div = 4;
    }

    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: divs.eq(div).offset().top
        },
        500
      );
      

    
    // delay before enabling scroll wheel
    setTimeout(overwriteScroll, 750);
    return false;
  }


  /* parallax effect with rellax.js */
  var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });

});
