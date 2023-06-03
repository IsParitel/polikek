import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Form, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Form className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                    </Form>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 120, height: 50, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <Button variant={"outline-dark"}>Записаться</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>О проекте</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10, border: '1px solid gray', wordWrap: 'break-word', whiteSpace: 'pre-wrap', wordBreak: 'break-all'}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;