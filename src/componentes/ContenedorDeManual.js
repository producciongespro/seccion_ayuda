import React from 'react';
export default function ContenedorDeManual(props) {


    const renderManual=(formato, url)=> {
        let tmpHtml;        
        const urlRecurso="./manuales/" + url;
        //console.log("urlRecurso",urlRecurso);

        switch (formato) {
            case "pdf":
                tmpHtml= (
                    <iframe 
                        className="control-2"
                        src={urlRecurso} />
                )
            break;
            case "video":
                tmpHtml= (
                        <video 
                        className="control-1"
                         src={urlRecurso} 
                         controls={true} 
                         autoPlay={true} >                             
                         </video>
                )
            break;
            case "img":
                tmpHtml= (
                            <img className="img-fluid" src={urlRecurso}  alt="imagen de infografía" />                       
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
                    onClick={props.handleMostrarListaManuales}
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