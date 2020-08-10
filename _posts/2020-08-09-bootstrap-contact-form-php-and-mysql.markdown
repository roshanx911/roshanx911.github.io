---
layout: post
title: "Bootstrap Contact Form with PHP and MySQL"
date: 2020-08-09 10:20:00 -0700
categories: blog
---
Below code examine on how to integrate a popup/modal contact form using Bootstrap and how to insert data into a database using PHP & MySQL. Basic bootstrap integrated html page code cast as below:

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Bootstrap, PHP and MySQL</title>
	<!-- Mobile Specific Meta -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<!-- Stylesheets -->
	<link rel="stylesheet" href="css/bootstrap.css" />
	<link rel="stylesheet" href="css/bootstrap-responsive.css" />
	<link rel="stylesheet" href="css/custom.css" />
</head>
<body>	 
	<!-- Navbar -->
	<div class="navbar navbar-inverse navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container">
				<a href="index.php" class="brand">Bootstrap Contact Form with PHP & MySQL</a>
				<a data-toggle="collapse" data-target=".nav-collapse" class="btn btn-navbar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</a>
				<div class="collapse nav-collapse">			
					<ul class="nav pull-right">
						<li class="active"><a href="index.php">Home</a></li>
						<li><a href="" data-toggle="modal" data-target="#modal-contact-form">Contact</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div> <!-- End Navbar -->
	<!-- Footer -->
	<hr />
	<ul class="inline text-center">
		<li><strong>Follow On:</strong></li>
		<li><a href="">Twitter</a></li>
		<li><a href="">LinkedIn</a></li>
		<li><a href="">Github</a></li>
	</ul>	
	<p class="text-center muted">&copy; 2020 Bootstrap Contact Form with PHP and MySQL</p>
	<!-- End Footer -->
	<!-- JavaScript -->
	<script src="js/jquery.js"></script>
	<script src="js/bootstrap.js"></script>
	<!-- End JavaScript -->
</body>
</html>
{% endhighlight %}

- Adding popup/modal contact form to the page:
{% highlight html %}
<section>
	<!-- Modal Contact Form -->
	<div class="modal hide fade" id="modal-contact-form">
		<div class="modal-header">
			<button class="close" data-dismiss="modal">&times;</button>
			<h3>Contact</h3>
		</div>		
		<div class="modal-body">
			<form class="form-horizontal" id="formID" action="" method="POST">
				<div class="control-group">
					<label for="contact_name" class="control-label">Name:</label>					
					<div class="controls">
						<input type="text" required id="contact_name" name="contact_name"/>
					</div>
				</div>
				<div class="control-group">
					<label for="contact_email" class="control-label">Email:</label>					
					<div class="controls">
						<input type="email" required id="contact_email" name="contact_email"/>
					</div>
				</div>
				<div class="control-group">
					<label for="contact_message" class="control-label">Message:</label>				
					<div class="controls">
						<textarea required id="contact_message" name="contact_message" cols="30" rows="10"></textarea>
					</div>
				</div>				
				<div class="control-group">
					<div class="controls">
						<input type="submit" class="btn btn-info" value="Send Message" />
						<input type="reset" class="btn" value="Reset" />
					</div>
				</div>
			</form>
		</div>		
		<div class="modal-footer">
			<a href="" data-dismiss="modal" class="btn">Cancel</a>
		</div>
	</div> <!-- End Modal Contact Form -->
</section>
{% endhighlight %}



{% highlight html %}
{% endhighlight %}
