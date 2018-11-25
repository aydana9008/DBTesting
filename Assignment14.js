//task 1
var numbers = Array();
function firstLast6(numbers) {
    if (numbers[0]==6 || numbers[numbers.length-1] ==6) {
        console.log(true);
    }else{
        console.log(false);
    }
}
firstLast6([1,2,6]);
firstLast6([6,1,2,3]);
firstLast6([13,6,1,2,3]);



//task 2
function sameFirstLast(numbers) {
    if (numbers.length>1) {
        if(numbers[0]==numbers[numbers.length-1]) {
            console.log(true);
        }else{
            console.log(false);
        }
    }else{
        console.log("not a valid array");
    }
}
sameFirstLast([1,2,3]);
sameFirstLast([1,2,3,1]);
sameFirstLast([1,2,1]);
sameFirstLast([1]);



//task 3
function commonEnd(array1, array2) {
    if(array1.length>1 && array2.length>1) {
        if (array1[0]==array2[0] || array1[array1.length-1]==array2[array2.length-1]) {
            console.log(true);
        }else{
            console.log(false);
        }
    }else{
        if (array1.length<=1) {
            console.log("array1 is not a valid array");
        }if (array2.length<=1) {
            console.log("array2 is not a valid array");
    }
}
}
commonEnd([1,2,3],[7,3]);
commonEnd([1,2,3],[7,3,2]);
commonEnd([1,2,3],[1,3]);
commonEnd([1],[7,3]);
commonEnd([1,2,3],[1]);


//task 4 
function sum(numbers) {
    var sum=0;
    for (var i=0; i<numbers.length; i++) {
        sum=sum+numbers[i];
    }
    console.log("sum is "+sum);
}
sum([1,2,3]);
sum([5,11,2]);
sum([7,0,0]);
sum([3,-2,10,4]);


//task 5 
function rotateLeft(numbers) {
    var rotated = Array(); 
    for (var i=numbers.length-1; i>=0; i--) {
        rotated.push(numbers[i]);
    }    
    console.log(rotated);  
}//
rotateLeft([1,2,3]);
rotateLeft([5,11,9]);
rotateLeft([7,0,0]);
rotateLeft([17,12,10,8]);


//task 6
function maxEnd(numbers) {
    var max = numbers[0]
    for (var i=1; i<numbers.length; i++) {
        if (numbers[i]>max) {
            max = numbers[i];
        }
    }
    for (var j=0; j<numbers.length; j++) {
        numbers[j]=max;
    }
    console.log(numbers);
}
maxEnd([1,2,3]);
maxEnd([11,5,9]);
maxEnd([2,11,17]);


//task 7
function makeEnds(array1,array2) {
    array2[0]=array1[0];
    array2[1]=array1[array1.length-1];
    console.log(array2);
}
makeEnds([1,2,3],[]);
makeEnds([1,2,3,4],[]);
makeEnds([7,4,6,2],[]);


//task 8
function has23(myArray) {
    var result;
    for (var i=0; i<myArray.length; i++) {
        if (myArray[i]==2 || myArray[i]==3) {
            result = true;
            break;
        } else {
            result = false;
        }
    }
    console.log(result);
}
has23([2,5]);
has23([4,3]);
has23([4,5]);


//task 9
function makeLast(numbers) {
    var newArray=Array();
    newArray.length = 2*numbers.length;
    for (var i=0; i<newArray.length-1; i++) {
        newArray[i]=0;
    }
    newArray[newArray.length-1] = numbers[numbers.length-1];
    console.log(newArray);
}
makeLast([4,5,6]);
makeLast([1,2]);
makeLast([3]);


//task 10
function double23(array) {
    var counter1=0;
    var counter2=0;
    for (var i=0; i<array.length; i++) {
       if (array[i]==2) {
           counter1=counter1+1;
       } else if (array[i]==3) {
           counter2=counter2+1;
       }
    }
    if (counter1==2 || counter2==2) {
        console.log(true);
    } else {
        console.log(false);
    }
}

double23([2,2]);
double23([3,3]);
double23([2,3]);
double23([12,20,42]);
double23([2,2,2]);


