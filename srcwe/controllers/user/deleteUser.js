// import mongoose from 'mongoose'
import User from '../../models/user.js'

const deleteUserController = async (req, res) => {
    try {
        const { id } = req.body
        const newUser = await User.findByIdAndDelete(id)

        const data = {
            success: true,
            message: 'User deleted',
            code: 200,
            returnStatus: 'OK',
            data: newUser
        }
        return res.status(data.code).json(data);

    } catch (error) {
        return {
            success: false,
            message: 'couldnt delete user',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
    }
}

export default deleteUserController