interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }

  workFullTime() {

  }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }

  workPartTime() {

  }
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const cindy = new FullTimeEmployee();
const bob = new PartTimeEmployee();
cindy.workFullTime();
bob.workPartTime();

const cindyAfterPay = pay(cindy);
const bobAfterPay = pay(bob);

const obj = {
  name: "cindy",
  age: 20,
}
console.log(getValue(obj, "name"));  // cindy
console.log(getValue(obj, "age"));  // 20

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}