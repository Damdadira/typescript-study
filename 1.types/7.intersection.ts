{
  /**
   * Intersection Types: And
   */
  type Student = {
    name: string;
    score: number;
  }
  type Worker = {
    empolyeeId: number;
    work: () => void;
  }
  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }
  
  internWork({
    name: "Cindy",
    score: 1,
    empolyeeId: 123,
    work: () => {}
  })
}