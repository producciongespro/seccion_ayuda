import React, { useState } from 'react';
import Encabezado from './componentes/Encabezado';
import Menu from './componentes/Menu';
import ListaManuales from './componentes/ListaManuales';
import ListaSoftware from './componentes/ListaSoftware';
import ContenedorDeManual from './componentes/ContenedorDeManual';
import Tarjetas from './componentes/Tarjetas';

import filtrarKey from './_complementos/filtrar-key';

import aplicativos from './data/aplicativos.json';
import preventivo from './data/preventivo.json';
import ayudaTecnica from './data/ayuda-tecnica.json';
import ergonomias from "./data/ergonomia.json";

//gespro utilis



//Objeto con la información de la seleccion del usuario
var seleccion=null;

function App() {
  //Alamacena el componente seleccionado por el usuario y lo renderiza en el contenedor principal
  const [visor, setVisor]= useState(null);
  

  const handleMostrarGeneral=(e)=> {
    console.log(" GENERAL ///////  e target---->", e.target);
    let opcion= e.currentTarget.dataset.tar;
    let categoria;    
    console.log("opcion",opcion);

    switch (opcion) {
      case "problemas":
      case "cuentas":
      case "servicio":    
      categoria = "ayudaTecnica";  
       console.log(">>> categoria:", categoria );    
       mostrarManualesGenericos(categoria, opcion );
      break;
      case "rendimiento":
      case "antivirus":
      case "preventivos":          
       categoria = "preventivo";  
       console.log(">>> categoria:", categoria );    
       mostrarManualesGenericos(categoria, opcion); 
      break;

      case "software":        
        handleMostrarTarjetasSoftware();
      break;

      case "consejosErgo":  
      categoria = "ergonomia";  
      console.log(">>> categoria:", categoria );    
      mostrarManualesGenericos(categoria, opcion);         
      break;
      
    
      default:
        console.log("Opcion fuera de rango en handleMostrarGeneral");
        break;
    }

    
  }


  /**
   * 
   * @param {*} categoria 
   * @param {*} opcion    
   * Abre manuales genéricos (ayda técnica, mantenimiento y ergonomía )
   */
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
    //console.log("seleccion",seleccion);


    //Alamacenamiento de datos en localsotrage para que
    //puedan ser accedidas desde contenedor manual

    //Elimina primero la data almacenada anteriormente
    localStorage.clear();
    localStorage.setItem("categoria", categoria);
    localStorage.setItem("opcion", opcion);
    localStorage.setItem("modo", "generico");

  
    setVisor(  
      <ListaManuales            
      seleccion={seleccion}       
      handleSeleccionarManual={handleSeleccionarManual} 
       />  )   


  }


  const handleMostrarTarjetasSoftware=()=> {
    localStorage.setItem("modo", "software");
    setVisor ( 
      <Tarjetas 
        handleMostrarListaManuales={handleMostrarListaSoftware} 
        array={aplicativos}  />  )
  }


  const handleMostrarListaSoftware =(e)=> {

    let item= e.currentTarget.id;
    if (item) {
      //si item es válido es poruqe se selecciona de la tarjeta
      //y se genera una nueva seleccion
     let indice = parseInt(e.currentTarget.id);
     console.log(" Mostrando lista de software ************** opcion sub",indice);
     seleccion = aplicativos[indice];
     //console.log("Seleccion --->",seleccion);
    }

    setVisor(
      <ListaSoftware        
        seleccion={seleccion} 
        handleSeleccionarManual={handleSeleccionarManual} 
        handleMostrarTarjetasSoftware={handleMostrarTarjetasSoftware} 
       />
    )
  }


   
  
  const handleMostrarListaManuales=(e)=> { 
     let item= e.currentTarget.id;
     if (item) {
       //si item es válido es poruqe se selecciona de la tarjeta
       //y se genera una nueva seleccion
      let indice = parseInt(e.currentTarget.id);
      console.log(" Mostrando lista de manuales ************** opcion sub",indice);
      seleccion = aplicativos[indice];
      console.log("Seleccion --->",seleccion);
     }
     //Caso contrario es porque el handler viene del contenedor manual y se mantiene la sescción actual   
    setVisor(  
      <ListaManuales         
        seleccion={seleccion} 
        handleSeleccionarManual={handleSeleccionarManual} 
        handleMostrarTarjetasSoftware={handleMostrarTarjetasSoftware} 
        />  )   
  }

  const handleSeleccionarManual=(e)=> {    
    let item= e.target;
    let url= item.dataset.url;
    let formato= item.dataset.formato;
    let nombreManual= item.dataset.nombremanual;
    //console.log(nombreManual);    
    setVisor( 
      <ContenedorDeManual 
        formato={formato} 
        url={url} 
        nombreSoftwre={seleccion.nombre} 
        nombreManual={nombreManual}         
        handleMostrarGeneral={handleMostrarGeneral}
        handleMostrarListaManuales={handleMostrarListaManuales} 
        handleMostrarListaSoftware= {handleMostrarListaSoftware}
        />  )
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
