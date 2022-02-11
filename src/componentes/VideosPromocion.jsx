export default function VideosPromocion(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {props.opcion === "educatico" && (
            <h3>Educatico: un mundo de recursos.</h3>
          )}
          {props.opcion === "coleccion" && (
            <h3>Accede al catálogo de recursos en línea.</h3>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          {props.opcion === "educatico" && (
            <video width="100%" height="350vh" controls>
              <source
                src="./manuales/videos/video_educatico.mp4"
                type="video/mp4"
              ></source>
              Su navegador no soporta reproducción de video. Debe utilizar un
              navegador actualizado.
            </video>
          )}
          {props.opcion === "coleccion" && (
            <video width="100%" height="350vh" controls>
              <source
                src="./manuales/videos/video_coleccion.mp4"
                type="video/mp4"
              ></source>
              Su navegador no soporta reproducción de video. Debe utilizar un
              navegador actualizado.
            </video>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          {props.opcion === "educatico" && (
            <a
              href="https://www.mep.go.cr/educatico"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.mep.go.cr/educatico
            </a>
          )}

          {props.opcion === "coleccion" && (
            <a
              href="https://recursos.mep.go.cr/2021/coleccion_gespro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://recursos.mep.go.cr/2021/coleccion_gespro/
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
