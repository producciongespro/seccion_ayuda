import React from 'react';



export default function ContenedorDeManual(props) {

    const opcion = localStorage.getItem("opcion");
    const modo = localStorage.getItem("modo");
    //console.log("modo ----xxxxx------>", modo);


    const renderManual=(formato, url)=> {
        let tmpHtml;        
        const urlRecurso="./manuales/" + url;
        //console.log("urlRecurso",urlRecurso);

        switch (formato) {
            case "pdf":
                tmpHtml= (
                    <iframe 
                        title='manual pdf'
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
            case "audio":
                tmpHtml= (
                    <audio controls>
                        <source src={urlRecurso} type="audio/mpeg" />
                        Your browser does not support the audio element.
                  </audio>                             
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
                    data-tar={opcion}
                    //onClick={props.handleMostrarListaManuales}
                    onClick={
                        modo === "generico" ? props.handleMostrarGeneral : props.handleMostrarListaSoftware
                        }                    
                    role="button"                  
                >
                    <img className="ico-1 animate__animated animate__flash" src="./assets/png/volver.png" alt="Volver" /> &nbsp;
                    <span   className="badge badge-info text-1 " >Regresar a más de {props.nombreSoftwre}</span><br/>
                </div>
            </div> <br/>

            <div className="row">
                <div className="col-12">
                    <h3 className="temas">{props.nombreManual}  </h3> <br/>
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