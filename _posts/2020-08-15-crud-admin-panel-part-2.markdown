---
layout: post
title: "CRUD Admin-Panel with Bootstrap, PHP & MySQL Part-2 (Create-Data)"
date: 2020-08-15 02:00:00 -0700
categories: blog
excerpt_separator: <!--more-->
---
Following code examine on how to create an admin-panel & CRUD (Create, Read, Update, Delete) web application using Bootstrap, PHP & MySQL. Part-2 focus on Create-Data: <!--more-->

{% highlight html %}
<?php
	include('role-admin.php');
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
                <a href="" class="brand">CRUD Admin-Panel with Bootstrap, PHP & MySQL</a>
                <a data-toggle="collapse" data-target=".nav-collapse" class="btn btn-navbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a>
                <div class="btn-group pull-right">
                    <a class="btn"><i class="icon-user"></i> Admin</a>
                    <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="#">My Profile&nbsp;(<?php echo ($user); ?>)</a></li>
                        <li class="divider"></li>
                        <li><a href="inlog-logout.php">Sign Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div> <!-- End Navbar -->
    <section>
        <!-- CURD Create Info -->
        <div class="container">
            <div class="row-fluid">
                <div class="span2">
                    <div class="well sidebar-nav">
                        <ul class="nav nav-list">
                            <li class="nav-header"><i class="icon-wrench"></i> Control</li>
                            <li class="active"><a href="panel-admin-add.php">Create</a></li>
                            <li><a href="panel-admin-detail.php">Read</a></li>
                            <li><a href="panel-admin-edit.php">Update</a></li>
                            <li><a href="panel-admin-remove.php">Delete</a></li>
                            <li><a href="inlog-logout.php">Sign Out</a></li>
                        </ul>
                    </div>
                </div>
                <div class="span10">
                    <div class="page-header">
                        <hr />
                        <h2>Administration <small>Panel &raquo;</small></h2>
                    </div>
                    <h3 class="muted">Create Message <small>&raquo;</small></h3>
                    <form class="form-horizontal" id="formID1" action="" method="POST">
                        <fieldset>
                            <div class="control-group">
                                <label class="control-label" for="contact_name">Name:</label>
                                <div class="controls">
                                    <input type="text" required id="contact_name" name="contact_name" />
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label" for="contact_email">Email:</label>
                                <div class="controls">
                                    <input type="email" required id="contact_email" name="contact_email" />
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label" for="contact_message">Message:</label>
                                <div class="controls">
                                    <textarea required id="contact_message" name="contact_message" cols="20"
                                        rows="07"></textarea>
                                </div>
                            </div>
                            <div class="controls">
                                <input type="submit" class="btn" value="Submit" />
                                <input type="reset" class="btn" value="Reset" />
                            </div>
                        </fieldset>
                    </form>
                    <?php
                    if(isset($_POST["contact_name"]))
                    {
                        include('panel-admin-add-on.php');
                    }
                    ?>
                </div>
            </div>
        </div>
        <!-- End CURD Create Info -->
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

- In above Create-Data page consist of `<? php include('role-admin.php'); ?>` which seek if the login user is an authorized admin, if not it will redirect to “index.php”. “role-admin.php” code cast as below:

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

- In above Create-Data page consist of `<?php echo ($user); ?>`, which shows the login admin user-name derived from “role-admin.php”.

- In above Create-Data page contain a link to “inlog-logout.php” which end the session and redirect to “index.php”. “inlog-logout.php” code cast as below:

``` php
<?php
	session_start();
	session_destroy();
	header('location:index.php');
?>
```

- In above Create-Data page below code snippet written to post the collected form data into “panel-admin-add-on.php”.

``` php
<?php
if(isset($_POST["contact_name"]))
{
	include('panel-admin-add-on.php');
}
?>
```

- “panel-admin-add-on.php” code cast as below:

``` php
<?php
	$contact_name=$_POST["contact_name"];
	$contact_email=$_POST["contact_email"];
	$contact_message=$_POST["contact_message"];
					
	$con=mysqli_connect("localhost","root") or die ("<div class=\"row\"><div class=\"span2\"></div>
					 <div class=\"span3 offset\"><div class=\"alert-block\">
					 <a href=\"\" class=\"close\" data-dismiss=\"alert\">&times;</a>
					 <strong>Error !</strong> Server Can't Access !
					 </div></div></div>");  
	$db=mysqli_select_db($con,"dbnew2") or die ("<div class=\"row\"><div class=\"span2\"></div>
					 <div class=\"span3 offset\"><div class=\"alert-block\">
					 <a href=\"\" class=\"close\" data-dismiss=\"alert\">&times;</a>
					 <strong>Error !</strong> Database Can't Access !
					 </div></div></div>"); 					
	$sql="INSERT INTO contact(name,email,message)VALUES('$contact_name','$contact_email','$contact_message')";
	$query=mysqli_query($con,$sql) or die ("<div class=\"row\"><div class=\"span3 offset\"><div class=\"alert-block\">
									<a href=\"\" class=\"close\" data-dismiss=\"alert\">&times;</a>				 
									<strong>Error !</strong> Check SQL Statement !
									</div></div></div>");

		if($query>0)
		{			
	        echo ("<div class=\"row\"><div class=\"span3 offset\"><div class=\"alert-block\">
			     <a href=\"\" class=\"close\" data-dismiss=\"alert\">&times;</a>
			     <strong>Success !</strong> Create Message Request Complete !
			     </div></div></div>");			
		}
	  		
		else
		{
	        echo ("<div class=\"row\"><div class=\"span3 offset\"><div class=\"alert-block\">
			     <a href=\"\" class=\"close\" data-dismiss=\"alert\">&times;</a>
				 <strong>Error !</strong> Create Request Cannot Send ! No Database Connectivity !
				 </div></div></div>");
		}		
	mysqli_close($con);			
?> 
```

- Once the above code execute if functions and statements are true with verification of the database, it will move forward to Create-Data if not error messages shown.

![alt text](https://i.imgur.com/vGhNrRc.png)

> Now you have implement CRUD Create-Data function. For further development of CRUD Admin-Panel Web-Application read the below articles.

* * *

> [CRUD Admin-Panel with Bootstrap, PHP & MySQL Part-1 (Admin-Panel)][Part-1]
> 
> [CRUD Admin-Panel with Bootstrap, PHP & MySQL Part-2 (Create-Data)][Part-2]
> 
> [CRUD Admin-Panel with Bootstrap, PHP & MySQL Part-3 (Read-Data)][Part-3]
> 
> [CRUD Admin-Panel with Bootstrap, PHP & MySQL Part-4 (Update-Data)][Part-4]
> 
> [CRUD Admin-Panel with Bootstrap, PHP & MySQL Part-5 (Delete-Data)][Part-5]
> 
> [CRUD Admin-Panel with Bootstrap, PHP & MySQL Part-6 (Database-Implementation)][Part-6]
> 

[Part-1]: https://roshanx911.github.io/blog/2020/08/14/crud-admin-panel-part-1.html
[Part-2]: https://roshanx911.github.io/blog/2020/08/15/crud-admin-panel-part-2.html
[Part-3]: https://roshanx911.github.io/blog/2020/08/16/crud-admin-panel-part-3.html
[Part-4]: https://roshanx911.github.io/blog/2020/08/17/crud-admin-panel-part-4.html
[Part-5]: https://roshanx911.github.io/blog/2020/08/18/crud-admin-panel-part-5.html
[Part-6]: https://roshanx911.github.io/blog/2020/08/19/crud-admin-panel-part-6.html
