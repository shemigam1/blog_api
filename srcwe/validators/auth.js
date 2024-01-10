import Joi from "joi";

export const loginValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

export const signupValidator = Joi.object({
    name: Joi.string().alphanum().required().min(3),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})