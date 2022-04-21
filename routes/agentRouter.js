const express = require("express");
const router = express.Router();
const { midFindOne, midUpdate, midDelete } = require("./mid/agentMid");
const { findAllAgents, findOneAgent, searchAgent, updateAgent, deleteAgent } = require("./controller/agentFunc");

router.get("/getAll", findAllAgents);
router.get("/getOne/:id", midFindOne, findOneAgent);
router.get("/search", searchAgent);
router.patch("/update/:id", midUpdate, updateAgent);
router.delete("/delete/:id", midDelete, deleteAgent);

module.exports = router;