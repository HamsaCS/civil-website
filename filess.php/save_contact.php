<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $entry = "Name: $name\nEmail: $email\nMessage: $message\n\n";
    file_put_contents('contacts.txt', $entry, FILE_APPEND);

    echo "<script>alert('Thank you for contacting us!'); window.location.href = 'contact.html';</script>";
} else {
    header("Location: contact.html");
}
?>
