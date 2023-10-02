function createEmployeeRecords(employeeData) {
  return employeeData.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour),
    date: date
  });
  return this;
}

function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour),
    date: date
  });
  return this;
}

function hoursWorkedOnDate(date) {
  const timeInEvent = this.timeInEvents.find(event => event.date === date);
  const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
  return hoursWorked;
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  const wagesEarned = hoursWorked * this.payPerHour;
  return wagesEarned;
}

function allWagesFor() {
  const availableDates = this.timeInEvents.map(event => event.date);
  const totalWages = availableDates.reduce((total, date) => {
    return total + wagesEarnedOnDate.call(this, date);
  }, 0);
  return totalWages;
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
  const totalPayroll = employeeRecords.reduce((total, employee) => {
    return total + allWagesFor.call(employee);
  }, 0);
  return totalPayroll;
}