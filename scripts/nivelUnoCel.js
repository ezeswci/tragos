// JavaScript Document
// Domuento creado por ezequiel Wernicke
window.abierto=0;
function abrirUnoCerrarResto(cual){
	if(cual==1){
		if(window.abierto!=1){
		document.getElementById("open_a").style.display="inline";
	document.getElementById("open_b").style.display="none";
	document.getElementById("open_c").style.display="none";
	window.abierto=1;
	document.getElementById("op1").className="a select";
	document.getElementById("op2").className="b";
	document.getElementById("op3").className="c";
	}else{cerrarTodos();}
	}else if(cual==2){
		if(window.abierto!=2){
	document.getElementById("open_a").style.display="none";
	document.getElementById("open_b").style.display="inline";
	document.getElementById("open_c").style.display="none";
	document.getElementById("op1").className="a";
	document.getElementById("op2").className="b select";
	document.getElementById("op3").className="c";
	window.abierto=2;
	}else{cerrarTodos();}
		}else{
			if(window.abierto!=3){
		document.getElementById("open_a").style.display="none";
	document.getElementById("open_b").style.display="none";
	document.getElementById("open_c").style.display="inline";
	document.getElementById("op1").className="a";
	document.getElementById("op2").className="b";
	document.getElementById("op3").className="c select";
	window.abierto=3;
	}else{cerrarTodos();}
			}
}
function cerrarTodos(){
	document.getElementById("open_a").style.display="none";
	document.getElementById("open_b").style.display="none";
	document.getElementById("open_c").style.display="none";
	document.getElementById("op1").className="a";
	document.getElementById("op2").className="b";
	document.getElementById("op3").className="c";
	window.abierto=0;
}