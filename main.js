function disp(x) {
	var operator=document.getElementsByClassName('operator');
	var c=0;
	for(var i=0;i<operator.length;i++) {
		if(x==operator[i].id){
			c++;
		}
	}
	if(c==1) {
		if (document.getElementById('out-val').innerHTML!="") {
			var l=document.getElementById('out-val').innerHTML.length;
			var y=document.getElementById('out-val').innerHTML;
			z=y[l-1];
			var d=0;
			for(var j=0;j<operator.length;j++) {
				if(z==operator[j].id) {
					d=1;
				}
			}
			if(d==1) {
				y=y.substring(0,l-1);
				y+=x;
				document.getElementById('out-val').innerHTML=y;
			}
			else {
				document.getElementById('out-val').innerHTML+=x;
			}
		}
	}
	else {
		document.getElementById('out-val').innerHTML+=x;
	}
}

function clr() {
	document.getElementById('out-val').innerHTML="";
	document.getElementById('hist-val').innerHTML="";
}

function solve()
{
	if (document.getElementById('out-val').innerHTML!="") {
		var x=document.getElementById('out-val').innerHTML;
		let y=eval(x);
		document.getElementById('hist-val').innerHTML=x;
		document.getElementById('out-val').innerHTML=y;
	}
}

function back()
{
	var x=document.getElementById('out-val').innerHTML;
	x=x.substring(0,x.length-1);
	document.getElementById('out-val').innerHTML=x;
}