import React from "react";
import QuestionCard from "./QuestionCard";

function QuestionSection() {
  return (
    <div>
      <div className="left-menu origin-center">
        <div className="pl-28 w-full ">
          <h4 className="text-left text-xs font-extrabold text-secondary-600 text-shadow-secondary">
            IT CAN BE ANYTHING
          </h4>
          <h2 className="uppercase text-primary-500 font-bold text-xl text-shadow-primary">
            Available QuickHacks:
          </h2>
          <div className="border-b-4 border-t-2 h-2 border-solid border-opacity-40 border-red-700 mt-2 mb-4"></div>
        </div>
        <div className="w-full ">
          <QuestionCard questionData={"xHub Camera Controls"} />
        </div>
      </div>
    </div>
  );
}

export default QuestionSection;
