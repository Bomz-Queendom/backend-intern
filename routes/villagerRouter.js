const express = require("express");
const { midFindOne, midUpdate, midDelete } = require("./mid/villagerMid");
const router = express.Router();
const { findAllVillagers, findOneVillager, villagerSearch, updateVillager, deleteVillager } = require("./controller/villagerFunc");


router.get("/getAll", findAllVillagers);
router.get("/getOne/:id", midFindOne, findOneVillager);
router.get("/search", villagerSearch);
router.patch("/update/:id", midUpdate, updateVillager);
router.delete("/delete/:id", midDelete, deleteVillager);

module.exports = router;