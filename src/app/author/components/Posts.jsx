import React from "react";

import { PostData } from "./PostData";
import Post from "@/app/components/Post";
const Posts = () => {
  return (
    <div className=" container pb-10">
      <h1 className=" font-bold pb-[64px]">My Posts</h1>
      <div className="pt-[64px] space-y-8 xl:space-y-0 flex flex-col gap-10 ">
        {PostData.map((item, index) => {
          return <Post item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
