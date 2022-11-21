document.getElementById("list11").onclick = function(){
    //document.getElementById("outputText").innerHTML = document.getElementById("text1").value;
    //document.getElementById("button").style.display = "none";
    //document.getElementById("list11").style = "background-color: rgb(70, 70, 70);";
    startSet("list11");
}
document.getElementById("list12").onclick = function(){
    startSet("list12");
}
document.getElementById("list13").onclick = function(){
    startSet("list13");
}
document.getElementById("list14").onclick = function(){
    startSet("list14");
}
document.getElementById("list15").onclick = function(){
    startSet("list15");
}
function startSet(listName){
    document.getElementById("list11").style = "background-color: rgb(39, 39, 39);";
    document.getElementById("list12").style = "background-color: rgb(39, 39, 39);";
    document.getElementById("list13").style = "background-color: rgb(39, 39, 39);";
    document.getElementById("list14").style = "background-color: rgb(39, 39, 39);";
    document.getElementById("list15").style = "background-color: rgb(39, 39, 39);";
    document.getElementById(listName).style = "background-color: rgb(70, 70, 70);";
}