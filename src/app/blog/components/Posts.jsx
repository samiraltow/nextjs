import React from "react";

import { PostData } from "./PostData";
import Post from "@/app/components/Post";
const Posts = () => {
  return (
    <div className=" container ">
      <h2 className=" font-bold pb-[64px]">All Posts</h2>
      <hr />
      <div className="pt-[64px] space-y-8 xl:space-y-0">
        {PostData.map((item, index) => {
          return <Post item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
