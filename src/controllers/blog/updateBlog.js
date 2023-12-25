// import mongoose from 'mongoose'
import Blog from '../../models/blog.js'

const updateBlogController = async (req, res) => {
    try {
        const { id, update } = req.body
        // const blogData = { title, description, author }
        const newBlog = await Blog.findByIdAndUpdate(id, update)

        const data = {
            success: true,
            message: 'Blog updated',
            code: 200,
            returnStatus: 'OK',
            data: newBlog
        }
        return res.status(data.code).json(data);

    } catch (error) {
        return {
            success: false,
            message: 'couldnt update blog',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
    }
}

export default updateBlogController