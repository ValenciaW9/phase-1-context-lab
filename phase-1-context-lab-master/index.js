// Create a function to add a time-in event to an employee's record
function createTimeInEvent(employeeRecord, dateStamp) {
  if (!dateStamp) {
    throw new Error('Invalid dateStamp');
  }

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
  if (!dateStamp) {
    throw new Error('Invalid dateStamp');
  }

  const [date, hour] = dateStamp.split(" ");
  employeeRecord.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date,
  });
  return employeeRecord;
}
