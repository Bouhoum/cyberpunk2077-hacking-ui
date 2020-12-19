import React from "react";
import ram from "../images/cyberdeck-ram.svg";

function QuestionCard({questionData}) {
  return (
    <div>
      <div className="hack-item-primary text-shadow-primary flex justify-between text-primary-500 uppercase  items-center ml-1 backdrop-filter py-1 px-4 border-4 border-solid border-primary-400 border-opacity-5 hover:border-opacity-100 mb-5 w-10/12 cursor-pointer transform scale-100 transition easy-in hover:scale-110">
        <div>
          <h2 className="uppercase font-semibold text-xl w-80 overflow-ellipsis">
            {questionData}
          </h2>
          <p className="border-2 border-solid text-sm border-primary-500 rounded-lg px-2 w-min">
            Select
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <h2 className="uppercase font-base text-4xl">3</h2>
          <div>
            <img className="w-2" src={ram} alt="CYBERDECK RAMS" />
          </div>
          <div>...mainIcon</div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
