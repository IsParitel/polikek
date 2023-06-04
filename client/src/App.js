import React, {useContext, useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {Spinner, Container} from "react-bootstrap";
import {check} from "./http/userAPI";
import {getBasket} from "./http/basketAPI";
import {fetchBrands, fetchTypes} from "./http/deviceAPI";

const Loader = () => (
    <Container className="d-flex justify-content-center align-items-center">
        <Spinner animation={"grow"}/>
    </Container>
)

const App = observer(() => {

    const {device, user} = useContext(Context)

    useEffect(() => {
        user.setIsLoading(true)
        if(localStorage.getItem('token')) {
            check().then(data => {
                if(!data) return
                user.setUser(data.user)
                user.setIsAuth(true)
                getBasket().then(res => user.setBasket(res))
            })
        }
        Promise.all([
            fetchTypes(),
            fetchBrands(),
        ]).then(([types, brands]) => {
            device.setTypes(types)
            device.setBrands(brands)
        }).finally(() => user.setIsLoading(false))
    }, [])


    return (
        <BrowserRouter>
            <NavBar />
            {user.isLoading ? <Loader/> : <AppRouter />}
        </BrowserRouter>
    );
});

export default App;