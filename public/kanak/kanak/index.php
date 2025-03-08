<?php

session_start();
if(!isset($_SESSION['admin_name'])){

	echo "<script>window.open('adminlogin.php','_self')</script>";

}
	else{

?>
<html>
<head>
	<title></title>
	<meta name="viewport" content="initial-scale=1.0; maximum-scale=1.0; width=device-width;">
	<link rel="stylesheet" href="styles/style.css" media="all" />
	<link rel="stylesheet"  href="font/css/font-awesome.min.css">
</head>
<body>
	<div class="header">
		<img src="images/admin.png" width="45" height="45">
			<div class="logo">
				<a href="index.php">Admin<span>Panel</span></a>
			</div>
			<div class="logout"> 
					<a href="logout.php"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a>
			</div>
	</div>
<div class="container">
	
	
	<div class="sidebar">
	<ul id="nav">
		
		<li><a href="index.php?view"><i class="fa fa-money" aria-hidden="true"></i> View Details</a></li>
	</div>
	<div class="content">
	<h2 style="color:red; text-align: center;"><?php echo @$_GET['logged_in']; ?></h2>
	<?php
	include("db.php");

if(isset($_GET['view'])){
		include("view.php");

	}

	?>
	</div>
</div>

</body>
</html>
<?php }  ?>