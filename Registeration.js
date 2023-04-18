window.onclick = function (event) {
    var modal = document.getElementById('id01');
    if (event.target == modal) {
        window.location.href = "index.html";
    }
}

let E_mail = ['Basil@gmail.com', 'Nouran@gmail.com', 'Zoz@gmail.com', '', ''];
let Password = ['Basil5656', 'Nourannn', 'Zoz12345', '', ''];

let email = document.getElementById("Email").value;
let Pass = document.getElementById("pass").value;

function Valid() {

    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3}) +$/;
    if (document.getElementById("Email").value.match(mailformat)) {
        alert("Invalid Email address");
    }

    if (document.getElementById("Email").value.indexOf("@") == -1 || document.getElementById("Email").value.indexOf(".") == -1) {
        alert("Invalid Email address");
    }

    if (document.getElementById("Email").value == "") {
        alert("!!Email Must Be Set");
    }

    if (document.getElementById("pass").value.length < 8) {
        alert("!!Password Must Be Set More Than 8 Characters!!");
    }

    if (document.getElementById("pass").value.length >= 8 &&
        document.getElementById("Email").value != "") {

        for (i = 0; i < 5; i++) {
            if (E_mail[i] != "") {
                E_mail[i + 1] = document.getElementById("Email").value;
                Password[i + 1] = document.getElementById("pass").value;
                document.location.href = "explore.html";
            }
            else if (email == E_mail[i]) {
                Password[i] = document.getElementById("pass").value;
                document.location.href = "explore.html";
            }
            else {
                E_mail[i] = document.getElementById("Email").value;
                Password[i] = document.getElementById("pass").value;
                document.location.href = "explore.html";
            }
            console.log("Username" + E_mail[i]);
            console.log("Password" + Password[i]);
        }
    }
}