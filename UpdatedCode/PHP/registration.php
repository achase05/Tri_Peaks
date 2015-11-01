<?php
require_once('functions.php');

$tempUser = $_POST['user'];
$tempPass = $_POST['pass'];
$tempEmail = $_POST['email'];

$sql = "SELECT (user) FROM solitaire WHERE user LIKE ('$tempUser')";
$result = querySQL($sql);

if(odbc_fetch_row($result) == true)
{
	echo "Error. Username exists";
}
else
{
	$sql = "SELECT (email) FROM solitaire WHERE (email) LIKE ('$tempEmail')";
	$result = querySQL($sql);
	
	if(odbc_fetch_row($result) == true)
	{
		echo "Error. Email exists";
	}
	else
	{
		$sql = "INSERT INTO solitaire (user, email, password, numGames, numWins, currTime, currScore, highScore,currPlayer)";
		$sql .= "VALUES ('$tempUser', '$tempEmail', '$tempPass', 0, 0, '00:00', 0, 0, 0)";
		querySQL($sql);
		
		header("Location: ../login.html");
	}
}

?>
