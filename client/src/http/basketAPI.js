import {$authHost} from "./index";

export const getBasket = () => {
    return $authHost.get('api/basket')
}