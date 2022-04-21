const { villagerSignUp, agentSignUp, getProfile, Login } = require('./controller/auth');
const { auth, midVillagerSignUp, midAgentSignUp, midLogin } = require('./mid/authMid');
const router = require('express').Router();

router.post('/villagerSignUp', midVillagerSignUp, villagerSignUp);
router.post('/agentSignUp', midAgentSignUp, agentSignUp);
router.post('/Login', midLogin, Login);
router.get('/myProfile', auth, getProfile);

module.exports = router;