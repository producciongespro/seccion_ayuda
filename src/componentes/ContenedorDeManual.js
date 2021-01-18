import React from 'react';
export default function ContenedorDeManual(props) {


    const renderManual=(formato, url)=> {
        let tmpHtml;

        switch (formato) {
            case "pdf":
                tmpHtml= (
                <span> pdf </span>
                )
            break;
            case "mp4":
                tmpHtml= (
                        <video src={"./manuales/aplicativos/" + url} controls autoPlay ></video>
                )
            break;
        
            default:
                break;
        }
        return tmpHtml;
    }

    return (
        <React.Fragment>
            <div className="row">
                <div
                    className="col-12"
                    onClick={props.handleVolverOpcionesSoftware}
                    role="button"                  
                >
                    <img className="ico-1" src="./assets/png/volver.png" alt="Volver" /> &nbsp;
                    <span   className="badge badge-info text-1 " >Regresar a otra ayuda de {props.nombreSoftwre}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>{props.nombreManual}  </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {renderManual(props.formato, props.url) }
                </div>
            </div>

        </React.Fragment>

    )

}