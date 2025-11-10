{
  /**
   * Enum: 여러가지의 관련된 상수 값들을 한곳에 모아서 정의한 것
   * 별로 사용을 권하진 않음
   * 재정의가 가능해서 코드가 지저분해짐
   * 대신 union 타입 권장
   */

  // JavaScript
  const MAX_NUMS = 6;
  const MAX_STUDENTS_PER_CLASS =  10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = "MONDAY" | "TUESDAY";  // 권장
  enum Days {
    Monday = 1,
    // Monday = "monday",
    Tuesday,
    // Tuesday = "tuesday",
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  console.log(Days.Monday)
  const day = Days.Friday;
  console.log(day);
}