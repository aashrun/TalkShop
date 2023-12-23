import { Request, Response, NextFunction } from "express"
import dotenv from "dotenv"
import ErrorHandler from "./errorHandler"
dotenv.config()



//=========================  Taking Text Inputs Validation  ======================//

const textInputValidation = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    try {
        type UseCase = 'bio' | 'postCaptionAndComment' | 'tweet';

        
        let { useCase, data }: { useCase: UseCase; data: string } = req.body;
        
        if(!useCase){
            return next(new ErrorHandler("UseCase must be present!", 400))
        }

        if(!data){
            return next(new ErrorHandler("data must be present!", 400))
        }
        

        if (useCase == "bio" && data.length > parseInt(process.env.bioCharactersLimit)) {
            return next(new ErrorHandler("Max characters exceeded!", 400))
        }

        if (useCase == "postCaptionAndComment" && data.length > parseInt(process.env.postCaptionAndCommentCharactersLimit)) {
            return next(new ErrorHandler("Max characters exceeded!", 400))
        }

        if (useCase == "tweet" && data.length > parseInt(process.env.tweetCharactersLimit)) {
            return next(new ErrorHandler("Max characters exceeded!", 400))
        }

        next()

    } catch (error) {
        console.log("validation.ts/textInputValidation", error)
        return next(new ErrorHandler(error.message, 500))
    }

};




export default { textInputValidation }