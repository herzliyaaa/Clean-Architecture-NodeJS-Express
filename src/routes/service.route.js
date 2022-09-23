const router = require("express").Router();

const {
  postServiceController,
  putServiceController,
  getServiceByIdController,
  getAllServiceController,
  softDeleteServiceController
} = require("../controllers/service/index");
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index");

router.post("/service/add", makeExpressCallback(postServiceController));
router.put("/service/edit/:id", makeExpressCallback(putServiceController));
router.get("/service/view/:id",  makeExpressCallback(getServiceByIdController));
router.get("/service", makeExpressCallback(getAllServiceController));
router.patch("/service/delete/:id", makeExpressCallback(softDeleteServiceController))

module.exports = router;
