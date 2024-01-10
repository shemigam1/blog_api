import bcrypt from 'bcrypt'

const saltRounds = 10;
export const hashPassword = async (password) => {
    const hashed = await bcrypt.hash(password, saltRounds)
    if (!hashed) return null
    return hashed
}

export const comparePassword = (userPassword, password) => {
    const match = bcrypt.compareSync(password, userPassword)
    return match
}