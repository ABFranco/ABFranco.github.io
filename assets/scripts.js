$(document).ready(function() {
  let welcomeLeft = document.getElementById("welcome-left");
  let aboutLeft = document.getElementById("about-left");
  let skillsLeft = document.getElementById("skills-left");
  let projectsLeft = document.getElementById("projects-left");
  let contactLeft = document.getElementById("contact-left");
  leftChoose();

  window.addEventListener("scroll", leftChoose);

  function leftChoose() {
    var scrollTop = $(window).scrollTop() + window.innerHeight / 3;
    var height = window.innerHeight;

    console.log(scrollTop);
    console.log(height);

    let leftElements = document.getElementsByClassName("left-show");
    for (var i in leftElements) {
      leftElements[i].className = "left-hide";
    }
    if (scrollTop <= height * 1) {
      welcomeLeft.className = "left-show";
    } else if (scrollTop > height * 1 && scrollTop <= height * 2) {
      aboutLeft.className = "left-show";
    } else if (scrollTop > height * 2 && scrollTop <= height * 3) {
      skillsLeft.className = "left-show";
    } else if (scrollTop > height * 3 && scrollTop <= height * 4) {
      projectsLeft.className = "left-show";
    } else if (scrollTop > height * 4) {
      contactLeft.className = "left-show";
    }
  }

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
          500
        );
    }
  });
});
