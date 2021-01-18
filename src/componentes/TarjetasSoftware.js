import React from 'react';
export default function TarjetasSoftware (props) {

    console.log(props.array);
    return (
        
<React.Fragment>
    <div className="row">
        <div className="col-12 text-center">
        <span         
            onClick={props.handleInicio}
            role="button"
            >  <img 
                className="ico-1" 
                src="./assets/png/home.png" 
                alt="home" />  Volver a inicio
        </span>
        </div>
    </div>
    <hr/>
        <div className="row">
            {  
            props.array.map((item,i)=>(
                <div className="col-12" key={"alerta"+i} >
                    <div 
                        className="alert alert-info text-2 text-center"
                        id={i}
                        onClick={props.handleMostrarSoftware}
                        role="button"
                        >
                       {item.nombre}
                    </div>
                </div>
            ))
            }
        </div>
    </React.Fragment>
    )     
}