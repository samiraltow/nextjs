import React from "react";
import Join from "../home/componets/Join";
import Authors from "./components/Authors";
import Hands from "./components/Hands";
import Mision from "./components/Mision";
import Main from "./components/Main";

const page = () => {
  return (
    <div>
      <Main />
      {/* mision  */}

      <Mision />
      {/* hans */}
      <Hands />
      {/* posts */}

      <Authors />

      {/* join */}

      <Join />
    </div>
  );
};

export default page;
