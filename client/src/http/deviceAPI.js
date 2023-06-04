import {$authHost, $host} from "./index";

export const createType = async (type) => {
    return $authHost.post('api/type', type)
}

export const fetchTypes = async () => {
    return $host.get('api/type')
}

export const createBrand = (brand) => {
    return $authHost.post('api/brand', brand)
}

export const fetchBrands = () => {
    return $host.get('api/brand')
}

export const createDevice = (device) => {
    return $authHost.post('api/device', device)
}

export const fetchDevices = (typeId, brandId, page, limit) => {
    return $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
}

export const fetchOneDevice = async (id) => {
    return $host.get('api/device/' + id)
}