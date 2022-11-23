const sets = [["set11q1", "set11a1", "set11q2", "set11a2", "set11q3", "set11a3"], ["set12q1", "set12a1", "set12q2", "set12a2", "set12q3", "set12a3"], ["set13q1", "set13a1", "set13q2", "set13a2", "set13q3", "set13a3"], ["set14q1", "set14a1", "set14q2", "set14a2", "set14q3", "set14a3"], ["set15q1", "set15a1", "set15q2", "set15a2", "set15q3", "set15a3"]];
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
document.getElementById("know").onclick = function(){
    if(card%2 == 0){
        if(card == sets[set].length - 2){
            document.getElementById("list1" + (set+1).toString()).style = "background-color: rgb(0, 255, 0);";
        }else{
            card+=2;
        }
    }else{
        if(card == sets[set].length - 1){
            document.getElementById("list11").style = "background-color: rgb(0, 255, 0);";
        }else{
            card++;
        }
    }
    document.getElementById("card").innerHTML = sets[set][card];
}
document.getElementById("card").onclick = function(){
    if(card % 2 == 0){
        card++;
    }else{
        card--;
    }
    document.getElementById("card").innerHTML = sets[set][card];
}
function startSet(listName){
    document.getElementById("list11").style = "background-color: rgb(39, 39, 39);";
    document.getElementById("list12").style = "background-color: rgb(39, 39, 39);";
    document.getElementById("list13").style = "background-color: rgb(39, 39, 39);";
    document.getElementById("list14").style = "background-color: rgb(39, 39, 39);";
    document.getElementById("list15").style = "background-color: rgb(39, 39, 39);";
    document.getElementById("list" + listName.toString()).style = "background-color: rgb(70, 70, 70);";
    document.getElementById("card").disabled = false;
    document.getElementById("know").disabled = false;
    document.getElementById("dont").disabled = false;
    document.getElementById("card").style = "padding: 50px 10px; display: inline-block; margin: 0px 0px; font-size: 40px; color: rgb(255, 255, 255); box-sizing: content-box; width: 50%; height: 37%;";
    document.getElementById("card").innerHTML = sets[listName - 11][0];
    set = listName - 11;
    card = 0;
}