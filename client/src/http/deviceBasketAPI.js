import {$authHost} from "./index";

export const addToDeviceToBasket = (userId, deviceId) => {
    return $authHost.post('api/device_basket', {userId, deviceId})
}