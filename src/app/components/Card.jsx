import React from "react";

const Card = ({ item }) => {
  return (
    <div className="hover:bg-[#FFD050] p-[32px] border ">
      <div>
        <img src={item.img.src} />
      </div>
      <h3 className="text-[#232536] pt-[16px] ">{item?.title}</h3>
      <p className="text-[#6D6E76] pt-[4px]">{item?.subtitle}</p>
    </div>
  );
};

export default Card;
