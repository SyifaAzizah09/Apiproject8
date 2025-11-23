const express = require("express");
const router = express.Router();
const controller = require("../controllers/products.controller");
const { authBearer } = require("../middlewares/auth.middleware");

// ENDPOINTS
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", authBearer, controller.create);
router.put("/:id", authBearer, controller.update);
router.delete("/:id", authBearer, controller.delete);

module.exports = router;
