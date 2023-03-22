const {Router} = require('express'); 

const router = Router();
const isAuth = require('../middleware/is-auth'); 
const employeeController = require('../controllers/employee'); 

router.get('/employees', isAuth, employeeController.getEmployees);

router.get('/add-emp', isAuth, employeeController.getAddEmp); 

router.get('/holidays', isAuth, employeeController.getHolidays);

router.get('/add-hol', isAuth, employeeController.getAddHol); 

router.get('/leaves-adm', isAuth, employeeController.getLeavesAdm);

router.get('/adm-leave', isAuth, employeeController.getAdmLeave);

router.get('/leaves-emp', isAuth, employeeController.getLeavesEmp); 

router.get('/emp-leave', isAuth, employeeController.getEmpLeave);

module.exports = router;