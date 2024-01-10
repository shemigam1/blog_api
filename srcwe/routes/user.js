import { Router } from "express";
import createUserController from "../controllers/user/createUser.js";
import getUserController from "../controllers/user/getUser.js";
import getAllUserController from "../controllers/user/getAllUser.js";
import updateUserController from "../controllers/user/updateUser.js";
import deleteUserController from "../controllers/user/deleteUser.js";
import getUserByNameController from "../controllers/user/getUserByName.js";

const userRouter = Router()


userRouter.get('/getAllUser', getAllUserController)
userRouter.get('getUserByNAme', getUserByNameController)
userRouter.post('/getUser', getUserController)
userRouter.post('/createUser', createUserController)
userRouter.put('/updateUser', updateUserController)
userRouter.delete('/deleteUser', deleteUserController)

export default userRouter