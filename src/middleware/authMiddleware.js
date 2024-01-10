import User from "../models/user.js"
import { verifyJwt } from "../helpers/jwt.js"

const authMiddleWare = async (req, res, next) => {
    // extract auth header
    const authorization = req.headers.authorization

    if (!authorization) {
        const returnData = {

            success: false,
            message: "invalid or missing token",
            code: 401,
            returnStatus: "INVALID_TOKEN",
            data: null
        }
        return res.status(returnData).json(returnData)
    }

    // check if token is bearer token

    if (authorization.startsWith("Bearer ") === false) {
        const returnData = {

            success: false,
            message: "invalid or missing token",
            code: 401,
            returnStatus: "INVALID_TOKEN",
            data: null
        }
        return res.status(returnData).json(returnData)
    }

    const token = authorization.split(" ")[1]
    // extract jwt token
    if (!token) {
        const returnData = {

            success: false,
            message: "invalid or missing token",
            code: 401,
            returnStatus: "INVALID_TOKEN",
            data: null
        }
        return res.status(returnData).json(returnData)
    }
    // verify jwt token
    const payload = verifyJwt(token)
    if (!payload) {
        const returnData = {

            success: false,
            message: "invalid or missing token",
            code: 401,
            returnStatus: "INVALID_TOKEN",
            data: null
        }
        return res.status(returnData.code).json(returnData)
    }

    // find user and add to res object
    const user = await User.findById(payload.id)
    res.locals.user = user

    next()
}

export default authMiddleWare