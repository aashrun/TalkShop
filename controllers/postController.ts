import { NextFunction, Request, Response } from "express"
import dotenv from "dotenv"
dotenv.config()
import PostModel from "../models/postModel"
import helper from "../helpers/helper"
import ErrorHandler from "../helpers/errorHandler"


//=========================  Taking Text Inputs  ======================//

const textInput = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    try {
        req.body.id = helper.uuid()

        let data = await PostModel.create(req.body)
        return res.status(201).json({ message: "Data created successfully!", data })

    } catch (error) {
        console.log("postController.ts/textInput" + error)
        return next(new ErrorHandler(error.message, 500))
    }
};



export default { textInput }