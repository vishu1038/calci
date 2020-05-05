function disp(x) {
	document.getElementById('out-val').innerHTML+=x;
}

function clr() {
	document.getElementById('out-val').innerHTML="";
	document.getElementById('hist-val').innerHTML="";
}

function solve()
{
	var x=document.getElementById('out-val').innerHTML;
	let y=eval(x);
	document.getElementById('hist-val').innerHTML=x;
	document.getElementById('out-val').innerHTML=y;
}

function back()
{
	var x=document.getElementById('out-val').innerHTML;
	x=x.substring(0,x.length-1);
	document.getElementById('out-val').innerHTML=x;
}