import { NextFunction, Request, Response } from "express"
import dotenv from "dotenv"
import ErrorHandler from "../helpers/errorHandler"
import helper from "../helpers/helper"
import PostModel from "../models/postModel"
import NodeCache from "node-cache"
const cache = new NodeCache();
dotenv.config()


//==================   Post Analysis Validation  ====================//

const postAnalysis = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    try {
        let id = req.params.id
        let cachedData = cache.get(id)

        if (cachedData) {

            return res.status(200).json({ data: cachedData })

        } else {
            let postData: {} | any = await PostModel.findOne({ where: { id }, raw: true })

            let analysisObj = {
                wordLength: helper.wordsLength(postData.data),
                averageWordLength: helper.averageLengthOfWords(postData.data)
            }

            cache.set(id, analysisObj, process.env.cacheExpiryTime)

            return res.status(200).json({ data: analysisObj })
        }

    } catch (error) {
        console.log("analysisController.ts/postAnalysis", error)
        return next(new ErrorHandler(error.message, 500))
    }
};





export default { postAnalysis }