// import mongoose from 'mongoose'
import User from '../../models/user.js'

const getAllUserController = async (req, res) => {
    try {
        // const { id } = req.body
        const newUser = await User.find({})

        const data = {
            success: true,
            message: 'Users found',
            code: 200,
            returnStatus: 'OK',
            data: newUser
        }
        return res.status(data.code).json(data);

    } catch (error) {
        return {
            success: false,
            message: 'couldnt find users',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
    }
}

export default getAllUserController