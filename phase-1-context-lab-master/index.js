// Create a function to create an employee record
function createEmployeeRecord(employeeData) {
  return {
    firstName: employeeData[0],
    familyName: employeeData[1],
    title: employeeData[2],
    payPerHour: employeeData[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

// Create a function to create employee records from an array of arrays
function createEmployeeRecords(arraysOfEmployeeData) {
  return arraysOfEmployeeData.map(createEmployeeRecord);
}

// Create a function to add a time-in event to an employee's record
function createTimeInEvent(employeeRecord, dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  employeeRecord.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date,
  });
  return employeeRecord;
}

// Create a function to add a time-out event to an employee's record
function createTimeOutEvent(employeeRecord, dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  employeeRecord.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date,
  });
  return employeeRecord;
}

// Create a function to calculate hours worked on a specific date
function hoursWorkedOnDate(employeeRecord, date) {
  const timeInEvent = employeeRecord.timeInEvents.find(
    (event) => event.date === date
  );
  const timeOutEvent = employeeRecord.timeOutEvents.find(
    (event) => event.date === date
  );

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
  const datesWorked = employeeRecord.timeInEvents.map((event) => event.date);
  const totalWages = datesWorked.reduce((total, date) => {
    return total + wagesEarnedOnDate(employeeRecord, date);
  }, 0);
  return totalWages;
}

// Create a function to find an employee by first name
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find((employee) => employee.firstName === firstName);
}

// Create a function to calculate the payroll for all employees
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((totalPayroll, employeeRecord) => {
    return totalPayroll + allWagesFor(employeeRecord);
  }, 0);
}
