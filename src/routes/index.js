import { Router } from "express";
import userRouter from "./user.js";
import blogRouter from './blog.js'
const apiRouter = Router()

apiRouter.use('/user', userRouter)
apiRouter.use('/blog', blogRouter)

apiRouter.use('/hello', (req, res) => {
    const data = {
        success: true,
        message: 'Welcome to blog api api v1.0',
        code: 200,
        returnStatus: 'OK',
        data: null
    }
    return res.status(data.code).json(data);
});

export default apiRouter;