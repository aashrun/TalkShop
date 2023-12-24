import { Request, Response, NextFunction } from "express";
import ErrorHandler from "./errorHandler";


const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction): any => {
    err.statusCode = err.statusCode || 500
    let error: any = { ...err }
    error.message = err.message

    return res.status(error.statusCode).json({
        success: false,
        message: error.message || `Internale Server Error ${error.statusCode}`
    })
};


export default errorMiddleware