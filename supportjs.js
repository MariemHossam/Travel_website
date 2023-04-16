function start() {
    let agent_mes1 = document.createElement("div");
    agent_mes1.innerHTML = "Hi, I'm your Virtual Agent 👋"
    agent_mes1.setAttribute("class", "left")
    let con1 = document.createElement("div");
    con1.setAttribute("class", "msg_con1");
    document.getElementById("mes_area").appendChild(con1);
    con1.appendChild(agent_mes1);
    let agent_mes2 = document.createElement("div");
    agent_mes2.innerHTML = "I’m here 24/7 to help with your travel plans. To continue to improve your experience, this conversation may be recorded. If at any point I’m not able to assist you, I’ll connect you to an agent who can. What would you like to do?"
    agent_mes2.setAttribute("class", "left")
    let con2 = document.createElement("div");
    con2.setAttribute("class", "msg_con1");
    document.getElementById("mes_area").appendChild(con2);
    con2.appendChild(agent_mes2);
    console.log("1");
}

function Conve() {
    var m = document.getElementById("text");
    var msg = m.value;
    console.log(msg.length);
    if (msg == undefined || msg == "") {

    }
    else {
        let con1 = document.createElement("div");
        con1.setAttribute("class", "msg_con1");
        let msg_req = document.createElement("div");
        msg_req.setAttribute("class", "right");
        msg_req.innerHTML = msg;

        var message = document.getElementById("mes_area");
        message.appendChild(con1);
        con1.appendChild(msg_req);
        let con2 = document.createElement("div");
        con2.setAttribute("class", "msg_con1");
        let msg_res = document.createElement("div");
        msg_res.setAttribute("class", "left");
        var message = document.getElementById("mes_area");
        message.appendChild(con2);
        con2.appendChild(msg_res);
        msg_res.innerHTML = "thank you for the information, someone will get back to you shortly";
    }
    document.getElementById("text").value = "";
    document.getElementById("mes_area").scrollTop = document.getElementById("mes_area").scrollHeight;
}
document.addEventListener('keypress', function (event) {

    if (event.keyCode == 13) {
        Conve(); 
    }
});