{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "Cindy";
  const address: Text = "Korea";

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "Cindy",
    age: 12
  }

  /**
   * String Literal Types
   */
  type Name = "name";
  let animalName: Name;
  animalName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  const isCat: Boal = true;
  // const isCat: Boal = false;  // 에러 발생
}