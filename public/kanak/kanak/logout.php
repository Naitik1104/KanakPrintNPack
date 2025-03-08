<?php
session_start();

session_destroy();

echo "<script>window.open('adminlogin.php?logout=You Successfully Logged out,Come back soon','_self')</script>";
?>