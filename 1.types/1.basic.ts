{
  /**
   * JavaScript
   * Primitive(원시): number, string, boolean, bigint, symbol, null, undefined
   * Object(객체): function, array ...
   */

  // number
  const num:number = 0;

  // string
  const str:string = "Hello";

  // boolean
  const boal:boolean = true;

  // undefined
  let name: undefined;  // 💩
  let age: number | undefined;  //보편적으로 많이 이용
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null;  // 💩
  let person2: string | null;

  // unknown(무슨 타입인지 몰라, 가능하면 쓰지 않는 것이 좋음) 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any(가능하면 쓰지 않는 것이 좋음) 💩
  let anything: any = 0;
  anything = "hello";

  // void(함수에서 아무것도 리턴하지 않으면 void 타입으로 선언됨)
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined;  // 💩

  // never
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
  }
  let neverEnding: never;  // 💩

  // object(어떤 타입인지 명시해주는 것이 좋음)
  let obj: object;  // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "apple" });
  acceptSomeObject({ animal: "dog" })
}