import { Router } from "express";
import {
    getAllBlogController,
    getBlogController,
    createBlogController,
    updateBlogController,
    deleteBlogController
} from '../controllers/blog.js'

const blogRouter = Router()

blogRouter.get("/", getAllBlogController)
blogRouter.get("/blogId/:id", getBlogController)
blogRouter.post("/createBlog", createBlogController)
blogRouter.put("/updateBlog", updateBlogController)
blogRouter.delete("/deleteBlog", deleteBlogController)

export default blogRouter