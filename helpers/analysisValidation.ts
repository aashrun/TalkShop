import { Request, Response, NextFunction } from "express"
import dotenv from "dotenv"
import helper from "./errorHandler"
import PostModel from "../models/postModel"
dotenv.config()



//==================   Post Analysis Validation  ====================//

const postAnalysisValidation = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    try {
        let id = req.params.id

        let postData: {} = await PostModel.findOne({ where: { id }, raw: true })
        if (!postData) {
            return helper.ErrorHandler("Data Not Found!", 404, req, res, next)
        }
        // req.postData = postData

        next()

    } catch (error) {
        console.log("analysisValidation.ts/postAnalysis", error)
        return helper.ErrorHandler(error.message, 500, req, res, next)
    }
};



export default { postAnalysisValidation }