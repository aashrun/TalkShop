import { Request, Response } from "express"
import dotenv from "dotenv"
import { v4 } from "uuid"
dotenv.config()




//===============  Calculating Length of Input  ==================//

const wordsLength = (data: string): number => {
    return data.split(" ").length
};






//===============  Calculating Average Length of Words In Input  ==================//

const averageLengthOfWords = (data: string): number => {
    let wordsInArray: string[] = data.split(" ")
    let lengthsOfWords: number[] = []

    wordsInArray.forEach((words) => lengthsOfWords.push(words.length))

    return Math.floor(lengthsOfWords.reduce((a, b) => a + b) / wordsInArray.length)
};







//================  Unique Ids  ==================//

const uuid = (): string => {
    const randomUuid = v4()
    return randomUuid.substring(0, 16)
};





export default { wordsLength, averageLengthOfWords, uuid }


