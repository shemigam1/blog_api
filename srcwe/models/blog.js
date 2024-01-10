import mongoose, { Schema } from 'mongoose'

const blogSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
})

const Blog = mongoose.model("Blog", blogSchema)
export default Blog