import rateLimit from "express-rate-limit"


let apiLimiter = rateLimit({
    max: 100,
    windowMs: 1 * 60 * 1000,
    message: {
        status: 429,
        message: "Too many requests!"
    }
})


export default apiLimiter