var express = require("express");
var router = express.Router();
const {
    create,
    update,
    deleteCourse,
    getAllList,
    getById,
} = require("./handler/courses/");
const verifyToken = require("../middleware/verifyToken");
const can = require("../middleware/permissions");

router.put("/:id", verifyToken, can("admin"), update);
router.delete("/:id", verifyToken, can("admin"), deleteCourse);
router.get("/:id", getById);
router.post("/", verifyToken, can("admin"), create);
router.get("/", getAllList);

module.exports = router;
