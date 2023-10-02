const category = require('../models/category')

module.exports = {
    obtainAll: async (req, res) => {
        try {
            const dataCategory = await category.find().populate('products')
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
    }, createCategory: async (req, res) => {
        try {
            const { name, description, classification } = req.body
            console.log(name, description ,classification )
            const Name = name.toLowerCase()
            const categoryJson = {
                "name": Name,
                "description": description,
                "products": [],
                "classification":classification
            }
            const categoryExist = await category.findOne({ "name": Name })
            // console.log(categoryExist);
            if (!categoryExist) {
                const Category = new category(categoryJson)
                const categorySave = await Category.save()
                return res.status(200).json({
                    "status": true,
                    "categorySave": categorySave
                })
            }else{
                return res.status(200).json({
                    "status": true,
                    "message": "category exist",
                    "category": categoryExist
                })
            }
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error.message
            })
        }
    }, findCategoryById: async (req, res) => {
        try {
            const id = req.params.id
            const dataCategory = await category.findById(id).populate('products')
            return res.status(200).json({
                "status": true,
                "category": dataCategory
            })
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    }, addProductToCategory: async (req, res)=>{
        try {
            const idCategory = req.params.id
            const {idProduct} = req.body
            console.log(idCategory, idProduct);
            const Category = await category.findById(idCategory)
            if (!Category){
                return res.status(500).json({
                    "status":false,
                    "message": "Categoria no encontrada"
                })
            }
            Category.products.push(idProduct)
            const updatedCategory  = await Category.save()
            return res.status(200).json({
                "status": true,
                "dataCategoryUpdate": updatedCategory
            })
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    }, deleteCategory: async (req, res)=>{
        try {
            const idCategory = req.params.id
            //console.log(idCategory);
            const categoryDelete = await category.findByIdAndDelete(idCategory)
            return res.status(200).json({
                "status": true,
                "deletedCategory": categoryDelete
            })
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    }

}