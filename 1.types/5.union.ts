{
  /**
   * Union Types: OR
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("right")

  type TileSize = 8 | 16 | 32;
  const title: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    }
  };
  type FailState = {
    response: string;
  }
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: "logged in!"
      }
    }
  }

  /**
   * Quiz!!
   * printLoginState(state: LoginState)
   * success -> 🍋 body
   * fail -> 😂 reason
   */
  type SuccessState2 = {
    response: {
      body: string;
    }
  }
  type FailState2 = {
    reason: string;
  }
  type LoginState2 = SuccessState2 | FailState2;
  function printLoginState(state: LoginState2) {
    if("response" in state) {
      console.log(`🍋, ${state.response.body}`);
    }
    else {
      console.log(`😂, ${state.reason}`);
    }
  }
}