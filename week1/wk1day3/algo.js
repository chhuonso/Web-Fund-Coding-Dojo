function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2)




function reverse(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        }
        return arr ;
    }

    
var result1 = reverse( ["a", "b", "c", "d", "e"] );
console.log(result1);
    
var result2 = reverse( [3, 2, 1, 1, 2, 3] );
console.log(result2)

var number = 1;
var letters = ["A", "B", "C", "D", "E"]
function compute(){
    for(var i = 0; i < letters.length; i++){
        if(i == 1){
            number = number + number * number
            return number + letters[i]
        }
    }
    return number + letters[i]
}
var answer = compute();
console.log(answer);


function Something(arr){
    var result = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 10){
            console.log("We got a big one!");
        } else {
            result+=arr[i]
        }
    }
    if(result < 10){
        console.log("You're killin' me, Smalls");
    } else {
        return "You're gonna need a bigger funcion!";
    }
}
Something([1,8,21,-11,12,2,9,15,7]);