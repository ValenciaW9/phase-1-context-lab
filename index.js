// Create a function to create an employee record
function createEmployeeRecord(employeeData) {
  return {
    firstName: employeeData[0],
    familyName: employeeData[1],
    title: employeeData[2],
    payPerHour: employeeData[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

// Create a function to create employee records from an array of arrays
function createEmployeeRecords(arraysOfEmployeeData) {
  return arraysOfEmployeeData.map(createEmployeeRecord);
}
function createTimeInEvent(employeeRecord, dateStamp) {
  if (typeof dateStamp !== 'string' || dateStamp.length !== 16) {
    throw new Error('Invalid dateStamp');
  }

  const [date, hour] = dateStamp.split(" ");
  employeeRecord.timeInEvents.push({ type: "TimeIn", hour: parseInt(hour, 10), date: date });
  return employeeRecord;
}

  const [date, hour] = dateStamp.split(" ");
  employeeRecord.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
  });
  return employeeRecord;
}function createTimeOutEvent(employeeRecord, dateStamp) {
  if (typeof dateStamp !== 'string' || dateStamp.length !== 16) {
    throw new Error('Invalid dateStamp');
  }

  const [date, hour] = dateStamp.split(" ");
  employeeRecord.timeOutEvents.push({ type: "TimeOut", hour: parseInt(hour, 10), date: date });
  return employeeRecord;
}

// Create a function to calculate hours worked on a specific date
function hoursWorkedOnDate(employeeRecord, date) {
  const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
  const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);

  const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
  return hoursWorked;
}

// Create a function to calculate wages earned on a specific date
function wagesEarnedOnDate(employeeRecord, date) {
  const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
  const payRate = employeeRecord.payPerHour;
  return hoursWorked * payRate;
}

// Create a function to calculate all wages for an employee
function allWagesFor(employeeRecord) {
  const datesWorked = employeeRecord.timeInEvents.map(event => event.date);
  const totalWages = datesWorked.reduce((total, date) => {
    return total + wagesEarnedOnDate(employeeRecord, date);
  }, 0);
  return totalWages;
}

// Create a function to find an employee by first name
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employee => employee.firstName === firstName);
}

// Create a function to calculate the payroll for all employees
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((totalPayroll, employeeRecord) => {
    return totalPayroll + allWagesFor(employeeRecord);
  }, 0);
}