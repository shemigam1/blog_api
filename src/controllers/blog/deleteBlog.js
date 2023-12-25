// import mongoose from 'mongoose'
import Blog from '../../models/blog.js'

const deleteBlogController = async (req, res) => {
    try {
        const { id } = req.body
        // const blogData = { title, description, author }
        const newBlog = await Blog.findByIdAndDelete(id)

        const data = {
            success: true,
            message: 'Blog deleted',
            code: 200,
            returnStatus: 'OK',
            data: newBlog
        }
        return res.status(data.code).json(data);

    } catch (error) {
        return {
            success: false,
            message: 'couldnt delete blog',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
    }
}

export default deleteBlogController