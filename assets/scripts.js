$(document).ready(function() {
  let welcomeLeft = document.getElementById("welcome-left");
  let aboutLeft = document.getElementById("about-left");
  let skillsLeft = document.getElementById("skills-left");
  let projectsLeft = document.getElementById("projects-left");
  let contactLeft = document.getElementById("contact-left");
  leftChoose();

  window.addEventListener("scroll", leftChoose, {passive: false});

  // left section text change
  

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

  // experience section buttons hover
  $(".experience-button").mouseover(function() {
    $(".button-on-experience").removeClass("button-on-experience");
    $(this).addClass("button-on-experience");

    $(".experience-display")
      .stop()
      .fadeOut(250);
    $(".experience-display").removeClass("experience-display");

    if (
      $(this).is($("#button-ia")) &&
      !$("#experience-ia").hasClass("experience-display")
    ) {
      $("#experience-ia").addClass("experience-display");
      $("#experience-ia")
        .stop()
        .fadeIn(250);
    } else if (
      $(this).is($("#button-citris")) &&
      !$("#experience-citris").hasClass("experience-display")
    ) {
      $("#experience-citris").addClass("experience-display");
      $("#experience-citris")
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
      !$("#project-5").hasClass("project-display")
    ) {
      $("#project-5").addClass("project-display");
      $("#project-5")
        .stop()
        .fadeIn(250);
    } else if (
      $(this).is($("#button-proj1")) &&
      !$("#project-1").hasClass("project-display")
    ) {
      $("#project-1").addClass("project-display");
      $("#project-1")
        .stop()
        .fadeIn(250);
    } else if (
      $(this).is($("#button-proj2")) &&
      !$("#project-2").hasClass("project-display")
    ) {
      $("#project-2").addClass("project-display");
      $("#project-2")
        .stop()
        .fadeIn(250);
    } else if (
      $(this).is($("#button-proj3")) &&
      !$("#project-3").hasClass("project-display")
    ) {
      $("#project-3").addClass("project-display");
      $("#project-3")
        .stop()
        .fadeIn(250);
    } else if (
      $(this).is($("#button-proj4")) &&
      !$("#project-4").hasClass("project-display")
    ) {
      $("#project-4").addClass("project-display");
      $("#project-4")
        .stop()
        .fadeIn(250);
    }
  });

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
    } else {
      setTimeout(overwriteScroll, 0);
      return false;
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
    setTimeout(overwriteScroll, 1000);
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

  /* scrolling transitions with ScrollReveal */
  
  // word_cycle = () => {
  //   anim1.play();
  //   setTimeout(() => {
  //     anim2.play();
  //     }, 1500);

  //   setTimeout(() => {
  //     anim3.play();
  //   }, 3000);
  // };

  

  ScrollReveal({ reset: true});
  // ScrollReveal().reveal("#top-right", {afterReveal: word_cycle})
  ScrollReveal().reveal("#logo", {delay: 200, duration: 1000, scale: 0.5})
  ScrollReveal().reveal("#top-name", {delay: 1000, duration: 750, scale: 1, distance: '50px', origin: 'top', easing: 'ease-in-out'});

  function leftChoose() {
    /*
    When the user scrolls, determine what section to display.

    */
    var height = window.innerHeight;

    if ($(window).scrollTop() < height * 1) {
      $(".left").css("position", "relative");
      $(".left-section").css("position", "static");
      $(".right").css("left", "0");      
    } else {
      $(".left").css("position", "fixed");
      $(".left").css("top", "0");
      $(".left").css("left", "0");
      $(".left-section").css("position", "fixed");
      $(".right").css("left", "33vw");
      // anim1.restart();
      // anim2.restart();
      // anim3.restart();
      // anim1.pause();
      // anim2.pause();
      // anim3.pause();
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
      !$("#experience-left").hasClass("left-show")
    ) {
      $(".left-show")
        .stop()
        .fadeOut(150);
      $(".left-show").removeClass("left-show");
      $("#experience-left").addClass("left-show");
      $("#experience-left")
        .stop()
        .fadeIn(150);
      $("#experience-left").css("display", "flex");
    } else if (
      scrollTop > height * 4 &&
      scrollTop <= height * 5 &&
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
      scrollTop > height * 5 &&
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

  


});
