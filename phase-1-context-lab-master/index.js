function createEmployeeRecord(employeeData) {
  const [firstName, familyName, title, payPerHour] = employeeData;
  return {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(employeesData) {
  return employeesData.map(createEmployeeRecord);
}

ffunction createTimeInEvent(employeeRecord, timeStamp) {
  if (timeStamp) {
    const [date, hour] = timeStamp.split(" ");
    employeeRecord.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date
    });
  }
  return employeeRecord;
}

function createTimeOutEvent(employeeRecord, timeStamp) {
  if (timeStamp) {
    const [date, hour] = timeStamp.split(" ");
    employeeRecord.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date
    });
  }
  return employeeRecord;
}


function hoursWorkedOnDate(employeeRecord, date) {
  const timeInEvent = employeeRecord.timeInEvents.find(
    event => event.date === date
  );
  const timeOutEvent = employeeRecord.timeOutEvents.find(
    event => event.date === date
  );
  const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
  return hoursWorked;
}

function wagesEarnedOnDate(employeeRecord, date) {
  const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
  const payRate = employeeRecord.payPerHour;
  const wagesEarned = hoursWorked * payRate;
  return wagesEarned;
}

function allWagesFor(employeeRecord) {
  const eligibleDates = employeeRecord.timeInEvents.map(e => e.date);

  const payable = eligibleDates.reduce(function(memo, d) {
    return memo + wagesEarnedOnDate(employeeRecord, d);
  }, 0);

  return payable;
}

function calculatePayroll(employeeRecords) {
  const totalPayroll = employeeRecords.reduce(
    (total, employeeRecord) => total + allWagesFor(employeeRecord),
    0
  );
  return totalPayroll;
}