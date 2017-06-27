//Created by Lauren on 6/27/2017

function digitize(n){
    var myArr = Array.from(n);
    var reverseArr = new Array(n.length);
    console.log("myArr [" + myArr + "]");
    for (var i=0; i<n.length; i++){
        var last = myArr.pop(-1);
        reverseArr[i] = last;
    }
    console.log("reverseArr [" + reverseArr + "]");
    return reverseArr;
}

digitize(String(35231));
