const sets = [["set11q1", "set11a1", "set11q2", "set11a2"], ["set12q1", "set12a1", "set12q2", "set12a2"]];
let set = -1;
let card = 0;
document.getElementById("list11").onclick = function(){
    //document.getElementById("outputText").innerHTML = document.getElementById("text1").value;
    //document.getElementById("button").style.display = "none";
    //document.getElementById("list11").style = "background-color: rgb(70, 70, 70);";
    startSet(11);
}
document.getElementById("list12").onclick = function(){
    startSet(12);
}
document.getElementById("list13").onclick = function(){
    startSet(13);
}
document.getElementById("list14").onclick = function(){
    startSet(14);
}
document.getElementById("list15").onclick = function(){
    startSet(15);
}
function startSet(listName){
    document.getElementById("list11").style = "background-color: rgb(39, 39, 39);";
    document.getElementById("list12").style = "background-color: rgb(39, 39, 39);";
    document.getElementById("list13").style = "background-color: rgb(39, 39, 39);";
    document.getElementById("list14").style = "background-color: rgb(39, 39, 39);";
    document.getElementById("list15").style = "background-color: rgb(39, 39, 39);";
    document.getElementById("list" + listName.toString()).style = "background-color: rgb(70, 70, 70);";
    document.getElementById("card").innerHTML = sets[(listName-10)[1]];
}