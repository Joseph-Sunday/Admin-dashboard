
exports.getEmployees = (req, res, next) => {
  res.status(200).render('employee/employees', {
    pageTitle: 'All Employees', 
    path: '/employees',
  })
};

exports.getAddEmp = (req, res, next) => {
  res.status(200).render('employee/add-emp', {
    pageTitle: 'Add Employee', 
    path: '/add-emp'
  });
};

exports.getHolidays = (req, res, next) => {
  res.status(200).render('employee/holidays', {
    pageTitle: 'Holidays', 
    path: '/holidays'
  });
};

exports.getAddHol = (req, res, next) => {
  res.status(200).render('employee/add-holiday', {
    pageTitle: 'Add-holiday', 
    path: '/add-hol'
  });
};

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