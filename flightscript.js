function calCount() {
    var Count = 0;
    var nam = 0;
    nam = document.getElementById("num1");
    console.log(nam);
    Count += parseInt(nam.value);
    nam = document.getElementById("num2");
    Count += parseInt(nam.value);
    console.log(Count);
    if (Count <= 9) {
        document.getElementById("passengers_count").innerHTML = Count;
        document.getElementById("con_message").style.display = "none";
    } else {
        document.getElementById("con_message").style.display = "block";
    }
}

function displayList() {
    if (document.getElementById("passdrop").style.display == "block") {
        document.getElementById("passdrop").style.display = "none";
    }
    else {
        document.getElementById("passdrop").style.display = "block";
    }

}

document.addEventListener('mouseup', function (e) {
    var container = document.getElementById('passdrop');
    var head = document.getElementById('passe');
    if (head.contains(e.target)) {
        return;
    }
    else if (!container.contains(e.target)) {
        container.style.display = "none";
    }
});

function redirect(direction) {
    window.location.href = direction;
}