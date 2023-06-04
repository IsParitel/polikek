const { Basket, BasketDevice, Device } = require('../models/models');
const { Sequelize } = require('sequelize');
const ApiError = require('../error/ApiError');

class BasketController {
    async getOne(req, res) {
        const { id: userId } = req.user;

        // Создаем новую корзину для пользователя
        const basket = await Basket.create({ userId });

        const basketDevices = await BasketDevice.findAll({ where: { basketId: basket.id } });
        const devices = await Device.findAll({
            where: {
                id: { [Sequelize.Op.or]: basketDevices.map(({ deviceId }) => deviceId) },
            },
        });

        return res.json({ ...basket.dataValues, devices });
    }
}

module.exports = new BasketController();