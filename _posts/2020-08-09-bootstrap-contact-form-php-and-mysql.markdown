---
layout: post
title: "Bootstrap Contact Form with PHP and MySQL"
date: 2020-08-09 10:20:00 -0700
categories: blog
excerpt_separator: <!--more-->
---
Below code examine on how to integrate a popup/modal contact-form using Bootstrap and how to insert data into a database using PHP & MySQL. <!--more-->Basic bootstrap integrated html page code cast as below:
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

- Adding popup/modal contact-form to the page:
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

- To activate the visibility of popup/modal contact-form is can be linked by button below:
{% highlight html %}
<section>
	<div class="container">
		<div class="row">
			<br /><br />
				<h1 style="text-align:center">Click link below...</h1>
			<br /><br />
				<button type="button" class="btn btn-info btn-lg btn-block" data-toggle="modal" data-target="#modal-contact-form">Be Connected</button>
			<br /><br /><br /><br />
		</div>
	</div>
</section>
{% endhighlight %}

- As mention above in previous code snippet, to complete the form need to add the below “php” code snippet inside of above code just after the end of [div class="row"] tag.
``` php
<?php
	if(isset($_POST["contact_name"])) 
	{
		include('contact-on.php');
	}
?>
```

- “php” inside of “html” code should cast as below:
![alt text](https://i.imgur.com/mwRV211.png)

- Once follow the above mention step by step guide Bootstrap integrated page interface cast as below:
![alt text](https://i.imgur.com/KYSbGHB.png)

- Once click the button “Be Connected” or menu link “Contact” contact-form will pop-up while freezing the background page. The contact-form interface cast as below:
![alt text](https://i.imgur.com/hxUiGaS.png)

- Step by step guide leads to finalize page code should cast as below:
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
	<section>
	<div class="container">
		<div class="row">
			<br /><br />
				<h1 style="text-align:center">Click link below...</h1>
			<br /><br />
				<button type="button" class="btn btn-info btn-lg btn-block" data-toggle="modal" data-target="#modal-contact-form">Be Connected</button>
			<br /><br /><br /><br />
		</div>
		<?php
			if(isset($_POST["contact_name"])) 
			{
				include('contact-on.php');
			}
		?>
	</div>
	</section>
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

> Note: Even though this page written in “html” needed to save this as a .php (php extension) instead of .html (html extension), doing that will make run through the “php” code which written inside of this page.

- Once finalize the popup contact-form page, need to create a database in “localhost –> phpMyAdmin”, first of all need to specify the “database name”, and then inside of that database import the following “sql” query.
``` sql
-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2020 at 12:54 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
--
-- Database: `dbnew`
--
-- --------------------------------------------------------
--
-- Table structure for table `contact`
--
CREATE TABLE `contact` (
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `message` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--
-- Dumping data for table `contact`
--
INSERT INTO `contact` (`name`, `email`, `message`) VALUES
('roshan', 'roshan@xyz.abc', 'This is message one'),
('perera', 'perera@xyz.abc', 'This is message two');
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```

> Note: When creating the database specified “database name” & “database table name” is very crucial, moreover once accessing the database using “php” scripting language is addressed by “database name” & “database table name”.

