import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import Comments from "./Comments";

const App = () => {
  return (
    <div className="ui container comments">
      <Comments author="tom" image={faker.image.avatar()} text="hiii there" />
      <Comments
        author="watson"
        image={faker.image.avatar()}
        text="byyy there"
      />
      <Comments
        author="cruise"
        image={faker.image.avatar()}
        text="hiii and byyy there"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
