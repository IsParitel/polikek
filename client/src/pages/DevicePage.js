import React, {useEffect, useContext, useState} from 'react';
import {Button, Card, Col, Container, Image, Form, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { addToDeviceToBasket } from '../http/deviceBasketAPI';

const DevicePage = observer(() => {
    const {user} = useContext(Context)
    const [device, setDevice] = useState({info: []})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    function addToBasket() {
        if (device && device.id) {
            setLoading(true)
            addToDeviceToBasket(user.user.id, user.basket.id).finally(() => {
                setLoading(false)})
        } else {
                console.error('Некорректный объект товара или отсутствует свойство id');
            }
    }

    return (
        <Container className="mt-3">
            <Row>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                <Col className="d-flex justify-content-between align-items-start">
                    <h2>{device.name}</h2>
                    <Button onClick={addToBasket} variant={"outline-dark"}>{loading ? 'Загрузка...' :'Записаться'}</Button>
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
});

export default DevicePage;