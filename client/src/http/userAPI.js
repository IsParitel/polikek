import {$authHost, $host} from "./index";

export const registration = (email, password) => {
    return $host.post('api/user/registration', {email, password, role: 'USER'})
    .then((data) => {
        localStorage.setItem('token', data.token)
        return {
            user: data.user,
            basket: data.basket,
        }
    }).catch((e) => {
        console.log(e)
    })
}

export const login = (email, password) => {
    return $host.post('api/user/login', {email, password}).then((data) => {
        localStorage.setItem('token', data.token)
        return {
            user: data.user,
            basket: data.basket,
        }
    }).catch((e) => {
        console.log(e)
    })
}

export const check = () => {
    return $authHost.get('api/user/auth').then((data) => {
        localStorage.setItem('token', data.token)
        return {
            user: data.user,
            basket: data.basket,
        }
    }).catch((e) => {
        console.log(e)
    })
}