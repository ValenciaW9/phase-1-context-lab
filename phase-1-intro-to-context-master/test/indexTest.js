const helpers = require('./helpers');

describe("The payroll system", function () {
  describe("populates a record from an Array", function () {
    it("has a function called createEmployeeRecord", function () {
      expect(helpers.createEmployeeRecord).to.exist;
    });

    describe("createEmployeeRecord", function () {
      it("populates a firstName field from the 0th element", function () {
        let testEmployee = helpers.createEmployeeRecord(["Gray", "Worm", "Security", 1]);
        expect(testEmployee.firstName).to.eq("Gray");
      });

      // ... rest of the tests ...
    });
  });

  // ... rest of the tests ...

  describe("runs payroll using the mock data provided by Ultron data systems", function () {
    describe("Dependent functions: createEmployeeRecords", function () {
      describe("takes CSV data, returns an array of employee records", function () {
        it("exists", function () {
          expect(helpers.createEmployeeRecords).to.exist;
        });

        it("returns an Array with 2 records for Loki and Natalia", function () {
          let src = [
            ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
            ["Natalia", "Romanov", "CEO", 150]
          ];
          expect(helpers.createEmployeeRecords(src).length).to.eql(2);
          expect(helpers.createEmployeeRecords(src).map(function (e) {
            return e.firstName;
          })).to.eql(["Loki", "Natalia"]);
        });
      });
    });

    // ... rest of the tests ...
  });
});
