import React from 'react';
export default function Tarjetas(props) {

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
                            alt="home" />  Volver a inicio TARJETAS
        </span>
                </div>
            </div>
            <hr />
            <div className="row">
                {
                    props.array.map((item, i) => (
                        <div className="col-6" key={"tarjeta" + i} >                         

                            <div 
                                className="card mb-2">
                                <img src="./assets/previas/previa.jpg" className="card-img-top" alt="previa" />
                                <div className="card-body ">
                                    <h5 className="card-title">{item.nombre}</h5>
                                    <p className="card-text">Esta es una pequeña descripción.</p>
                                        <span
                                            className="btn btn-outline-info btn-block"
                                            id={i}
                                            onClick={props.handleMostrarSoftware}
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
        </React.Fragment>
    )
}