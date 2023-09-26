import React, { useState } from "react";
import AccordianPanle from "./AccordianPanel";

const Accordian = ({FAQs}) => {
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  return (
    <div className="w-full">
      {FAQs.map((faq, index) => {
        return (
          <AccordianPanle
            key={index}
            faq={faq}
            onToggle={() => handleToggle(index)}
            isActive={clicked === index}
          />
        );
      })}
    </div>
  );
};

export default Accordian;

