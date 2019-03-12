<?php

$subject = 'Bokning';
$to = 'skagganget@gmail.com';

$name = $_POST['bname'];
$phone = $_POST['bphone'];
$bprice = $_POST['bprice'];
$date = $_POST['bdate'];
$time = $_POST['btime'];
$barber = $_POST['bbarber'];
$message = $_POST['bmessage'];

$body = <<<EOD
<body style="
    background-color: rgb(200, 211, 192);
    font-family: verdana;
    color: #333;">
    
    <br><br>
<div class="book" style="
    margin: 0 auto;
    width: 600px;
    border-radius: 10px;
    background-color: #FFFFFF;
    border: 10px solid #FFFFFF;
    padding: 20px;">

<h1 style="
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: #333;">BOKNING FRÅN HEMSIDAN</h1>
<hr style="
    border: none;
    height: 1px;
    background-color: #333;">
<br>

<table style="
    background-color: white;
    border-collapse: collapse;
    width: 100%;">
    <tr>
        <td style="
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            font-size: 1.3em;
            "><strong>Namn:</strong></td>
        <td style="
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            font-size: 1.1em;
            ">$name</td>
    </tr>
    <tr>
        <td style="
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            font-size: 1.3em;
            "><strong>Telefon:</strong></td>
        <td style="
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            font-size: 1.1em;
            ">$phone</td>
    </tr>
    <tr>
        <td style="
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            font-size: 1.3em;
            "><strong>Behandling:</strong></td>
        <td style="
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            font-size: 1.1em;
            ">$bprice</td>
    </tr>
    <tr>
            <td style="
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            font-size: 1.3em;
            font-weight: regular;
            font-size: 1.3em;
            "><strong>Datum:</strong></td>
            <td
            style="
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            font-size: 1.1em;
            ">$date</td>
        </tr>
        <tr>
            <td style="
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            font-size: 1.3em;
            "><strong>Tid:</strong></td>
            <td style="
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            font-size: 1.1em;
            ">$time</td>
        </tr>
        <tr>
                <td style="
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            font-size: 1.3em;
            "><strong>Barberare:</strong></td>
                <td style="
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            font-size: 1.1em;
            ">$barber</td>
            </tr>
            <tr class="mess">
            <td style="
            padding: 12px;
            text-align: left;
            font-size: 1.3em;
            "><strong>Meddelande:</strong></td>
                <td"></td>
            </tr>
            <tr>
                <td colspan="2" style="
            padding: 12px;
            text-align: left;
            font-size: 1.1em;
                ">$message</td>
            </tr>
</table>
</div>
<br><br>
EOD;

    $headers = "Bokning från hemsidan";
    $headers = "Content-type: text/html\r\n";
    $success = mail($to, $subject, $body, $headers);
    
echo "<script type='text/javascript'>
alert('Tack för din bokning!');
window.location='http://www.danielhessling.se/skagganget/index.html';
</script>";

?>