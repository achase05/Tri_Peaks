<?php
require_once('functions.php');

$tempUser = $_POST['user'];
$tempPass = $_POST['pass'];

$sql = "UPDATE solitaire SET currPlayer=0 WHERE currPlayer=1";
$result = querySQL($sql); 
$sql = "SELECT * FROM solitaire WHERE (user) LIKE ('$tempUser') AND (password) LIKE ('$tempPass')";
$result = querySQL($sql);
if(odbc_fetch_row($result) == true)
{
	$sql = "UPDATE solitaire SET currPlayer=1 WHERE (user) LIKE ('$tempUser')";
	querySQL($sql);
	header("Location: ../tripeaks/tri_peaks_source.html");
}
else
{
	echo "Invalid username or password.";
}
?>
