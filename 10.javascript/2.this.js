/**
 * this: 부르는 사람의 문맥에 따라 변경될 수 있음
 */
console.log(this);  // window

function simpleFunc() {
  console.log(this);  // window
}
simpleFunc();

class Counter {
  count = 0;
  // increase = () => {
  //   console.log(this);  // counter
  // }
  increase () {
    console.log(this);  // counter
  }
}
const counter = new Counter();
counter.increase();
const caller = counter.increase;
// const caller = counter.increase.bind(counter);
caller();  // undefined

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();  // bob