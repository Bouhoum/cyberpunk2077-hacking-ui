import React from "react";

function SectionTitle({sectionTitleData}) {
  return (
    <div>
      <div className="w-4/12 mx-auto py-24">
        <h2 className="uppercase text-primary-500 font-extrabold text-xl flex justify-center gap-x-4 items-center text-shadow-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          {sectionTitleData}
        </h2>
      </div>
    </div>
  );
}

export default SectionTitle;
