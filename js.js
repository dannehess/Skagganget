let x = document.getElementById("myTopnav");
function myHamburger() {
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}

function changeLogo(MyImage) {
    MyImage.src = "images/beardhover.png";
}
function normalLogo(MyImage) {
    MyImage.src = "images/beard.png";
}

let i = 0;
let path = ['images/1.jpg', 'images/3.jpeg', 'images/5.jpeg', 'images/2.jpg'];

function swapImage() {
    document.getElementById('slide').src = path[i];
    if (i < path.length - 1) i++;
    else i = 0;
    setTimeout("swapImage()", 3000);
}
window.onload = swapImage;



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

function both() {
    swapImage();
    citat();
}

window.onload = both();




let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');


name.oninput = checkName;
email.oninput = checkEmail;
message.oninput = checkMessage;


function checkName() {
    if (name.value.length <= 5) {
        name.style.backgroundColor = '#FFCCCC';
    }
    else {
        name.style.backgroundColor = 'white';
    }
}
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

function checkMessage() {
    if ((message.value.length == '') ||
        (message.value.length <= 10)) {
        message.style.backgroundColor = '#FFCCCC';
    }
    else {
        message.style.backgroundColor = 'white';
    }
}

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
