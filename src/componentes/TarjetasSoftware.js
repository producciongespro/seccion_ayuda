export default function TarjetasSoftware (props) {

    console.log(props.array);
    return (
        <div className="row">
            {  
            props.array.map((item,i)=>(
                <div className="col-12" key={"alerta"+i} >
                    <div 
                        className="alert alert-info text-2 text-center"
                        id={i}
                        onClick={props.handleMostrarSoftware}
                        role="button"
                        >
                       {item.nombre}
                    </div>
                </div>
            ))
            }
        </div>
    )     
}