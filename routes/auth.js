const {Router} = require('express'); 

const router = Router();
const authController = require('../controllers/auth');

router.get('/', authController.getLogin); 

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin); 

router.post('/signup', authController.postSignup);

router.post('/logout', authController.postLogout)

module.exports = router;