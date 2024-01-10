import Blog from "../models/blog.js"
import mongoose from "mongoose"

export const createBlogController = async (req, res) => {
    try {
        const { title, description, authorId } = req.body
        // const blogData = { title, description, authorId }
        // console.log(blogData);
        const newBlog = await Blog.create({
            title,
            description,
            authorId
        })

        const data = {
            success: true,
            message: 'Blog created',
            code: 200,
            returnStatus: 'OK',
            data: newBlog
        }
        return res.status(data.code).json(data);

    } catch (error) {
        const data = {
            success: false,
            message: 'couldnt create blog',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
        return res.status(data.code).json(data);
    }
}

export const getAllBlogController = async (req, res) => {
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
        const data = {
            success: false,
            message: 'couldnt find blogs',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
        return res.status(data.code).json(data);
    }
}

export const getBlogController = async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            const data = {
                success: false,
                message: 'Invalid blog ID format',
                code: 400,
                returnStatus: 'BAD_REQUEST',
                data: null
            };
            return res.status(data.code).json(data);
        }
        const blog = await Blog.findById(id)

        if (!blog) {
            const data = {
                success: true,
                message: 'Blog not found',
                code: 404,
                returnStatus: 'NOT_FOUND',
                data: null
            }
            return res.status(data.code).json(data);
        }

        console.log(blog);
        const data = {
            success: true,
            message: 'Blog found',
            code: 200,
            returnStatus: 'OK',
            data: blog
        }
        return res.status(data.code).json(data);

    } catch (error) {
        const data = {
            success: false,
            message: 'couldnt find blog',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
        return res.status(data.code).json(data);
    }
}

export const updateBlogController = async (req, res) => {
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
        const data = {
            success: false,
            message: 'couldnt update blog',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
        return res.status(data.code).json(data);
    }
}

export const deleteBlogController = async (req, res) => {
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
        const data = {
            success: false,
            message: 'couldnt delete blog',
            code: 500,
            returnStatus: 'NOT_OK',
            data: null
        }
        return res.status(data.code).json(data);
    }
}