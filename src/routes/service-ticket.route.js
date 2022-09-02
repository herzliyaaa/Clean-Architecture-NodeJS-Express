const router = require("express").Router();

const {
  postTicketController,
  getTicketByIdController,
  getAllTicketsController,
} = require("../controllers/service-ticket/index");
const authMiddleware = require("../middleware/index");
const makeExpressCallback = require("../express-callback/index");

router.post(
  "/ticket/create",
  authMiddleware,
  makeExpressCallback(postTicketController)
);
router.get(
  "/ticket/:id",
  authMiddleware,
  makeExpressCallback(getTicketByIdController)
);
router.get(
  "/ticket",
  makeExpressCallback(getAllTicketsController)
);

module.exports = router;
