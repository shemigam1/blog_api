import User from "../models/user.js"
import { comparePassword } from "../helpers/hash.js"
import { signJwt } from "../helpers/jwt.js"

// result format (
//  success: boolean,
// 	message: string,
// 	code: number,
// 	returnStatus: string,
// 	data: T
// )

const signupController = async (req, res, next) => {
    try {
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password

        const data = {
            name,
            email,
            password
        }

        const user = await User.findOne({
            email
        })
        if (user) {
            console.log("user found");
            const returnData = {
                success: false,
                message: 'user exists already',
                code: 400,
                returnStatus: "BAD_REQUEST",
                data: null
            }
            return res.status(returnData.code).json(returnData)
        } else {
            try {
                const newUser = (await User.create(data)).toObject();
                // const { password, ...other } = newUser;

                const returnData = {
                    success: true,
                    message: 'signup successful',
                    code: 200,
                    returnStatus: "OK",
                    data: null
                }
                return res.status(returnData.code).json(returnData)
            } catch (error) {
                const returnData = {
                    success: false,
                    message: 'signup failed',
                    code: 403,
                    returnStatus: "BAD_REQUEST",
                    data: null
                }
                return res.status(returnData.code).json(returnData)
            }
        }
    } catch (error) {
        const returnData = {
            success: false,
            message: 'something went wrong',
            code: 422,
            returnStatus: "NOT_OK",
            data: null
        }
        return res.status(returnData.code).json(returnData)
    }


}


const loginController = async (req, res, next) => {
    try {
        const email = req.body.email
        const password = req.body.password

        const user = await User.findOne({
            email,
        });
        if (user) {
            const passwordMatch = comparePassword(user.password, password);
            if (!passwordMatch) {
                const resultData = {
                    success: false,
                    message: 'invalid email or password',
                    code: 400,
                    returnStatus: "BAD_REQUEST",
                    data: null
                }
                return res.status(resultData.code).json(resultData)
            }
            const jwtToken = signJwt(user);
            if (!jwtToken) {
                const resultData = {
                    success: false,
                    message: 'server error',
                    code: 500,
                    returnStatus: "NOT_OK",
                    data: null
                }
                return res.status(resultData.code).json(resultData)
            }
            const data = {
                token: jwtToken,
                user: {
                    email,
                    name: user.name,
                },
            };
            const resultData = {

                success: true,
                message: 'login successful',
                code: 200,
                returnStatus: "OK",
                data: data
            }
            res.status(resultData.code).json(resultData)

        } else {
            const resultData = {

                success: false,
                message: 'user does not exist',
                code: 400,
                returnStatus: "BAD_REQUEST",
                data: null
            }
            res.status(resultData.code).json(resultData)
        }
    } catch (error) {
        const returnData = {
            success: false,
            message: 'something went wrong',
            code: 422,
            returnStatus: "NOT_OK",
            data: null
        }
        return res.status(returnData.code).json(returnData)
    }
}

export { signupController, loginController }