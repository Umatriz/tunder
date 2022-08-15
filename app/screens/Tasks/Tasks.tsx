import React from "react";

import Header from "./Header/Header";
import Add from "./Add/Add";
import Data from "./Data/Data";

type Props = {};

const Tasks = (props: Props) => {
  return (
    <div>
      <Header />
      <Add />
      <Data />
    </div>
  );
};

export default Tasks;
