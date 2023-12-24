import { Request, Response, NextFunction } from "express"

//==================  Error Constructor  ======================//

// class ErrorHandler extends Error {
//     public statusCode: number;

//     constructor(message: string, statusCode: number) {
//         super(message)
//         this.statusCode = statusCode
//         Error.captureStackTrace(this, this.constructor)
//     }
// }





//====================  Basic Error Handler  ==================//

const ErrorHandler = async(message: string, statusCode: number, req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    try {
        return res.status(statusCode).json({ message })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export default { ErrorHandler }

