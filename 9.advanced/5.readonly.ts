{
  type Todo = {
    title: string;
    description: string;
  }

  function display(todo: Readonly<Todo>) {
    // todo.title = "test"  // 바꾸려고 하면 에러 발생
  }
}