import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._basket = {}
        this._loading = true
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setIsLoading(loading) {
        this._loading = loading
    }
    setUser(user) {
        this._user = user
    }
    setBasket(basket) {
        this._basket = basket
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get basket() {
        return this._basket
    }
    get isLoading () {
        return this._loading
    }
}