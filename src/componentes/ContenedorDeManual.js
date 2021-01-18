import React from 'react';
export default function ContenedorDeManual(props) {

    return (
        <React.Fragment>
            <div className="row">
                <div
                    className="col-12"
                    onClick={props.handleVolverOpcionesSoftware}
                    role="button"                  
                >
                    <img className="ico-1" src="./assets/png/volver.png" alt="Volver" /> &nbsp;
                    <span   className="badge badge-info text-1 " >Regresar a otra ayuda de {props.nombre}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>Manual {props.formato}  </h3>
                </div>
            </div>

        </React.Fragment>

    )

}