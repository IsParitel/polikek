import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import {Context} from "../index";
import DeviceItem from '../components/DeviceItem'

const Basket = observer(() => {
    const {user} = useContext(Context)
    return user?.isLoading ? <h1>Загрузка</h1> : !user?.basket?.devices?.length ? <h1>Нет записей</h1>
    : ( <div className='p-5'>  
    {user.basket.devices.map((basketDevice) => {

        return (<DeviceItem device={basketDevice}/>)
    })}
</div> ) 
    
})

export default Basket;