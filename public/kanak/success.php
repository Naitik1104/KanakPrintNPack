
<?php

define('DB_SERVER', 'localhost');
   define('DB_USERNAME', 'root');
  define('DB_PASSWORD', '');
   define('DB_DATABASE', 'mydatabase');
   $con = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
// $username=$_POST['name1'];
//$add=$_POST['add'];
global $Name;
global $Email;
global $MobileNo;
global $Message;
if(isset($_POST['Name'])){
    $Name = $_POST['Name'];
}
if(isset($Name)){ 
    echo $Name;
}

if(isset($_POST['Email'])){
    $Name = $_POST['Email'];
}
if(isset($Email)){ 
    echo $Email;
}

if(isset($_POST['MobileNo'])){
    $Name = $_POST['MobileNo'];
}
if(isset($MobileNo)){ 
    echo $MobileNo;
}

if(isset($_POST['Message'])){
    $Name = $_POST['Message'];
}
if(isset($Message)){ 
    echo $Message;
}
//$Name=$_POST['Name'];
//$Email=$_POST['Email'];
//$MobileNo=$_POST['MobileNo'];
//$Message=$_POST['Message'];
$msg="<pre>$Message</pre>";
if(!$con)
{
	die('Could Not Connect'.mysql_error());
}
$sql="INSERT INTO mydbtable() VALUES( '$Name', '$Email', '$MobileNo', '$msg')";


mysqli_query($con, "INSERT INTO mydbtable(Name,Email,MobileNo,Message)VALUES('$Name', '$Email', '$MobileNo', '$msg')");
?>

<html>
<body>


	

		<h2>Details added successfully. Thank You !</h2>	
						
			

	</body>
</html>



