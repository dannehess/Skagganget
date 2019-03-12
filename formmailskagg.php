<?php

$subject = 'Kontakt från hemsidan';
$to = 'skagganget@gmail.com';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$body = <<<EOD
<br><hr><br>
Namn: $name <br>
Email: $email <br>
Meddelande: $message <br>
EOD;

    $headers = "Kontakt från hemsidan";
    $headers = "Content-type: text/html\r\n";
    $success = mail($to, $subject, $body, $headers);
    
echo "<script type='text/javascript'>alert('Tack för ditt meddelande!');
window.location='http://www.danielhessling.se/skagganget/index.html#kontakt';
</script>";

?>