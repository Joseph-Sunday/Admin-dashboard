const {Router} = require('express'); 

const router = Router();
const isAuth = require('../middleware/is-auth'); 
const employeeController = require('../controllers/employee'); 

router.get('/employees', isAuth, employeeController.getEmployees);

router.get('/add-emp', isAuth, employeeController.getAddEmp); 

router.get('/holidays', isAuth, employeeController.getHolidays); 

module.exports = router;