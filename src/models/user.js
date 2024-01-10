import mongoose, { Schema } from "mongoose"
import { hashPassword, comparePassword } from "../helpers/hash.js"

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

UserSchema.pre('save', async function (next) {
    try {
        const hash = await hashPassword(this.password)
        this.password = hash
        next()
    } catch (error) {
        next(error)
    }
})

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;
    return comparePassword(password, user.password)
}

const User = mongoose.model('User', UserSchema)
export default User