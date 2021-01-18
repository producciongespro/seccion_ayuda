import React from 'react';

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
export default function Menu(props) {

    return (

        <React.Fragment>
            <p id="titulo_columna">Manual del estudiante</p>

            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <img src="./assets/png/carpeta.png" alt="Carpeta de ayuda" />
                        <span className="card-link-1" role="button"> Ayuda Técnica </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
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
                    <Accordion.Collapse eventKey="0">
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
                <br />
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        <img src="./assets/png/carpeta.png" alt="Carpeta de ayuda" />
                        <span className="card-link-1" role="button"> Mantenimiento Preventivo </span>
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
                    <Accordion.Collapse eventKey="1">
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
                <br />
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        <img src="./assets/png/carpeta.png" alt="Carpeta de ayuda" />
                        <span className="card-link-1" role="button">  Cómo aprovechar este equipo para estudiar y aprender </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
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

                    <Accordion.Collapse eventKey="2">
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


            </Accordion>


        </React.Fragment>
    )
}