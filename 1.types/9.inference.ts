{
  /**
   * Type Inference
   * 알아서 추론 해주지만 별로 좋은 방법은 아니다
   * 정확하게 명시해주는게 좋음
   * 다만, 원시 타입인 경우는 생략 가능
   */
  // 기본값을 문자열로 줬기 때문에 해당 변수에 대한 타입을 알아서 추론한다(문자열 외에 다른 값 바인딩하면 에러 발생)
  let text = "hello";
  // text = 1;  // 에러 발생
  function print(message = "hello") {
    console.log(message);
  }
  print("hello");

  function add(x: number, y: number): number {
    return x + y;
  }
  const result = add(1, 2);
}