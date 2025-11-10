{
  /**
   * Type Assertions: 별로 좋은 방법이 아님 💩
   */

  // 자바스크립트 이기 때문에 리턴 타입을 알 수 없지만, 내부적으론 문자열을 리턴한다고 가정하자
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));  // 에러 발생

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2);  // !(확신한다)

  const button = document.querySelector("class")!;  // 100% 상황일때 사용할 수 있지만, 권장하지 않음
}