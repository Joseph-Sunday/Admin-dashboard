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

router.get('/leave-sett', isAuth, employeeController.getLeaveSett);

router.get('/attendance', isAuth, employeeController.getAttendance);

router.get('/attend-adm', isAuth, employeeController.getAttendAdm);

router.post('/add-emp', isAuth, employeeController.postAddEmp);

router.post('/add-hol', isAuth, employeeController.postAddHol);

router.delete('/holiday/:holId', isAuth, employeeController.deleteHol);

module.exports = router;