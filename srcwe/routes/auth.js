import { Router } from "express";
import { signupAuth, loginAuth } from "../auth/auth.js";
import createUserController from "../controllers/user/createUser.js";

const authRouter = Router()

authRouter.post('/signup', async (req, res) => {
    await createUserController(req, res)
})
authRouter.post('/login', loginAuth)

export default authRouter