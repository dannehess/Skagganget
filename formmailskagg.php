<?php

/* Bestämmer ämne på mailet och vart det ska skickas. */
$subject = 'Kontakt från hemsidan';
$to = 'skagganget@gmail.com';

/* Hämtar värdena användaren har fyllt i formuläret. */
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

/* Ritar upp HTML-sidan / Mailet som skickas till den bestämda e-postadressen. */
$body = <<<EOD
<html>
<body>
<br><hr><br>
Namn: $name <br>
Email: $email <br>
Meddelande: $message <br>
</body>
</html>
EOD;

    /* Skickar mailet med bestämt ämne och med HTML-kodning. */

    $headers = "Kontakt från hemsidan";
    $headers = "Content-type: text/html\r\n";
    $success = mail($to, $subject, $body, $headers);
    

    /* Javascript som skriver ut en alert och skickar tillbaka användaren
    till kontaktformuläret
    */
echo "<script type='text/javascript'>alert('Tack för ditt meddelande!');
window.location='http://www.danielhessling.se/skagganget/index.html#kontakt';
</script>";

?>