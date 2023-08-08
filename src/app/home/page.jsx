import React from "react";
import Features from "./componets/Features";
import Friends from "./componets/Friends";
import Pattern from "./componets/Pattern";
import Hero from "./componets/Hero";
import Cards from "./componets/Cards";
import Authors from "./componets/Authors";
import Join from "./componets/Join";
import Logos from "./componets/Logos";
import People from "./componets/People";
const page = () => {
  return (
    <div className="space-y-32">
      {/* Hero section */}
      <Hero />
      {/* features section */}
      <Features />
      {/* pattern section */}
      <Pattern />

      {/* card info  */}
      <Cards />

      {/* friends section */}
      <Friends />

      {/* auhtors list */}
      <Authors />

      {/* logos list */}
      <Logos />

      {/* People */}
      <People />

      {/* join now section */}
      <Join />
    </div>
  );
};

export default page;
