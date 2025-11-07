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
    //return undefined;
  }

  // null
  let person: null;  // 💩
  let name: string | null;
}