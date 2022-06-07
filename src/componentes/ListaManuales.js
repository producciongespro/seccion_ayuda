import React from 'react';


export default function ListaManuales (props) {


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


    console.log(props.seleccion);
    return (
        <React.Fragment>          
      

            <div className="row">
                <div className="col-1">
                    <img className="img-fluid px-1 animate__animated animate__bounceIn" src={"./assets/png/" + props.seleccion.categoria + ".png" } alt="iconodecorativo"/>
                </div>

                <div className="col-11">
                    <h2 className="temas">{props.seleccion.nombre} </h2>
                    <img className="img-fluid px-1 animate__animated animate__bounceIn" src="./assets/png/linea_ayuda.png" alt="lineadecorativa"/>
                </div>
            </div>
            {
                props.modo === "generico" &&
                <div className="row">
                    <img className="img-fluid img-atencion px-1 animate__animated animate__bounceIn" src="./assets/svg/atencion.svg" alt="Imagen de atención a la descripción"/>
                    <div className="col-10 descripcion-temas">
                        {props.seleccion.descripcion}
                    </div>
                </div>

            }
           
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