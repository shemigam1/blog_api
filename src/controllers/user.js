// import mongoose from 'mongoose'
import User from '../models/user.js'

export const getAllUsersController = async (req, res) => {
    try {
        // const { id } = req.body
        const newUsers = await User.find({})
        const usersWithoutPassword = newUsers.map(user => {
            const { password, ...other } = user.toObject();
            return other;
        });
        const data = {
            success: true,
            message: 'Users found',
            code: 200,
            returnStatus: 'OK',
            data: usersWithoutPassword
        }
        return res.status(data.code).json(data);

    } catch (error) {
        const data = {
            success: false,
            message: 'couldnt find users',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
        return res.status(data.code).json(data);
    }
}

export const getUserByIdController = async (req, res) => {
    try {
        const { id } = req.body
        const newUser = await User.findById(id)
        const { password, ...other } = newUser.toObject();
        const data = {
            success: true,
            message: 'User found',
            code: 200,
            returnStatus: 'OK',
            data: other
        }
        return res.status(data.code).json(data);

    } catch (error) {
        const data = {
            success: false,
            message: 'couldnt find user',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
        return res.status(data.code).json(data);
    }
}

export const getUserByNameController = async (req, res) => {
    try {
        const { name } = req.body
        const newUser = await User.find({ name: name })
        const { password, ...other } = newUser.toObject()

        const data = {
            success: true,
            message: 'User found',
            code: 200,
            returnStatus: 'OK',
            data: other
        }
        return res.status(data.code).json(data);

    } catch (error) {
        const data = {
            success: false,
            message: 'couldnt find user',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
        return res.status(data.code).json(data);
    }
}

export const updateUserController = async (req, res) => {
    try {
        const { id, update } = req.body
        // const userData = { name, email, password }
        const newUser = await User.findByIdAndUpdate(id, update)
        const { password, ...other } = newUser.toObject()

        const data = {
            success: true,
            message: 'User updated',
            code: 200,
            returnStatus: 'OK',
            data: other
        }
        return res.status(data.code).json(data);

    } catch (error) {
        const data = {
            success: false,
            message: 'couldnt update user',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
        return res.status(data.code).json(data);
    }
}
