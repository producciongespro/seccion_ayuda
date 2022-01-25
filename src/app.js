import React, { useState } from 'react';
import Encabezado from './componentes/Encabezado';
import Menu from './componentes/Menu';
import ManualesSoftware from './componentes/ManualesSoftware';
import ContenedorDeManual from './componentes/ContenedorDeManual';
import Tarjetas from './componentes/Tarjetas';

import filtrarKey from './_complementos/filtrar-key';

import aplicativos from './data/aplicativos.json';
import preventivo from './data/preventivo.json';
import ayudaTecnica from './data/ayuda-tecnica.json';
import ergonomias from "./data/ergonomia.json";

//Objeto con la información de la seleccion del usuario
var seleccion=null;

function App() {
  //Alamacena el componente seleccionado por el usuario y lo renderiza en el contenedor principal
  const [visor, setVisor]= useState(null);
  

  const handleMostrarGeneral=(e)=> {
    let opcion= e.target.dataset.tar;    
    console.log("opcion",opcion);

    switch (opcion) {
      case "problemas":
      case "cuentas":
      case "servicio":      
       console.log(">>> categoria: Ayuda técncia");    
       mostrarManualesGenericos("ayudaTecnica", opcion)   
      break;
      case "rendimiento":
      case "antivirus":
      case "preventivos":   
       console.log(">>> categoria: preventivo");  
       mostrarManualesGenericos("preventivo", opcion)   
      break;

      case "software":        
        handleMostrarTarjetasSoftware();
      break;

      case "consejosErgo":        
        mostrarManualesGenericos("ergonomia", opcion)  
      break;
      
    
      default:
        console.log("Opcion fuera de rango en handleMostrarGeneral");
        break;
    }

    
  }

  const mostrarManualesGenericos=(categoria, opcion )=> {
    //manuales que no son software como mantenimiento preventivo o ayuda técnica
    let tmpArray=null
    if (categoria=== "preventivo") {
      tmpArray= preventivo;
    }
    if (categoria=== "ayudaTecnica") {
      console.log("ayudaTecnica");
      tmpArray= ayudaTecnica;
    }

    if (categoria=== "ergonomia") {
      console.log("ergonomia");
      tmpArray= ergonomias;
    }




    seleccion = filtrarKey(tmpArray, "clave", opcion, "mostrarManualesGenericos")[0];
    console.log("seleccion",seleccion);

    setVisor(  <ManualesSoftware modo="generico" seleccion={seleccion} handleSeleccionarManual={handleSeleccionarManual}  />  )   


  }


  const handleMostrarTarjetasSoftware=()=> {
    setVisor ( <Tarjetas handleMostrarListaManuales={handleMostrarListaManuales} array={aplicativos}  />  )
  }

   
  
  const handleMostrarListaManuales=(e)=> { 
     let item= e.currentTarget.id;
     if (item) {
       //si item es válido es poruqe se selecciona de la tarjeta
       //y se genera una nueva seleccion
      let indice = parseInt(e.currentTarget.id);
      console.log("opcion sub",indice);
      seleccion = aplicativos[indice];
      console.log("Seleccion --->",seleccion);
     }
     //Caso contrario es porque el handler viene del contenedor manual y se mantiene la sescción actual   
    setVisor(  <ManualesSoftware modo="software" seleccion={seleccion} handleSeleccionarManual={handleSeleccionarManual} handleMostrarTarjetasSoftware={handleMostrarTarjetasSoftware} />  )   
  }

  const handleSeleccionarManual=(e)=> {    
    let item= e.target;
    let url= item.dataset.url;
    let formato= item.dataset.formato;
    let nombreManual= item.dataset.nombremanual;
    //console.log(nombreManual);    
    setVisor( <ContenedorDeManual formato={formato} url={url} nombreSoftwre={seleccion.nombre} nombreManual={nombreManual} handleMostrarListaManuales={handleMostrarListaManuales} />  )
  }


  return (
    <div className="contenido">  
      <Encabezado />
      <div className="row">
        <div className="col-4">         
              <Menu handleMostrarGeneral={handleMostrarGeneral} />
        </div>
        <div className="col-8 textseleccione  animate__animated animate__backInDown">            
              
              {
                !visor ?
                  <div className="alert alert-warning "> <img src="./assets/png/flecha.png"  alt="Imagen decorativa para señalar el menú"/>Seleccione una opción del menú</div>
                :
                  visor
              }            
        </div>
      </div>
    </div>
  );
}

export default App;
