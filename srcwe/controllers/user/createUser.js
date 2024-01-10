// import mongoose from 'mongoose'
import User from '../../models/user.js'

const createUserController = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const existingUser = await User.find({ name: name })
        if (existingUser) {
            return {
                success: false,
                message: 'email is already taken',
                code: 400,
                returnStatus: 'NOT_OK',
                data: null
            }
        }
        const userData = { name, email, password }
        const newUser = await User.create(userData)
        // const { password, ...other } = newUser.toObject()

        const data = {
            success: true,
            message: 'User created',
            code: 200,
            returnStatus: 'OK',
            data: {
                name: newUser.name,
                email: newUser.email
            }
        }
        return res.status(data.code).json(data);

    } catch (error) {
        return {
            success: false,
            message: 'couldnt create user',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
    }
}

export default createUserController