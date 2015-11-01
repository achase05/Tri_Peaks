<?php

function connectDB(){
	$dsn = 'TPDB';
	$user = '';
	$password = '';

	$con = odbc_connect($dsn, $user, $password);
	return $con;
}

function querySQL($sql){
	$con = connectDB();
	$result = odbc_exec($con, $sql);
	return $result;
}

?>
