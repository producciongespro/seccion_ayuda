import React from 'react';
export default function Tarjetas(props) {

    //console.log(props.array);
    return (

        <div className='container threadwindow'>
            <div className="row">
                <div className="col-1">                    
                    <img className="img-fluid px-1 animate__animated animate__bounceIn" src="./assets/png/icono_comoaprovechar.png" alt="iconodecorativo"/>
                </div>

                <div className="col-111">                    
                    <h4 className="temas">Galería Software</h4>
                    <img className="img-fluid px-1 animate__animated animate__bounceIn" src="./assets/png/linea_comoaprovechar.png" alt="iconodecorativo"/>
                </div>

            </div>
            <hr />
            <div className="row">
                {
                    props.array.map((item, i) => (
                        <div className="col-6 grupoTarjetas"  key={"tarjeta" + i} >                

                            <div 
                                className="card tarjetas">
                                <img
                                    className="card-img-top" 
                                    src={ "./manuales/" + item.urlImagen}  
                                    alt={"imagen previa de" + item.nombre} />
                                <div className="card-body "> 
                                    <h5 className="card-title descripcion-temas-tarjetas">{item.nombre}</h5>
                                    <p className="card-text detalle-temas"> {item.descripcion} </p>
                                        <span
                                            className="btn btn-outline-info btn-block botonTarjetas"
                                            id={i}
                                            onClick={props.handleMostrarListaManuales}
                                            role="button"
                                        >
                                            Ver detalles <img className="ico-1" src="./assets/svg/ojo.svg" alt="ver" />
                                        </span>
                                </div>
                            </div>




                        </div>
                    ))
                }
            </div>
        </div>
    )
}