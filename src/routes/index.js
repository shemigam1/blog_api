import { Router } from "express";
import authRouter from "./auth.js";
import userRouter from "./user.js";
import authMiddleware from '../middleware/authMiddleware.js'
import blogRouter from "./blog.js";

const apiRouter = Router()

// result format (
//  success: boolean,
// 	message: string,
// 	code: number,
// 	returnStatus: string,
// 	data: T
// )

apiRouter.use("/auth", authRouter)
apiRouter.use("/user", authMiddleware, userRouter)
apiRouter.use("/blog", authMiddleware, blogRouter)

apiRouter.use("/", (req, res) => {
    const data = {
        success: true,
        message: "Welcome to my blog api",
        code: 200,
        returnStatus: "OK",
        data: null
    }
    res.status(data.code).json(data)
})

export default apiRouter