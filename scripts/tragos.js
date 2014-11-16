// JavaScript Document
function abrirVentana(ventana)
	{
		if (ventana=="1")
		{
			document.getElementById("cel-menu_expand").style.visibility="visible";
			document.getElementById("cel-fondo_negro").style.visibility="visible";
			document.getElementById("c_menu_2").style.visibility="visible";
			document.getElementById("x").style.visibility="visible";;
			
		}
		else
		{
			document.getElementById("tragos_abierto").style.visibility="visible";
			document.getElementById("cel-fondo_negro").style.visibility="visible";
			document.getElementById("c_menu_2").style.visibility="hidden";
			document.getElementById("x").style.visibility="hidden"
		}

	}

	function cerrarVentana()
	{
		document.getElementById("cel-menu_expand").style.visibility="hidden";
		document.getElementById("cel-fondo_negro").style.visibility="hidden";
		document.getElementById("c_menu_2").style.visibility="hidden";
		document.getElementById("x").style.visibility="hidden"
		document.getElementById("tragos_abierto").style.visibility="hidden"
	}
	function abrirTrago(cual){
		//alert(cual);
		document.getElementById('trago_nombre').innerHTML=lostragos[cual].nombre;
		document.getElementById('trago_img').src=lostragos[cual].imagen;
		document.getElementById('trago_descipt').innerHTML="<b>Cocteler&iacute;a: </b>"+lostragos[cual].tipo+"</br></br>";
		document.getElementById('trago_descipt').innerHTML+="<b>Descripci&oacute;n: </b>"+lostragos[cual].descripcion+"</br></br>";
		document.getElementById("tragos_abierto").style.visibility="visible";
		document.getElementById("cel-fondo_negro").style.visibility="visible";
	}