import React from 'react';


export default function ListaSoftware (props) {


    const iconoFormato = (tipo) => {
        let icono = "./assets/svg/";
        switch (tipo) {
            case "pdf":
                icono = icono + "pdf.png"
            break;
            case "video":
                icono = icono + "video.png"
            break;
            case "img":
                icono = icono + "img.svg"
            break;
            case "audio":
                icono = icono + "audio.png"
            break;

            default:
                console.log("opcion fuera de rango en icono");
                break;
        }

        return (<img className="ico-1" src={icono} alt="icono del recurso" />)
    }
    //console.log(props.seleccion);
    return (
        <React.Fragment>                      
                
                <div className="row">
                    <div className="col-12">
                        <span
                            onClick={props.handleMostrarTarjetasSoftware}
                            role="button">
                            <img className="ico-1 animate__animated animate__flash" src="./assets/png/flecha.png" alt="Volver" /> &nbsp;
                             <span className="badge badge-info text-1" > Volver a galería software </span> <br/>
                             
                        </span>
                    </div><br/> <br/>
                </div>
            

            <div className="row">
                <div className="col-12">
                    <h2 className="temas">{props.seleccion.nombre} </h2>

                </div>
            </div>         
            <hr/>
            <div className="row">
                <div className="col-12">
                    <ul>
                        {
                            props.seleccion.manuales.map((item, i) => (
                                <li
                                    type="square"
                                    key={"item" + i}
                                    className="mb-2 detalle-temas"
                                    role="button"
                                    data-formato={item.formato}
                                    data-url={item.url}
                                    data-nombremanual={item.nombre}
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