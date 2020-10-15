var anMenu = 500
var totalMen =4
var anImas = 17
var alImas = 15
var direc = 'imasmenu'
var mas = '/mast.gif'
var menos = '/menost.gif'
var puntos = '/puntost.gif'
var puntosv = '/puntosvt.gif'
var carpeab = '/carpabiertat.gif'
var carpece = '/carpcerradat.gif'
var puntosu = '/puntosut.gif'
var doc = '/doct.gif'
var docsel = '/docselt.gif'
var carpeabsel = '/carpabiertasel.gif'
var carpecesel = '/carpcerradasel.gif'
var icHome = '/home.gif'
var puntosh = '/puntosh.gif'
function tunMen(tex, enl,dest,subOp,an){
this.tex = tex;
this.enl = enl;
this.dest = dest;
this.subOp = subOp;
this.an = an;
this.secAc = false
} 
var Op_0 = new tunMen("Manual del estudiante",null,null,0)
var Op_1 = new tunMen("Ayuda técnica",null,null,3)
var Op_1_0=new tunMen('Problemas técnicos habituales y cómo atenderlos',null,'',0)
var Op_1_1=new tunMen('Cuentas de usuario',null,'',0)
var Op_1_2=new tunMen('Servicio técnico',null,'',0)
var Op_2 = new tunMen("Mantenimiento preventivo",null,null,4)
var Op_2_0=new tunMen('Actualización de antivirus',null,'',0)
var Op_2_1=new tunMen('Optimización de rendimiento',null,'',0)
var Op_2_2=new tunMen('Cuidados preventivos',null,'',0)
var Op_2_3=new tunMen('Actualizaciones generales',null,'',0)
var Op_3 = new tunMen("Cómo aprovechar este equipo para estudiar y aprender",null,null,3)
var Op_3_0=new tunMen('Educatico',null,'',0)
var Op_3_1=new tunMen('Colección de recursos',null,'',0)
var Op_3_2=new tunMen('Software instalado en el equipo',null,'',0)

var anchoTotal = 2016; 

