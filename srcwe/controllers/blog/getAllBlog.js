// import mongoose from 'mongoose'
import Blog from '../../models/blog.js'

const getAllBlogController = async (req, res) => {
    try {
        // const { title, description, author } = req.body
        // const blogData = { title, description, author }
        const newBlog = await Blog.find({})

        const data = {
            success: true,
            message: 'Blogs found',
            code: 200,
            returnStatus: 'OK',
            data: newBlog
        }
        return res.status(data.code).json(data);

    } catch (error) {
        return {
            success: false,
            message: 'couldnt find blogs',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
    }
}

export default getAllBlogController