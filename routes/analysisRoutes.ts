import express from "express"
const router = express.Router()
import analysisValidation from "../helpers/analysisValidation"
import analysisController from "../controllers/analysisController"



router.get("/getPostAnalysis/:id", analysisValidation.postAnalysisValidation, analysisController.postAnalysis)




//====================================  Invalid API  ==========================================//

router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        msg: "The api you requested is not available!"
    })
})



export default router