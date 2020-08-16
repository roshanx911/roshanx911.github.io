---
layout: post
title: "CRUD Admin-Panel with Bootstrap, PHP & MySQL"
date: 2020-08-14 11:10:00 -0700
categories: blog
excerpt_separator: <!--more-->
---
Following code examine on how to create an admin-panel & CRUD (Create, Read, Update, Delete) web application using Bootstrap, PHP & MySQL. <!--more-->

Below represent the CRUD Admin-Panel Hierarchy Diagram:

![alt text](https://i.imgur.com/jhI2FJh.png)

> Note: Hierarchy Diagram is an architectural diagram, which represent the structured design of the system using simple notations. This is a useful diagram to understand the dynamic structure of a system.

- Bootstrap integrated PHP Admin-Panel login page code cast as below:

{% highlight html %}
<?php
	session_start();

	if(isset($_SESSION['role']))
	{
		header("location:inlog-navigate-role.php");
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>CRUD Admin-Panel</title>
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
                <a href="index.php" class="brand">CRUD Admin-Panel with Bootstrap, PHP & MySQL</a>
                <a data-toggle="collapse" data-target=".nav-collapse" class="btn btn-navbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a>
                <div class="collapse nav-collapse">
                    <ul class="nav pull-right">
                        <li class="active"><a href="index.php">Login &raquo;</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div> <!-- End Navbar -->
    <section>
        <!-- User Login -->
        <div class="container">
            <div class="row-fluid">
                <div class="page-header">
                    <hr />
                    <h1>User Login <small>Registered &raquo;</small></h1>
                </div>
                <form class="form-horizontal" id="formID" action="" method="POST">
                    <fieldset>
                        <div class="control-group">
                            <label class="control-label" for="user_name">User Name</label>
                            <div class="controls">
                                <input type="text" required class="input-xlarge" id="user_name" name="user_name" />
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label" for="password">Password</label>
                            <div class="controls">
                                <input type="password" required class="input-xlarge" id="password" name="password" />
                            </div>
                        </div>
                        <div class="controls">
                            <input type="submit" class="btn" value="Submit" />
                            <input type="reset" class="btn" value="Reset" />
                        </div>
                    </fieldset>
                </form>
                <?php
                    if(isset($_POST["user_name"])) 
                    {
                        include('inlog-log.php');
                    }
                ?>
            </div>
        </div>
        <!-- End User Login -->
    </section>
    <!-- Container -->
    <div class="container">
        <section>
            <!-- Footer -->
            <hr />
            <ul class="inline text-center">
                <li><strong>Follow On:</strong></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">LinkedIn</a></li>
                <li><a href="">Github</a></li>
            </ul>
            <p class="text-center muted">&copy; 2020 CRUD Admin-Panel with Bootstrap, PHP & MySQL</p>
            <!-- End Footer -->
        </section>
    </div>
    <!-- End Container -->
    <!-- JavaScript -->
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.js"></script>
    <!-- End JavaScript -->
</body>
</html>
{% endhighlight %}


