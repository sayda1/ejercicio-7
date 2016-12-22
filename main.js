function evaluar()
{
	var aSmile = document.getElementById("mono_a").checked;
	var bSmile = document.getElementById("mono_b").checked;
	var salida = document.getElementById("salida");
    
	if(aSmile == "2" && bSmile=="2")
	{
		//problemas
		salida.innerHTML = "1";
	}else{
		//NO hay problema
		salida.innerHTML = "0";
	}  
}