<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My name is Antonio Franco</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css">

	<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

  </head>


  <body data-spy="scroll" data-target=".navbar" data-offset="50">
  	<div id="menu">
	    <nav class="navbar navbar-inverse navbar-static-top" id="stickynav">
			<div>
				<div class="navbar-header">

					<!-- Navbar will collapse into a single button-->
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span class="sr-only">Toggle navigation</span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
			      	</button>

	      			<a class="navbar-brand" href="#home">Antonio Franco</a>

				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav navbar-right">
						<li><a href="#about">About me</a></li>
						<!--
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My apps<span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href="#">none</a></li>
								<li><a href="#">lol</a></li>
								<li><a href="#"></a></li>
							</ul>
						</li>
						-->
						<li><a href="#contact">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</div>

	<div class="jumbotron" id="home">
		<div>
			<h1>Hello. </h1>

			<p>My name is Antonio Franco. <br> I'm a third year in UC Berkeley, studying in the university's EECS program. I currently have interest in a future career in software. </p>

			<p class="buttons">
				<a class="btn btn-primary btn-lg" href="resume.pdf" target="_blank" role="button"><span>Resume</span></a>
				<a class="btn btn-primary btn-lg" href="https://github.com/ABFranco" target="_blank" role="button"><span>GitHub</span></a>
			</p>
		</div>
	</div>

	<!-- picture section -->
	<div class='self_pic'>
		<div class="picture_row">
			<img id="head_pic" src="pictures/self_pic.jpg" width="250px" />
		</div>

		<div class = "picture_text">
			<p>Here is a picture of me as I sit in this nice area in Berkeley.</p>
			</br>
			<p>I was eating tacos, you can't see them here.</p>
		</div>

		<div style="clear:both"></div>
	</div>


	<!-- about me -->

    <section id="about">
    	<div class="container">
    	<h2 class="section_title">About me</h2>
			<div class="row">
				<div class="col-md-3">
					<span class="glyphicon glyphicon-education glyphicon-large" aria-hidden="true"></span>
					<div id="divhide" class="divhide hide">
						<h3>Education</h3>
						<p id="education">I currently study towards a B.S. in Electrical Engineering and Computer Science (EECS) in UC Berkeley. My main focus is Computer Science and software.</p>
					</div>
				</div>
				<div class="col-md-3">
					<span class="glyphicon glyphicon-cutlery glyphicon-large" aria-hidden="true"></span>
					<div id="divhide" class="divhide hide">
						<h3>Cooking</h3>
						<p id="cooking">Currently, I have interest in cooking, which I do almost daily. I hope to find the healthiest and easy-to-cook meals to meal prep with in order to satisfy my busy schedule and gym goals.</p>
					</div>
				</div>
				<div class="col-md-3">
					<span class="glyphicon glyphicon-sunglasses glyphicon-large" aria-hidden="true"></span>
					<div id="divhide" class="divhide hide">
						<h3>Style</h3>
						<p>In the process in learning what men's style means. I try my best to have good style via H&amp;M.</p>
					</div>
				</div>
				<div class="col-md-3">
					<span class="glyphicon glyphicon-music glyphicon-large" aria-hidden="true"></span>
					<div id="divhide" class= "divhide hide">
						<h3>Music</h3>
						<p>As a hobby, I like to play saxophone. I play alto, and mainly have interest in jazz. </p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!--contact-->

	<div id="contact">
		<form role="form" method="post" action="index.php">
		  <h2 class="text-center">Contact me!</h2>
		  <div id="border" class="row test">
		    <div id="contact_parent" class="col-md-4">
		      <p id="messageMe">I am available to contact via <br> email or by filling out this form:</p>
		      <p><span class="glyphicon glyphicon-envelope glyphicon-large"></span></p>
		      <h3>Email: abfranco@berkeley.edu</h3>
		    </div>

		    <div id="contact_parent" class="col-md-8">
		      <div class="row">
		        <div class="col-sm-6 form-group">
		          <input class="form-control" id="name" name="name" placeholder="Your Name" type="text"
		          value="<?php echo htmlspecialchars($_POST['name']); ?>">
		          <?php echo "<p class='text-danger'>$nameError</p>";?>
		        </div>
		        <div class="col-sm-6 form-group">
		          <input class="form-control" id="email" name="email" placeholder="Your Email" type="email" value="<?php echo htmlspecialchars($_POST['email']); ?>">
		          <?php echo "<p class='text-danger'>$emailError</p>";?>
		        </div>
		      </div>
		      	<div class="col-md-12 form-group">
		          <textarea class="form-control" id="message" name="message" placeholder="Message" rows="5"> <?php echo htmlspecialchars($_POST['message']);?></textarea>
			      <?php echo "<p class='text-danger'>$messageError</p>";?>
		        </div>
			      
		      <div class="row">
		        <div class="col-md-12 form-group">
		          <input class="btn pull-right" id="submit" name="submit" type="submit" value="Send">
		        </div>
		        </div>
		      <div class="row">
		        <div class="col-md-10 col-sm-offset-2 form-group">
		          <?php echo $result; ?>
		        </div>
		        </div>
		      </div>
		    </div>
		</form>
	</div>

	<!-- footer -->

	<footer class="container-fluid text-center">
	  <a href="#home">
	    <span class="glyphicon glyphicon-chevron-up"></span>
	    <p id="small">To Top</p>
	  </a>
	  <p>© Copyright 2017 abfranco.github.io. All rights reserved. <br> Designed with Bootstrap and jQuery.</p> 
	</footer>

	


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


    <script src="https://code.jquery.com/jquery-latest.js"></script>

    <script type="text/javascript">
    $(document).ready(function() {

    	$(".glyphicon").mouseenter(function() {
    		//$(this).hide();
    	});

    	// Add smooth scrolling to all links in navbar + footer link
		$(".navbar a, footer a[href='#home']").on('click', function(event) {


		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

		    // Store hash
		    var hash = this.hash;

		    // Using jQuery's animate() method to add smooth page scroll
		    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
		    $('html, body').animate({
		      scrollTop: $(hash).offset().top
		    }, 900, function(){

		      // Add hash (#) to URL when done scrolling (default click behavior)
		      window.location.hash = hash;
		      });
		    } // End if
		  });

		$(document).ready(function(){
		  //Take your div into one js variable
		  $(".divhide").each(function(){
			  var div = $(this);
			  //Take the current position (vertical position from top) of your div in the variable
			  var pos = div.position();
			  //Now when scroll event trigger do following
				$(window).scroll(function () {
				   var windowpos = $(window).scrollTop();
				   //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
				   // I am taking 100px scroll, you can take whatever you need
				   if (windowpos >= (pos.top - 125)) {
				     div.addClass("show");
				   }
				   //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again 
				   else {
				     div.removeClass("show");
				   }
				   //Note: If you want the content should be shown always once you scroll and do not want to hide it again when go to top agian, no need to write the else part
			
		 		});
		 	});
		});

		/*
		$(window).scroll(function() {
		  $(".slideanim").each(function(){
		    var pos = $(this).offset().top;

		    var winTop = $(window).scrollTop();
		    if (pos < winTop + 600) {
		      $(this).addClass("slide");
		    }
		  });
		});
		*/
		/*

		attempt #2 lol
		$(window).scroll(function() {
			const scrollTop = $(window).scrollTop();
			
	      	$(".hide").each(function(){
	      		var pos1 = $(this).offset().top;
	      		console.log("I have class hide");
	      		//console.log("info");
	      		//console.log(pos);
	      		//console.log(scrollTop + 550);
	      		if ((pos1 < scrollTop + 550)) {
	      			console.log("hide if");
			    	$(this).addClass("show");
				    $(this).removeClass("hide1");
				    //$(this).slideDown();
				} else if ((pos1 > scrollTop + 550)) {
					console.log("hide else");
				    $(this).addClass("hide1");
				    $(this).removeClass("show");
				    //$(this).slideDown();
				}
			    
			});

	      	/*
		    $(".show").each(function(){
	      		var pos2 = $(this).offset().top;
	      		console.log("I have class show");
	      		if ((pos2 < scrollTop + 550)) {
			    	console.log("show if");
				} else {
					console.log("show else");
					$(this).addClass("hide");
				    $(this).removeClass("show");
				    $(this).slideUp();
				}
			    
			});
			
		});
		*/

    });

    

    </script>

    <?php
   		if (isset($_POST["submit"])) {
	    	$name = $_POST['name'];
	    	$email = $_POST['email'];
	    	$message = $_POST['message'];

	    	$from = 'Contact Form';
	    	$to = 'abfranco@berkeley.edu';
	    	$subject = 'Message from website';
	    	$body = "From: $name\n E-Mail: $email\n Message:\n $message";

	    	// form validation
	    	if(!($_POST['name'])) {
	    		$nameError = 'Enter your name';
	    	}
	    	if(!($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
				$emailError = 'Enter a valid email address';
	    	}
	    	if(!($_POST['message']) {
	    		$messageError = 'Enter your message';
	    	}

	    	if(!$nameError && !$emailError && !$messageError) {
	    		if(mail ($to, $subject, $body, $from)) {
	    			$result = '<div class="alert alert-success">Message sent!</div>';

	    		} else {
	    			$result = '<div class="alert alert-danger">An error has occurred, please try again.</div>';
	    		}
	    	}
	    }
    ?>

  </body>

</html>
