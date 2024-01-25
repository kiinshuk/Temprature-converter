const temp = Number(document.getElementById("temp").value);
const tofer = document.getElementById("tof");
const toCel = document.getElementById("toc");
let result;

function convert(){
if (tofer.checked){
    result = (temp * 9/5) + 32;
    document.getElementById("result").textContent = result.toFixed(1) + "°F";
}
else if(toCel.checked){
    result = (temp - 32) * 5/9;
    document.getElementById("result").textContent = result.toFixed(1) + "°C";
}
else{
    document.getElementById("result").textContent = "please check the radio button";
}
}