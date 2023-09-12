const category = require('../models/category')

module.exports = {
    obtainAll : async (req, res) =>{
        try {
            const dataCategory = await category.find()
            return res.status(200).json({
                "status": true,
                "dataCategory": dataCategory
            })
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    }
}