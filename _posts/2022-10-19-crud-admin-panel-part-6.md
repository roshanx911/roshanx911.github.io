---
layout: post
title: "CRUD Admin-Panel with Bootstrap, PHP & MySQL Part-6 (Database-Implementation)"
date: 2022-10-19 07:00:00 -0700
categories: blog
excerpt_separator: <!--more-->
---
Following code examine on how to create an admin-panel & CRUD (Create, Read, Update, Delete) web application using Bootstrap, PHP & MySQL. Part-6 focus on Database-Implementation. <!--more-->

- Finally, have come to end of the “CRUD Admin-Panel” Web-Application. All the previous posts are not completed without the Implementation of Database. The sample Database “SQL” Query cast as below:
  
``` sql
-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2020 at 09:51 PM
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
-- Database: `dbnew2`
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

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `role` varchar(10) NOT NULL,
  `roleid` int(3) NOT NULL,
  `rolename` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`role`, `roleid`, `rolename`, `password`) VALUES
('admin', 100, 'admin', '12345'),
('admin', 101, 'sam', '45678'),
('admin', 102, 'david', '12312');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`roleid`),
  ADD UNIQUE KEY `rolename` (`rolename`),
  ADD KEY `roleid` (`roleid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```

> Congratulation! Now you have construct a “CRUD Admin-Panel” Web-Application using Bootstrap, PHP & MySQL.

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

[Part-1]: https://roshanx911.github.io/blog/2022/10/14/crud-admin-panel-part-1.html
[Part-2]: https://roshanx911.github.io/blog/2022/10/15/crud-admin-panel-part-2.html
[Part-3]: https://roshanx911.github.io/blog/2022/10/16/crud-admin-panel-part-3.html
[Part-4]: https://roshanx911.github.io/blog/2022/10/17/crud-admin-panel-part-4.html
[Part-5]: https://roshanx911.github.io/blog/2022/10/18/crud-admin-panel-part-5.html
[Part-6]: https://roshanx911.github.io/blog/2022/10/19/crud-admin-panel-part-6.html
