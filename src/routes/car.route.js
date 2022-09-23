const router = require("express").Router();

const { postCarController, putCarController, getAllCarsController, getCarByIdController, softDeleteCarController, getAllCarsForSaleController } = require("../controllers/car/index")
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index")

router.post("/car/add", makeExpressCallback(postCarController));
router.put("/car/edit/:id",  makeExpressCallback(putCarController) );
router.get("/car", makeExpressCallback(getAllCarsController));
router.get("/car/view/:id",  makeExpressCallback(getCarByIdController));
router.patch("/car/delete/:id",  makeExpressCallback(softDeleteCarController));
router.get("/car/for-sale", makeExpressCallback(getAllCarsForSaleController))

module.exports = router;
