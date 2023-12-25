import { Router } from "express";
import passport from "passport";
// import { ExtractJwt } from "passport-jwt";
import jwt from "jsonwebtoken";

const authRouter = Router()

authRouter.post('/signup', passport.authenticate('signup', { session: false }),
    async (req, res, next) => {
        const data = {
            success: true,
            message: 'signup successful',
            code: 200,
            returnStatus: 'OK',
            user: req.user,
            data: null
        }
        return res.status(data.code).json(data)
    }
)

authRouter.post('login', passport.authenticate('login', async (err, user, info) => {
    try {

        if (err || !user) {
            const error = new Error('new error occurred')
            console.log('error occured');

            return next(error)
        }
    } catch (error) {
        req.login(user, { session: false }, async (error) => {
            if (error) return next(error)

            const token = jwt.sign({ user: body }, 'JESUS')
            const body = { email: user.email }
        })
    }

}))