import React from 'react';
import {Card, Button, Image} from "react-bootstrap";
// import star from '../assets/star.png'
import {useNavigate} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <>
      <table className="table table-hover table-bordered">
        <tbody>
            <tr>
      <div className="m-3 border-black-50">
        <div className="d-flex mb-2">
        <Image className='my-auto mr-2' height={100} src={process.env.REACT_APP_API_URL + device.img} rounded />
        <div>

        <Card.Title>{device.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </div>
        </div>
        <div>
        <Button onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}variant="primary">Подробнее</Button>
        </div>
      </div>
      </tr>
    </tbody>
</table>
    </>
    );
};

export default DeviceItem;