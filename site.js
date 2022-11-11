function findDay(){
    var userDay =document.getElementById('day').value;
    var resultArea = document.getElementById('result')
    var whichDay;
    if(userDay==1)
        whichDay="Monday";
    else if(userDay==2)
    whichDay= "Tuesday";
    else if(userDay==3)
    whichDay= "Wednesday";
    else if(userDay==4)
    whichDay= "Thursday";
    else if(userDay==5)
    whichDay= "Friday";
    else if(userDay==6)
    whichDay= "Saturday";
    else if(userDay==7)
    whichDay= "Sunday";
    else{
    resultArea.innerHTML = "<span style='color:red;'>Please write a number 1 to 7!</span>"; 
    return;
}
    resultArea.innerHTML= "Today is " + whichDay;
}
