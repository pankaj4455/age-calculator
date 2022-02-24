

function btn(){
    var dob=document.getElementById('dob').value;
    
    var d=new Date(dob);
    var dyaer=d.getFullYear();
    var dmonth=d.getMonth();
    var dday=d.getDate();




var now =new Date();
var year=now.getFullYear();
var month=now.getMonth();
var day=now.getDate();
var age=year-dyaer;
if(age){
    age--;
    console.log(age);
}
var months;
if(month>dmonth){
    months=month-dmonth;

}
else{
    months=month+12-dmonth;
}
var days;
if(day>dday){
    days=day-dday;
}
else{
    days=day+30-dday;
}
document.getElementById('result').innerHTML=` ${age} age ${months} month ${days} day `;

}