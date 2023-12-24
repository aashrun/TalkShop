import { Request, Response, NextFunction } from "express"
import dotenv from "dotenv"
import helper from "./errorHandler"
dotenv.config()



//=========================  Taking Text Inputs Validation  ======================//

const textInputValidation = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    try {
        type UseCase = 'bio' | 'postCaptionAndComment' | 'tweet';


        let { useCase, data }: { useCase: UseCase; data: string } = req.body;


        if (!useCase) {
            return helper.ErrorHandler("UseCase must be present!", 400, req, res, next)
        }

        if(useCase != ("bio" || "postCaptionAndComment" || "tweet")){
            return helper.ErrorHandler("UseCase must have either bio, postCaptionAndComment or tweet!", 400, req, res, next)
        }

        if (!data) {
            return helper.ErrorHandler("data must be present!", 400, req, res, next)
        }


        if (useCase == "bio" && data.length > parseInt(process.env.bioCharactersLimit || "160")) {
            return helper.ErrorHandler("Max characters exceeded!", 400, req, res, next)
        }

        if (useCase == "postCaptionAndComment" && data.length > parseInt(process.env.postCaptionAndCommentCharactersLimit || "2200")) {
            return helper.ErrorHandler("Max characters exceeded!", 400, req, res, next)
        }

        if (useCase == "tweet" && data.length > parseInt(process.env.tweetCharactersLimit || "4000")) {
            return helper.ErrorHandler("Max characters exceeded!", 400, req, res, next)
        }

        next()

    } catch (error) {
        console.log("validation.ts/textInputValidation", error)
        return helper.ErrorHandler(error.message, 500, req, res, next)

    }

};




export default { textInputValidation }