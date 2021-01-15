import React from 'react';

export default function OpcionesSoftware (props) {


    const iconoFormato=(tipo)=> {
        let icono="./assets/svg/";
        switch (tipo) {
            case "pdf":
                icono= icono + "pdf.svg"
            break;
            case "mp4":
                icono= icono + "video.svg"
            break;
        
            default:
                console.log("opcion fuera de rango en icono");
                break;
        }

        return (<img className="ico-1" src={icono} alt="icono del recurso" />)
    }


console.log(props.seleccion);
    return (
        <React.Fragment>
            <div className="row">
            <div className="col-12">
                <h2>{  props.seleccion.nombre } </h2>
            </div>
        </div>
        <div className="row">
            <div className="col-12">                
                    <ul>
                        {
                            props.seleccion.manuales.map((item,i)=>(
                                <li 
                                    key={"item"+i} 
                                    className="mb-2"
                                    role="button"
                                    data-formato={item.formato}
                                    data-url={item.url}
                                    onClick={props.handleSeleccionarManual}
                                    > 
                                        {iconoFormato(item.formato)} {item.nombre} 
                                </li>
                            ))
                        }
                    </ul>                
            </div>
        </div>
        </React.Fragment>
    )    
}