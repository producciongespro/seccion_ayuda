import React from 'react';
export default function Encabezado() {

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10 text-center">
                    <img id="banner" src="./assets/cabecera_menu_ayuda-03.jpg" alt="encabezado" />
                </div>
                <div className="col-1"></div>
            </div>

            <div className="row">
                <div className="col-5">

                </div>
                <div className="col-7 text-right">
                    <h3 id="texto_ayuda">¿Acerca de que desea ayuda?</h3>
                </div>
            </div>
        </React.Fragment>
    )

}