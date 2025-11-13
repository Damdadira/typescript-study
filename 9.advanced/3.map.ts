/**재사용성이 높음!!!!!! */
type Video = {
  title: string;
  author: string;
}
type Animal = {
  name: string;
  age: number;
}

// [1.2].map(item => item * item);  // [1, 4]
type Optional<T> = {
  [P in keyof T]?: T[P];  // for...in
}
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
}
type VideoOptional = Optional<Video>;
type AnimalOptional = Optional<Animal>;

const animal: Optional<Animal> = {
  name: "dog"
}
animal.name = "cat";

// 바꾸려고 하면 에러 발생
// const video: ReadOnly<Animal> = {
//   name: "tiger"
// }

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
}
const obj2: Nullable<Video> = {
  title: null,
  author: null,
}

type Proxy<T> = {
  get(): T;
  set(value: T): void;
}
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
}