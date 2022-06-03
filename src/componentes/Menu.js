import React from 'react';

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
export default function Menu(props) {

    return (

        <React.Fragment>
            <img className="img-fluid  icoManual px-1 animate__animated animate__bounceIn" src="./assets/png/est.png" alt="icono decorativo"/>
            <h2 id="titulo_columna">Manual del estudiante</h2>

            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <img  src=".\assets\png\btn_ayuda.png" alt="ayuda técnica" />
                        <span className="card-link-1 animate__animated animate__flash" role="button">  </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse className="relleno" eventKey="0">
                        <Card.Body>
                            <span
                                role="button"
                                className="card-link-2"
                                data-tar="problemas"
                                onClick={props.handleMostrarGeneral}
                            >Problemas técnicos habituales y cómo atenderlos</span>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <span
                                role="button"
                                className="card-link-2"
                                data-tar="cuentas"
                                onClick={props.handleMostrarGeneral}
                            > Cuentas de usuario </span>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse className="relleno" eventKey="0">
                        <Card.Body>
                            <span
                                role="button"
                                className="card-link-2"
                                data-tar="servicio"
                                onClick={props.handleMostrarGeneral}
                            > Servicio Técnico</span>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        <img src="./assets/png/btn_mantenimiento.png" alt="Mantenimiento preventivo" />
                        <span className="card-link-1 animate__animated animate__flash" role="button"></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <span
                                role="button"
                                className="card-link-2"
                                data-tar="antivirus"
                                onClick={props.handleMostrarGeneral}
                            > Actualización del antivirus</span>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse className="relleno" eventKey="1">
                        <Card.Body>
                            <span
                                role="button"
                                className="card-link-2"
                                data-tar="rendimiento"
                                onClick={props.handleMostrarGeneral}
                            > Optimización de rendimiento</span>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <span
                                role="button"
                                className="card-link-2"
                                data-tar="preventivos"
                                onClick={props.handleMostrarGeneral}
                            > Cuidados preventivos </span>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        <img src="./assets/png/btn_comoaprovechar.png" alt="Aprovechamiento de equipo" />
                        <span className="card-link-1 animate__animated animate__flash" role="button">   </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse className="relleno" eventKey="2">
                        <Card.Body>
                            <span
                                role="button"
                                className="card-link-2"
                                data-tar="educatico"
                                onClick={props.handleMostrarGeneral}
                            > Educatico </span>
                        </Card.Body>
                    </Accordion.Collapse>

                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <span
                                role="button"
                                className="card-link-2"
                                data-tar="coleccion"
                                onClick={props.handleMostrarGeneral}
                            > Colección Recursos GESPRO </span>
                        </Card.Body>
                    </Accordion.Collapse>

                    <Accordion.Collapse className="relleno" eventKey="2">
                        <Card.Body>
                            <span
                                role="button"
                                className="card-link-2"
                                data-tar="software"
                                onClick={props.handleMostrarGeneral}
                            > Software instalado en el equipo </span>
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>


                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        <img src="./assets/png/btn_ergonomia.png" alt="ergonomía computacional" />
                        <span className="card-link-1 animate__animated animate__flash" role="button">  </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <span
                                role="button"
                                className="card-link-2"
                                data-tar="consejosErgo"
                                onClick={props.handleMostrarGeneral}
                            >Consejos de ergonomía</span>
                        </Card.Body>
                    </Accordion.Collapse>

                   

                </Card>




            </Accordion>


        </React.Fragment>
    )
}