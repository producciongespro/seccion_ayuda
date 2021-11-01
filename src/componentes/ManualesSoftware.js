import React from 'react';

export default function ManualesSoftware(props) {


    const iconoFormato = (tipo) => {
        let icono = "./assets/svg/";
        switch (tipo) {
            case "pdf":
                icono = icono + "pdf.svg"
            break;
            case "video":
                icono = icono + "video.svg"
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
            {
                props.modo === "software" &&
                <div className="row">
                    <div className="col-12">
                        <span
                            onClick={props.handleMostrarTarjetasSoftware}
                            role="button">
                            <img className="ico-1 animate__animated animate__flash" src="./assets/png/flecha.png" alt="Volver" /> &nbsp;
                             <span className="badge badge-info text-1" > Volver a galería de software </span> <br/>
                        </span>
                    </div><br/> <br/>
                </div>
            }

            <div className="row">
                <div className="col-12">
                    <h2 className="temas">{props.seleccion.nombre} </h2>
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