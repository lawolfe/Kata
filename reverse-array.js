// **Created by Lauren on 6/27/2017**
//Reverse a given array and return it

function digitize(n) {
    var yourArr = Array.from(n);
    var reverseArr = new Array(n.length);
    for(var i=0; i<n.length; i++) {
        reverseArr[i] = yourArr.pop(-1);
        var reversed = String(reverseArr).replace( /,/g,"");
    }
    document.getElementById("demo").innerHTML = "Reverse: " + reversed;
    return reversed;
}

function formSubmit() {
    var txtInput = document.getElementById("txt").value;
    document.getElementById("btn").addEventListener("click", digitize(txtInput));
}

window.onload = function(){
    document.getElementById("txt").focus();
};