// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }


var divs = document.getElementsByClassName("enls");
    
    //Recorres la lista de elementos seleccionados
    for (var i=0; i< divs.length; i++) {
        //Añades un evento a cada elemento
        divs[i].addEventListener("click",function() {
			mostrarInfo(this.id);
        });
    }

	function mostrarInfo(opcion) {
		console.log(opcion);
		var texto = document.getElementById(opcion)
		var valor2 = texto.childNodes[0].textContent;
		switch (opcion) {
			case "opcion0_0": 
				document.getElementById("contenedor").innerHTML = "<div class='text-center'><h3>"+valor2+"</h3><br><iframe width='560' height='315' src='https://www.youtube.com/embed/gn_SVvY68lE' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>";
			break;
			case "opcion2_0": 
			document.getElementById("contenedor").innerHTML = "<div class='text-center'><video width='90%' height='90%' controls><source src='manuales/videos/video_educatico.mp4' type='video/mp4'>	Your browser does not support the video tag.</video></div>";
			break;
			case "opcion2_1": 
			document.getElementById("contenedor").innerHTML = "<div class='text-center'><video width='90%' height='90%' controls><source src='manuales/videos/video_coleccion.mp4' type='video/mp4'>	Your browser does not support the video tag.</video></div>";
			break; 
			case "opcion2_2": 
				renderManualesApps();
			break;
			default:
				document.getElementById("contenedor").innerHTML = "<h3>Dió clic a " + opcion+" ("+valor2+")</h3>";
				break;
		}	
	}
	
	function mostrarManuales() {
	  let manuales = ["<a href='manuales/software/Manual-AtubeCatcher.pdf' target='_blank'>Atube Catcher</a>", "<a href='manuales/software/Manual-Kahoot.pdf' target='_blank'>Kahoot</a>","<a href='manuales/software/Manual-Plickers.pdf' target='_blank'>Plickers</a>", "<a href='manuales/software/microsoft-teams-estudiantes.pdf' target='_blank'>Microsoft Teams</a>","<a href=''>Manual 5</a>", "<a href=''>Manual 6</a>","<a href=''>Manual 7</a>", "<a href=''>Manual 8</a>","<a href=''>Manual 9</a>", "<a href=''>Manual 10</a>","<a href=''>Manual 11</a>", "<a href=''>Manual 12</a>"];
	  console.log("Mostrar manuales");
	  var encabezado = "<div class='text-center'><h4>Manuales uso del software instalado en este equipo</h4></div>"
	  document.getElementById("contenedor").innerHTML=encabezado;
	  // Obtenemos la referencia del elemento body
	var body = document.getElementsByTagName("body")[0];
	// Creamos un elemento <table> y un elemento <tbody>
	var tabla = document.createElement("table");
	tabla.setAttribute('class', 'table borderless');
	var tblBody = document.createElement("tbody");
	// Creamos las celdas
	contador=0;
	for (var i = 0; i < 4; i++) {
	  // Creamos las hileras de la tabla
	  var fila = document.createElement("tr");
	  for (var j = 0; j < 3; j++) {
		// Crea un elemento <td> y un nodo de texto, hace que el nodo de
		// texto sea el contenido de <td>, ubica el elemento <td> al final
		// de la hilera de la tabla
		var celda = document.createElement("td");
		var textoCelda = manuales[contador];
		contador++;
		console.log(textoCelda);
		celda.innerHTML=textoCelda;
		fila.appendChild(celda);
	  }
	// agregamos la hilera al final de la tabla (al final del elemento tblbody)
	tblBody.appendChild(fila);
	}
	// posicionamos el <tbody> debajo del elemento <table>
	tabla.appendChild(tblBody);
	// appends <table> into <body>
	body.appendChild(tabla);
	// modifica el atributo "border" de la tabla y lo fija a "2";
	tabla.setAttribute("border", 0);
	tabla.setAttribute("id", "tabla");
	var result = document.getElementById("contenedor");
	result.appendChild(tabla);
		  
	}


	const renderManualesApps=()=> {
		const contenedor= document.getElementById("contenedor");
		console.log("contenedor", contenedor);
		console.log("manuales",aplicativos);
		var tarjetas;
		tarjetas=  tarjeta("Prueba 1") +"<br>"+ tarjeta("Prueba 2");
		
		contenedor.innerHTML= tarjetas;

	}