const {BasketDevice, Device} = require('../models/models')
const ApiError = require('../error/ApiError');

class BasketDeviceController {

    async create(req, res) {
        const {basketId, deviceId} = req.body
        const type = await BasketDevice.create({basketId, deviceId})
        return res.json(type)
    }

}

module.exports = new BasketDeviceController()