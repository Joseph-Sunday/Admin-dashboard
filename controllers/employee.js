
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

exports.getLeavesAdm = (req, res, next) => {
  res.status(200).render('employee/leaves-adm', {
    pageTitle: 'Leaves-(Admin)', 
    path: '/Leaves-adm'
  });
};