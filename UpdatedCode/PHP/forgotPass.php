<?php
require_once('functions.php');

$tempEmail = $_POST['email'];
$tempUser = $_POST['user'];
$tempNewPass = $_POST['newPass'];

$sql = "SELECT * FROM (solitaire) WHERE (email) LIKE ('$tempEmail') AND (user) LIKE ('$tempUser')";
$result = querySQL($sql);

if(odbc_fetch_row($result) == false)
{
	echo "Email or username does not exist.";
}
else
{
	$sql = "UPDATE (solitaire) SET password='$tempNewPass' WHERE user='$tempUser'";
	$result = querySQL($sql);
}
?>
