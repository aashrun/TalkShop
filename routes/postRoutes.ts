import express from "express"
const router = express.Router()
import postValidation from "../helpers/postValidation"
import postController from "../controllers/postController"



router.post("/createPost", postValidation.textInputValidation, postController.textInput)


    



//====================================  Invalid API  ==========================================//

router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        msg: "The api you requested is not available!"
    })
})



export default router