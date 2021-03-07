nameofstudentarray=[];

function submit()
{
var displaystudentarray=[];

for  (var j=1;j <= 4;j++)
{
    var nameofstudent=document.getElementById("nameofstudent"+j).value
    console.log(nameofstudent);
    nameofstudentarray.push(nameofstudent);
}
console.log(nameofstudentarray);
var lenthofnameofstudentarray=nameofstudentarray.length;
console.log(lenthofnameofstudentarray);
for (var k=0;k < lenthofnameofstudentarray;k++)
{
    displaystudentarray.push("<h4>NAME-"+nameofstudentarray[k] +"</h4>")
}
console.log(displaystudentarray)
document.getElementById("displaynamewithcommas").innerHTML=displaystudentarray;
var removecommas=displaystudentarray.join("")
console.log(removecommas)
document.getElementById("displaynamewithoutcommas").innerHTML=removecommas;
document.getElementById("submitbutton").style.display="none";
document.getElementById("sortbutton").style.display="inline-block";
}
function sorting()
{
nameofstudentarray.sort();
console.log(nameofstudentarray)
document.getElementById("displayname").innerHTML=nameofstudent,rray;
}