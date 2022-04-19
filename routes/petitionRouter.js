const express = require("express");
const { midCreate, midGetOne, midFilter, midUpdateStatus, midUpdate } = require("./mid/petitionMid");
const { createPetition, getAllPetition, getOnePetition, deletePetition, filterPetition, filterPetitionByStatus, updateStatus, updatePetition } = require("./controller/petitionFunc");
const router = express.Router();

router.post("/create/:id", midCreate, createPetition);
router.get("/getAll", getAllPetition);
router.get("/getOne/:id", midGetOne, getOnePetition);
router.get("/filterByStatus", midFilter, filterPetitionByStatus);
router.delete("/delete/:id", deletePetition);
router.patch('/update/:id', midUpdate, updatePetition);
router.use("/images", express.static('./public/images/petitionImage'));

module.exports = router;