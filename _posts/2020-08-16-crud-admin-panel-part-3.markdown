---
layout: post
title: "CRUD Admin-Panel with Bootstrap, PHP & MySQL Part-3 (Read-Data)"
date: 2020-08-16 03:00:00 -0700
categories: blog
excerpt_separator: <!--more-->
---
Following code examine on how to create an admin-panel & CRUD (Create, Read, Update, Delete) web application using Bootstrap, PHP & MySQL. Part-3 focus on Read-Data: <!--more-->

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
