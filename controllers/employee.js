const Employees = require('../models/employee'); 
const Holidays = require('../models/holidays');

exports.getEmployees = (req, res, next) => {
  Employees.find()
  .then(employees => {
    res.status(200).render('employee/employees', {
      pageTitle: 'All Employees', 
      path: '/employees',
      employee: employees, 
    }); 
  })
  .catch(err => {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
  
};

exports.getAddEmp = (req, res, next) => {
  res.status(200).render('employee/add-emp', {
    pageTitle: 'Add Employee', 
    path: '/add-emp',
  });
};

exports.postAddEmp = (req, res, next) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;  
  const username = req.body.username; 
  const email = req.body.email;
  const joiningDate = req.body.joiningDate; 
  const department = req.body.department; 
  const designation = req.body.designation; 
  const phone = req.body.phone;
  const company = req.body.company

  const employee = new Employees({
    firstName: firstname,
    lastName: lastname,
    username: username,
    email: email, 
    joiningDate: joiningDate, 
    department: department, 
    designation: designation,
    phone: phone,
    company: company,
  }); 
  employee.save()
    .then(employee => {
      if (!employee) {
        console.log('Employee not created');
        res.status(500).redirect('/add-emp');
      }
      console.log('Employee added'); 
      res.status(201).redirect('/employees')
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
}

exports.getHolidays = (req, res, next) => {
  Holidays.find()
  .then(holiday => {
    res.status(200).render('employee/holidays', {
      pageTitle: 'Holidays', 
      path: '/holidays', 
      holidays: holiday,
    });
  })
  .catch(err => {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
};


exports.getAddHol = (req, res, next) => {
  res.status(200).render('employee/add-holiday', {
    pageTitle: 'Add-holiday', 
    path: '/add-hol'
  });
};

exports.postAddHol = (req, res, next) => {
  const holidayname = req.body.name; 
  const date = req.body.date;
  const day = req.body.day; 

  const holiday = new Holidays({
    title: holidayname, 
    date: date, 
    day: day,
  }); 
  holiday.save()
  .then(holiday => {
    if (!holiday) {
      console.log('No holiday created');
      res.status(500).redirect('/add-hol');
    }
    console.log('Holiday Created'); 
    res.status(201).redirect('/holidays')
  })
  .catch(err => {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
}; 

exports.deleteHol = (req, res, next) => {
  const holId = req.params.holId; 
  Holidays.findOneAndRemove(holId)
  .then(result => {
    console.log('holiday deleted'); 
    res.status(200).redirect('/holidays')
  })
  .catch(err => {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
}

exports.getLeavesAdm = (req, res, next) => {
  res.status(200).render('employee/leaves-adm', {
    pageTitle: 'Leaves-(Admin)', 
    path: '/Leaves-adm'
  });
};

exports.getAdmLeave = (req, res, next) => {
  res.status(200).render('employee/adm-leave', {
    pageTitle: 'Add-Leave', 
    path: '/adm-leave'
  });
};

exports.getLeavesEmp = (req, res, next) => {
  res.status(200).render('employee/leaves-emp', {
    pageTitle: 'Leaves-(Employee)', 
    path: '/Leaves-emp'
  });
};

exports.getEmpLeave = (req, res, next) => {
  res.status(200).render('employee/emp-leave', {
    pageTitle: 'Add-Leave', 
    path: '/emp-leave'
  });
};

exports.getLeaveSett = (req, res, next) => {
  res.status(200).render('employee/leave-settings', {
    pageTitle: 'Leave-settings', 
    path: '/leave-sett'
  });
};

exports.getAttendance = (req, res, next) => {
  res.status(200).render('employee/attendance', {
    pageTitle: 'Attendance', 
    path: '/attendance'
  });
};

exports.getAttendAdm = (req, res, next) => {
  res.status(200).render('employee/attend-adm', {
    pageTitle: 'Attendance-admin', 
    path: '/attend-adm'
  });
};