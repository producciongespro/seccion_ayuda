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
                            <img className="ico-1" src="./assets/png/volver.png" alt="Volver" /> &nbsp;
                             <span className="badge badge-info text-1 " > Volver a galería de software </span>
                        </span>
                    </div>
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
                    <div className="col-12 descripcion-temas">
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