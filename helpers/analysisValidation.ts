import { Request, Response, NextFunction } from "express"
import dotenv from "dotenv"
import ErrorHandler from "./errorHandler"
import PostModel from "../models/postModel"
dotenv.config()



//==================   Post Analysis Validation  ====================//

const postAnalysisValidation = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    try {
        let id = req.params.id

        let postData: {} = await PostModel.findOne({ where: { id }, raw: true })
        if(!postData){
            return next(new ErrorHandler("Data not found!", 404))
        }
        // req.postData = postData

        next()

    } catch (error) {
        console.log("analysisValidation.ts/postAnalysis", error)
        return next(new ErrorHandler(error.message, 500))
    }
};



export default { postAnalysisValidation }