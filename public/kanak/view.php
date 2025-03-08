
<html>
<head>
<title></title>
</head>
<body>

<div class="table-title">
	<h3> Details </h3>
</div>
<table class="table-fill">
	<tr>
		<th class="text-left">Name</th>
		<th class="text-left">Email</th>
		<th class="text-left">Mobile No</th>
		<th class="text-left">Message</th>
</tr>
<?php

include("db.php");


$i=0;
$getfine = "select * from mydbtable";
$runfine = mysqli_query($con, $getfine);
while($rowfine = mysqli_fetch_assoc($runfine))
{
	$name = $rowfine['Name'];
	$email = $rowfine['Email'];
	$mobileno = $rowfine['MobileNo'];
	$msg = $rowfine['Message'];
	$i++;
	

?>

<tr>
	<td class="text-left"><?php echo $name; ?></td> 
	<td class="text-left"><?php echo $email; ?></td> 
	<td class="text-left"><?php echo $mobileno; ?></td> 
	<td class="text-left"><?php echo $msg; ?></td>
	</tr>
	 <?php
	}
	 ?>

	</table>
	</body>
	</html> 















































