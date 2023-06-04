import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

const errorInterceptor = error => {
    if (error.response.status === 401) {
        localStorage.removeItem('token')
        window.dispatchEvent(new Event('storage'))
    }
}
const responseInterceptor = res => res.data

$authHost.interceptors.response.use(
 responseInterceptor,
 errorInterceptor
)
$host.interceptors.response.use(
 responseInterceptor,
 errorInterceptor
)
$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}