var tunIex=navigator.appName=="Microsoft Internet Explorer"?true:false;
if(tunIex && navigator.userAgent.indexOf('Opera')>=0){tunIex = false}
var manita = tunIex ? 'hand' : 'pointer'
var subOps = new Array()
function construye(){
cajaMenu = document.createElement('div')
// cajaMenu.style.width = anMenu + "px"
document.getElementById('tunMe').appendChild(cajaMenu)
for(m=0; m < totalMen; m++){
	opchon = eval('Op_'+m)
	ultimo = false
	try{
	eval('Op_' + (m+1))
	}
	catch(error){
	ultimo = true
	}
	boton = document.createElement('div')
	boton.style.position = 'relative'
	boton.className = 'botones'
	boton.style.paddingLeft= 0
	carp = document.createElement('img')
	carp.style.marginRight = 5 + 'px'	
	carp.style.verticalAlign = 'middle'
	carp2 = document.createElement('img')
	carp2.style.verticalAlign = 'middle'


	enla = document.createElement('a')
	if(opchon.subOp > 0){
		carp2.style.cursor = manita
		carp2.src = direc + mas
		boton.secAc = opchon.secAc
		}
	else{
		carp2.style.cursor = 'default'
		enla.className = 'enls'
		if(ultimo){carp2.src = direc + puntosu}
		else{carp2.src = direc + puntos}
		}
		if(m == 0){
		carp.src = direc + icHome
		carp2.src = direc + puntosh
		}
	else{
		carp.src = direc + carpece
		}
	boton.appendChild(carp2)
	boton.appendChild(carp)
	enla.className = 'enls'
	enla.style.cursor = manita
	boton.appendChild(enla)
	enla.appendChild(document.createTextNode(opchon.tex))
	if(tunIex){
		enla.onmouseover = function(){this.className = 'botonesHover'}
		enla.onmouseout = function(){this.className = 'enls'}
		}
	if(opchon.enl != null && opchon.subOp == 0){
			enla.href = opchon.enl
			}
		if(opchon.dest != null && opchon.subOp == 0){
			enla.target = opchon.dest;
			}
	boton.id = 'op_' + m
	
	cajaMenu.appendChild(boton)
	if(opchon.subOp > 0 ){
		carp2.onclick= function(){
		abre(this.parentNode,this,this.nextSibling)
		}
		subOps[subOps.length] = boton.id.replace(/o/,"O")
		enla.onclick = function(){
			abre(this.parentNode,this.parentNode.firstChild,this.previousSibling)
			}
		}
	}
if(subOps.length >0){subMes()}
}
function subMes(){
lar = subOps.length
for(t=0;t<subOps.length;t++){
	opc =eval(subOps[t])
	for(v=0;v<opc.subOp;v++){
		if(eval(subOps[t] + "_" + v + ".subOp") >0){
			subOps[subOps.length] = subOps[t] + "_" + v
			}
		}
	}
construyeSub()
}
var fondo = true
function construyeSub(){
for(y=0; y<subOps.length;y++){
opchon = eval(subOps[y])
capa = document.createElement('div')
capa.className = 'subMe'
capa.style.position = 'relative'
capa.style.display = 'none'
if(!fondo){capa.style.backgroundImage = 'none'}
document.getElementById(subOps[y].toLowerCase()).appendChild(capa)
	for(s=0;s < opchon.subOp; s++){
		sopchon = eval(subOps[y] + "_" + s)
		ultimo = false
		try{
			eval(subOps[y] + "_" + (s+1))
			}
		catch(error){
			ultimo = true
			}
			if(ultimo && sopchon.subOp > 0){
			fondo = false
			}
		opc = document.createElement('div')
		opc.className = 'botones'
		opc.id = subOps[y].toLowerCase() + "_" + s

		if(tunIex){
			}
		enla = document.createElement('a')
		enla.className = 'enls'
		// enla.tex = this.tex
		texto = enla.tex
		enla.id = "opcion"+y+"_"+s
		enla.onclick= function(){
			
			mostrarInfo(this.id);
 		}
		enla.style.cursor = manita
		if(sopchon.enl != null && sopchon.subOp == 0){
			enla.href = sopchon.enl
			if(sopchon.dest != null && sopchon.subOp == 0){
				enla.target = sopchon.dest
				}
			}
		
		enla.appendChild(document.createTextNode(sopchon.tex))
		capa.appendChild(opc)
		carp = document.createElement('img')
		carp.src = direc + carpece
		carp.style.verticalAlign = 'middle'
		carp.style.marginRight = 5 + 'px'
		carp2 = document.createElement('img')
		carp2.style.verticalAlign = 'middle'
		if(sopchon.subOp > 0){
			opc.secAc = sopchon.secAc
			carp2.style.cursor = manita
			carp2.src = direc + mas
				enla.onclick = function(){
				abre(this.parentNode,this.parentNode.firstChild,this.previousSibling)
				}
			carp2.onclick= function(){
			abre(this.parentNode,this,this.nextSibling)
			}
			if(tunIex){
			enla.onmouseover = function(){this.className = 'botonesHover'}
			enla.onmouseout = function(){this.className = 'enls'}
			}
			}
		else{
			carp2.style.cursor = 'default'
			carp.src = direc + doc
			if(ultimo){carp2.src = direc + puntosu; 
			if(sopchon.subOp > 0){alert('hola');capa.style.backgroundImage = 'none'}
			}
			else{carp2.src = direc + puntos}
				}
		opc.appendChild(carp2)
		opc.appendChild(carp)
		opc.appendChild(enla)
		
		}
	}
Seccion()
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
			mostrarManuales();
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

function abre(cual,im,car){
abierta = cual.lastChild.style.display != 'none'? true:false;
if(abierta){
	cual.lastChild.style.display = 'none'
	im.src = direc + mas
	if(cual.secAc){
		car.src = direc + carpecesel
		
		}
	else{car.src = direc + carpece}
	}
else{
	cual.lastChild.style.display = 'block'
	im.src = direc + menos
	if(cual.secAc){car.src = direc + carpeabsel}
	else{car.src = direc + carpeab}
	}
}
var seccion = null
function Seccion(){
if (seccion != null){
	if(seccion.length == 4){
		document.getElementById(seccion.toLowerCase()).firstChild.nextSibling.src = direc + carpeabsel
		document.getElementById(seccion.toLowerCase()).lastChild.className = 'secac2'
		document.getElementById(seccion.toLowerCase()).lastChild.onmouseover = function(){
			this.className = 'enls'
			}
		document.getElementById(seccion.toLowerCase()).lastChild.onmouseout = function(){
			this.className = 'secac2'
			}
		}
	else{
		document.getElementById(seccion.toLowerCase()).firstChild.nextSibling.src = direc + docsel
		document.getElementById(seccion.toLowerCase()).firstChild.nextSibling.nextSibling.className = 'secac'
		document.getElementById(seccion.toLowerCase()).parentNode.parentNode.lastChild.previousSibling.className = 'secac2' 
		//
			document.getElementById(seccion.toLowerCase()).parentNode.parentNode.lastChild.previousSibling.onmouseout = function(){
			this.className = 'secac2'
			}
			if(!tunIex){
			document.getElementById(seccion.toLowerCase()).parentNode.parentNode.lastChild.previousSibling.onmouseover = function(){
			this.className = 'enls'
			}
		}
		document.getElementById(seccion.toLowerCase()).parentNode.parentNode.secAc = true
		seccion = seccion.substring(0,seccion.length - 2)
		seccionb = document.getElementById(seccion.toLowerCase())
		abre(seccionb,seccionb.firstChild,seccionb.firstChild.nextSibling)
		if(seccion.length > 4){
		lar = seccion.length
			for(x = lar; x > 4; x-=2){
				seccion = seccion.substring(0,seccion.length - 2)
				seccionb = document.getElementById(seccion.toLowerCase())
				abre(seccionb,seccionb.firstChild,seccionb.firstChild.nextSibling)
				}
			}
		}
	}
}
onload = construye