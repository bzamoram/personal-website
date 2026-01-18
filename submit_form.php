<?php
// This file receives form data, validates it, and saves it to the database

// Including database connection
include 'db_connect.php';  // database connection file

// Checking if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") { // php variables that tells me how the page was accessed. POST checks if the form was submitted using the POST method
    
    // Gets form data and sanitize it
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);
    // mysqli_real_escape_string() function helps preventing SQL injections. A SQL injection is a code injection technique that might destroy the database. It is one of the most common web hacking techniques.
    
    // Validating inputs
    if (empty($name) || empty($email) || empty($message)) { // || means "OR" in PHP and thi checks if there are any empty fields
        echo "<script>alert('All fields are required!'); window.location.href='index.html#certifications';</script>";
        exit();
        // echo: outputs content to the browser
        // <script>: I am outputting JavaScript code 
        // alert(): shows a pop up alert box with a message
        // window.location.href: redirects the user to a specific part on the site 
        // exit(): stops the PHP script from running further
    }
    
    // Validating email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { // function that validates data with a constant that checks if the email format is valid. ! means NOT in PHP
        echo "<script>alert('Invalid email format!'); window.location.href='index.html#certifications';</script>"; // works the same way as above
        exit();
    }
    
    // Inserting data into database
    $sql = "INSERT INTO messages (name, email, message) VALUES ('$name', '$email', '$message')"; // SQL query to insert data into messages table
    
    if ($conn->query($sql) === TRUE) { // executes the SQL command on the database and checks if the query was successful while doing a strict comparison on value and type
        echo "<script>alert('Message sent successfully! I will get back to you soon.'); window.location.href='index.html';</script>"; // shows the success message and redirects to the contact form
    } else {
        echo "<script>alert('Error: " . $conn->error . "'); window.location.href='index.html';</script>";
    } // if the query fails, it shows an error message with the specific error from the database connection
    
    // Closing connection
    $conn->close();
}
?>
