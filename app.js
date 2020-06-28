function getNumber(num){
    var inp = document.getElementById("inp");
    inp.value +=num;
}

function getClear(){
    var inp = document.getElementById("inp");
    inp.value = "";
}

function getResult(){
    var inp = document.getElementById("inp");
    inp.value = eval(inp.value)
    
}

function getDel(){
    var inp = document.getElementById("inp");
    inp.value = inp.value.slice(0,-1)
}