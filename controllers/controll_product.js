const product = require('../models/product')

module.exports ={
    obtainAll: async (req, res)=>{
        try {
            const dataProducts = await product.find()
            return res.status(200).json({
                "status": true,
                "dataProducts": dataProducts
            })
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    },
    saveProduct: async (req, res)=>{
        try {
            const productJSON = new product(req.body)
            const dataProductSave = await productJSON.save()
            return res.status(200).json({
                "status:" : true,
                "dataProduct": dataProductSave,
            })
        } catch (error) {
            return res.status(200).json({
                "status": false,
                "error": error
            })
        }
    },
    modifyProduct: async (req, res)=>{
        try {
            const id = req.params.id
            const dataToModify = req.body
            const previusData = await product.findByIdAndUpdate(id, dataToModify)
            return res.status(200).json({
                "status": true,
                "previusData": previusData
            })
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    },
    deleteProduct: async (req, res)=>{
        try {
            const id = req.params.id
            const productDeleted = await product.findByIdAndDelete(id)
            return res.status(200).json({
                "status": true,
                "productDeleted": productDeleted
            })
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    }, 
    findProductById: async (req, res)=>{
        try {
            const id = req.params.id
            const dataProduct = await product.findById(id)
            return res.status(200).json({
                "status": true,
                "dataProduct": dataProduct 
            })
        } catch (error) {
            return res.status(500).json({
                "status":false,
                "error": error
            })
        }
    }

}