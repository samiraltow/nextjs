import React from "react";
import Card from "@/app/components/Card";
import { CardData } from "./CardData";
const Cards = () => {
  return (
    <div className="container">
      <h2 className="pb-[48px]  font-bold">Choose A Catagory</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 xl:grid-cols-4 gap-[32px]">
        {CardData.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
