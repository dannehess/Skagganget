/* Hamburgermeny.
   Växlar mellan att lägga till och ta bort den responsiva klassen till "topnav"
   när användaren klickar på ikonen.
*/

let x = document.getElementById("myTopnav");
function myHamburger() {
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}

// Funktion som ändrar Logotypen när man hovrar över den.

function changeLogo(MyImage) {
    MyImage.src = "images/beardhover.png";
}
function normalLogo(MyImage) {
    MyImage.src = "images/beard.png";
}

/* Slideshow-funktion som byter bild var tredje sekund.
   Array innehållandes sökvägar till bilderna.
   En timer sätt på 3 sekunder, funktionen känner av om bildvisaren
   har kommit till sista bilden i arrayen och börjar om.
*/

let i = 0;
let path = ['images/1.jpg', 'images/3.jpeg', 'images/5.jpeg', 'images/2.jpg'];

function swapImage() {
    document.getElementById('slide').src = path[i];
    if (i < path.length - 1) i++;
    else i = 0;
    setTimeout("swapImage()", 3000);
}

/* Funktion som slumpar texter och skriver ut varje gång användaren uppdaterar sidan.
   En multidimensionell array innehållandes 2 element i varje inre array.
   En variabel slumpar fram en inre array. 2 variabler deklareras och får värdena
   från första och sista elementet på den slumpade arrayen och skrivs ut.
*/

function citat() {
    let quotes =
        [
            ['\- "Sveriges bästa barbershop!\"', '\/ Olle, stamkund'],
            ['\- "Jag är supernöjd, bästa stället!\"', '\/ Kalle, stamkund'],
            ['\- "Hit kommer jag definitivt gå igen!\"', '\/ Daniel, stamkund'],
            ['\- "Otroligt kunniga! Fantasktiskt bemötande\"', '\/ Robin, stamkund']
        ];

    let randomone = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomone][0]
    let customer = quotes[randomone][1];

    document.getElementById('citat').innerHTML = quote;
    document.getElementById('stamkund').innerHTML = customer;
}

/* Funktion innehållandes två anda funktioner för att kunna aktivera
   dessa båda samma stund som användaren går in på hemsidan. */

function both() {
    swapImage();
    citat();
}

window.onload = both();


/* Formulärvalidering för kontaktformuläret som gör fältet
rött om användarens input inte uppfyller funktionernas krav
vid ifyllning av fälten.
*/

let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');


name.oninput = checkName;
email.oninput = checkEmail;
message.oninput = checkMessage;

/* Om användarens input på namnfältet har mindre än eller lika med 
   5 bokstäver blir fältet rött. */

function checkName() {
    if (name.value.length <= 5) {
        name.style.backgroundColor = '#FFCCCC';
    }
    else {
        name.style.backgroundColor = 'white';
    }
}

/* Om emailfältet inte innerhåller @ och en punkt blir fältet rött */

function checkEmail() {
    if ((email.value == '') ||
        (email.value.indexOf('@') == -1) ||
        (email.value.indexOf('.') == -1)) {
        email.style.backgroundColor = '#FFCCCC';
    }
    else {
        email.style.backgroundColor = 'white';
    }
}

/* Om meddelandefältet har minde än eller lika med 10 tecken blir fältet rött. */

function checkMessage() {
    if ((message.value.length == '') ||
        (message.value.length <= 10)) {
        message.style.backgroundColor = '#FFCCCC';
    }
    else {
        message.style.backgroundColor = 'white';
    }
}

/* Funktion som låter en popup-ruta visa upp en bekräftelse på användarens input
   Fält hämtas och sparas i nya variabler. En skicka-knapp kopplas till en funktion
   som 'poppar' upp en popup-ruta innehållandes användarens ifyllda värden.
*/

let bname = document.getElementById('bname');
let bphone = document.getElementById('bphone');
let bprice = document.getElementById('bprice');
let bdate = document.getElementById('bdate');
let btime = document.getElementById('btime');
let bbarber = document.getElementById('bbarber');
let bmessage = document.getElementById('bmessage');

let booking = document.getElementById('bokning');
booking.addEventListener('submit', confirmBooking);

function confirmBooking() {
    if (confirm(`---- BEKRÄFTA BOKNING ----
        Namn: \t${bname.value}\t
        Telefon: \t${bphone.value}\t
        Behandling: \t${bprice.value}\t
        Datum: \t${bdate.value}\t
        Time: \t${btime.value}\t
        Barberare: \t${bbarber.value}\t
        Meddelande: \t${bmessage.value}
`));
}
