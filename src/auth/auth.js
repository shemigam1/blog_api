import passport from "passport";
import { Strategy } from 'passport-local'
import User from "../models/user";

passport.use('signup', new localStrategy({
    nameField: 'name',
    emailField: 'email',
    passwordField: 'password'

}, async (name, email, password, done) => {
    try {
        const userData = { name, email, password }
        const newUser = await User.create(userData)
        const { password, ...others } = newUser

        const data = {
            success: true,
            message: 'User created',
            code: 200,
            returnStatus: 'OK',
            data: others
        }
        return done(null, res.status(data.code).json(data));
    } catch (error) {
        done({
            success: false,
            message: 'couldnt create user',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        })
    }
}))

passport.use('login', new localStrategy({
    emailField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email })
        const { password, ...others } = user
        if (!user) {
            return done(null, {
                success: false,
                message: 'user doesnt exist',
                code: 500,
                returnStatus: 'NOT_OK',
                data: null
            })
        }
        const validate = await User.isValidPassword(password)

        if (!validate) {
            return done(null, {
                success: false,
                message: 'invalid password or user',
                code: 500,
                returnStatus: 'NOT_OK',
                data: null
            })
        }

        const data = {
            success: true,
            message: 'logged in successfully',
            code: 200,
            returnStatus: 'OK',
            data: others
        }
        return done(null, res.status(data.code).json(data));
    } catch (error) {

    }
}
))