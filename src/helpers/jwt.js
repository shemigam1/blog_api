import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const signJwt = (user) => {
    try {
        const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '1h' })
        return token
    } catch (error) {
        return null
    }
}
export const verifyJwt = (token) => {
    try {
        const verify = jwt.verify(token, process.env.JWT_SECRET)
        return verify
    } catch (error) {
        return null
    }
}
