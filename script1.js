var grades = [95,90,85,80,75,70,92,88,83,73]
var sum;
//10
alert("There are " + grades.length + " items in the array.");
//Array displayed
alert("Here is the data within the array: " + grades);

function getAvg() {
    var sum=0;
    for (i=0; i<grades.length; i++) { 
        sum+=grades[i];
    }
    console.log(sum);
    alert("This is the sum of all of the numbers in the array is " + sum + ".");

    function divid() {
    
        var avg=(sum/grades.length);
        console.log(avg);
        alert("The average of the numbers within the array = "+ avg);

    }

    divid(sum);
    
    

};

getAvg(grades);

