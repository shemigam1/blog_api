import createUserController from "../controllers/user/createUser.js"

export const signupAuth = async (req, res) => {
    await createUserController(req, res)
}
export const loginAuth = (req, res) => {
    res.send("login auth working")
}