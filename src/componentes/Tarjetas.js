import React from 'react';
export default function Tarjetas(props) {

    console.log(props.array);
    return (

        <React.Fragment>
            <div className="row">
                <div className="col-12 text-center">                    
                    <h4>Galería Software</h4>
                </div>
            </div>
            <hr />
            <div className="row">
                {
                    props.array.map((item, i) => (
                        <div className="col-6" key={"tarjeta" + i} >                         

                            <div 
                                className="card mb-3">
                                <img
                                    className="card-img-top" 
                                    src={ "./manuales/aplicativos/" + item.urlImagen}  
                                    alt={"imagen previa de" + item.nombre} />
                                <div className="card-body ">
                                    <h5 className="card-title">{item.nombre}</h5>
                                    <p className="card-text"> {item.descripcion} </p>
                                        <span
                                            className="btn btn-outline-info btn-block"
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
        </React.Fragment>
    )
}