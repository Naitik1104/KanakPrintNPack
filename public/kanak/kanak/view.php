
<html>
<head>
<style>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
<title></title>
</head>
<body>

<div class="table-title">
	<h1> Customer Details</h1>
</div>

	
	<table style="width:50%">
	<tr>
	
		<th class="text-left">Name</th>
		<th class="text-left">Email</th>
		<th class="text-left">MobileNo</th>
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















































