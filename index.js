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

// Create a function to add a time-in event to an employee's record
function createTimeInEvent(employeeRecord, dateStamp) {
  if (typeof dateStamp !== 'string' || dateStamp.length !== 16) {
    throw new Error('Invalid dateStamp');
  }

  const [date, hour] = dateStamp.split(" ");
  employeeRecord.timeInEvents.push({ type: "TimeIn", hour: parseInt(hour, 10), date: date });
  return employeeRecord;
}

// Create a function to add a time-out event to an employee's record
function createTimeOutEvent(employeeRecord, dateStamp) {
  if (typeof dateStamp !== 'string' || dateStamp.length !== 16) {
    throw new Error('Invalid dateStamp');
  }

  const [date, hour] = dateStamp.split(" ");
  employeeRecord.timeOutEvents.push({ type: "TimeOut", hour: parseInt(hour, 10), date: date });
  return employeeRecord;
}