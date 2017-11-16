function Search()
{
var http=new XMLHttpRequest();
var lookup= document.getElementById("country").value;
http.onreadystatechange=function()
{
if (this.readyState == 4 && this.status == 200)
{
document.getElementById("result".innerHTML=this.responseText;
alert(this.responseText.replace(<\/?[^>+(>|$)/g,""));
}
};
if(document.getElementById('allChkBox').checked)
{
var address="world.php?all=true";
}
else
{
var address="world.php?country="+query;
}
http.open("GET",address,true);
http.send("");
}