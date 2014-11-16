// JavaScript Document
//window.onload = addListeners;
/*
function addListeners(){
    document.getElementById('img_mues_cel').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

}

function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e){
  window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
	alert("entre");
    var div = document.getElementById('img_mues_cel');
	div.style.position = 'absolute';
  div.style.top = e.clientY + 'px';
  div.style.left = e.clientX + 'px';
	alert(e.clientX);
  if(e.clientX>=10){cambioNotaMov('+');}
  if(e.clientX<=-10){cambioNotaMov('-');}
}​
*/
function cambioNotaMov(tipo){
	//alert(tipo);
	if(tipo=='-'){
		if(window.actualDocsHombre!=1){
			notaHombreActual(window.actualDocsHombre-1);
		}else{
			notaHombreActual(window.canDocsHombre);
		}
	}else{
		if(window.actualDocsHombre!=window.canDocsHombre){
			notaHombreActual(window.actualDocsHombre+1);
		}else{
			notaHombreActual(1);
		}
	}
}
function notaHombreActual(cual){
	//alert("Tipo de Nivel:"+window.tip_nivel3_hombre[cual]);
	window.actualDocsHombre=cual;
	if(window.tip_nivel3_hombre[cual]==1){
		document.getElementById("img_mues_cel").src="../carga/"+window.img_nivel3_hombre_sola[cual];
		document.getElementById("titulo_nota").innerHTML=window.tit_nivel3_hombre[cual];
		document.getElementById("par_1_txt").innerHTML="&nbsp;";
	}else{
		document.getElementById("img_mues_cel").src="../carga/"+window.nt_imagen_celular[cual];
		document.getElementById("titulo_nota").innerHTML=window.tit_nivel3_hombre[cual];
		document.getElementById("par_1_txt").innerHTML=window.txt_nivel3_hombre[cual];
		
		
	}
}