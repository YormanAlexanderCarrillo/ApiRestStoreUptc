const user = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = {
    saveUser:async (req, res)=>{
        try{
            const {id, name, lastname, email, password, phone, role} = req.body
            const User = await user.findOne({ email: email });
            if (!User) {
                
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)
                const newUser= new user({
                    id, 
                    name,
                    lastname,
                    email, 
                    password: hashedPassword,
                    phone,
                    role
                })
                const dataUserSave = await newUser.save()
                return res.status(200).json({
                    "status": true,
                    "dataUserSave": dataUserSave
                })
            }else{
                return res.status(200).json({
                    "status": false,
                    "message": "Correo ya registrado"
                })
            }
        }catch(error){
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
        
    }, 
    obtainAllUsers: async (req, res)=>{
        try {
            const dataUsers = await user.find()
            return res.status(200).json({
                "status":true,
                "dataUsers": dataUsers
            })
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    },
    findUserById: async (req, res)=>{
        try {
            const id = req.params.id
            const dataUser = await user.findById(id)
            return res.status(200).json({
                "status": true,
                "dataUser": dataUser
            })
        } catch (error) {
            return res.status(500).json({
                "status":false,
                "error": error
            })
        }
    },
    deleteUser: async (req, res)=>{
        try{
            const id = req.params.id
            const userDeleted = await user.findByIdAndDelete(id)
            return res.status(200).json({
                "status": true,
                "userDeleted": userDeleted
            })
        }catch(error){
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    },
    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;
           // console.log(email, password);
            const User = await user.findOne({ email: email });
           // console.log(User);
            if (!User) {
                return res.status(404).json({ 
                    "status": false,
                    "message": "Usuario no encontrado" });
            }
            const passwordMatch = await bcrypt.compare(password, User.password);
            if (!passwordMatch) {
                return res.status(401).json({ 
                    "status": false,
                    "message": "Contraseña incorrecta"
                });
            }
            return res.status(200).json({ 
                "status": true, 
                "message": "Inicio de sesión exitoso" 
            });

        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            });
        }
    }
}