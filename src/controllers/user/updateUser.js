// import mongoose from 'mongoose'
import User from '../../models/user.js'

const updateUserController = async (req, res) => {
    try {
        const { id, update } = req.body
        // const userData = { name, email, password }
        const newUser = await User.findByIdAndUpdate(id, update)

        const data = {
            success: true,
            message: 'User updated',
            code: 200,
            returnStatus: 'OK',
            data: newUser
        }
        return res.status(data.code).json(data);

    } catch (error) {
        return {
            success: false,
            message: 'couldnt update user',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
    }
}

export default updateUserController