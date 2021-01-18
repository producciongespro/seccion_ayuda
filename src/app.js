import React, { useState, useEffect } from 'react';
import Encabezado from './componentes/Encabezado';
import Menu from './componentes/Menu';
import TarjetasSoftware from './componentes/TarjetasSoftware';
import OpcionesSoftware from './componentes/OpcionesSoftware';
import ContenedorDeManual from './componentes/ContenedorDeManual';

import manuales from './data/manuales.json';

function App() {
  const [visor, setVisor]= useState(null);
  const [seleccion, setSelecion]=useState(null);
  const [isSoftware, setIsSoftware]=useState(false);

  
  
  //efecto seleccion
  useEffect(()=>{
    seleccion && (
      setVisor(  <OpcionesSoftware seleccion={seleccion} handleSeleccionarManual={handleSeleccionarManual} />  )
    ) 
  },[seleccion])


  const handleMostrarGeneral=(e)=> {
    let opcion= e.target.dataset.tar;
    let tmpVisor=null;
    console.log("opcion",opcion);

    switch (opcion) {
      case "problemas":
        tmpVisor= <h1>Problemas técnicos</h1>        
      break;
      case "software":
        setIsSoftware(true);        
      break;
    
      default:
        tmpVisor= <h1>Fuera de rango</h1>     
        break;
    }

    setVisor(tmpVisor);
  }

  const handleMostrarSoftware=(e)=> {
    let indice = parseInt(e.target.id);
    console.log("opcion sub",indice);
    let tmpData = manuales[indice];
    console.log("Seleccion --->",tmpData);
    setSelecion(tmpData);
    
  }

  const handleSeleccionarManual=(e)=> {    
    let url= e.target.dataset.url;
    let formato= e.target.dataset.formato;
    let nombreManual= e.target.dataset.nombre;
    console.log(nombreManual);
    setVisor( <ContenedorDeManual formato={formato} url={url} nombreSoftwre={seleccion.nombre} nombreManual={nombreManual} handleVolverOpcionesSoftware={handleVolverOpcionesSoftware} />  )
  }


  const handleVolverOpcionesSoftware=()=> {
    seleccion && (
      setVisor(  <OpcionesSoftware seleccion={seleccion} handleSeleccionarManual={handleSeleccionarManual} />  )
    )
  }

  const handleInicio=(e)=> {
    setIsSoftware(false);
  }

 


  return (
    <div className="contenido">  
      <Encabezado />
      <div className="row">
        <div className="col-4">
          {
            !isSoftware ?
              <Menu handleMostrarGeneral={handleMostrarGeneral} />
            :
              <TarjetasSoftware handleMostrarSoftware={handleMostrarSoftware} array={manuales} handleInicio={handleInicio} />
          }          
        </div>
        <div className="col-8">            
              {
                !visor ?
                  <div className="alert alert-warning">Seleccione una opción del menú</div>
                :
                  visor
              }            
        </div>
      </div>
    </div>
  );
}

export default App;
