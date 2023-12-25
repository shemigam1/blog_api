import { Router } from "express";
import createBlogController from "../controllers/blog/createBlog.js";
import getBlogController from "../controllers/blog/getBlog.js";
import getAllBlogController from "../controllers/blog/getAllBlog.js";
import updateBlogController from "../controllers/blog/updateBlog.js";
import deleteBlogController from "../controllers/blog/deleteBlog.js";
// import getBlogByNameController from "../controllers/blog/getBlogByName.js";

const blogRouter = Router()


blogRouter.get('/getAllBlog', getAllBlogController)
// blogRouter.get('getblogByNAme', getblogByNameController)
blogRouter.post('/getBlog', getBlogController)
blogRouter.post('/createBlog', createBlogController)
blogRouter.put('/updateBlog', updateBlogController)
blogRouter.delete('/deleteBlog', deleteBlogController)

export default blogRouter