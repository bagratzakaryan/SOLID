// LSP not expected
// class Employee {
//   firstName: string;
//   lastName: string;
//   manager: Employee;
//   salary: number;

//   assignManager(manager: Employee): void {
//     this.manager = manager;
//   }

//   calcPerHoursRate(rank: number): void {
//     const baseAmount = 12.5;
//     this.salary = baseAmount + rank * 2;
//   }
// }

// class Manager extends Employee {
//   calcPerHoursRate(rank: number): void {
//     const baseAmount = 19.75;
//     this.salary = baseAmount + rank * 2;
//   }

//   generatePerformanceReview(): void {
//     console.log("I am reviewing performance of the team");
//   }
// }

// class CEO extends Employee {
//   assignManager(manager: Employee): void {
//     throw new Error("CEO does not have manager");
//   }

//   calcPerHoursRate(rank: number): void {
//     const baseAmount = 150;
//     this.salary = baseAmount + rank * 2;
//   }

//   generatePerformanceReview(): void {
//     console.log("I am reviewing performance of the team");
//   }

//   fireSomeone(): void {
//     console.log("You are fired!");
//   }
// }

// LSP expected
abstract class BaseEmployee {
  firstName: string;
  lastName: string;
  salary: number;

  calcPerHoursRate(rank: number): void {
    const baseAmount = 12.5;
    this.salary = baseAmount + rank * 2;
  }
}

class Employee extends BaseEmployee {
  manager: BaseEmployee;

  assignManager(manager: Employee): void {
    this.manager = manager;
  }
}

class Manager extends Employee {
  calcPerHoursRate(rank: number): void {
    const baseAmount = 19.75;
    this.salary = baseAmount + rank * 2;
  }

  generatePerformanceReview(): void {
    console.log("I am reviewing performance of the team");
  }
}

class CEO extends BaseEmployee {
  calcPerHoursRate(rank: number): void {
    const baseAmount = 150;
    this.salary = baseAmount + rank * 2;
  }

  generatePerformanceReview(): void {
    console.log("I am reviewing performance of the team");
  }

  fireSomeone(): void {
    console.log("You are fired!");
  }
}
