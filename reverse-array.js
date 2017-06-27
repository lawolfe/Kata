// **Created by Lauren on 6/27/2017**
//Reverse a given array and return it

function digitize(n){
    var myArr = Array.from(n);
    var reverseArr = new Array(n.length);
    document.getElementsByTagName("p").innerHTML = "myArr [" + myArr + "]";
    for(var i=0; i<n.length; i++){
        reverseArr[i] = myArr.pop(-1);
    }
    document.getElementsByTagName("p").innerHTML = "reverseArr [" + reverseArr + "]";
    return reverseArr;
}

document.getElementById("btn").onclick();{
    var userText = String(document.getElementById("txt").value);
    digitize(userText);
}