import React from "react";

import { PostData } from "./PostData";
import Post from "./post";
const Posts = () => {
  return (
    <div>
      <div className=" space-y-8 xl:space-y-0">
        {PostData.map((item, index) => {
          return <Post item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
