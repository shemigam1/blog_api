// import mongoose from 'mongoose'
import Blog from '../../models/blog.js'

const createBlogController = async (req, res) => {
    try {
        const { title, description, author } = req.body
        const blogData = { title, description, author }
        const newBlog = await Blog.create(blogData)

        const data = {
            success: true,
            message: 'Blog created',
            code: 200,
            returnStatus: 'OK',
            data: newBlog.toObject()
        }
        return res.status(data.code).json(data);

    } catch (error) {
        return {
            success: false,
            message: 'couldnt create blog',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
    }
}

export default createBlogController