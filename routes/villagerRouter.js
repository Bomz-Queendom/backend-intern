const express = require("express");
const { midCreate, midFindOne, midUpdate, midDelete } = require("./mid/villagerMid");
const router = express.Router();
const { findAllVillagers, findOneVillager, createVillager, villagerSearch, updateVillager, deleteVillager } = require("./controller/villagerFunc");
const { authVillager } = require("./mid/authMid");


router.get("/getAll", findAllVillagers);
router.get("/getOne/:id", midFindOne, findOneVillager);
router.get("/search", villagerSearch);
router.post("/create", midCreate, createVillager);
router.patch("/update/:id", midUpdate, updateVillager);
router.delete("/delete/:id", midDelete, deleteVillager);

module.exports = router;