{
  function checkNotNullBad(arg: number | null): number {
    if(arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any {
    if(arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  function checkNotNull<T>(arg: T | null): T {
    if(arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  console.log(checkNotNull(123));
  console.log(checkNotNull(true));
}