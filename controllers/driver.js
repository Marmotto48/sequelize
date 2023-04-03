const driver = require("../models").driver

module.exports = {
    getAll: async (req, res) => {
        try {
            const drivers = await driver.findAll()
            return res.status(200).json({
                drivers : drivers
            })
        } catch (error) {
            console.log(error)
        }
    }
}