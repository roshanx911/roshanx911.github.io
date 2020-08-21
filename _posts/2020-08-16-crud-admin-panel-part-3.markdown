---
layout: post
title: "CRUD Admin-Panel with Bootstrap, PHP & MySQL Part-3 (Read-Data)"
date: 2020-08-16 03:00:00 -0700
categories: blog
pagination: 
  enabled: true
excerpt_separator: <!--more-->
---
Following code examine on how to create an admin-panel & CRUD (Create, Read, Update, Delete) web application using Bootstrap, PHP & MySQL. Part-3 focus on Read-Data. <!--more-->

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
        <!-- CURD Read Info -->
        <div class="container">
            <div class="row-fluid">
                <div class="span2">
                    <div class="well sidebar-nav">
                        <ul class="nav nav-list">
                            <li class="nav-header"><i class="icon-wrench"></i> Control</li>
                            <li><a href="panel-admin-add.php">Create</a></li>
                            <li class="active"><a href="panel-admin-detail.php">Read</a></li>
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
                    <?php								
                        include('panel-admin-detail-on.php');
                    ?>
                </div>
            </div>
        </div>
        <!-- End CURD Read Info -->
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

- In above Read-Data page consist of `<?php include('role-admin.php'); ?>` which seek if the login user is an authorized admin, if not it will redirect to “index.php”. “role-admin.php” code cast as below:

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

- In above Read-Data page consist of `<?php echo ($user); ?>`, which shows the login admin user-name derived from “role-admin.php”.

- In above Read-Data page contain a link to “inlog-logout.php” which end the session and redirect to “index.php”. “inlog-logout.php” code cast as below:

``` php
<?php
	session_start();
	session_destroy();
	header('location:index.php');
?>
```

- In above Read-Data page below code snippet written to read the collected form data from “panel-admin-detail-on.php”.

``` php
<?php								
	include('panel-admin-detail-on.php');
?>
```

- “panel-admin-detail-on.php” code cast as below:

``` php
<?php
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
	$sql1="SELECT * FROM contact";
	$query1=mysqli_query($con,$sql1) or die ("<div class=\"row\"><div class=\"span2\"></div>
					 <div class=\"span4\"><div class=\"alert-block\">
					 <a href=\"\" class=\"close\" data-dismiss=\"alert\">&times;</a>
					 <strong>Error !</strong> Check Log Info SQL Statement !
					 </div>
					 </div></div>");
	$nor1=mysqli_num_rows($query1);
	
	if($nor1==0)
    {
		echo ("<div class=\"span10\"><div class=\"row\">
		       <div class=\"muted\"> 
					<h3>Read Message <small>&raquo;</small></h3>
			   </div></div>
			   </div>");		
		echo ("<div class=\"row\">
					<div class=\"span2\"></div><div class=\"span3\">  
						<div class=\"alert-block\">
							<a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a>
							<strong>Error !</strong> Info Table is Empty !&nbsp;
						</div>
					</div>
				</div>");
	}
	else
	{		        
		echo ("<div class=\"span10\"><div class=\"row\">
		       <div class=\"muted\"> 
					<h3>Read Message <small>&raquo;</small></h3>
			   </div></div>
			   </div>");
		
		echo ("<div class=\"row-fluid\"><div class=\"span10\"><table class=\"table table-striped table-bordered table-condensed\">");
				 									
		echo ("<thead>
					<tr>
						<th> Index </th>
						<th> Name  </th> 
						<th> Email </th> 
						<th> Message </th> 			
					</tr>
			   </thead>");
				
		$index=1;
				
 		while($rec1=mysqli_fetch_assoc($query1))
 		{
			echo("<tbody>");
			echo("<tr class=\"list-users\">");
			echo("<td>".$index."</td>"); $index++;
			echo("<td>".$rec1['name']."</td>");
			echo("<td>".$rec1['email']."</td>");
			echo("<td>".$rec1['message']."</td>");
			echo("</tr>");
			echo("</tbody>");
		}
		echo ("</table></div></div>");				
	}
	mysqli_close($con);
?>
```

- Once the above code execute if functions and statements are true with verification of the database, it will move forward to Read-Data if not error messages shown. Read-Data page interface will cast as in below figure:

![alt text](https://i.imgur.com/PX3xJGP.png)

> Now you have implement CRUD Read-Data function. For further development of CRUD Admin-Panel Web-Application read the below articles.

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
