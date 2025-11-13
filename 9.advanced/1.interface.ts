/**
 * interface -> 어떤 특정한 규격을 정의하는 것
 * type -> 어떤 데이터를 받을 때 타입을 정의하는 것(데이터를 담을 목적)
 */
type PositionType = {
  x: number;
  y: number;
}
interface PositionInterface {
  x: number;
  y: number;
}

// object
const obj1: PositionType = {
  x: 1,
  y: 1
}
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1
}

// class
class Pos1 implements PositionType {
  x: number = 0;
  y: number = 0;
}
class Pos2 implements PositionInterface {
  x: number = 0;
  y: number = 0;
  z: number = 0;
}

// extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { z: number };

// only interfaces can be merged.
interface PositionInterface {
  z: number;
}

// type aliases can use computed properties
type Person = {
  name: string;
  age: number;
  direction: "left" | "right" | "up" | "down";
}
type Name = Person["name"];