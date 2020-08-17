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

- Below code snippet written to determine whether the admin role is set or not. [Inside of “index.php”]

``` php
<?php
	session_start();

	if(isset($_SESSION['role']))
	{
		header("location:inlog-navigate-role.php");
	}
?>
```

- Below code snippet written to post the collected form-data. [Inside of “index.php”]

``` php
<?php
	if(isset($_POST["user_name"])) 
	{
		include('inlog-log.php');
	}
?>
```

- Bootstrap integrated PHP Admin-Panel login page interface cast as below:

![alt text](https://i.imgur.com/KLno1QZ.png)

- For secure purpose "inlog-log.php" include only below code.

``` php
<?php
	include('inlog-loger.php');
?>
```

- Below code "inlog-loger.php" function as a validation between form-data and database, in according to verification it will move forward or show relevant messages.

``` php
<?php 
	if(isset($_SESSION['role']))
	{
		include('inlog-navigate.php');  
	}
	
	$username=$_POST["user_name"];
	$password=$_POST["password"];

	$con=mysqli_connect("localhost","root") or die ("<div class=\"row\"><div class=\"span2\"></div>
					 <div class=\"span3\"><div class=\"alert-block\">
					 <a href=\"\" class=\"close\" data-dismiss=\"alert\">&times;</a>
					 <strong>Error !</strong> Server Can't Access !
					 </div>
					 </div></div>");  
	$db=mysqli_select_db($con,"dbnew2") or die ("<div class=\"row\"><div class=\"span2\"></div>
					 <div class=\"span3\"><div class=\"alert-block\">
					 <a href=\"\" class=\"close\" data-dismiss=\"alert\">&times;</a>
					 <strong>Error !</strong> Database Can't Access !
					 </div>
					 </div></div>");	
	$sql="SELECT * FROM login WHERE rolename='$username' and password='$password'";		
	$query=mysqli_query($con,$sql) or die ("<div class=\"row\"><div class=\"span2\"></div>
					 <div class=\"span3\"><div class=\"alert-block\">
					 <a href=\"\" class=\"close\" data-dismiss=\"alert\">&times;</a>
					 <strong>Error !</strong> Check SQL Statement !
					 </div>
					 </div></div>");
		
		if(mysqli_affected_rows($con)>0)
		{
			$row = mysqli_fetch_array($query);	
			$_SESSION['username'] = $row['rolename']; 
			$_SESSION['role'] = $row['role'];
			include('inlog-navigate.php');
		}
		else
		{
			include('inlog-error.html');
		}		
	mysqli_close($con);
?>
```

- Once the above code execute if functions and statements are true with verification of the database, it will move to “inlog-navigate.php” if not show message as in “inlog-error.html”.

``` php
<?php 
	$role = $_SESSION['role'];
	
	if($role=='admin')
	{
		header("location:panel-admin-detail.php");
	}
	else
	{
		include('inlog-error-role.html');
		session_destroy();
	}
?>
```

{% highlight html %}
<div class="row">
	<div class="span1"></div>
	<div class="span5">
		<div class="alert-block">
			<a href="#" class="close" data-dismiss="alert">&times;</a>
			<strong>Login Error!</strong> Invalid User Name or Password&nbsp;
			<a class="btn" href="index.php">Try Again</a>&nbsp;&nbsp;
		</div>
	</div>
</div>
{% endhighlight %}

- As mention in previous code “inlog-navigate.php” while log-into system if role session is not set this message will appear “inlog-error-role.html”.

{% highlight html %}
<div class="row">
	<div class="span1"></div>
	<div class="span5">
		<div class="alert-block">
			<a href="#" class="close" data-dismiss="alert">&times;</a>
			<strong>Error !</strong> Invalid System Role, Not Authorized&nbsp;
			<a class="btn" href="index.php">Try Again</a>&nbsp;&nbsp;
		</div>
	</div>
</div>
{% endhighlight %}

- Below code “inlog-navigate-role.php” determine to start the role session if the prefer database login-info is matched with entered login-info, this will lead to CURD Admin-Panel. If not this message will appear “inlog-error-in.html”.

``` php
<?php 
	session_start();
	
	$role = $_SESSION['role'];
	
	if($role=='admin')
	{
		header("location:panel-admin-detail.php");
	}	
	else
	{
		header("location:inlog-error-in.html");
		session_destroy();
	}
?>
```

{% highlight html %}
<div class="container">
    <div class="row">
        <div class="span5 offset3">
            <div class="alert-block">
                <a href="#" class="close" data-dismiss="alert">&times;</a>
                <strong>Error ! </strong> System Role, State Not Determine&nbsp;
                <a class="btn" href="index.php">Try Again</a>&nbsp;&nbsp;
            </div>
        </div>
    </div>
</div>
{% endhighlight %}

- Once log-into CURD Admin-Panel, following pages “panel-admin-add.php”, “panel-admin-detail.php”, “panel-admin-edit.php”, and “panel-admin-remove.php” are consist of `<?php include('role-admin.php'); ?>` which seek if the login user is an authorized admin, if not it will redirect to “index.php”. “role-admin.php” code cast as below:

``` php
<?php
	session_start();
	$user = $_SESSION['username'];
	if(isset($_SESSION['role']))
	{
		if($_SESSION['role']!='admin')
		{
			header("location:index.php");
		}
	}
	else
	{
		header("location:index.php");
	}
?>
```


