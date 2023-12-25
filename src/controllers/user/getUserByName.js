// import mongoose from 'mongoose'
import User from '../../models/user.js'

const getUserByNameController = async (req, res) => {
    try {
        const { name } = req.body
        const newUser = await User.find({ name: name }).exec()

        const data = {
            success: true,
            message: 'User found',
            code: 200,
            returnStatus: 'OK',
            data: newUser
        }
        return res.status(data.code).json(data);

    } catch (error) {
        return {
            success: false,
            message: 'couldnt find user',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
    }
}

export default getUserByNameController