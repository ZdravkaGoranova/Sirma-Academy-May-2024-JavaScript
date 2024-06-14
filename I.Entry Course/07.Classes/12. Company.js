class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    let person = { name, salary, position };
    
    if (
      name === undefined ||
      salary === undefined ||
      position === undefined ||
      department === undefined ||
      name === null ||
      salary === null ||
      position === null ||
      department === null ||
      name === '' ||
      salary === '' ||
      position === '' ||
      department === ''
    ) {
      throw new Error('Invalid input!');
    }
    if (salary < 0) {
      throw new Error('Invalid input!');
    }
    if (!this.departments[department]) {
      this.departments[department] = [];
    }

    this.departments[department].push(person);

    return console.log(
      `New employee is hired. Name: ${name}. Position: ${position}`,
    );
  }
  bestDepartment() {
    let bestDept = '';
    let highestAvgSalary = 0;

    let arrayDepartments = Object.entries(this.departments);

    for (const dept in this.departments) {
      let totalSalary = this.departments[dept].reduce(
        (sum, emp) => sum + emp.salary,
        0,
      );

      let avgSalary = totalSalary / this.departments[dept].length;

      if (avgSalary > highestAvgSalary) {
        highestAvgSalary = avgSalary;
        bestDept = dept;
      }
    }

    let result = `Best Department is: ${bestDept}\nAverage salary: ${highestAvgSalary.toFixed(
      2,
    )}\n`;

    this.departments[bestDept]
      .sort((a, b) => a.salary - b.salary)
      .sort((a, b) => b.name.localeCompare(a.name))
      .forEach((emp) => {
        result += `${emp.name} ${emp.salary} ${emp.position}\n`;
      });
    return result;
  }
}

let c = new Company();
c.addEmployee('Stamat', 2000, 'engineer', 'Construction');
c.addEmployee('Peter', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Martin', 500, 'support', 'Construction');
c.addEmployee('Stanley', 2000, 'architect', 'Construction');
c.addEmployee('Stamat', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Peter', 1000, 'graphical designer', 'Marketing');
c.addEmployee('George', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());
