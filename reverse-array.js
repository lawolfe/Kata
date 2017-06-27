// **Created by Lauren on 6/27/2017**
//Reverse a given array and return it

function digitize(n) {
    var yourString = Array.from(n);
    var reverseString = new Array(n.length);
    for(var i=0; i<n.length; i++) {
        reverseString[i] = yourString.pop(-1);
    }
    document.getElementById("demo").innerHTML = "Reverse: " + reverseString;
}

function formSubmit() {
    var txtInput = document.getElementById("txt").value;
    document.getElementById("btn").addEventListener("click", digitize(txtInput));
}
