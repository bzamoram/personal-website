<?php
// This php file establishes a connection to my MySQL database

// Database configuration
$servername = "localhost"; // database is on the same computer as my website
$username = "root"; // username to log into MySQL
$password = ""; // password to log into MySQL
$database = "portfolio_contact"; // name of the database created in phpMyAdmin

// Creating connection
$conn = new mysqli($servername, $username, $password, $database); // variable that will hold the database connection
// new mysqlli() function creates a connection using MySQLi (MySQL Improved) extension

// Check connection
if ($conn->connect_error) { // checks if there is a connection error connecting to the database
    die("Connection failed: " . $conn->connect_error); // if there is an error, it will stop the script and display the error message
}
?>
