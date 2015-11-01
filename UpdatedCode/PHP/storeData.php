<?php
require_once('functions.php');

$tempCurrScore = $_GET['finScore'];
$tempTime = $_GET['endTime'];

$sql = "Select * FROM (solitaire) WHERE (currPlayer=1)";
$result = querySQL($sql);

//$sql = "SELECT * FROM (solitaire) WHERE (email) LIKE ('$tempEmail') AND (user) LIKE ('$tempUser')";
//$result = querySQL($sql);

if(odbc_fetch_row($result) == false)
{
	echo "No player logged in.";
}
else
{
	$sql = "UPDATE solitaire SET currScore=$tempCurrScore WHERE currPlayer=1";
	$result = querySQL($sql);
	$sql = "UPDATE solitaire SET currTime='$tempTime' WHERE currPlayer=1";
	$result = querySQL($sql);
	$sql = "UPDATE solitaire SET highScore=$tempCurrScore WHERE currPlayer=1 AND highScore < $tempCurrScore";
	$result = querySQL($sql);
	$sql = "UPDATE solitaire SET numGames=numGames+1 WHERE currPlayer=1";
	$result = querySQL($sql);
	$sql = "UPDATE solitaire SET numWins=numWins+1 WHERE currPlayer=1";
	$result = querySQL($sql);

}
?>
