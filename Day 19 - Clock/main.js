title.innerHTML="Time Js";


function time() {
var d = new Date();
document.getElementById("tx").innerHTML = d.toLocaleTimeString();
}
setInterval(time, 1000);