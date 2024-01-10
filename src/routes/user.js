import { Router } from "express";
import {
    getAllUsersController,
    getUserByIdController,
    getUserByNameController,
    updateUserController
} from "../controllers/user.js";

const userRouter = Router()

userRouter.get("/", getAllUsersController)
userRouter.post("/userId", getUserByIdController)
userRouter.post("/userName", getUserByNameController)
userRouter.put("/updateUser", updateUserController)

export default userRouter