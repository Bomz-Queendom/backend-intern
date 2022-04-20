const { villagerSignUp, getOneProfile, agentSignUp, villagerLogin, agentLogin } = require('./controller/auth');
const { auth, midVillagerSignUp, midAgentSignUp, midLogin } = require('./mid/authMid');
const router = require('express').Router();

router.post('/villagerSignUp', midVillagerSignUp, villagerSignUp);
router.post('/agentSignUp', midAgentSignUp, agentSignUp);
router.post('/villagerLogin', midLogin, villagerLogin);
router.post('/agentLogin', midLogin, agentLogin);
router.get('/myProfile/:id', auth, getOneProfile);

module.exports = router;