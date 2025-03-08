<?php
// $username=$_POST['name1'];
//$add=$_POST['add'];

//$Name=$_POST['Name'];
//$Email=$_POST['Email'];
//$MobileNo=$_POST['MobileNo'];
//$Message=$_POST['Message'];


define('DB_SERVER', 'localhost');
   define('DB_USERNAME', 'root');
  define('DB_PASSWORD', '');
   define('DB_DATABASE', 'mydatabase');
   $con = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);

global $Name;
global $Email;
global $MobileNo;
global $Message;
if(isset($_POST['Name'])){
    $Name = $_POST['Name'];
}
if(isset($_POST['Email'])){
    $Email = $_POST['Email'];
}
if(isset($_POST['MobileNo'])){
    $MobileNo = $_POST['MobileNo'];
}
if(isset($_POST['Message'])){
    $Message = $_POST['Message'];
}
$msg="$Message";

if(!$con)
{
	die('Could Not Connect'.mysql_error());
}
$sql="INSERT INTO mydbtable() VALUES( '$Name', '$Email', '$MobileNo', '$msg')";
mysqli_query($con, "INSERT INTO mydbtable(Name,Email,MobileNo,Message)VALUES('$Name', '$Email', '$MobileNo' , '$msg')");
?>

<html>
<body>


	

		<h2>Details added successfully. Thank You !</h2>	
						
			

	</body>
</html>



